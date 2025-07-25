# SecureSight Dashboard

A modern surveillance dashboard built with Next.js, Prisma, and Tailwind CSS. It displays camera feeds, incident data, and status information in a clean, responsive UI designed for security monitoring.

--- 

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

---

## ⚙️ Tech Decisions

+ Next.js (App Router)
+ Prisma + SQLite
+ TypeScript
+ Tailwind CSS
+ Lucide Icons


##  If I Had More Time…

* Add authentication 
* Dashboard analytics
* Alert system 
* Deploy on Vercel 
* Add tests

---

## Project Structure

```
src/
├─ app/               # App Router pages
│  ├─ api/            # API endpoints
│  ├─ components/     # UI components
│  └─ prisma/         # Prisma schema and seed
├─ public/            # Static assets 
```
