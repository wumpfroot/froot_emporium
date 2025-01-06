"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

import { motion } from "motion/react";

import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: "400",
});

const FruitCard = ({ id, title, amount, price, imgUrl }) => {
	const { increaseQuantity, decreaseQuantity, getItemQuantity, deleteFromCart } = useContext(CartContext);
	const itemQuantity = getItemQuantity(id);
	return (
		<div className={roboto.className}>
			<div className="bg-white font-semibold rounded-md">
				<Image className="bg-cover rounded-md" src={imgUrl} width={300} height={200} alt="fruit image" />
				<div className="text-center p-6">
					<h2 className="text-xl">{title}</h2>
					<div>
						<small>{amount}</small>
					</div>
					<h3 className="font-semibold text-xl my-3">£{price}</h3>
					{itemQuantity > 0 ? (
						<div>
							<div className="flex justify-center items-center gap-3">
								<motion.button whileTap={{ scale: 0.9 }} className="bg-green-400 text-4xl" onClick={() => decreaseQuantity(id)}>
									➖
								</motion.button>
								<p className="text-xl">
									<span className="font-semibold">{itemQuantity}</span> in cart
								</p>
								<motion.button whileTap={{ scale: 0.9 }} className="bg-green-400 text-4xl" onClick={() => increaseQuantity(id)}>
									➕
								</motion.button>
							</div>
							<motion.button whileHover={{ scale: 1.1 }} className="bg-red-400 mt-2" onClick={() => deleteFromCart(id)}>
								Remove All
							</motion.button>
						</div>
					) : (
						<motion.button whileHover={{ scale: 1.1 }} className="bg-green-400 p-3" onClick={() => increaseQuantity(id)}>
							Add to cart
						</motion.button>
					)}
				</div>
			</div>
		</div>
	);
};
export default FruitCard;
