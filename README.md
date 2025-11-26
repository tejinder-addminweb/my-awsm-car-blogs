# Modern Hugo Blog - No Theme Required!

A complete, self-contained Hugo static site with beautiful modern design - no external theme dependencies!

## â¨ Features

- ð **Dark Mode** - Automatic theme detection with manual toggle
- ð± **Responsive Design** - Perfect on all devices
- ð **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- â¡ **Blazing Fast** - Minimal JavaScript, optimized CSS
- ð **Reading Stats** - Automatic reading time and word count
- ð **Table of Contents** - Auto-generated for long articles
- ð **Code Highlighting** - Syntax highlighting with copy buttons
- ð **Social Sharing** - Easy sharing to social media
- ð¡ **RSS Feed** - Subscribe to get updates
- ð¨ **Beautiful UI** - Clean, modern design

## ð Getting Started

### Prerequisites

Make sure you have Hugo installed (Extended version recommended). Download from [gohugo.io](https://gohugo.io/getting-started/installing/).

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hugo-template
   ```

2. **Run the development server**
   ```bash
   hugo server
   ```

   Your site will be available at `http://localhost:1313`

3. **Build for production**
   ```bash
   hugo
   ```

   The generated files will be in the `public/` directory.

## ð Project Structure

```
.
âââ config.toml          # Hugo configuration
âââ content/             # Content files (Markdown)
â   âââ _index.md       # Homepage content
â   âââ about.md        # About page
â   âââ archives.md     # Archives page
â   âââ posts/          # Blog posts
âââ layouts/            # HTML templates
â   âââ _default/       # Default page templates
â   âââ partials/       # Reusable components
âââ static/             # Static assets
â   âââ css/            # Stylesheets
â   âââ js/             # JavaScript files
âââ public/             # Generated site (after build)
```

## âï¸ Creating Content

### Create a New Post

```bash
hugo new posts/my-new-post.md
```

This will create a new post in the `content/posts/` directory with proper front matter.

### Post Front Matter

Use these fields for better SEO and features:

```yaml
---
title: "Your Post Title"
date: 2024-01-01T10:00:00Z
draft: false
description: "A brief description for SEO"
tags: ["tag1", "tag2"]
categories: ["Category"]
author: "Author Name"
showToc: true
showShareButtons: true
---
```

## ð¨ Customization

### Site Configuration

Edit `config.toml` to customize:

- Site title, description, and author
- Base URL
- Menu items
- Theme parameters
- Social media links

### Theme Parameters

```toml
[params]
  # Feature toggles
  showToc = true              # Table of contents
  showReadingTime = true      # Reading time
  showWordCount = true        # Word count
  showBreadcrumbs = true      # Breadcrumb navigation
  disableThemeToggle = false  # Disable dark mode toggle
  disableScrollToTop = false  # Disable scroll to top button
  ShowCodeCopyButtons = true  # Code copy buttons
  
  # Theme
  themeVariant = "auto"       # auto, light, dark
```

### Social Links

Add your social media links in `config.toml`:

```toml
[params.socialIcons]
  email = "mailto:your@email.com"
  github = "https://github.com/yourusername"
  twitter = "https://twitter.com/yourusername"
  linkedin = "https://linkedin.com/in/yourusername"
```

## ð¯ SEO Features

This site includes:

- â Open Graph tags for social media
- â Twitter Cards
- â Structured data (JSON-LD)
- â Meta descriptions
- â Canonical URLs
- â Sitemap generation
- â RSS feed

## ð¢ Deployment

### GitHub Pages

1. Build your site: `hugo`
2. Deploy the `public/` folder to GitHub Pages

### Netlify

1. Connect your repository to Netlify
2. Build command: `hugo`
3. Publish directory: `public`

### Vercel

1. Connect your repository to Vercel
2. Build command: `hugo`
3. Output directory: `public`

## ð¡ Tips

### Writing Content

- Use Markdown for all content
- Add front matter to every page
- Use tags and categories for organization
- Include descriptions for SEO

### Performance

- Images are lazy-loaded by default
- CSS is optimized and minified
- JavaScript is minimal and efficient
- Fast page loads even on slow connections

### Development

- Watch for changes: `hugo server --watch`
- Build drafts: `hugo server -D`
- Check future dates: `hugo server --buildFuture`

## ð§ Troubleshooting

### Theme not loading?

Make sure to run `hugo` without any theme in `config.toml`.

### Styles not appearing?

Check that your CSS files are in the `static/css/` directory.

### JavaScript not working?

Ensure JavaScript files are in `static/js/` and referenced correctly.

## ð Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Static Site Generators](https://www.staticgen.com/)

## ð License

This is a template project. Modify it as needed for your use.

## ð Credits

Built with:
- [Hugo](https://gohugo.io/) - Static site generator
- Custom CSS with modern design patterns
- Minimal JavaScript for optimal performance

---

**Ready to start blogging? Run `hugo server` and begin!** ð
