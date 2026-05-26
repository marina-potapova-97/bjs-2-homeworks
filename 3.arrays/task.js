function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, index) => {
		return element === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0;
	}
	const ageSumAndCount = filteredUsers.reduce((accumulator, currentUser) => {
		accumulator.sum += currentUser.age;
		accumulator.count++;
		return accumulator;
	}, {
		sum: 0,
		count: 0
	});
	const averageAge = ageSumAndCount.sum / ageSumAndCount.count;

	return averageAge;
}

