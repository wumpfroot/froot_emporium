"use client";

import { CartContext } from "@/context/CartContext";
import { getItemData } from "@/data/fruits";
import { useContext } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

const CartCard = ({ id, quantity, imgUrl }) => {
	const { deleteFromCart } = useContext(CartContext);
	const itemData = getItemData(id);
	const itemPrice = quantity * itemData.price;

	return (
		<div className="max-w-screen-md mx-auto flex justify-between px-14 shadow p-6">
			<div className="flex flex-col">
				<div className="flex items-center gap-2">
					<h3 className="text-lg font-semibold">{itemData.title}</h3>
					<span className="text-lg">x{quantity}</span>
				</div>
				<p className="text-xl">£{itemPrice.toFixed(2)}</p>
				<motion.button
					whileHover={{ scale: 1.1 }}
					className="bg-red-400"
					onClick={() => deleteFromCart(id)}
				>
					Delete
				</motion.button>
			</div>
			<Image
				className="rounded-md"
				src={itemData.imgUrl}
				width={150}
				height={150}
				alt="cart fruit image"
			/>
		</div>
	);
};
export default CartCard;
