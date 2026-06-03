# GO.LONG — Homepage Concepts

Three homepage directions for the GO.LONG / Mount Hermon Collection, with a switcher to flip between them.

- **Concept 01 — Editorial** (Swiss-brutalist lookbook)
- **Concept 02 — Orbital Terminal** (HUD / mission-control)
- **Concept 03 — Kinetic Drop** (streetwear drop)

## File structure
```
index.html              ← entry point (the switcher)
designs/
  01-editorial.html
  02-terminal.html
  03-drop.html
assets/
  logo-wordmark.svg
  opt/                  ← optimized images (.jpg)
.nojekyll
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `golong-concepts`).
2. Upload **everything inside this folder** to the repo root
   (so `index.html` sits at the top level — not inside another folder).
3. Repo → **Settings** → **Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Branch: **main**, folder: **/ (root)**. Click **Save**.
6. Wait ~1 minute. Your permanent link appears at the top of the Pages screen:
   `https://<your-username>.github.io/golong-concepts/`

That URL is permanent and public — share it with the world.

> Tip: keep `.nojekyll` in the repo. It tells GitHub Pages to serve the files as-is.
