const coffeeList = document.getElementById("coffeeList");

const addSingleCoffee = (coffee) => {
    const newListItem = document.createElement('li') // creates a list item
    const newText = document.createTextNode(coffee.title) // create an element with the title from the object
    newListItem.appendChild(newText) // take the list item and store title from object inside of it
    return newListItem
}

const newCoffeeList = (listOfCoffees) => {
    const newList = document.createElement('ul')
    
    // loop through the list of coffees and add each one to this list
    listOfCoffees.forEach(coffee => {
        const thisItem = addSingleCoffee(coffee)
        newList.appendChild(thisItem)
    })
    coffeeList.innerText = ''
    coffeeList.appendChild(newList)
}

// func to fetch api data
const getCoffee = (type) => {
	coffeeList.innerText = "Loading...";
    
	fetch(`https://api.sampleapis.com/coffee/${type}`)
		.then((res) => res.json()) // returns a promise and .json() just grabs the body
		.then((data) => {
			// list data on screen
            newCoffeeList(data)
		})
		.catch((err) => console.err(err));
};



//! you can use this to delay the response
// setTimeout(() => {
// }, 1000);
