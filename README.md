# 🚍 SafeComm_Transportation – Backend

**SafeComm** is a community-driven safety platform that enhances public transportation by providing **real-time tracking**, **safety ratings**, and **community-based feedback** on transit routes and areas.  
This backend system manages **real-time transit data**, **user interactions**, **role-based access**, and **safety analytics** using a modern, secure, and scalable architecture.

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Runtime** | Node.js (v18+) |
| **Framework** | Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JWT (JSON Web Token) |
| **Testing** | POSTMAN |
| **External API** | Google Maps / Transit Location API |
| **Visualization (Admin)** | Chart.js / D3.js (via dashboard frontend) |
| **Version Control** | Git & GitHub |

---

## 🎯 Project Goal

To build a **secure, real-time backend system** that:
- Tracks public transit vehicle locations.
- Provides safety ratings and reports.
- Enables community feedback.
- Allows admins to monitor and analyze safety data effectively.

---

## ⚙️ Core Features

### 1. **User Authentication**
- JWT-based registration and login.
- Password hashing with bcrypt.
- Token validation middleware for protected routes.

### 2. **Role-Based Access Control (RBAC)**
- **User Roles**: `User`, `Admin`
- **User**: Can view transit info, submit safety ratings, report unsafe incidents.
- **Admin**: Can manage routes, monitor reports, and view analytics.

### 3. **Transit Tracking API**
- Fetches **real-time vehicle location data** using a third-party API (e.g., Google Maps).
- Allows querying active vehicles, route positions, and estimated arrival times.

### 4. **Route Safety Rating Service**
- Users can rate routes (e.g., 1–5 stars) based on safety perception.
- Aggregated ratings help other users choose safer transit options.
- MongoDB aggregation used for average rating calculation.

### 5. **Unsafe Situation Reporting**
- REST API to submit and retrieve safety reports.
- Each report includes route ID, timestamp, and description.
- Admins can flag or review unsafe reports.

### 6. **Initial Route Safety Consultation**
- When a user selects a route for the first time, the system recommends **similar routes** based on:
  - Route proximity.
  - Historical safety data.
  - Community feedback.
- Suggests safer alternatives using a route similarity algorithm.

### 7. **Estimated Wait Times**
- Calculates wait times for buses/trams using **real-time transit data** and **average travel patterns**.

---

## 🧩 Database Schema Overview (MongoDB)

### Collections
- **users**
  ```json
  {
    "_id": "ObjectId",
    "name": "string",
    "email": "string",
    "password": "hashed string",
    "role": "user | admin"
  }
>>>>>>> 3abf9b7fbf1a00b7b27a5c81fd65313e91773009
