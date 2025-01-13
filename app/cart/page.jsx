"use client";

import CartCard from "@/components/CartCard";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const CartPage = () => {
	const { items, getTotalCost } = useContext(CartContext);
	const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

	const checkout = async () => {
		await fetch("https://froot-emporium-stripe-be.onrender.com/checkout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ items: items }),
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				if (response.url) {
					window.location.assign(response.url);
				}
			});
	};

	return (
		<div className="grid grid-cols-1 ml-5 text-center">
			<h1 className="text-5xl my-11 ">Cart</h1>
			{totalItemsCount > 0 ? (
				<>
					{items.map((item) => (
						<div key={item.id}>
							<CartCard {...item} />
						</div>
					))}
					<h2 className="text-3xl my-11">Total Cost: £{getTotalCost().toFixed(2)}</h2>

					<Button className="mx-auto" onClick={checkout}>
						Checkout Froots <ShoppingCart />
					</Button>
				</>
			) : (
				<h2>No fruits in cart...</h2>
			)}
		</div>
	);
};
export default CartPage;
