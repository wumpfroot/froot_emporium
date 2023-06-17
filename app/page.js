"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className="relative bg-home-image bg-cover grid place-items-center min-h-screen"
		>
			<div className="absolute top-1/2 z-10 bg-green-300 p-4 rounded">
				<h1 className="text-5xl text-white">
					Fresh froots, straight from the emporium
				</h1>
			</div>
			{/* <Image
				style={{ objectFit: "cover" }}
				src={"/images/home_image.jpg"}
				fill={true}
				alt="image of fruits"
			/> */}
		</motion.div>
	);
}
