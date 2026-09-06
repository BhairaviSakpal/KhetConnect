# KhetConnect — Deploy on Vercel (Beginner Friendly)

## Option 1: Deploy with GitHub (recommended)

### 1. Install Git
If Git is already installed, skip this step.

### 2. Create a GitHub repository
Create a new repository, for example:

`khetconnect`

### 3. Put this project's files into the repository
The `package.json`, `src`, `public`, `index.html`, `vite.config.js`, and `vercel.json` files must be at the repository root.

### 4. Test locally (optional)
Open a terminal in the project folder:

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite.

### 5. Deploy
Go to Vercel and import the GitHub repository.

Use:

- Framework: Vite (auto-detected)
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Environment variables: none

Click **Deploy**.

### 6. Open your KhetConnect URL
Vercel will give you a URL similar to:

`https://khetconnect-your-name.vercel.app`

## Admin login

Email: `admin@khetconnect.demo`
Password: `admin123`

## Quick demonstration

1. Open Login.
2. Try Buyer quick access.
3. Open Marketplace.
4. Open a farmer/listing and start an order.
5. Go to Orders and open the seeded orders.
6. Switch role using logout/login and demonstrate Farmer and Driver workflows.
7. Open Admin and show charts, escrow, deliveries, reviews, disputes and certificate verification.
8. Use EN / हिंदी to demonstrate the multilingual interface.

## Reset demo data

The application stores demo changes in browser localStorage. Use the application's reset/demo control where available, or clear the site's local storage from browser developer tools.

## Why this version has no backend deployment

Vercel can deploy Express/Node applications, but a traditional server filesystem is not durable on serverless infrastructure. This showcase version therefore keeps the project entirely inside one Vercel frontend deployment and uses localStorage for demo persistence. That is ideal for a presentation/prototype, but not a production multi-user system.
