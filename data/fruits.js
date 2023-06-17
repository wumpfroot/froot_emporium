// Strawberries: price_1N9uxzIAb2npfdELGaJyzk29
// Pineapple (Whole): price_1N9uzlIAb2npfdELQW8QRsLp
// Bananas (pack of 6): price_1N9v1EIAb2npfdELzFQR5zPY
// Pears (pack of 4): price_1N9v2mIAb2npfdELbpjkYCsC

const fruitItems = [
	{
		id: "price_1N9uxzIAb2npfdELGaJyzk29",
		title: "Strawberries",
		amount: "400g",
		price: 2.0,
		imgUrl: "/images/strawberries.jpg",
	},
	{
		id: "price_1N9v1EIAb2npfdELzFQR5zPY",
		title: "Bananas",
		amount: "pack of 6",
		price: 1.0,
		imgUrl: "/images/bananas.jpg",
	},
	{
		id: "price_1N9uzlIAb2npfdELQW8QRsLp",
		title: "Pineapple",
		amount: "Whole",
		price: 1.2,
		imgUrl: "/images/pineapple.jpg",
	},
	{
		id: "price_1N9v2mIAb2npfdELbpjkYCsC",
		title: "Pears ",
		amount: "pack of 4",
		price: 1.8,
		imgUrl: "/images/pears.jpg",
	},
	{
		id: "price_1NK3wmIAb2npfdEL17aVNYlg",
		title: "Blueberries",
		amount: "400g",
		price: 3,
		imgUrl: "/images/blueberries.jpg",
	},
	{
		id: "price_1NK3x7IAb2npfdELdzZJ6ZCa",
		title: "Rasberries",
		amount: "200g",
		price: 2,
		imgUrl: "/images/rasberries.jpg",
	},
	{
		id: "price_1NK3xeIAb2npfdELFPWsYu1e",
		title: "Cherries",
		amount: "300g",
		price: 2.5,
		imgUrl: "/images/cherries.jpg",
	},
	{
		id: "price_1NK3xzIAb2npfdELuY3wNwsn",
		title: "Red Apples",
		amount: "pack of 6",
		price: 1.5,
		imgUrl: "/images/red_apples.jpg",
	},
	{
		id: "price_1NK3yUIAb2npfdELbdLxePGa",
		title: "Green Grapes",
		amount: "400g",
		price: 1.5,
		imgUrl: "/images/green_grapes.jpg",
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
