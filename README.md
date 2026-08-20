# Ali Tahvildari - Portfolio

Personal portfolio for Ali Tahvildari, built with Next.js and exported as a static site for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the `out` directory whenever `main` is updated.

1. Push this repository to GitHub.
2. In the repository, open **Settings -> Pages**.
3. Set **Source** to **GitHub Actions**.

The Next configuration automatically handles the base path for a project repository and leaves it empty for a `username.github.io` user site.
