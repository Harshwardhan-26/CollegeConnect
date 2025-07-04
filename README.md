# 🎓 College Connect

> A full-stack web application that helps college students connect by posting and exploring useful campus services.

---

## 📖 Overview

In college, students often need help with tutoring, want to buy or sell used items, or are looking for academic or housing support. But there’s no centralized platform for these needs.

🌐 Check out the live deployed project here:  
👉 [College Connect on Netlify](https://steady-chimera-e872af.netlify.app/)

**College Connect** solves this problem.

It acts as a **digital notice board for students**, where they can:
- 📢 Post a service (e.g., "Math Tutoring", "Resume Help", "Books for Sale")
- 🔍 Explore services posted by others
- 🔐 Sign in securely with Firebase Authentication
- 🔁 Interact in real-time with a Firebase-powered backend

---

## ✨ Features

- 🔐 **User Authentication** (Signup/Login) via Firebase
- 📄 **Post a New Service** (Title, Category, Description, Location, Price)
- 📋 **Browse Services** in real-time with dynamic cards
- 🧭 **Responsive Navigation** with route-based views
- 🎨 **Clean UI Design** using Tailwind CSS
- ⚡️ **Fast performance** with Vite + React + TypeScript

---

## 🖼️ Screenshots

- **Login Page**
- **Service List Page**
- **Add Service Form**
- **Responsive Navbar**

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React, TypeScript |
| Styling  | Tailwind CSS |
| Routing  | React Router |
| Backend  | Firebase (Authentication + Firestore) |
| Build Tool | Vite |
| Hosting (Optional) | Firebase Hosting |

---

## 🚀 How to Run This Project Locally

Follow these steps to run College Connect on your machine.

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above)
- npm (comes with Node)
- [Firebase CLI](https://firebase.google.com/docs/cli)

---

### 📥 Clone the Repository

```bash
git clone https://github.com/your-username/college-connect.git
cd college-connect
```
📦 Install Dependencies
```bash
npm install
```
🔧 Firebase Setup
To connect this app to your own Firebase project:
Go to Firebase Console
Click "Add Project" → give it a name (e.g., college-connect)
Click </> Add Web App
Enable Authentication (Email/Password) in the console
Enable Cloud Firestore in test mode
Copy your Firebase config and paste it into:
```ts
// src/config/firebase.ts
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```
🧪 Run the App Locally
```bash
npm run dev
```
This will start your local server at: http://localhost:5173
📁 Project Structure
```bash
college-connect/
│
├── public/                  # Static files
├── src/
│   ├── components/          # UI components (Navbar, Forms, Cards)
│   ├── pages/               # Page views (Home, Auth, Services)
│   ├── hooks/               # Custom React hooks (Auth, Firestore)
│   ├── config/              # Firebase configuration
│   ├── types/               # TypeScript interfaces
│   ├── App.tsx              # Main layout and routes
│   └── main.tsx             # Entry point
├── index.html               # Base HTML
├── tailwind.config.js       # Tailwind setup
├── vite.config.ts           # Vite config
├── package.json             # Dependencies and scripts
└── README.md                # Project info
```
🙌 Contribution
Want to improve this project or add a new feature?
Feel free to fork, clone, and raise a pull request.
📄 License
This project is open source and available under the MIT License.
🔗 Connect
[LinkedIn](https://www.linkedin.com/in/harshwardhan-goyal-4aa899278)
