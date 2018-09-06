import { expect } from 'chai';
import calc from '../src/index';

describe('calc', () => {
  describe('Smoke Tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });
  });
});
