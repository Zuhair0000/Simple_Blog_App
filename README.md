# 📝 Simple Blog App

A full-stack blog application built with **React**, **Node.js**, and **MySQL**, featuring user authentication (JWT) and complete blog post CRUD functionality.

---

## 🚀 Features
- 🔐 **User Authentication** (Register/Login using JWT)
- 🖋 **Create, Read, Update, Delete** blog posts
- 👤 **Author-based posts** — users can only edit/delete their own posts
- 🕒 **Timestamps** for all posts
- 🎨 Simple, responsive UI

---

## 🛠 Tech Stack
**Frontend:**
- React.js
- Fetch API
- CSS (or your chosen styling library)

**Backend:**
- Node.js
- Express.js
- MySQL
- JWT & bcrypt

---

## 📸 Screenshots

### 1️⃣ Home Page
<img width="1895" height="898" alt="Home" src="https://github.com/user-attachments/assets/c0c91cd6-1d94-4b60-958e-8d39097faf3c" />


### 2️⃣ Login Page
<img width="1535" height="808" alt="Login" src="https://github.com/user-attachments/assets/6f218f11-ebd9-40e4-948c-967fa6288173" />


### 3️⃣ Register Page
<img width="1189" height="797" alt="Register" src="https://github.com/user-attachments/assets/d1af9049-a76c-4909-bda2-f89ae4b35ffe" />


### 4️⃣ User Dashboard
<img width="1315" height="799" alt="User Dashboard" src="https://github.com/user-attachments/assets/28906089-1afe-40b7-93ae-09df2b99f16e" />


### 5️⃣ Create Post
<img width="1228" height="890" alt="Create Post" src="https://github.com/user-attachments/assets/a969d24c-b291-49ad-b5ff-ad9b0beaa5c1" />


---

## 📂 Project Structure
project-folder/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
└── README.md

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app

## Backend Setup
cd backend
npm install
# Create a .env file with:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=yourpassword
# DB_NAME=blogdb
# JWT_SECRET=your_jwt_secret
npm start

## Frontend Setup
cd frontend
npm install
npm run dev

#Tailwindcss Setup
1- Install Tailwind CSS
        npm install tailwindcss @tailwindcss/vite
2- Configure the Vite plugin (vite.config.ts)
        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'
        export default defineConfig({
          plugins: [
            tailwindcss(),
          ],
        })
3- Import Tailwind CSS in your CSS file
        @import "tailwindcss";
---
📜 License

This project is open-source and available under the MIT License.
