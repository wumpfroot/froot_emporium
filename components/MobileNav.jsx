import { useState } from "react";

import Link from "next/link";

import { motion } from "motion/react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
	const [mobileNav, setMobileNav] = useState(false);
	return (
		<>
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
			<motion.div animate={{ x: mobileNav ? 0 : "-100vw" }} className="absolute flex flex-col items-center justify-center left-0 bg-green-300 w-full h-screen">
				<ul>
					<Link onClick={() => setMobileNav(false)} href={"/"}>
						<li className="text-5xl mb-5">Home</li>
					</Link>
					<Link onClick={() => setMobileNav(false)} href={"/store"}>
						<li className="text-5xl mb-5">Store</li>
					</Link>
					<Link onClick={() => setMobileNav(false)} href={"/about"}>
						<li className="text-5xl">About</li>
					</Link>
				</ul>
			</motion.div>
		</>
	);
};
export default MobileNav;
