# Terminal workflow

This site was cloned, run locally, previewed, and shipped from the terminal.

```bash
git clone https://github.com/AbhijitK20/visual-resume.git
cd visual-resume
python3 -m http.server 3000
vercel link --yes --project visual-resume
vercel deploy
git add .
git commit -m "Add terminal notes"
git push
```

The public production URL is https://visual-resume-seven.vercel.app/.
