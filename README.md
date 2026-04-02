# ⚙ Node-Prisma-Postgres-JWT-APIs

A secure REST API built using **Node.js**, **Express**, and **PostgreSQL** with **Prisma ORM**. Features include JWT authentication, role-based access control (RBAC), and CRUD operations for Students and Users.

<div>
  <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT (Authentication)" />
  <img src="https://img.shields.io/badge/-bcrypt-003366?style=for-the-badge&logo=security&logoColor=white" alt="bcrypt" />
  <img src="https://img.shields.io/badge/-dotenv-009639?style=for-the-badge&logo=dotenv&logoColor=white" alt="dotenv" />
  <img src="https://img.shields.io/badge/-Joi-FB8C00?style=for-the-badge&logo=joi&logoColor=white" alt="Joi Validation" />
</div>

## 🧭 Table of Contents
- [📖 Introduction](#-introduction)
- [⚙ Tech Stack](#-tech-stack)
- [🔋 Features](#-features)
- [📦 Quick Start (Setup Guide)](#-quick-start-setup-guide)

---

## 📖 Introduction
This project demonstrates how to build a robust and secure REST API using:
- **Express.js** for routing and server logic.
- **Prisma ORM** for type-safe database interactions with PostgreSQL.
- **JWT** (JSON Web Tokens) for secure authentication.
- **Middleware** for access control, security (Helmet), logging (Morgan), and centralized error handling.

It provides a production-ready foundation for projects requiring user management and student data management.

---

## ⚙ Tech Stack
| Technology | Description |
| :--- | :--- |
| **Node.js** | JavaScript runtime for the server |
| **Express.js** | Web framework for building APIs |
| **PostgreSQL** | Relational database |
| **Prisma** | Next-generation ORM for Node.js & TypeScript |
| **JWT** | Authentication and authorization |
| **bcrypt** | Password hashing for security |
| **dotenv** | Environment variable management |
| **Joi** | Schema-based validation for request data |
| **Helmet & Morgan** | Security headers and request logging middleware |

---

## 🔋 Features
- ✅ **User Authentication & Authorization**: Secure login and registration using JWT.
- ✅ **Role-based Access Control**: Restrict access to specific routes based on roles (e.g., Admin, User).
- ✅ **CRUD Operations**: Full Create, Read, Update, and Delete for **Student** records.
- ✅ **Data Validation**: Request payloads validated using **Joi** schemas.
- ✅ **Secure Password Hashing**: Passwords stored safely using **bcrypt**.
- ✅ **Security & Logging**: Integrated **Helmet** for HTTP headers and **Morgan** for traffic monitoring.
- ✅ **Global Error Handling**: Centralized middleware to manage operational and programming errors.

---

## 📦 Quick Start (Setup Guide)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/aswinsivadas-tech/pg-crud-app.git
cd pg-crud-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add the following:

```env
# Server Port
PORT=9002

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key_here

# PostgreSQL Connection String
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="postgresql://postgres:password@localhost:5432/pg_crud_db"

# Node Environment
NODE_ENV=development
```

### 4️⃣ Database Migration
Run Prisma migrations to sync your database schema:
```bash
npx prisma migrate dev --name init
```

### 5️⃣ Start the server
```bash
npm run dev   # Development mode (with nodemon)
npm start     # Production mode
```

Server will run on:
👉 **http://localhost:9002**