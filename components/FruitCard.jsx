"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

import Image from "next/image";

const FruitCard = ({ id, title, price, imgUrl }) => {
	const {
		increaseQuantity,
		decreaseQuantity,
		getItemQuantity,
		deleteFromCart,
		items,
	} = useContext(CartContext);
	const itemQuantity = getItemQuantity(id);
	return (
		<div className="bg-white font-semibold rounded-md">
			<Image
				className="bg-cover rounded-md"
				src={imgUrl}
				width={300}
				height={200}
				alt="fruit image"
			/>
			<div className="text-center p-6">
				<h2 className="text-xl">{title}</h2>
				<h3 className="font-semibold text-xl my-3">£{price}</h3>
				{itemQuantity > 0 ? (
					<div>
						<div className="flex justify-center items-center gap-3">
							<button
								className="bg-cyan-100 text-4xl"
								onClick={() => decreaseQuantity(id)}
							>
								➖
							</button>
							<p className="text-xl">
								<span className="font-semibold">{itemQuantity}</span> in cart
							</p>
							<button
								className="bg-cyan-100 text-4xl"
								onClick={() => increaseQuantity(id)}
							>
								➕
							</button>
						</div>
						<button
							className="bg-red-400 mt-2"
							onClick={() => deleteFromCart(id)}
						>
							Remove All
						</button>
					</div>
				) : (
					<button
						className="bg-green-400 p-3"
						onClick={() => increaseQuantity(id)}
					>
						Add to cart
					</button>
				)}
			</div>
		</div>
	);
};
export default FruitCard;
