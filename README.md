# WhatsApp Clone (MERN Stack)

A real-time chat application inspired by WhatsApp, built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.io** for live messaging.  

---

## Features

- User authentication (JWT-based login & signup)  
- Real-time messaging with Socket.io  
- One-to-one chat functionality  
- MongoDB for storing users and messages  
- Secure password storage with bcrypt  
- Responsive frontend built with React  

---

## Tech Stack

- **Frontend:** React, Axios, Context API  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas or local)  
- **Realtime:** Socket.io  
- **Authentication:** JWT & bcrypt  

---

##  Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud)  
- npm   
- Git  

---

## Installation & Setup

### 1. Clone the repository
2. Install Dependencies

```bash
  cd server
  npm install
  cd ..
  cd client
  npm install
```

Create .env file in the server directory
Add 
```bash  
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
To Run Backend 
```bash
cd server
npm run dev
```
To Run Frontend
```bash
cd ..
cd client
npm start 
```













