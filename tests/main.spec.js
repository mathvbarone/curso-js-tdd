import { expect } from 'chai';
import fizzbuzz from '../src/index';


describe('Fizzbuzz', () => {
  it('should return ´fizz´ when multiple of 3', () => {
    expect(fizzbuzz(3)).to.be.equal('fizz');
    expect(fizzbuzz(6)).to.be.equal('fizz');
  });
  it('should return `buzz` when multiple of 5', () => {
    expect(fizzbuzz(5)).to.be.equal('buzz');
    expect(fizzbuzz(10)).to.be.equal('buzz');
  });
  it('should return `fizzbuzz` when multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.equal('fizzbuzz');
  });

  it('should return the number when not multiple', () => {
    expect(fizzbuzz(7)).to.be.equal(7);
  });

  it('should return 0 when 0', () => {
    expect(fizzbuzz(0)).to.be.equal(0);
  });
});
