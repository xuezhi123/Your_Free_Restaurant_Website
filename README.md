# Restaurant Website Template

A CMS-driven restaurant website. Edit all content, reorder sections, or hide them — entirely in Sanity Studio. No code changes needed to run a fully functional site.

Everything runs on free tiers: Vercel hosting + Sanity CMS + your own domain.

---

## What to Expect

This is a complete, ready-to-go website for a restaurant, café, or food business. You don't need to be a developer — once it's set up, everything is managed through a simple dashboard (Sanity Studio).

### What the site does

- Displays your **menu**, **about page**, **takeaway info**, **catering services**, **gift cards**, and a **photo gallery**
- Shows **contact details**, opening hours, and links to Facebook / Instagram / Google Maps
- Your **logo** can be uploaded directly in the dashboard
- The **navigation bar** updates automatically as you reorder sections

### What you can do without touching code

- Change every text on the site
- Upload and replace images
- Reorder sections (drag with numbers)
- Hide sections you don't need (set Order to 0)
- Adjust logo spacing and section padding visually

### Demo Video
https://github.com/user-attachments/assets/c2fbe92e-0f88-408e-a700-4b3564e0e4c5


---

## Getting Started

### 1. Clone & Install

```bash
npm install
```

### 2. Sanity Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage) → Create a free project
2. Copy the **Project ID** (top-left, e.g. `a1b2c3d4`)

### 3. Configure

Copy the example environment file and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_REVALIDATE_SECRET=any-secret-you-choose
```

### 4. CORS (Sanity Dashboard)

In your Sanity project → **API** → **CORS origins** → Add:

- `http://localhost:3000` (for local development) — enable credentials

You will add your Vercel domain later after deploying.

### 5. Run Locally

```bash
npm run dev
```

- Website: [localhost:3000](http://localhost:3000)
- CMS (content editor): [localhost:3000/studio](http://localhost:3000/studio)

The page will show a placeholder until you create content. Head to Studio and start adding documents.

## Content Management

All content is managed through the Studio. Create documents in any order:

| Document | ID (must match) | What it controls |
|---|---|---|
| **Site Settings** | `siteSettings` | Restaurant name — the only required document to get the site working |
| **Info** | `info` | Phone, email, address, Google Maps link, logo upload, social links, opening hours, contact page title & nav label |
| **Padding Settings** | `paddingSettings` | Global spacing: logo padding and spacing between sections |
| **Menu Text** | `menuText` | Menu section: title, nav label, text |
| **About** | `about` | About section: title, subtitle, text, two images (landscape + portrait) |
| **Takeaway** | `takeaway` | Takeaway section: title, subtitle, text, image |
| **Catering** | `catering` | Catering section: title, subtitle, text, image |
| **Gift Card** | `giftCard` | Gift card section: title, subtitle, text, image |
| **Gallery** | `gallery` | Photo gallery: title, subtitle, list of images with captions |

> The document IDs above are **required** — the site queries documents by ID, not by title. Do not change them.

### Reordering & Hiding Sections

Each document has an **Order** field:

- Set to `0` → the section is hidden from the page and navigation
- Any positive number → lower numbers appear first

The navigation bar automatically mirrors the page order. Contact / Practical Info is always last.

### Opening Hours Format

In the Info document, the **Opening Hours** field expects each line in the format:

```
Ma 11:00 - 22:00
Di 11:00 - 22:00
```

Separate the day and time with a space. The site automatically aligns days and times in two columns.

## Deploy to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import → select your repo
3. Add the same three environment variables from `.env.local`
4. Deploy

After deploying, add your production URL to Sanity CORS so you can use the Studio on the live site:

1. Sanity dashboard → **API** → **CORS origins** → Add
2. `https://your-app.vercel.app` — enable credentials

Your Studio is now at `https://your-app.vercel.app/studio`. You can edit all content from there — no need to run the project locally.

---

## Limitations (Free Tiers)

Both Vercel and Sanity offer generous free plans. Here is what you get — and what happens if you outgrow them.

### Vercel (Hobby Plan)

| Resource | Free Limit |
|---|---|
| Deployments | 100 per day |
| Bandwidth | 100 GB / month |
| Edge Requests | 1,000,000 / month |
| Serverless Functions | 360 GB-hours, 1M invocations / month |
| Build Memory | 8 GB |
| Build Time | Limited by vCPU (4 cores), no fixed minute cap |
| Projects | Up to 200 |

> If you exceed limits, the service pauses until the next 30-day window. A typical restaurant site with moderate traffic will never hit these caps.

### Sanity (Free Plan)

| Resource | Free Limit |
|---|---|
| Documents | 10,000 |
| API CDN Requests | 1,000,000 / month |
| API Requests | 250,000 / month |
| Asset Storage | 100 GB |
| Bandwidth | 100 GB / month |
| Users (CMS editors) | Up to 20 |
| Real-time connections | 1,000 per dataset |

> A restaurant website typically uses < 100 documents and well under the request limits, even with frequent content updates.

### When to Upgrade

If your site scales beyond a single location or you add e-commerce, the Vercel Pro plan ($20/month) and Sanity Growth plan ($15/user/month) are the natural next steps.

---

## Tech Stack

- [Next.js](https://nextjs.org) — React framework
- [Sanity CMS](https://www.sanity.io) — headless content platform
- [Tailwind CSS](https://tailwindcss.com) — utility-first CSS
- [Vercel](https://vercel.com) — hosting and deployment
