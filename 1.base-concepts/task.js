"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant < 0) {

	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		arr.push(root);
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1);
		arr.push(root2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// 1. Преобразование процентной ставки
	const monthlyInterestRate = (percent / 100) / 12;

	// 2. Расчет тела кредита
	const loanBody = amount - contribution;

	// 3. Расчет ежемесячной оплаты
	let monthlyPayment;
	if (monthlyInterestRate === 0) {
		monthlyPayment = loanBody / countMonths;
	} else {
		const numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), countMonths);
		const denominator = Math.pow((1 + monthlyInterestRate), countMonths) - 1;
		monthlyPayment = loanBody * (numerator / denominator);
	}

	// 4. Расчет общей суммы выплат
	const totalPayments = monthlyPayment * countMonths;

	// 5. Расчет итоговой суммы, которую заплатит клиент (первоначальный взнос + общая сумма выплат)
	const totalClientPays = contribution + totalPayments;

	// 6. Округление результата до двух знаков после запятой
	const roundedTotal = Math.round(totalClientPays * 100) / 100;

	return parseFloat(totalPayments.toFixed(2));
}
