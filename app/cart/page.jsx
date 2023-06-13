"use client";

import CartCard from "@/components/CartCard";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import Link from "next/link";

const CartPage = () => {
	const { items, getTotalCost, deleteAllFromCart } = useContext(CartContext);
	const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<div className="grid grid-cols-1">
			<h1 className="text-5xl">Cart</h1>
			{totalItemsCount > 0 ? (
				<>
					{items.map((item) => (
						<div key={item.id}>
							<CartCard {...item} />
						</div>
					))}
					<h2 className="text-3xl">Total Cost: £{getTotalCost().toFixed(2)}</h2>
					<Link href={"/success"}>
						<button
							onClick={deleteAllFromCart}
							className="text-black border border-black "
						>
							Checkout Froots
						</button>
					</Link>
				</>
			) : (
				<h2>No fruits in cart...</h2>
			)}
		</div>
	);
};
export default CartPage;
