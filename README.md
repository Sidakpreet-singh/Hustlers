# Hustlers

SkyMart is a responsive React storefront with product browsing, search, category and price filters, sorting, product details, and a shopping cart.

## Stack

- React 19 and React Router
- Vite
- Tailwind CSS 4
- DummyJSON Products API

## Run locally

```sh
npm ci
npm run dev
```

## Deploy to GitHub Pages

The included GitHub Actions workflow builds and deploys the site whenever code is pushed to `main`. It also publishes a `404.html` fallback so direct links to client-side routes continue to work.

1. In the repository, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push a commit to `main`, or run **Deploy to GitHub Pages** from the Actions tab.

The build uses `/Hustlers/` as its base path on GitHub Pages and `/` for local development and root-domain hosting. React Router reads the same base path automatically.

## Commands

```sh
npm run dev      # Start the local development server
npm run build    # Create the production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```
