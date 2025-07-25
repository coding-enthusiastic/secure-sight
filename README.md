# SecureSight Dashboard

A modern surveillance dashboard built with Next.js, Prisma, and Tailwind CSS. It displays camera feeds, incident data, and status information in a clean, responsive UI designed for security monitoring.

## Deployment Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/secure-sight-dashboard.git

cd secure-sight-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Database

Create a `.env` file in the root and define the database URL:

```env
DATABASE_URL="file:./db/dev.db"
```

Run migrations and seed data:

```bash
npm run prisma-migrate
```

### 4. Run the Development Server

```bash
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```


## ⚙️ Tech Decisions

| Tech                     | Why it was chosen                                       |
| ------------------------ | ------------------------------------------------------- |
| **Next.js (App Router)** | Modern routing, server components, built-in API support |
| **Prisma**               | Type-safe database access, great dev experience         |
| **SQLite**               | Lightweight DB for local development & prototyping      |
| **Tailwind CSS**         | Rapid and responsive UI styling                         |
| **Lucide Icons**         | Minimal, modern icon library ideal for dashboards       |
| **TypeScript**           | Type safety and better developer tooling                |

---

## 🧠 If I Had More Time…

* ✅ Add authentication (e.g., admin login, session-based)
* 📦 Migrate from SQLite to PostgreSQL or MySQL for scalability
* 🖼 Live camera feed using WebSockets or HLS streaming
* 🧠 AI-based incident classification (e.g., face detection, object tracking)
* 📊 Dashboard analytics (incident frequency, time-based trends)
* 🔔 Real-time alert system (push/email notifications)
* 🌐 Deploy on Vercel or Railway with production database
* 🧪 Add tests (unit, integration, e2e with Playwright or Cypress)
* 🌍 Add i18n (internationalization) support for global use

---

## 📁 Project Structure

```
src/
├─ app/               # App Router pages
│  ├─ api/            # API endpoints
│  ├─ components/     # UI components
│  └─ prisma/         # Prisma schema and seed
├─ db/                # SQLite dev database
├─ public/            # Static assets (e.g. thumbnails)
├─ styles/            # Global CSS (if any)
prisma/
├─ schema.prisma
├─ seed.ts
```

---

## 💬 Contact

For issues, ideas, or contributions — feel free to open an issue or pull request.

```

---

Let me know if you want:
- A badge-rich version with shields.io
- To rewrite for PostgreSQL deployment (like Railway)
- Or an editable `.md` file to download
```
