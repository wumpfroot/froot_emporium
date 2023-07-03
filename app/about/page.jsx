"use client";

import AboutScroll from "@/components/AboutScroll";

const AboutPage = () => {
	return (
		<div className="bg-about-image bg-cover bg-center p-10">
			<AboutScroll
				img="/images/about_personwithfruits.jpg"
				title="The freshest of fruits"
				text="We guarantee the freshest of fruits, straight to your door. Easy with minimal fuzz!"
			/>
			<AboutScroll
				img="/images/about_fruit_salad.jpg"
				title="Low prices forever!"
				text="Cheap prices guaranteed. We at the emporium will keep our fruits prices low. Everyone deserves healthy and high quality froot!"
				flexReverse={true}
			/>
			<AboutScroll
				img="/images/about_fruitbowls.jpg"
				title="Fast delivery promise"
				text="Carefully selected fruits from all around the world! As proper fruit can stay fresh only for a limited time, we offer lightning fast one-day delivery. Emporium does not make you wait!"
			/>
		</div>
	);
};
export default AboutPage;
