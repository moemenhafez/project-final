# Lebanon Tourism Web App 🌍

A modern frontend tourism platform built with:

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion

The application allows users to discover places in Lebanon while administrators can manage and add tourism destinations dynamically.

---

# Features

## Authentication System

### User Authentication
- Login system
- Register system
- User role selection
- Admin role selection
- LocalStorage authentication
- Protected routes

### Security
- Wrong password attempt limiter
- Login lock after 5 failed attempts
- Countdown timer during lock period

---

# User Features

## Dashboard
- Personalized dashboard
- Welcome section
- Tourism quick actions
- Responsive layout

## Discover Places
- Explore tourism places
- Responsive cards
- Dynamic rendering
- Category system
- Lebanon regions filtering
- Recommended-for filtering

## Place Cards
Each place card includes:
- Title
- Image
- Region
- Category
- Description
- Recommended for
- Budget
- Working hours

## Place Details Modal
- Full place information
- Budget details
- Opening and closing times
- Recommendations

---

# Admin Features

## Admin Login
- Dedicated admin login
- Protected admin routes

## Admin Places Page
Admins can:
- Add new places
- Upload images from gallery
- Select region
- Select category
- Add description
- Add budget
- Add opening hours
- Add recommendations
- Save places dynamically

## Dynamic Place Creation
When admin adds a place:
- New card appears automatically
- Stored in localStorage
- Visible in discover page

---

# Responsive Design

Optimized for:
- Mobile phones
- Tablets
- Desktop screens

---

# Technologies Used

## Frontend
- React
- TypeScript
- Vite

## Styling
- Tailwind CSS
- Framer Motion

## Routing
- React Router DOM

## Storage
- LocalStorage

---

# Project Structure

```bash
src/
│
├── components/
│   ├── layout/
│   ├── places/
│   └── shared/
│
├── pages/
│   ├── auth/
│   ├── admin/
│   └── user/
│
├── routes/
│
├── types/
│
├── utils/
│
└── data/
```

---

# Authentication Logic

Authentication is frontend-only using:

```js
localStorage
```

Stored values:
- isAuthenticated
- role
- currentUser

Protected routes redirect unauthorized users automatically.

---

# Main Pages

| Page | Description |
|------|-------------|
| LoginPage | Login/Register |
| DashboardPage | Main user dashboard |
| HomePage | Discover tourism places |
| AdminPlacesPage | Admin management panel |

---

# Animations

Implemented using:
- Framer Motion

Used for:
- Page transitions
- Hover effects
- Card animations
- Modal animations

---

# Future Improvements

## Planned Backend
Future backend integration may include:
- Node.js
- Express
- MongoDB
- JWT Authentication

## Future Features
- Favorites system
- Real notifications
- API integration
- Reviews & ratings
- Search system
- Advanced filters
- Booking system

---

# Installation

## Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

# Build Project

```bash
npm run build
```

---

# Learning Concepts Used

## React Concepts
- Components
- Props
- State
- useState
- useEffect
- Conditional Rendering
- Dynamic Rendering
- Mapping Arrays

## TypeScript Concepts
- Interfaces
- Types
- Props Typing
- State Typing

## Frontend Concepts
- Responsive Design
- Protected Routing
- LocalStorage Persistence
- Dynamic Forms
- Modal Systems

---

# Author

Developed by Moemen 💚