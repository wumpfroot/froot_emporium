"use client";

import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="grid place-items-center min-h-screen">
			<motion.h1
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 2 }}
				className="text-5xl"
			>
				Fresh froots, straight from the emporium
			</motion.h1>
		</div>
	);
}
