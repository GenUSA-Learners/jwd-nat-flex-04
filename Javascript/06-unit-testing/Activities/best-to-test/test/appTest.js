const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
	describe('SayHello', function(){
		it('should return hello', function(){
	assert.equal(sayHello(), 'hello');
	})
	describe('SayGoodbye', function(){
		it('should return Goodbye', function(){
	assert.equal(sayGoodbye(), 'Goodbye');
	})

});
