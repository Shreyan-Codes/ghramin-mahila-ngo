# Deployment Instructions — Vercel

This repository is optimized for one-click zero-config deployment on Vercel.

---

## Deploying to Vercel (Recommended)

1. Push this project code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Ghramin Mahila bilingual NGO website"
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**.

Vercel will automatically build all 44 static bilingual routes and deploy them to a global CDN edge network.

---

## Custom Domain Setup

1. In Vercel Project Dashboard, navigate to **Settings > Domains**.
2. Add your custom domain (e.g. `ghraminmahila.org.np`).
3. Update your DNS record settings with your domain registrar as instructed by Vercel.
