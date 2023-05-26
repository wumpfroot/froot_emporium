"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

import Link from "next/link";
import { FaBars, FaShoppingCart } from "react-icons/fa";

import { motion } from "framer-motion";

const NavBar = () => {
	const { items } = useContext(CartContext);
	const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

	const [mobileNav, setMobileNav] = useState(false);

	return (
		<nav className="relative flex justify-between items-center p-3 bg-green-300">
			<h1 className="text-white font-bold text-3xl border-2 border-black">
				Froot Emporium
			</h1>
			<ul className="hidden gap-5 lg:flex">
				<Link href={"/"}>
					<motion.li whileHover={{ scale: 1.2, fontWeight: 700 }}>
						Home
					</motion.li>
				</Link>
				<Link href={"/store"}>
					<motion.li whileHover={{ scale: 1.2, fontWeight: 700 }}>
						Fruits
					</motion.li>
				</Link>
				<Link href={"/about"}>
					<motion.li whileHover={{ scale: 1.2, fontWeight: 700 }}>
						About
					</motion.li>
				</Link>
			</ul>
			<div>
				<Link href={"/cart"}>
					<button className="text-black rounded-full border border-black text-xl mr-2 p-2">
						<FaShoppingCart />{" "}
						<span className="text-sm font-bold">({totalItemsCount})</span>
					</button>
				</Link>
				<motion.button
					animate={{
						backgroundColor: mobileNav ? "black" : "",
						color: mobileNav ? "white" : "black",
						y: -5,
					}}
					transition={{ duration: 2 }}
					onClick={() => setMobileNav((prev) => !prev)}
					className="lg:hidden rounded border border-black text-xl"
				>
					<FaBars />
				</motion.button>
				<motion.div
					animate={{ x: mobileNav ? 0 : "-100vw", opacity: 1 }}
					initial={{ opacity: 0 }}
					className="absolute flex flex-col items-center justify-center left-0 bg-green-300 w-full h-screen"
				>
					<ul>
						<Link href={"/"}>
							<li className="text-5xl mb-5">Home</li>
						</Link>
						<Link href={"/store"}>
							<li className="text-5xl mb-5">Store</li>
						</Link>
						<Link href={"/about"}>
							<li className="text-5xl">About</li>
						</Link>
					</ul>
				</motion.div>
			</div>
		</nav>
	);
};
export default NavBar;
