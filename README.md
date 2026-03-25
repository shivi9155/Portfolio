# Modern MERN Portfolio

A professional, fully responsive portfolio website built for a Computer Science student using the MERN stack (MongoDB, Express, React, Node.js) styled with Tailwind CSS and animated using Framer Motion.

## Features

- **Dynamic Frontend**: Modern, dark/light mode enabled UI with smooth scrolling and Framer Motion micro-interactions.
- **RESTful API**: Node.js/Express backend following MVC patterns to serve projects, certifications, and handle contact requests.
- **Admin Dashboard**: Protected via JWT authentication allowing the site owner to view messages and manage portfolio items.
- **Projects Showcase**: Uses the Challenge-Action-Result format.
- **Lazy Loading & Performance**: Built with Vite and React optimization techniques.

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, React Router, Axios, React Icons
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT, BcryptJS

## Prerequisites

- Node.js (v16+)
- MongoDB (running locally or MongoDB Atlas connection string)

## Getting Started

### 1. Database Configuration
You need a MongoDB instance running. By default, the application connects to `mongodb://127.0.0.1:27017/portfolio`.
If using Atlas or a different URI, update the `.env` file in the `backend` directory:
```
PORT=5000
NODE_ENV=development
MONGO_URI=your_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 2. Backend Setup
Navigate to the backend directory, install packages, and seed the initial admin user.
```bash
cd backend
npm install
node scripts/seed.js   # This creates an admin user with username: 'admin' and password: 'admin123'
npm run dev           # Alternatively `node server.js`
```
The server will start on `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, install packages, and start the development server.
```bash
cd frontend
npm install
npm run dev
```
The application will launch on `http://localhost:5173`.

## API Documentation

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/login` | Login admin and receive JWT | No |
| GET | `/api/projects` | Fetch all portfolio projects | No |
| POST | `/api/projects` | Create a new project | Yes |
| DELETE | `/api/projects/:id` | Delete a project | Yes |
| GET | `/api/certifications` | Fetch all certifications | No |
| POST | `/api/contact` | Submit a contact form | No |
| GET | `/api/contact` | Get all contact messages | Yes |

## Deployment Guide

### Frontend Deployment (Vercel)
1. Push your code to GitHub.
2. Link your repository to a new project in Vercel.
3. Configure the Root Directory to `frontend`.
4. Vercel will automatically detect Vite and configure the build command (`npm run build`) and output directory (`dist`).

### Backend Deployment (Render or Heroku)
1. Create a MongoDB Atlas cluster, whitelist IP `0.0.0.0/0`, and copy your URI.
2. Create a new Web Service in Render targeting your repository.
3. Set the Root Directory to `backend`.
4. Set the Start Command to `node server.js`.
5. Add your `.env` variables (`MONGO_URI`, `JWT_SECRET`, etc.) in the dashboard settings.
6. Remember to update the Axios base URLs in your frontend code to point to your new deployed backend URL.

## Admin Panel Access
- **URL**: `http://localhost:5173/admin`
- **Username**: `admin`
- **Password**: `admin123`
*(Note: Change these immediately after your first login by updating the database record directly or building a password update flow).*
