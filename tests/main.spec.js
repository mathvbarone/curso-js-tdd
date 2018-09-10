import { expect } from 'chai';
import { sum, sub, multi, div } from '../src/index';


describe('Calc', () => {
  describe('Smoke Tests', () => {
    it('should exist the method ´sum´', () => {
      expect(sum).to.exist;
    });
    it('should exist the method ´sub´', () => {
      expect(sub).to.exist;
    });
    it('should exist the method ´multi´', () => {
      expect(multi).to.exist;
    });
    it('should exist the method ´div´', () => {
      expect(div).to.exist;
    });
  });
});

describe('Sum', () => {
  it('should return 4 when `sum(2,2)`', () => {
    expect(sum(2, 2)).to.be.equal(4);
  });
});

describe('Sub', () => {
  it('should return 4 when `sub(6,2)`', () => {
    expect(sub(6, 2)).to.be.equal(4);
  });
  it('should return -4 when `sum(6,10)`', () => {
    expect(sub(6, 10)).to.be.equal(-4);
  });
});

describe('Multi', () => {
  it('should return 4 when `multi(2,2)`', () => {
    expect(multi(2, 2)).to.be.equal(4);
  });
});

describe('Div', () => {
  it('should return 2 when `div(4,2)`', () => {
    expect(div(4, 2)).to.be.equal(2);
  });
  it('should return `Division by 0 is not possible`', () => {
    expect(div(4, 0)).to.be.equal('Division by 0 is not possible');
  });
});
