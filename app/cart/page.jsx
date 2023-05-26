"use client";

import CartCard from "@/components/CartCard";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useContext } from "react";

const CartPage = () => {
	const { items, getTotalCost } = useContext(CartContext);
	const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<div>
			<h1>Cart</h1>
			{totalItemsCount > 0 ? (
				<>
					{items.map((item) => (
						<div key={item.id}>
							<CartCard {...item} />
						</div>
					))}
					<h2>Total Cost: £{getTotalCost().toFixed(2)}</h2>
					<Link href={"/success"}>
						<button
							onClick={() => window.location.reload()}
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
