'use strict'

const { Date } = require('..')

describe('Date', () => {

  describe('.edtf', () => {
    it('default', () =>
      expect(new Date().edtf)
        .to.match(/^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/))

    it('YYYY', () => {
      expect(new Date([2014]).edtf).to.eql('2014')
      expect(new Date([123]).edtf).to.eql('0123')
      expect(new Date([14]).edtf).to.eql('0014')
      expect(new Date([0]).edtf).to.eql('0000')
      expect(new Date([-2]).edtf).to.eql('-0002')
      expect(new Date([-42]).edtf).to.eql('-0042')
      expect(new Date([-9999]).edtf).to.eql('-9999')
    })

    it('YYYY-MM', () => {
      expect(new Date([2014, 3]).edtf).to.eql('2014-04')
      expect(new Date([123, 0]).edtf).to.eql('0123-01')
      expect(new Date([14, 8]).edtf).to.eql('0014-09')
      expect(new Date([0, 0]).edtf).to.eql('0000-01')
      expect(new Date([-2, 11]).edtf).to.eql('-0002-12')
    })

    it('YYYY-MM-DD', () => {
      expect(new Date([2014, 3, 15]).edtf).to.eql('2014-04-15')
      expect(new Date([2016, 1, 29]).edtf).to.eql('2016-02-29')
      expect(new Date([2015, 1, 29]).edtf).to.eql('2015-03-01')
    })

    it('YYYY-MM-XX', () =>
      expect(new Date({ values: [2014, 3, 15], unspecified: 'day' }).edtf)
        .to.eql('2014-04-XX'))

    it('YYYY-XX-DD', () =>
      expect(new Date({ values: [2014, 3, 15], unspecified: 'month' }).edtf)
        .to.eql('2014-XX-15'))

    it('XXXX-MM-DD', () =>
      expect(new Date({ values: [2014, 3, 15], unspecified: 'year' }).edtf)
        .to.eql('XXXX-04-15'))

    it('XXXX-XX-DD', () =>
      expect(new Date({ values: [2014, 3, 15], unspecified: 'xxxxxxdd' }).edtf)
        .to.eql('XXXX-XX-15'))

    it('YXYX-MX-DD', () =>
      expect(new Date({ values: [2014, 3, 15], unspecified: 'yxyxmxdd' }).edtf)
        .to.eql('2X1X-0X-15'))

    it('YYYY-MM-DD?', () =>
      expect(new Date({ values: [2014, 3, 15], uncertain: true }).edtf)
        .to.eql('2014-04-15?'))

    it('YYYY-MM-?DD', () =>
      expect(new Date({ values: [2014, 3, 15], uncertain: 'day' }).edtf)
        .to.eql('2014-04-?15'))

    it('YYYY-MM?-DD', () =>
      expect(new Date({ values: [2014, 3, 15], uncertain: 'xxxxxxdd' }).edtf)
        .to.eql('2014-04?-15'))

    it('YYYY-?MM-DD', () =>
      expect(new Date({ values: [2014, 3, 15], uncertain: 'month' }).edtf)
        .to.eql('2014-?04-15'))

    it('YYYY?-MM-DD', () =>
      expect(new Date({ values: [2014, 3, 15], uncertain: 'year' }).edtf)
        .to.eql('2014?-04-15'))

    it('YYYY-MM?-~DD', () =>
      expect(new Date({
        values: [2004, 5, 11], uncertain: 'xxxxxxdd', approximate: 'day'
      }).edtf).to.eql('2004-06?-~11'))

    it('YYYY-%MM-DD', () =>
      expect(new Date({
        values: [2004, 5, 11], uncertain: 'month', approximate: 'month'
      }).edtf).to.eql('2004-%06-11'))

    it('YYYY%-MM-DD', () =>
      expect(new Date({
        values: [2004, 5, 11], uncertain: 'year', approximate: 'year'
      }).edtf).to.eql('2004%-06-11'))

    it('YYYY?-MM~-DD', () =>
      expect(new Date({
        values: [2004, 5, 11], uncertain: 'year', approximate: 'xxxxxxdd'
      }).edtf).to.eql('2004?-06~-11'))

    it('YYYY?-MM-?DD', () =>
      expect(new Date({
        values: [2004, 5, 11], uncertain: 'xxxxmmxx'
      }).edtf).to.eql('2004?-06-?11'))

    it('YYYY-?MM-?DD', () =>
      expect(new Date({
        values: [2004, 5, 11], uncertain: 'yyyyxxxx'
      }).edtf).to.eql('2004-?06-?11'))
  })
})
