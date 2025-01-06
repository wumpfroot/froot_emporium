"use client";

import { motion } from "motion/react";
import FruitCard from "@/components/FruitCard";
import { fruitItems } from "@/data/fruits";

const StorePage = () => {
	return (
		<div>
			<h2 className="text-5xl my-5 text-center">Fruits</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{fruitItems.map((item) => (
					<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="mx-auto shadow h-[450px]" key={item.id}>
						<FruitCard {...item} />
					</motion.div>
				))}
			</div>
		</div>
	);
};
export default StorePage;
