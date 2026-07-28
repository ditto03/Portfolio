# Ditto D — Portfolio Site

A small static site: one homepage plus a detail page per project ("case file").

## Files

```
index.html        → homepage
case-01.html       → Splunk SIEM project detail page
case-02.html       → Sign-language ML project detail page
css/style.css       → all styling
js/data.js          → EDIT THIS to update your info (skills, projects, certs, docs, education, contact)
js/render-index.js  → renders homepage sections from data.js (no need to touch)
js/common.js        → renders nav/footer contact info + scroll animations (no need to touch)
```

## Editing your content

Open `js/data.js`. Everything on the homepage — your skills, projects, certificates,
documents, education, and contact info — is a plain JavaScript array or object in that
one file. Change the text there and every page updates automatically.

To add a **third project**:
1. Add a new entry to the `CASES` array in `js/data.js`, including a `page` field like `"case-03.html"`.
2. Duplicate `case-02.html`, rename it `case-03.html`, and rewrite the write-up inside.

## Hosting it for free (pick one)

### Option A — Netlify Drop (fastest, no account needed to preview)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. Netlify gives you a live URL immediately. Create a free account if you want to keep it permanently and get a custom subdomain.

### Option B — GitHub Pages (best if you want a lasting, professional URL)
1. Create a new GitHub repository, e.g. `ditto-portfolio`.
2. Upload all these files (keep the folder structure: `css/`, `js/`, and the `.html` files at the root).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`.
5. Save. GitHub gives you a URL like `https://<your-username>.github.io/ditto-portfolio/`.

### Option C — Vercel
1. Go to https://vercel.com/new
2. Import the folder/repo and deploy — no configuration needed for a static site like this.

## Notes
- This site has no backend — the "Download" links for your resume/certificates and the
  `resumeHref` field need real file links once you upload the PDFs somewhere (e.g. the same
  repo, Google Drive, or your hosting provider).
- Everything is plain HTML/CSS/JS — no build step, no dependencies to install.
