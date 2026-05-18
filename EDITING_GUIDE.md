# ✏️ How to edit your portfolio

Almost everything you'll want to change lives in **one file**:

```
src/data/portfolio.ts
```

Open it and you'll see clearly labelled sections.

## 1. Personal info
Update your name, roles (typing animation), tagline, email, location and social links inside the `personal` object.

## 2. Your photo
Replace `src/assets/profile.jpg` with your own photo (keep the same filename) — that's it.

## 3. About paragraphs & stats
Edit the `about` object — add/remove paragraphs in the array.

## 4. Skills (with icons)
Each skill is `{ name, icon, color }`. Browse icons at:
https://react-icons.github.io/react-icons/icons/si/

Import the icon at the top of `portfolio.ts`, then add it to any category's `skills` array. To add a new category, just push a new object to `skillCategories`.

## 5. Currently Learning
Add/remove strings in the `currentlyLearning` array.

## 6. Projects
1. Drop your project image into `src/assets/` (e.g. `my-project.jpg`).
2. Import it at the top of `portfolio.ts`:
   ```ts
   import myProject from "@/assets/my-project.jpg";
   ```
3. Add an entry to the `projects` array with `image: myProject`.

Categories: `"Web" | "Data Science" | "AI/ML"` — used by the filter buttons.

## 7. Resume / timeline
Edit `timeline` — set `type: "work"` or `type: "education"` for the icon.

## 8. Resume PDF
Place your resume as `public/resume.pdf` — the download buttons already link to it.

---

## 🚀 Deploy to GitHub Pages

1. Create a repo on GitHub and push this project.
2. Install gh-pages:
   ```bash
   npm i -D gh-pages
   ```
3. In `package.json` add:
   ```json
   "scripts": {
     "deploy": "VITE_BASE=/<your-repo-name>/ vite build && gh-pages -d dist"
   }
   ```
   Replace `<your-repo-name>` with your repository name.
4. Run `npm run deploy`.
5. In GitHub → Settings → Pages, set source to `gh-pages` branch.

Your site will be live at `https://<username>.github.io/<your-repo-name>/`.