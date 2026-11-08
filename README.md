# Abhijit Kapure — Visual Resume

A public-safe visual resume for an AI / Data Engineer internship, with a grounded ambassador that answers only from the resume and public links.

## Live

- Site: https://visual-resume-seven.vercel.app/
- Resume: https://visual-resume-seven.vercel.app/resume.pdf
- GitHub: https://github.com/AbhijitK20/visual-resume

## What is here

- `index.html` — the visual resume
- `styles.css` — the editorial UI
- `app.js` — the grounded ambassador
- `resume.html` / `resume.pdf` — public-safe downloadable resume
- `assets` are CSS-only; no private documents are published

## Terminal workflow

```bash
git clone https://github.com/AbhijitK20/visual-resume.git
cd visual-resume
python3 -m http.server 3000
vercel link
vercel deploy
git add . && git commit -m "Update ship log"
git push
```
