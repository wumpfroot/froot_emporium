// Strawberries: price_1N9uxzIAb2npfdELGaJyzk29
// Pineapple (Whole): price_1N9uzlIAb2npfdELQW8QRsLp
// Bananas (pack of 6): price_1N9v1EIAb2npfdELzFQR5zPY
// Pears (pack of 4): price_1N9v2mIAb2npfdELbpjkYCsC

const fruitItems = [
	{
		id: 1,
		title: "Strawberries",
		amount: "400g",
		price: 2.0,
		imgUrl: "/images/strawberries.jpg",
	},
	{
		id: 2,
		title: "Bananas",
		amount: "pack of 6",
		price: 1.0,
		imgUrl: "/images/bananas.jpg",
	},
	{
		id: 3,
		title: "Pineapple",
		amount: "Whole",
		price: 1.2,
		imgUrl: "/images/pineapple.jpg",
	},
	{
		id: 4,
		title: "Pears ",
		amount: "pack of 4",
		price: 1.8,
		imgUrl: "/images/pears.jpg",
	},
	{
		id: 5,
		title: "Blueberries",
		amount: "400g",
		price: 3,
		imgUrl: "/images/blueberries.jpg",
	},
	{
		id: 6,
		title: "Rasberries",
		amount: "200g",
		price: 2,
		imgUrl: "/images/rasberries.jpg",
	},
	{
		id: 7,
		title: "Cherries",
		amount: "300g",
		price: 2.5,
		imgUrl: "/images/cherries.jpg",
	},
];

function getItemData(id) {
	let itemData = fruitItems.find((item) => item.id === id);

	if (itemData == undefined) {
		console.log(`Item data does not exist for this id: ${id}`);
		return undefined;
	}

	return itemData;
}

export { fruitItems, getItemData };
