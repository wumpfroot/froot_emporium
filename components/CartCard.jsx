"use client";

import { CartContext } from "@/context/CartContext";
import { getItemData } from "@/data/fruits";
import { useContext } from "react";

const CartCard = ({ id, quantity }) => {
	const { deleteFromCart } = useContext(CartContext);
	const itemData = getItemData(id);

	return (
		<div>
			<div>
				<h3>{itemData.title}</h3>
				<span>x{quantity}</span>
				<p>£{quantity * itemData.price.toFixed(2)}</p>
				<button onClick={() => deleteFromCart(id)}>Delete</button>
			</div>
		</div>
	);
};
export default CartCard;
