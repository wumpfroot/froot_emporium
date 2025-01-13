"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = "scroll");
	});
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="relative grid place-items-center h-screen">
			<div className="absolute top-1/2 z-10 bg-green-300 p-4 rounded">
				<h1 className="text-5xl text-white">Fresh froots, straight from the emporium</h1>
			</div>
			<img src="/images/logo.png" alt="logo of froot emporium" className="absolute top-80 z-20" style={{ width: "500px", height: "auto" }} />
			<Image style={{ objectFit: "cover" }} fill={true} src={"/images/home_image.jpg"} alt="image of fruits" />
		</motion.div>
	);
}
