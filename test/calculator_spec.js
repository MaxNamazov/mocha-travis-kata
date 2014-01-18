var should = require('should');
var calculator = require('../source/calculator')

describe('calculator spec', function(){
	describe('First steps', function(){
		it('should calc exist', function(){
			should(calculator).be.ok;
		})

		it('should return 0 for empty str', function(){
			should(calculator.intAdd('')).equal(0);
		})

		it('should return 1 for 1', function(){
			should(calculator.intAdd('1')).equal(1);
		})

		it('should return 2 for 2', function(){
			should(calculator.intAdd('2')).equal(2);
		})

		it('should return 3 for 1,2', function(){
			should(calculator.intAdd('1,2')).equal(3);
		})

		it('should return 5 for 2,3', function(){
			should(calculator.intAdd('2,3')).equal(5);
		})

		it('should return 10 for 1,2,3,4', function(){
			should(calculator.intAdd('1,2,3,4')).equal(10);
		})

		it('should return 28 for 2,5,6,7,8', function(){
			should(calculator.intAdd('2,5,6,7,8')).equal(28);
		})

		it('should return 6 with line separator',function(){
			should(calculator.intAdd('1\n2,3')).equal(6);
		})

		it('should return 6 with few line separators',function(){
			should(calculator.intAdd('1\n2\n,\n,\n3')).equal(6);
		})	
	});

	describe('Different delimiters', function(){
		it('should return 3 with custom delimiter',function(){
			should(calculator.intAdd('//;\n1;2')).equal(3)
		})
	});

	describe('Negative numbers', function(){
		it('should throw exeption',function(){
			(function(){
				calculator.intAdd('1,2,-3');
			}).should.throw('negatives not allowed');
		})
	});

























});