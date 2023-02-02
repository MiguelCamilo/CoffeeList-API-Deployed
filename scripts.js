const coffeeList = document.getElementById("coffeeList");

const addSingleCoffee = (coffee) => {
	const newListItem = document.createElement("div"); // creates a list item
	const newText = document.createTextNode(coffee.title); // create an element with the title from the object
	newListItem.appendChild(newText); // take the list item and store title from object inside of it
	return newListItem;
};

const newCoffeeList = (listOfCoffees) => {
	const newList = document.createElement("ul");

	// loop through the list of coffees and add each one to this list
	listOfCoffees.forEach((coffee) => {
		const thisItem = addSingleCoffee(coffee);
		newList.appendChild(thisItem);
	});
	coffeeList.innerText = ""; // removes the spinning icon
	coffeeList.appendChild(newList);
};

// func to fetch api data
const getCoffee = (type) => {
	coffeeList.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

	setTimeout(() => {
		fetch(`https://api.sampleapis.com/coffee/${type}`)
			.then((res) => res.json()) // returns a promise and .json() just grabs the body
			.then((data) => {
				// list data on screen
				newCoffeeList(data);
                // will add the text before the list of data
				coffeeList.insertAdjacentHTML("afterbegin", `<strong>LIST: <strong>`);
			})
			.catch((err) => console.log(err));
	}, 1000);
};
