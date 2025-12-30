# AI2Fin Documentation

AI2Fin documentation built with Mintlify - AI-powered financial management platform guides and tutorials.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install Mintlify CLI
npm install -g @mintlify/cli

# Start development server
mintlify dev

# Build for production
mintlify build
```

## 📁 Project Structure

```
ai2fin-docs/
├── docs/                    # Documentation content
│   ├── introduction.mdx
│   ├── quick-start.mdx
│   ├── platform-overview.mdx
│   ├── features/
│   ├── data-sources/
│   ├── guides/
│   ├── advanced/
│   └── coming-soon/
├── public/                  # Static assets
│   ├── logo/
│   ├── favicon.png
│   └── og-image.png
├── mintlify.json           # Mintlify configuration
├── package.json
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## 🛠️ Development

### Local Development

```bash
# Start development server
mintlify dev

# Build documentation
mintlify build

# Preview build
mintlify preview
```

### Content Guidelines

- Use MDX format for rich content
- Include interactive elements (cards, accordions, steps)
- Optimize for SEO with proper meta tags
- Use descriptive alt text for images
- Include internal links for better navigation

## 🌐 Deployment

### Cloudflare Pages

The documentation is automatically deployed to Cloudflare Pages when changes are pushed to the `main` branch.

**Live URL**: https://ai2fin.com/docs

### Manual Deployment

```bash
# Build and deploy
npm run build
npm run deploy
```

## 📊 SEO & Analytics

- **Google Analytics**: GA4 tracking enabled
- **Search Console**: Optimized for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Meta Tags**: Comprehensive SEO optimization

## 🔧 Configuration

### Environment Variables

```bash
# Required for deployment
MINTLIFY_API_KEY=your_mintlify_api_key
CLOUDFLARE_API_TOKEN=your_cloudflare_token
CLOUDFLARE_ACCOUNT_ID=your_account_id

# Optional
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Custom Domain

The documentation is served from `ai2fin.com/docs` using Cloudflare's subdirectory hosting for maximum SEO benefits.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `mintlify dev`
5. Submit a pull request

## 🐛 Issues & Support

- **Documentation Issues**: Create an issue in this repository
- **Platform Support**: Contact support@ai2fin.com
- **Feature Requests**: Use GitHub discussions

## 📄 License

This documentation is part of the AI2Fin platform. All rights reserved.

---

