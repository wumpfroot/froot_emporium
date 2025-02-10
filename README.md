Froot Emporium 🍉🍎🍍

Froot Emporium is a mock e-commerce website where users can browse and buy fruits at affordable prices. The website is built using Next.js, TailwindCSS, and Motion for smooth animations. Users can add fruits to their cart and simulate card payments using Stripe in test mode.
Demo

Check out the live demo of the site here: Froot Emporium
Features

- Add/remove fruits to/from your cart
- Simulate card payments using Stripe (in test mode)
- Responsive design using TailwindCSS for easy accessibility on mobile and desktop
- Smooth animations powered by Motion to enhance user experience
- State management across the site using React Context API
- Built with Next.js for server-side rendering and fast page loads

Technologies Used

- Next.js: A React framework for building static and dynamic websites with server-side rendering
- TailwindCSS: A utility-first CSS framework for building custom designs quickly
- Motion: Animation library for React that adds smooth and interactive animations to the UI
- Stripe: Simulated card payments (using Stripe's test mode for safe transactions)
- React Context API: Efficient state management for global state across the site

Installation

To get started with the project locally, follow these steps:

Clone the repository:
```bash
git clone https://github.com/wumpfroot/froot_emporium.git
```

Navigate to the project directory:
```bash
cd froot_emporium
```
Install dependencies:
```bash
npm install
```

Create a .env.local file in the root of the project and add your Stripe test key:
```bash
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_test_stripe_public_key_here
```

Start the development server:
```bash
npm run dev
```
Visit http://localhost:3000 in your browser to view the website locally.

How It Works

- Home Page: Displays a list of fruits with images, names, and prices. Users can view individual product details.
- Cart: Allows users to view added fruits, update quantities, or remove them.
- Checkout: Simulate a payment process using Stripe’s test mode. Payments won’t be processed in live mode.
- Context API: Used to manage the shopping cart state globally across the app, so users can add/remove items from the cart at any point.

