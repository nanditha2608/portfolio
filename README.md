# Nanditha Sai Pasumarthy — Portfolio

A dynamic, interactive single-page portfolio website. Built with plain HTML, CSS and
vanilla JavaScript — no build step, no dependencies. Ready to deploy on GitHub Pages.

## What's inside

- `index.html` — page structure and all content
- `assets/css/style.css` — styling, dark/light themes, responsive layout
- `assets/js/main.js` — interactivity (see below)
- `assets/Nanditha_Sai_Pasumarthy_Resume.pdf` — downloadable resume

## Interactive features

- Dark / light theme toggle (preference saved in the browser)
- Sticky navbar with scroll-spy section highlighting
- Typewriter animation in the hero
- Reveal-on-scroll animations for every section
- Animated stat counters
- Project category filters (All / Construction / Design)
- Skill category tabs
- Copy-email button, back-to-top button, mobile hamburger menu

## Deploy on GitHub Pages

**Option A — upload via the GitHub website**
1. Create a new repository on GitHub (e.g. `nanditha-portfolio`). Do not initialize it with a README.
2. Unzip this package and upload **all files** (keeping the folder structure) via
   *Add file → Upload files*.
3. Commit the changes.
4. Go to *Settings → Pages*, under **Source** choose *Deploy from a branch*,
   select the `main` branch and `/(root)`, then **Save**.
5. After a minute or two your site is live at
   `https://<your-username>.github.io/nanditha-portfolio/`.

**Option B — push with git**
```bash
unzip nanditha-portfolio-code.zip -d nanditha-portfolio
cd nanditha-portfolio
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/nanditha-portfolio.git
git push -u origin main
```
Then enable Pages as in step 4 above.

**Tip:** name the repository `<your-username>.github.io` and the site will be served
directly at `https://<your-username>.github.io/`.

## Customize

- Edit text directly in `index.html`.
- Change colors in `assets/css/style.css` (CSS variables at the top under `:root`).
- Replace `assets/Nanditha_Sai_Pasumarthy_Resume.pdf` with a newer resume — keep the
  same filename and the download buttons keep working.
