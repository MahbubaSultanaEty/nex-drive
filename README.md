# NexDrive 🚗
### A Premium Car Rental Platform

🌐 **Live Site:** [https://nex-drive-phi.vercel.app](https://nex-drive-phi.vercel.app)  
🖥️ **Server:** [https://nex-drive-server.vercel.app](https://nex-drive-server.vercel.app)

---

## 📸 Screenshots

### Home Page
![NexDrive Home](https://i.ibb.co/snhfn1J/Nex-Drive-Luxury-Car-Rentals-07-11-2026-04-40-PM.png)

### Explore Cars
![NexDrive Cars](https://i.ibb.co/bM6HgtZb/Explore-Cars-Nex-Drive-07-11-2026-04-43-PM.png)

---

## 👩‍💻 Author

**Mahbuba Sultana**  
GitHub: [MahbubaSultanaEty](https://github.com/MahbubaSultanaEty)  
LinkedIn: [mahbuba-sultana09](https://www.linkedin.com/in/mahbuba-sultana09/)

---

## 🎯 Overview

NexDrive is a full-stack premium car rental platform where users can browse and book cars, manage their own listings, and handle bookings — all with secure authentication and a clean Ivory & Crimson design theme.

---

## ✨ Core Features

- 🔐 **Secure Authentication** — Email/password and Google login powered by BetterAuth with JWT token protection
- 🚘 **Full Car Management** — Add, update, and delete your own car listings with image preview and real-time availability control
- 📅 **Instant Booking System** — Book any available car with driver options, special notes, and automatic price calculation
- 🔍 **Smart Search & Filter** — Search cars by name using MongoDB `$regex` operator and filter by car type in real time
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop with a clean Ivory & Crimson design theme
- 🔒 **JWT Cookie Protection** — Private routes secured with HTTPOnly cookie-based JWT tokens
- 📋 **My Bookings** — Users can view and manage all their personal bookings in one place
- 🚗 **My Added Cars** — Car owners can manage their own listings with full edit and delete control

---

## 🛠️ Tech Stack

### Frontend
| Package | Purpose |
|---|---|
| `next` | React framework (App Router) |
| `tailwindcss` | Utility-first CSS |
| `@heroui/react` | UI component library |
| `framer-motion` | Animations and transitions |
| `react-icons` | Icon library |
| `better-auth` | Authentication (Email + Google OAuth) |

### Backend
| Package | Purpose |
|---|---|
| `express` | Node.js web framework |
| `mongodb` | Database driver |
| `jose-cjs` | JWT verification via JWKS |
| `cors` | Cross-origin resource sharing |
| `dotenv` | Environment variable management |

---

## 📄 Pages

| Page | Route |
|---|---|
| Home | `/` |
| Explore Cars | `/cars` |
| Car Details | `/cars/[id]` |
| Add Car | `/add-car` |
| My Bookings | `/my-bookings` |
| My Added Cars | `/my-added-cars` |
| Login | `/login` |
| Register | `/register` |
| Profile | `/profile` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

### Frontend Setup

```bash
git clone https://github.com/MahbubaSultanaEty/nexdrive-client.git
cd nexdrive-client
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

```bash
npm run dev
```

### Backend Setup

```bash
git clone https://github.com/MahbubaSultanaEty/nexdrive-server.git
cd nexdrive-server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_uri
PORT=5000
CLIENT_URL=http://localhost:3000
```

```bash
node index.js
```

---

## 🔗 Relevant Links

- 🌐 Live Site: [https://nex-drive-phi.vercel.app](https://nex-drive-phi.vercel.app)
- 🖥️ Live Server: [https://nex-drive-server.vercel.app](https://nex-drive-server.vercel.app)
- 💻 Frontend Repo: [github.com/MahbubaSultanaEty/nexdrive-client](https://github.com/MahbubaSultanaEty/nex-drive)
- ⚙️ Backend Repo: [github.com/MahbubaSultanaEty/nexdrive-server](https://github.com/MahbubaSultanaEty/nex-drive--server)

---

Built with ❤️ as part of an assignment project. Design theme: **Ivory & Crimson**.
