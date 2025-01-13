"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

import { motion } from "motion/react";

import Image from "next/image";
import { Roboto } from "next/font/google";

import { Button } from "./ui/button";
import { Plus, Minus } from "lucide-react";

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
								<Button onClick={() => decreaseQuantity(id)}>
									<Minus />
								</Button>
								<p className="text-xl">
									<span className="font-semibold">{itemQuantity}</span> in cart
								</p>
								<Button onClick={() => increaseQuantity(id)}>
									<Plus />
								</Button>
							</div>
							<Button className="bg-red-400 mt-2" onClick={() => deleteFromCart(id)}>
								Remove All
							</Button>
						</div>
					) : (
						<Button className="bg-green-400 p-3" onClick={() => increaseQuantity(id)}>
							Add to cart
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
export default FruitCard;
