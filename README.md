# 🌳 Central Landing Park | Backend API

This is the backend server for the **Central Landing Park** project, developed during a park-themed Stackathon. It provides a RESTful API to handle park data, and core server-side logic.

## 🔗 Frontend Repository
The client-side application for this project can be found here:
**[Park Frontend Repository](https://github.com/intisarHJM/Park-frontEnd.git)**

---

## 🛠 Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Package Manager:** npm
* **Database:** MongoDB with Mongoose ODM
* **Security:** CORS middleware

---

## 📦 Core Dependencies
* `express` - Fast, minimalist web framework.
* `mongoose` - Elegant MongoDB object modeling.
* `dotenv` - Environment variable management.
* `cors` - Enabling Cross-Origin Resource Sharing for the frontend.
* `morgan` - HTTP request logger for development debugging.

---

## 📂 Project Structure
The backend is organized using a modular architecture to separate concerns:

```text
├── controllers/    # Logical handling for each route
├── db/             # Database connection and configuration
├── middleware/     # Custom functions for request processing
├── models/         # Mongoose schemas for park data
├── routes/         # API endpoint definitions
├── server.js       # Main entry point and server setup
├── package.json    # Project metadata and dependencies
└── .gitignore      # Files excluded from version control
