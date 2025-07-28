# SecureSight Dashboard

A modern surveillance dashboard built with Next.js, Prisma, and Tailwind CSS. It displays camera feeds, incident data, and status information in a clean, responsive UI designed for security monitoring.

--- 

## Deployment Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/coding-enthusiastic/secure-sight

cd secure-sight
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

+ If you want to store the data in memory:

```env
DATABASE_URL="file:db/dev.db?mode=memory&cache=shared"
```

Run migrations and seed data:

```bash
# If you want to store the data in storage
npm run prisma-migrate

# If you want to store it in memory
npm run prisma-push
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

##  Tech Decisions

+ Next.js (App Router)
+ Prisma + SQLite
+ TypeScript
+ Tailwind CSS
+ Lucide Icons


##  If I Had More Time…

* Make it responsive with mobile first approach
* Add authentication 
* Dashboard analytics
* Alert system 
* Deploy on Vercel 
* Add tests

--- 

## Extra Notes

- This project isn't finished yet. I haven't connected the DB to the frontend since time was very short. The project currently only has placeholders and duplicates the given UI for the assessment.

- I started learning Next.js and Prisma after getting the project. So I had to spend 3 days to learn the basics of them and spend 2 days to build it as it is now.

- Faced some challenges and spent more time on it to rectify the mistakes

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
