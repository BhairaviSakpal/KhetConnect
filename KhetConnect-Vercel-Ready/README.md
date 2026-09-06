# KhetConnect — Vercel Ready

This is the single-platform Vercel version of KhetConnect. It is intentionally a frontend showcase/prototype: all demo data and user changes are stored in browser localStorage, so the complete buyer/farmer/driver/admin workflow works without Render, Neon, MySQL, Spring Boot, or a separate backend deployment.

## Deploy on Vercel

1. Extract this folder.
2. Push its contents to a GitHub repository.
3. In Vercel, choose **Add New → Project** and import the GitHub repository.
4. Vercel should detect Vite automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

No environment variables are required.

## Local run

```bash
npm install
npm run dev
```

## Demo admin

Email: `admin@khetconnect.demo`
Password: `admin123`

## Demo architecture

React + Vite + CSS + browser localStorage. This keeps the free Vercel deployment simple and avoids ephemeral server filesystem problems. Crop photos are kept as browser data URLs for the current prototype session; certificate status is represented as demo metadata and admin verification state.

## Important limitation

This version is designed for a college/project showcase. It is not a production multi-user backend. Different users/devices do not share one database. For production, move the state and files to a persistent database/object-storage service.
