/* global mocha, chai, describe, it  */
/* global getChange, Hr, beforeEach */
mocha.setup('bdd');
const assert = chai.assert;

describe('getChange', () => {
  it('is function', () => assert.isFunction(getChange));  
  it('has 2 args', () => assert.equal(2, getChange.length)); 
  it('should check if enough money is paid, and throw excpetion otherwise', () => assert.throws(function(){getChange(2,1)}, SyntaxError, 'not enough money paid'));
  it('should get numers but not strings', () => assert.throws(function(){getChange("","")}, SyntaxError, 'input should be number'));
  it('should get numers but not boolean', () => assert.throws(function(){getChange(true,false)}, SyntaxError, 'input should be number'));
  it('should get numers but not NaN', () => assert.throws(function(){getChange(NaN,NaN)}, SyntaxError, 'input should be number'));
  it('should check roubles', () => assert.equal(getChange(3, 4.22), '1 x roubles; 1 x 20 cents; 2 x 1 cents; '));
  it('should check 50 cents', () => assert.equal(getChange(3,3.5), '0 x roubles; 1 x 50 cents; '));
  it('should check 20 cents', () => assert.equal(getChange(3,3.2), '0 x roubles; 1 x 20 cents; '));
  it('should check 10 cents', () => assert.equal(getChange(3,3.1), '0 x roubles; 1 x 10 cents; '));
  it('should check 5 cents', () => assert.equal(getChange(3,3.05), '0 x roubles; 1 x 5 cents; '));
  it('should check 1 cent', () => assert.equal(getChange(3,3.01), '0 x roubles; 1 x 1 cents; '));
});

mocha.run();