"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import { motion } from "motion/react";
import MobileNav from "./MobileNav";

const NavBar = () => {
	const { items } = useContext(CartContext);
	const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<nav className="relative flex justify-between items-center p-4 bg-green-300 z-20">
			<Link href={"/"}>
				<h1 className="text-black font-bold text-2xl md:text-3xl">Froot Emporium</h1>
			</Link>
			<ul className="hidden gap-5 lg:flex">
				<Link href={"/"}>
					<motion.li whileHover={{ scale: 1.2, fontWeight: 700 }}>Home</motion.li>
				</Link>
				<Link href={"/store"}>
					<motion.li whileHover={{ scale: 1.2, fontWeight: 700 }}>Fruits</motion.li>
				</Link>
				<Link href={"/about"}>
					<motion.li whileHover={{ scale: 1.2, fontWeight: 700 }}>About</motion.li>
				</Link>
			</ul>
			<div>
				<button className="text-black rounded-full border border-black text-xl mr-2 p-2">
					<Link href={"/cart"}>
						<div className="flex gap-1">
							<FaShoppingCart /> <span className="text-sm font-bold">({totalItemsCount})</span>
						</div>
					</Link>
				</button>
				<MobileNav />
			</div>
		</nav>
	);
};
export default NavBar;
