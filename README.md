## 🛍️ ApniDukaan — React E-commerce Frontend with Clerk Authentication
ApniDukaan is a responsive React frontend project simulating a modern e-commerce experience. It includes authentication with Clerk, dynamic product listings, cart management, address form, and a checkout confirmation page.

## ✨ Features
🔐 User Authentication via Clerk.dev

🛒 Add to Cart, Update Quantity, Remove Items

📦 Checkout with billing details and address form

📍 Location detection using browser Geolocation API

🧾 Bill summary with promo code input

🎉 Animated "Order Successful" confirmation screen

📱 Fully responsive UI with Tailwind CSS

## 🧑‍💻 Technologies Used
# Tech	          Purpose
React	            Frontend Framework
Clerk	            User Authentication
Tailwind CSS	    Styling & Responsiveness
React Router	    Client-side Routing
React Icons	      Icon library
React Toastify	  Notifications

## Project Structure
``` ApniDukaan/
├── public/
│   └── assets/
│       ├── empty-cart.png
│       ├── ...other images
│
├── src/
│   ├── assets/
│   │   └── (images, icons, banners, etc.)
│   │
│   ├── components/
│   │   ├── Breadcrums.jsx
│   │   ├── Carousel.jsx
│   │   ├── Category.jsx
│   │   ├── Features.jsx
│   │   ├── FilterSection.jsx
│   │   ├── Footer.jsx
│   │   ├── MidBanner.jsx
│   │   ├── MobileFilter.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductListView.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── ResponsiveMenu.jsx
│   │   └── ... any other reusable UI
│   │
│   ├── context/
│   │   ├── CartContext.jsx       # Manages cart state, quantity updates, clearCart
│   │   ├── DataContext.jsx       # Optional: if you're managing product/category data globally
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx              # Cart page with quantity editing and delivery form
│   │   ├── CategoryProduct.jsx   # Products by category view
│   │   ├── Congratulations.jsx   # Post-checkout success page
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Products.jsx          # All products
│   │   └── SingleProduct.jsx     # Detailed product page
│   │
│   ├── App.jsx                   # Main app component with routes
│   ├── main.jsx                  # Vite entry point
│   ├── index.css                 # Tailwind & custom global styles
│
├── .gitignore
├── index.html                   # Main HTML file
├── netlify.toml                 # For Netlify deployment (if used)
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md                    # You'll add this here
└── .env.local                   # Your Clerk keys (not committed)```
