import { motion } from "framer-motion";
import Image from "next/image";

const AboutScroll = ({ img, title, text, flexReverse }) => {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 75 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 1, delay: 0.5 }}
			className={`flex items-center justify-center md:justify-between gap-20 mb-80 ${
				flexReverse
					? "flex-col-reverse md:flex-row-reverse"
					: "flex-col-reverse md:flex-row"
			}`}
		>
			<div className="w-2/3">
				<h1 className="text-4xl md:text-6xl mb-4">{title}</h1>
				<p className="text-lg md:text-2xl">{text}</p>
			</div>
			<div>
				<Image
					className="bg-cover rounded-md"
					width={300}
					height={500}
					src={img}
					alt="random pic"
				/>
			</div>
		</motion.div>
	);
};
export default AboutScroll;
