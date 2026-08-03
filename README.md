# 🚖 Rydex – AI-Ready Smart Vehicle Booking Platform

<p align="center">
  <img src="./public/logo.png" width="180" alt="Rydex Logo"/>
</p>

<p align="center">

A production-style **Smart Vehicle Booking Platform** built using **Next.js**, **MongoDB**, **Socket.IO**, **Auth.js**, **Razorpay**, and **ZEGOCLOUD**.

Designed to provide a seamless booking experience for users while enabling vehicle partners to manage rides, complete onboarding, perform Video KYC, receive payments, and communicate in real-time.

---

## 🌐 Live Demo

### Frontend (Vercel)

https://3-rydex-ten.vercel.app

### Realtime Socket Server (Render)

https://your-render-url.onrender.com

---

# ✨ Features

## 👤 User Features

- Secure Email Authentication
- Google OAuth Login
- Email OTP Verification
- Search Nearby Vehicles
- Book Vehicles Instantly
- Live Ride Tracking
- Real-Time Ride Status Updates
- Booking History
- Secure Razorpay Payments
- AI Ready Chat System
- Responsive UI

---

## 🚗 Partner Features

- Partner Registration
- Vehicle Onboarding
- Document Upload
- Bank Account Registration
- Vehicle Pricing Configuration
- Pending Booking Requests
- Accept / Reject Bookings
- Active Ride Dashboard
- Earnings Dashboard
- Pickup OTP Verification
- Drop OTP Verification

---

## 🛡 Admin Features

- Admin Dashboard
- Earnings Analytics
- Vehicle Verification
- Driver Verification
- Review Pending Applications
- Approve / Reject Vehicles
- Approve / Reject Partners
- Monitor Video KYC Requests

---

## 📹 Video KYC

Driver verification is completed using **ZEGOCLOUD Video Calling**.

Features include:

- Live Video Call
- Secure Driver Verification
- Room-based Video Sessions
- Admin Verification Workflow

---

## 📍 Live Vehicle Tracking

Implemented using **Socket.IO**

Supports:

- Real-Time Driver Location Updates
- Live Ride Tracking
- Instant Ride Status Synchronization
- Low Latency Communication

---

## 💳 Payment Gateway

Integrated with **Razorpay**

Supports

- Secure Online Payments
- Payment Verification
- Booking Confirmation after Successful Payment

---

## 🔐 Authentication

Implemented using **Auth.js**

Supports

- Credentials Login
- Google Authentication
- JWT Sessions
- Protected Routes
- Role Based Access

Roles

- User
- Partner
- Admin

---

## 📧 Email Services

Implemented using

- Nodemailer

Features

- OTP Verification
- Email Verification
- Registration Emails

---

## 🤖 AI Ready Architecture

The project has been designed with a scalable backend architecture that can easily integrate future AI services such as

- AI Ride Suggestions
- Smart Vehicle Recommendation
- Intelligent Route Planning
- AI Customer Support
- Demand Prediction

---

# 🏗 Project Architecture

```
User
        │
        ▼
 Next.js Frontend
        │
        ├────────────► Auth.js
        │
        ├────────────► MongoDB
        │
        ├────────────► Razorpay
        │
        ├────────────► ZEGOCLOUD
        │
        └────────────► Socket Server
                           │
                           ▼
                    Real-Time Updates
```

---

# 📂 Project Structure

```
rydex
│
├── app
│   ├── api
│   ├── admin
│   ├── partner
│   ├── user
│   └── video-kyc
│
├── components
│
├── hooks
│
├── lib
│
├── models
│
├── redux
│
├── auth.ts
│
└── proxy.ts


socketServer

├── index.js

├── models

└── Socket.IO Server
```

---

# ⚙ Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Leaflet
- Redux Toolkit

---

## Backend

- Next.js API Routes
- Node.js
- MongoDB
- Mongoose
- Socket.IO

---

## Authentication

- Auth.js
- Google OAuth
- Credentials Login
- JWT

---

## Third Party Services

- Razorpay
- ZEGOCLOUD
- Cloudinary
- Nodemailer

---

# 🚀 Major Functionalities

✔ User Authentication

✔ Google Login

✔ Email OTP Verification

✔ Vehicle Booking

✔ Partner Onboarding

✔ Vehicle Verification

✔ Admin Approval Workflow

✔ Video KYC

✔ Real-Time Ride Tracking

✔ Razorpay Integration

✔ Live Chat Infrastructure

✔ Responsive Design

✔ Protected APIs

✔ Role Based Authorization

---

# 🔥 Highlights

✅ Production Ready Architecture

✅ Modular Folder Structure

✅ Scalable Backend

✅ Real-Time Communication

✅ Multiple User Roles

✅ Secure Authentication

✅ Video Verification

✅ Payment Integration

✅ AI Ready Design

---

# 📦 Deployment

Frontend deployed on

- Vercel

Realtime Socket Server deployed on

- Render

Database

- MongoDB Atlas

---

# 🛠 Installation

Clone Repository

```bash
git clone https://github.com/Priyanshu7900/3.rydex.git
```

Install Dependencies

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

Start Socket Server

```bash
cd socketServer
npm install
node index.js
```

---

# 🔑 Environment Variables

```
MONGODB_URI=

AUTH_SECRET=

AUTH_GOOGLE_ID=

AUTH_GOOGLE_SECRET=

EMAIL=

PASS=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=

RAZORPAY_KEY_SECRET=

NEXT_PUBLIC_ZEGO_APP_ID=

NEXT_PUBLIC_ZEGO_SERVER_SECRET=

NEXT_PUBLIC_SOCKET_SERVER_URL=
```

---

# 🌐 Live Demo

### 🚀 Production Deployment

**Frontend (Vercel)**

👉 https://3-rydex-ten.vercel.app

---

## 📢 Production Note

The application is successfully deployed and fully functional.

**Current Status**

- ✅ Email Registration & OTP Verification
- ✅ Secure Credentials Login
- ✅ Vehicle Booking
- ✅ Partner Dashboard
- ✅ Admin Dashboard
- ✅ Real-Time Socket Communication
- ✅ Video KYC
- ✅ Razorpay Integration

**Known Limitation**

Google OAuth authentication is currently undergoing production configuration updates. Users can continue to access all platform features using the Email OTP authentication system.


