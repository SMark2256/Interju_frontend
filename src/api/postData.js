const addHandler = async (foods, foodtype) => {
	const response = await fetch(
		`https://reactvizsga-default-rtdb.europe-west1.firebasedatabase.app/foods/${foodtype}.json`,
		{
			method: 'POST',
			body: JSON.stringify(foods),
			headers: {
				'Content-Type': 'application/json',
			},
		},
	)
	const data = response.json()
	console.log(data)
}

export default addHandler
