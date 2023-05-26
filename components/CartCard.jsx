"use client";

import { CartContext } from "@/context/CartContext";
import { getItemData } from "@/data/fruits";
import { useContext } from "react";

const CartCard = ({ id, quantity }) => {
	const { deleteFromCart } = useContext(CartContext);
	const itemData = getItemData(id);
	const itemPrice = quantity * itemData.price;

	return (
		<div className="shadow p-3">
			<div className="flex items-center gap-2">
				<h3 className="text-lg font-semibold">{itemData.title}</h3>
				<span>x{quantity}</span>
			</div>
			<p className="text-xl">£{itemPrice.toFixed(2)}</p>
			<button
				className="text-black bg-red-400"
				onClick={() => deleteFromCart(id)}
			>
				Delete
			</button>
		</div>
	);
};
export default CartCard;
