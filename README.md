# NexDrive 🚗

### A Premium Car Rental Platform

**Live Site:** [https://nexdrive.vercel.app](https://nexdrive.vercel.app)
**Server:** [https://nexdrive-server.vercel.app](https://nexdrive-server.vercel.app)

---

## Features

- 🔐 **Secure Authentication** — Email/password and Google login powered by BetterAuth with JWT token protection
- 🚘 **Full Car Management** — Add, update, and delete your own car listings with image preview and real-time availability control
- 📅 **Instant Booking System** — Book any available car with driver options, special notes, and automatic price calculation
- 🔍 **Smart Search & Filter** — Search cars by name using MongoDB `$regex` operator and filter by car type in real time
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop with a clean Ivory & Crimson design theme

---

## Tech Stack

**Frontend**
- Next.js 15 (App Router)
- Tailwind CSS
- HeroUI
- Framer Motion
- React Icons

**Backend**
- Node.js + Express.js
- MongoDB (Native Driver)

**Auth**
- BetterAuth

---

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Explore Cars | `/cars` |
| Car Details | `/cars/[id]` |
| Add Car | `/add-car` |
| My Bookings | `/my-bookings` |
| My Added Cars | `/my-added-cars` |
| Login | `/login` |
| Register | `/register` |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

### Clone the repo

```bash
git clone https://github.com/MahbubaSultanaEty/nexdrive-client.git
cd nexdrive-client
npm install
npm run dev
```

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
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
```

```bash
node index.js
```

---

## Author

**Mahbuba Sultana**
- GitHub: [https://github.com/MahbubaSultanaEty](https://github.com/yourusername)
- LinkedIn: [https://www.linkedin.com/in/mahbuba-sultana09/](https://linkedin.com/in/yourprofile)

---

> Built with ❤️ as part of an assignment project. Design theme: Ivory & Crimson.