const stripe = require("stripe")(
	sk_test_51N9uthIAb2npfdELYqaTnWtnBHa6guXE4IdlUglN12VAW3S3uGC8TRjoPlfFLLeGkqyeVhUUAbmNYNXHgtL4Z5Bw00tOjfbmSb
);

export default async function Checkout(req, res) {
	if (req.method === "POST") {
		const items = req.body.items;
		let lineItems = [];
		items.forEach((item) => {
			lineItems.push({
				price: item.id,
				quantity: item.quantity,
			});
		});
		try {
			const session = await stripe.checkout.sessions.create({
				line_items: lineItems,
				mode: "payment",
				success_url: "http://localhost:3000/success",
				cancel_url: "http://localhost:3000/cancel",
			});
			res.json({ url: session.url });
		} catch (error) {
			console.log(error);
			res.status(error.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method is not allowed");
	}
}
