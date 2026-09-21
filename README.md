# Tamp Cafe & Co.

Website redesign for Tamp Cafe & Co., Cebu City. Built with React + Vite.

## Develop

```bash
npm install
npm run dev
```

`npm run build` outputs a static site to `dist/`. Routes use the History API, so the host must rewrite unknown paths to `index.html`.

## Where things live

- `src/data/` — menu, cakes, branches, buffets, reviews and external links (`LINKS` in `site.js` still needs real URLs)
- `src/pages/` — Home, Menu (Tamp + Black Sheep), Cake, Event Hall, Contact
- `src/assets/cakes/` — cake photos, matched to cakes by filename slug
- `public/images/` — hero, home, venue and branch photos
- `design-reference/` — original design file
