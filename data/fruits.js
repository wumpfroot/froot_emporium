// Strawberries: price_1N9uxzIAb2npfdELGaJyzk29
// Pineapple (Whole): price_1N9uzlIAb2npfdELQW8QRsLp
// Bananas (pack of 6): price_1N9v1EIAb2npfdELzFQR5zPY
// Pears (pack of 4): price_1N9v2mIAb2npfdELbpjkYCsC

const fruitItems = [
	{
		id: "price_1N9uxzIAb2npfdELGaJyzk29",
		title: "Strawberries",
		price: 2.0,
		imgUrl: "/images/strawberries.jpg",
	},
	{
		id: "price_1N9v1EIAb2npfdELzFQR5zPY",
		title: "Bananas (pack of 6)",
		price: 1.0,
		imgUrl: "/images/bananas.jpg",
	},
	{
		id: "price_1N9uzlIAb2npfdELQW8QRsLp",
		title: "Pineapple (Whole)",
		price: 1.2,
		imgUrl: "/images/pineapple.jpg",
	},
	{
		id: "price_1N9v2mIAb2npfdELbpjkYCsC",
		title: "Pears (pack of 4)",
		price: 1.8,
		imgUrl: "/images/pears.jpg",
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
