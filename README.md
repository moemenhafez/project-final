# 🇱🇧 LebGuide — Smart Lebanon Tourism & Community Platform

A modern React + TypeScript tourism marketplace platform focused on discovering Lebanon through restaurants, attractions, nightlife, community trips, smart planning tools, and monetized featured experiences.

---

# 🚀 Project Overview

LebGuide is a scalable frontend marketplace platform that allows users to:

- Explore Lebanese places
- Filter and search experiences
- Join community-organized trips
- Create personalized plans
- Calculate trip budgets
- Estimate travel times
- Save trip plans
- Discover sponsored locations
- Access analytics dashboards (admin)

The platform also includes a role-based admin system for managing marketplace content and monetization features.

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM

---

## UI / UX Libraries

- Recharts
- React Hot Toast

---

## Architecture

- Component-based architecture
- Layout system
- Context API authentication
- Protected routes
- Role-based navigation
- Dynamic localStorage persistence

---

# 📂 Project Structure

```bash
src/
│
├── components/
│   ├── community/
│   ├── layout/
│   ├── places/
│
├── context/
│   ├── AuthContext.ts
│   └── AuthProvider.tsx
│
├── hooks/
│   └── useAuth.ts
│
├── layouts/
│   ├── AuthLayout.tsx
│   └── MainLayout.tsx
│
├── pages/
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   ├── AnalyticsPage.tsx
│   ├── AdminPlacesPage.tsx
│   ├── CommunityTripsPage.tsx
│   ├── CreateTripPage.tsx
│   ├── SavedPlansPage.tsx
│   ├── TripBudgetPage.tsx
│   └── TravelTimePage.tsx
│
├── routes/
│   ├── index.tsx
│   └── ProtectedRoute.tsx
│
├── types/
│
├── utils/
│
└── main.tsx
```

---

# 🔐 Authentication System

The platform uses a Context API authentication architecture with:

- Protected routes
- Role-based authentication
- User/Admin separation
- Persistent login using localStorage

---

# 👤 Demo Accounts

## User Account

```txt
Username: emilys
Password: emilyspass
```

---

## Admin Account

```txt
Username: admin
Password: admin123
```

---

# 🧠 Core Features

# 🌍 Marketplace Discovery

- Dynamic tourism cards
- Sponsored experiences
- Region filtering
- Category filtering
- Live search system
- Responsive grid layout

---

# ⭐ Sponsored Monetization System

Businesses can become promoted/sponsored:

- Sponsored badge
- Priority marketplace ranking
- Featured visibility
- Monetization-ready architecture

---

# 🧳 Community Trips System

Users can:

- Join trips
- Create organized outings
- Save plans
- Filter by partner type
- Filter by region

Supported partner types:

- Friends
- Family Gathering
- Business Meeting
- Couple/Partner

---

# 💰 Trip Budget Planner

Users can estimate:

- Minimum budget
- Recommended budget
- Trip expenses

---

# 🛣️ Travel Time System

Calculate estimated travel times between Lebanese regions.

---

# 📊 Analytics Dashboard

Admin-only analytics system including:

- Regional visits
- Sponsored engagement
- Trip bookings
- Marketplace insights
- Data visualization using Recharts

---

# 🛡️ Validation System

Professional frontend validation includes:

- Empty field protection
- Description length validation
- URL validation
- Toast-based feedback system

---

# 🔔 Toast Notification System

Built using:

```bash
react-hot-toast
```

Used for:

- Success notifications
- Error handling
- Better UX feedback

---

# 🎨 UX/UI Features

- Responsive design
- Premium hover animations
- Empty states
- Modern dashboard cards
- Rounded UI system
- Clean spacing architecture
- Interactive filtering
- Modern marketplace styling

---

# 🏗️ Architecture Concepts Used

- Separation of Concerns
- Context API
- Component Reusability
- Role-Based Access Control
- Dynamic Rendering
- Protected Routing
- State Management
- Marketplace Ranking Logic
- Client-Side Validation
- Defensive Programming

---

# 📦 Installation

# Clone Repository

```bash
git clone <your-repository-url>
```

---

# Navigate Into Project

```bash
cd webprojectfinal
```

---

# Install Dependencies

```bash
npm install
```

---

# Install Additional Libraries

```bash
npm install recharts react-hot-toast
```

---

# Run Development Server

```bash
npm run dev
```

---

# 🏭 Production Build

```bash
npm run build
```

---

# 🚀 Deployment

Recommended platform:

- Vercel

Deploy steps:

1. Push project to GitHub
2. Connect repository to Vercel
3. Deploy automatically

---

# 📈 Project Status

| Area | Completion |
|---|---|
| Frontend Architecture | 98% |
| UX/UI | 95% |
| Marketplace Features | 95% |
| Admin Systems | 92% |
| Monetization Logic | 90% |
| Backend | 0% |

---

# 🔮 Future Improvements

## Backend Integration

Possible backend options:

- Firebase
- Supabase
- Node.js + Express

---

## Future Features

- Real database
- Real authentication
- Online payments
- Google Maps integration
- Image uploads
- Booking system
- Reviews & ratings
- AI recommendations
- Chat system

---

# 🧑‍💻 Author

Built as a scalable frontend marketplace architecture project using modern React ecosystem technologies.

---

# 📄 License

This project is for educational and portfolio purposes.