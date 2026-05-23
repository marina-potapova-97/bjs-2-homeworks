function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const currentValue = arr[i];
		if (currentValue > max) {
			max = currentValue;
		}
		if (currentValue < min) {
			min = currentValue;
		}
		sum += currentValue;
	}

	const avgRaw = sum / arr.length;
	const avg = parseFloat(avgRaw.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		const currentValue = arr[i];
		if (currentValue % 2 === 0) {
			sumEvenElement += currentValue;
		} else {
			sumOddElement += currentValue;
		}
	}
	difference = sumEvenElement - sumOddElement;
	return difference;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		const currentValue = arr[i];
		if (currentValue % 2 === 0) {
			sumEvenElement += currentValue;
			countEvenElement += 1;
		}
	}
	const average = sumEvenElement / countEvenElement;
	return average;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	for (let i = 1; i < arrOfArr.length; i++) {
		const currentSubArray = arrOfArr[i];
		const currentResult = func(...currentSubArray);
		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}
	return maxWorkerResult;
}