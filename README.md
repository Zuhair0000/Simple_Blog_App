# 📝 Simple Blog App

A full-stack blog application built with **React**, **Node.js**, and **MySQL**, featuring user authentication (JWT) and complete blog post CRUD functionality.

---

## 🚀 Features
- 🔐 **User Authentication** (Register/Login using JWT)
- 🖋 **Create, Read, Update, Delete** blog posts
- 👤 **Author-based posts** — users can only edit/delete their own posts
- 🎨 Simple, responsive UI

---

## 🛠 Tech Stack
**Frontend:**
- React.js
- Fetch API
- TailwindCSS

**Backend:**
- Node.js
- Express.js
- MySQL
- JWT & bcrypt

**DATABASE SCHEMA**
CREATE DATABASE IF NOT EXISTS blog_app;
USE blog_app;

CREATE TABLE IF NOT EXISTS users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(100) NOT NULL UNIQUE,
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
content TEXT NOT NULL,
author_id INT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Password is password123
INSERT INTO users (username, email, password) VALUES
('Ali Ahmed', 'ali@example.com', '$2b$12$JGnQHx/0AsLifOQVxLB/qeA14MwHAxWC3LMoiwX8jiO6PPEUNj70m'),
('Sara Hassan', 'sara@example.com', '$2b$12$JGnQHx/0AsLifOQVxLB/qeA14MwHAxWC3LMoiwX8jiO6PPEUNj70m'),
('Omar Khaled', 'omar@example.com', '$2b$12$JGnQHx/0AsLifOQVxLB/qeA14MwHAxWC3LMoiwX8jiO6PPEUNj70m'),
('Fatima Noor', 'fatima@example.com', '$2b$12$JGnQHx/0AsLifOQVxLB/qeA14MwHAxWC3LMoiwX8jiO6PPEUNj70m'),
('Hassan Saleh', 'hassan@example.com', '$2b$12$JGnQHx/0AsLifOQVxLB/qeA14MwHAxWC3LMoiwX8jiO6PPEUNj70m');


INSERT INTO posts (title, content, author_id) VALUES
('My First Blog Post', 'This is my very first blog post. I am excited to share my thoughts and experiences with you all.', 1),
('React Tips and Tricks', 'React is a powerful library for building UIs. Here are some tips to write cleaner code and improve performance.', 1),
('Traveling to Malaysia', 'Last month I visited Kuala Lumpur and Penang. The food, culture, and people were amazing!', 2),
('Learning Node.js', 'Node.js allows you to build backend services using JavaScript. In this post, I explain how to set up a REST API.', 3),
('Healthy Eating Habits', 'Maintaining a balanced diet is essential for good health. Here are some foods you should include daily.', 4),
('Photography Basics', 'Photography is about capturing light and moments. Learn the basics of composition, exposure, and lighting.', 5),
('Docker for Beginners', 'Docker makes it easier to containerize your applications. Here is how to get started with Docker on your machine.', 3),
('Top 10 Coding Practices', 'Writing clean, maintainable code is key to being a good developer. Here are my top 10 coding practices.', 2),
('My Journey as a Developer', 'From HTML tables to modern frameworks, here is how I grew as a software developer over the years.', 4);



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
