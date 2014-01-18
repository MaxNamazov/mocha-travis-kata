var calculator = {
	intAdd: function(str){
		var defaultDelimiter = /[\n|,]/;

		if(str.indexOf('//') === 0){
			defaultDelimiter = new RegExp(str.substr(2, 1));
			str = str.substr(4);
		}

		var num = str.split(defaultDelimiter);

		var integers = num.map(function(val){
			return +val;
		})

		var negatives = integers.some(function(val){
			return val < 0;
		})

		if(negatives)
			throw new Error('negatives not allowed');

		return integers.reduce(function(memo, val){
			return memo + val;
		})
	}
}

module.exports = calculator;

//http://osherove.com/tdd-kata-1/
// v papke mocha -R spec