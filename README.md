Froot Emporium 🍉🍎🍍

Froot Emporium is a mock e-commerce website where users can browse and buy fruits at affordable prices. The website is built using Next.js, TailwindCSS, and Motion for smooth animations. Users can add fruits to their cart and simulate card payments using Stripe in test mode.
Demo

Check out the live demo of the site here: Froot Emporium
Features

    Browse a variety of fruits with real-time pricing and availability
    Add/remove fruits to/from your cart
    Simulate card payments using Stripe (in test mode)
    Responsive design using TailwindCSS for easy accessibility on mobile and desktop
    Smooth animations powered by Motion to enhance user experience
    State management across the site using React Context API
    Built with Next.js for server-side rendering and fast page loads

Technologies Used

    Next.js: A React framework for building static and dynamic websites with server-side rendering
    TailwindCSS: A utility-first CSS framework for building custom designs quickly
    Motion: Animation library for React that adds smooth and interactive animations to the UI
    Stripe: Simulated card payments (using Stripe's test mode for safe transactions)
    React Context API: Efficient state management for global state across the site

Installation

To get started with the project locally, follow these steps:

    Clone the repository:

git clone https://github.com/yourusername/froot-emporium.git

Navigate to the project directory:

cd froot-emporium

Install dependencies:

npm install

Create a .env.local file in the root of the project and add your Stripe test key:

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_test_stripe_public_key_here

Start the development server:

    npm run dev

    Visit http://localhost:3000 in your browser to view the website locally.

How It Works

    Home Page: Displays a list of fruits with images, names, and prices. Users can view individual product details.
    Cart: Allows users to view added fruits, update quantities, or remove them.
    Checkout: Simulate a payment process using Stripe’s test mode. Payments won’t be processed in live mode.
    Context API: Used to manage the shopping cart state globally across the app, so users can add/remove items from the cart at any point.

Contributing

Feel free to fork the repo, make changes, and create pull requests! Contributions are welcome, whether it's improving the UI, fixing bugs, or adding new features.
License

This project is licensed under the MIT License - see the LICENSE file for details.
