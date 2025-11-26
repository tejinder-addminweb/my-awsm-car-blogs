# Deployment Guide for GitHub Pages

## The Problem

When you push your Hugo source files to GitHub, GitHub Pages shows the `README.md` file instead of your built Hugo site. This happens because GitHub Pages is trying to serve the repository root.

## The Solution

GitHub Pages needs to serve the **built static files** (from the `public/` folder), not the source files.

## Deployment Options

### Option 1: Automatic Deployment (Recommended) â

I've set up GitHub Actions to automatically build and deploy your site!

#### Steps:

1. **Commit and push** your code to GitHub:
   ```bash
   git add .
   git commit -m "Setup Hugo site"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** â **Pages**
   - Under "Source", select **GitHub Actions**
   - Save

3. **Wait for deployment**:
   - Go to the **Actions** tab in your repository
   - You'll see a workflow running
   - Wait for it to complete (usually 1-2 minutes)
   - Your site will be live at: `https://tejinder-addminweb.github.io/blog-template/`

**That's it!** Every time you push to `main`, the site will automatically rebuild and deploy.

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Build the site**:
   ```bash
   hugo
   ```

2. **Create a new branch for gh-pages**:
   ```bash
   git checkout -b gh-pages
   ```

3. **Remove everything except public folder**:
   ```bash
   # Copy public folder contents to root
   cp -r public/* .
   # Remove public folder
   rm -rf public
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Deploy site"
   git push origin gh-pages -f
   ```

5. **Configure GitHub Pages**:
   - Go to Settings â Pages
   - Select `gh-pages` branch
   - Root directory
   - Save

â ï¸ **Warning**: Manual deployment is not recommended as it overwrites your source files.

## Making Changes

After making any changes to your site:

1. **Edit your files** (content, layouts, config, etc.)
2. **Test locally**:
   ```bash
   hugo server
   ```
3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
4. **Wait for GitHub Actions** to automatically deploy

## Configuration

### For Local Development

To test with local server:
```toml
baseURL = '/'  # Use this for local
```

### For GitHub Pages

For deployment, use your GitHub Pages URL:
```toml
baseURL = 'https://tejinder-addminweb.github.io/blog-template/'
```

â ï¸ **Important**: The `baseURL` in `config.toml` must match your GitHub Pages URL!

## Troubleshooting

### Site shows README.md instead of Hugo site?
- You're deploying source files instead of built files
- Use GitHub Actions (Option 1) for automatic deployment
- Or manually deploy the `public/` folder

### Styles not loading?
- Check that `baseURL` in `config.toml` is correct
- Wait for GitHub Actions to finish building
- Clear browser cache

### 404 errors?
- Ensure `baseURL` includes the full path: `/blog-template/`
- Check GitHub Pages settings
- Verify the correct branch is being deployed

### Changes not appearing?
- Check GitHub Actions workflow status
- Wait 1-2 minutes for deployment
- Clear browser cache
- Try incognito/private browsing mode

## Current Setup

â GitHub Actions workflow created (`.github/workflows/hugo.yml`)  
â Config updated with correct `baseURL`  
â Automatic deployment on push to `main` branch  

## Quick Start

```bash
# Make your changes to content, config, etc.
hugo server  # Test locally

# When ready to deploy
git add .
git commit -m "Update site"
git push origin main

# Wait for GitHub Actions to deploy (check Actions tab)
# Site will be live in 1-2 minutes
```

---

**Your site URL**: https://tejinder-addminweb.github.io/blog-template/

