# Pro Gym Gym QR Guide (unofficial demo)

**QR machine-instruction app skinned for a Pro Gym club demo.** Members scan a QR on a machine → bilingual (EN/FR) how-to guide. Staff manage machines, download QRs, print floor sheets, and review ROI insights.

> **Unofficial demo mockup for pitching only.** Not affiliated with Pro Gym or any parent company. Does **not** use official logo image assets — text wordmark only. Brand colors (`#2E7D32` / `#121212`) are approximate pitch tokens.

Seeded demo gym: **Pro Gym Saint-Léonard**. `/` is the **demo-ready member product UI** — not a marketing landing page.

Sibling (generic GymQR Guide): [gym-machine-qr-guide](https://github.com/alexbalut/gym-machine-qr-guide)

## Disclaimer

This repository is an **unofficial product demo**. Pro Gym® and related marks belong to their respective owners. Do not represent this app as an official Pro Gym product. No official logos are bundled.

## Quick start

```bash
cd pro-gym-montreal-gym-qr-guide
cp .env.example .env
npm install
npx prisma db push
npm run seed
npm run dev
```

Or one-shot setup:

```bash
npm install && npm run setup && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — member gym home for **Pro Gym Saint-Léonard** (Machines / Workout / Progress / Scan).

## Demo credentials

| Field    | Value                    |
|----------|--------------------------|
| Email    | `admin@pro-gym-montreal.demo`        |
| Password | `demo1234`             |
| Gym      | Pro Gym Saint-Léonard                |
| Slug     | `pro-gym-montreal`           |

Seed creates **10 bilingual machines**, sample view counts, and a few open/resolved issues.

## Branding notes

- Surfaces use secondary `#121212` with primary accent **`#2E7D32`**
- Text wordmark **Pro Gym** — no trademarked logo files
- Tagline: “High-traffic training floor”

## Key routes

| Route | Description |
|-------|-------------|
| `/` | Gym member home |
| `/scan` | Camera QR scan |
| `/q/[token]` | Machine guide |
| `/m/pro-gym-montreal/[machineSlug]` | Friendly slug URL |
| `/admin/login` | Staff login |
| `/admin/insights` | Owner ROI dashboard |

## Caveats

- Auth is simple credential + JWT cookie — fine for demo; harden for production.
- SQLite at `prisma/dev.db` — don’t commit it.
- Member workout/progress is browser localStorage only (`pro-gym-montreal-workout:v1:<slug>`).
- Unofficial branding — do not ship as an official Pro Gym app.

## Photo credits

Demo photos under `public/machines/` are from Unsplash — see [CREDITS.md](./CREDITS.md). Not official Pro Gym assets.

## License / affiliation

This repository is an **unofficial product demo mockup** for pitch purposes. Pro Gym® and related marks belong to their respective owners. Do not represent this app as an official Pro Gym product.

## Repo

https://github.com/alexbalut/pro-gym-montreal-gym-qr-guide
