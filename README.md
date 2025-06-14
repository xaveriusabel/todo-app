# 📝 Todo App (Monorepo)

Fullstack aplikasi Todo sederhana menggunakan:
- 🔧 Backend: Node.js + Express + MySQL
- 🖼️ Frontend: React (Vite)

## 🚀 Fitur
- Tambah, lihat, update, hapus todo
- Tandai todo selesai
- Terhubung ke MySQL

## 🗂 Struktur Project
todo-app/
├── client/     # React frontend
├── server/     # Express backend
└── SQL/        # Skrip setup database

## ⚙️ Setup

### 1. Clone dan install dependencies
git clone <repo-url>
cd todo-app
cd server && npm install
cd ../client && npm install

### 2. Setup Database
CREATE DATABASE todo_app;
USE todo_app;
CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false
);

### 3. Jalankan Backend
cd server
node server.js

### 4. Jalankan Frontend
cd client
npm run dev

Frontend: http://localhost:5173
Backend: http://localhost:5000

## 📦 API Endpoints
GET    /api/todos       - Ambil semua todo
POST   /api/todos       - Tambah todo baru
PUT    /api/todos/:id   - Update status
DELETE /api/todos/:id   - Hapus todo

## 📌 Catatan
- Pastikan MySQL aktif dan kredensial di server/models/db.js sesuai.
