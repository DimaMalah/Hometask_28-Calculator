
const calculator = {

	isError: false, // флажок для определения ошибки

	read(firstInt, secondInt) {
		if (!firstInt || !secondInt) {
			this.isError = true; //меняем флажок
			return calculator.errors.noData
		} else if (isNaN(firstInt) || isNaN(secondInt)) {
			this.isError = true; //меняем флажок
			return calculator.errors.invalid
		} else {
			this.num1 = firstInt;
			this.num2 = secondInt;
			return `first number: ${firstInt}, second number: ${secondInt}`
		}

	},


	sum() {
		const result = this.num1 + this.num2
		return this.checkOperation(result)
	},


	mul() {
		const result = this.num1 * this.num2
		return this.checkOperation(result)
	},

	checkOperation(arg) {
		return this.isError ? this.errors.impossibleOperation : arg
	},

	errors: {
		invalid: "you've entered invalid data",
		noData: "you've entered no data",
		impossibleOperation: "this operation can not be realised"
	},
}

console.log(calculator.read(9, 8));
console.log(calculator.sum());
console.log(calculator.mul());
console.log("-------------------------");
console.log(calculator.read(9));
console.log(calculator.sum());
console.log(calculator.mul());
console.log("-------------------------");
console.log(calculator.read("9", "jkj"));
console.log(calculator.sum());
console.log(calculator.mul());

