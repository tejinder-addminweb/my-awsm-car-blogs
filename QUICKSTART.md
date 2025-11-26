# Quick Start Guide

Get your Hugo site up and running in minutes!

## â¡ Quick Start

### 1. Install Hugo

Download Hugo from [gohugo.io](https://gohugo.io/getting-started/installing/)

**Recommended**: Extended version (for SCSS support)

### 2. Clone and Navigate

```bash
# If cloning from repository
git clone <repository-url>
cd hugo-template

# Or if you're already here
cd hugo-template
```

### 3. Start the Server

```bash
hugo server
```

Your site is now running at: **http://localhost:1313**

## ð Create Your First Post

```bash
hugo new posts/my-first-post.md
```

Then edit `content/posts/my-first-post.md` with your content.

## ð¨ Customize Your Site

### Basic Settings

Edit `config.toml`:

```toml
title = 'Your Site Name'
baseURL = 'https://yoursite.com/'
description = 'Your site description'
author = 'Your Name'
```

### Social Links

In `config.toml`, update the social icons:

```toml
[params.socialIcons]
  email = "mailto:your@email.com"
  github = "https://github.com/yourusername"
  twitter = "https://twitter.com/yourusername"
  linkedin = "https://linkedin.com/in/yourusername"
```

### Homepage Message

Edit the welcome message in `config.toml`:

```toml
[params.homeInfoParams]
  Title = "Hi there ð"
  Content = "Welcome to my blog! I write about..."
```

## ð Project Structure Explained

```
content/posts/     # Your blog posts (Markdown files)
content/about.md   # About page
static/css/        # Stylesheet (don't edit unless customizing)
static/js/         # JavaScript (don't edit unless customizing)
layouts/           # Templates (don't edit unless advanced customization)
config.toml        # Site configuration â EDIT THIS
```

## âï¸ Writing Posts

### Post Format

```markdown
---
title: "My Post Title"
date: 2024-01-01T10:00:00Z
draft: false
description: "Post description for SEO"
tags: ["tag1", "tag2"]
showToc: true
---

Your content here...
```

### Markdown Tips

```markdown
## Headers
**Bold** and *italic* text
- Bullet lists
1. Numbered lists

`inline code`

```language
code blocks
```

> Blockquotes

[Links](URL)
![Images](image.jpg)
```

## ð Build for Production

```bash
hugo
```

This creates the `public/` folder with your static site.

## ð Deploy

### GitHub Pages
```bash
git checkout -b gh-pages
hugo
# Upload public/ folder to GitHub Pages
```

### Netlify
1. Connect your repository
2. Build command: `hugo`
3. Publish directory: `public`

### Vercel
1. Connect your repository
2. Build command: `hugo`
3. Output directory: `public`

## ð¨ Dark Mode

Click the theme toggle button (bottom right) to switch between light and dark modes. Your preference is saved automatically.

## ð§ Common Commands

```bash
hugo server              # Start dev server
hugo server -D           # Include draft posts
hugo new posts/post.md   # Create new post
hugo new about.md        # Create new page
hugo                     # Build static site
hugo --minify            # Build with minified output
```

## â Troubleshooting

### Site looks broken?
- Make sure you're running Hugo Extended
- Check that all files are in correct folders
- Clear browser cache

### Styles not loading?
- Verify `static/css/main.css` exists
- Check browser console for errors
- Try hard refresh (Ctrl+F5)

### Images not showing?
- Place images in `static/` folder
- Reference as `/images/image.jpg`
- Use Markdown: `![Alt text](/images/image.jpg)`

## ð Next Steps

1. â Customize `config.toml` with your info
2. â Write your first post
3. â Update the About page
4. â Add your social links
5. â Build and deploy!

## ð¡ Tips

- Use descriptive post titles
- Add tags and categories for organization
- Write good descriptions for SEO
- Preview with `hugo server` before publishing
- Keep drafts with `draft: true` until ready

## ð You're Ready!

Start writing and enjoy your beautiful Hugo site!

For more details, see:
- [README.md](README.md) - Full documentation
- [FEATURES.md](FEATURES.md) - Feature list
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical details

