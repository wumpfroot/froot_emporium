"use client";

import { createContext, useState } from "react";
import { fruitItems, getItemData } from "@/data/fruits";

export const CartContext = createContext({
	items: [],
	getItemQuantity: () => {},
	increaseQuantity: () => {},
	decreaseQuantity: () => {},
	deleteFromCart: () => {},
	deleteAllFromCart: () => {},
	getTotalCost: () => {},
});

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	function getItemQuantity(id) {
		const quantity = cartItems.find((item) => item.id === id)?.quantity;

		if (quantity == undefined) {
			return 0;
		}

		return quantity;
	}

	function increaseQuantity(id) {
		const quantity = getItemQuantity(id);

		if (quantity === 0) {
			setCartItems([...cartItems, { id: id, quantity: 1 }]);
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item
				)
			);
		}
	}

	function decreaseQuantity(id) {
		const quantity = getItemQuantity(id);

		if (quantity == 1) {
			deleteFromCart(id);
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity - 1 } : item
				)
			);
		}
	}

	function deleteFromCart(id) {
		setCartItems((cartItems) =>
			cartItems.filter((currentItem) => currentItem.id != id)
		);
	}

	function deleteAllFromCart() {
		setCartItems([]);
	}

	function getTotalCost() {
		let totalCost = 0;
		cartItems.map((cartItem) => {
			const itemData = getItemData(cartItem.id);
			totalCost += itemData.price * cartItem.quantity;
		});
		return totalCost;
	}

	const contextValue = {
		items: cartItems,
		getItemQuantity,
		increaseQuantity,
		decreaseQuantity,
		deleteFromCart,
		deleteAllFromCart,
		getTotalCost,
	};
	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

export default CartProvider;
