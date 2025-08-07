# 🛒 Add to Cart Task Using Router

A simple shopping cart application built using ReactJS and React Router. This project demonstrates how to fetch and display 
products from an external API, add them to a cart, and manage cart state with proper routing and responsive UI.


## 🚀 Features

- ✅ Fetch products from [Fake Store API](https://fakestoreapi.com/).
- ✅ Display products with image, title, price, and description.
- ✅ Responsive product layout using Tailwind CSS.
- ✅ Add and remove items from the cart.
- ✅ "Add to Cart" button changes to "Remove from Cart" if item already in cart.
- ✅ Increase/Decrease quantity of each cart item.
- ✅ Dynamically update total price per item and for the full cart.
- ✅ Display final price after applying a 10% discount.
- ✅ State management using React Hooks + Context API.
- ✅ Navigation between Product and Cart pages using React Router.
- ✅ Clean, modular, and readable code.

---

## 🛠 Tech Stack

- **ReactJS**
- **React Router DOM**
- **Tailwind CSS**
- **HTML/CSS**
- **JavaScript (ES6+)**

---

## 📂 Project Structure

.
├── .parcel-cache
├── dist
├── node_modules
├── src
│ ├── Components
│ │ ├── About.js
│ │ ├── Body.js
│ │ ├── Cart.js
│ │ ├── cartProvider.js
│ │ ├── Contact.js
│ │ ├── Error.js
│ │ ├── Header.js
│ │ ├── ProductCard.js
│ │ ├── Shimmer.js
│ │ └── index.css
│ ├── index.js
│ └── utils
│ └── customHooks
│ ├── useCartProvider.js
│ ├── useProductList.js
│ └── userGlobal.js
│ └── source.js
├── .gitignore
├── .postcssrc
├── index.html
├── package-lock.json
├── package.json
└── README.md
