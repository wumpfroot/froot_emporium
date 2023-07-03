import "./globals.css";
import { Capriola } from "next/font/google";
import NavBar from "@/components/NavBar";
import CartProvider from "@/context/CartContext";

const capriola = Capriola({ subsets: ["latin"], weight: "400" });

export const metadata = {
	title: "Froot Emporium",
	description: "Mock app to buy fruits cheap and fast",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={capriola.className}>
				<CartProvider>
					<NavBar />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
