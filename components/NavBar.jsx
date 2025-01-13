"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import { motion } from "motion/react";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const NavBar = () => {
	const { items } = useContext(CartContext);
	const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<nav className="relative flex justify-between items-center p-4 bg-[#f6ede8] z-20">
			<Link href={"/"}>
				<img src="/images/logo.png" alt="logo of froot emporium" style={{ width: "150px", height: "auto" }} />
			</Link>
			<ul className="hidden gap-5 lg:flex">
				<Link href={"/"}>
					<motion.li className="text-2xl" whileHover={{ scale: 1.2, fontWeight: 700 }}>
						Home
					</motion.li>
				</Link>
				<Link href={"/store"}>
					<motion.li className="text-2xl" whileHover={{ scale: 1.2, fontWeight: 700 }}>
						Fruits
					</motion.li>
				</Link>
				<Link href={"/about"}>
					<motion.li className="text-2xl" whileHover={{ scale: 1.2, fontWeight: 700 }}>
						About
					</motion.li>
				</Link>
			</ul>
			<div>
				<Link href={"/cart"}>
					<Button className="flex gap-1">
						<FaShoppingCart /> <span className="text-sm font-bold">({totalItemsCount})</span>
					</Button>
				</Link>
				<MobileNav />
			</div>
		</nav>
	);
};
export default NavBar;
