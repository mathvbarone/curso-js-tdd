import { expect } from 'chai';
import * as calc from '../src/index';


describe('calc', () => {
  describe('Smoke Tests', () => {
    it('should exist the ´calc´ lib', () => {
      expect(calc).to.exist;
    });
    it('should exist the method ´sum´', () => {
      expect(calc.sum).to.exist;
    });
    it('should exist the method ´sub´', () => {
      expect(calc.sub).to.exist;
    });
    it('should exist the method ´multi´', () => {
      expect(calc.multi).to.exist;
    });
    it('should exist the method ´div´', () => {
      expect(calc.div).to.exist;
    });
  });
});
