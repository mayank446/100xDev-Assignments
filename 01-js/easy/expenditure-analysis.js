/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // let res = [];
  let categories = new Map();
  for(let transaction of transactions){
    if(categories.has(transaction.category)){
      let newVal = categories.get(transaction.category) + transaction.price;
      categories.set(transaction.category, newVal);
    }
    else {
      categories.set(transaction.category, transaction.price);
    }
  }
  let res = Array.from(categories, ([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
  return res;
}

module.exports = calculateTotalSpentByCategory;
