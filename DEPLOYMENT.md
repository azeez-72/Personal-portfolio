# GitHub Pages Deployment

This project is configured to deploy to GitHub Pages via GitHub Actions.

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**

### 2. Push to Trigger Deployment

Push to the `main` branch to trigger the deployment workflow. The site will be available at:

- **Project site** (repo named `personal-portfolio`): `https://YOUR_USERNAME.github.io/personal-portfolio`
- **User/Org site** (repo named `YOUR_USERNAME.github.io`): `https://YOUR_USERNAME.github.io`

### 3. Local Test (Optional)

To test the static export locally:

```bash
GITHUB_PAGES=true REPO_IS_GH_PAGES=false BASE_PATH=/Personal-portfolio npm run build
npx serve out
```

Then visit `http://localhost:3000/Personal-portfolio`

For a `username.github.io` repo:

```bash
GITHUB_PAGES=true REPO_IS_GH_PAGES=true npm run build
npx serve out
```

## Notes

- Vercel deployment still works as before; GitHub Pages config only applies when `GITHUB_PAGES=true` is set during build.
- PWA is disabled for GitHub Pages builds to ensure compatibility with static export.
