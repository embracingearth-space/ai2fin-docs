# AI2Fin Documentation Deployment Guide

Complete guide for deploying AI2Fin documentation to GitHub + Cloudflare Pages with subdirectory hosting.

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository

```bash
# Create new repository
gh repo create ai2fin/ai2fin-docs --public --description "AI2Fin Documentation - AI-powered financial management platform guides"

# Clone and setup
git clone https://github.com/ai2fin/ai2fin-docs.git
cd ai2fin-docs

# Copy all documentation files
# (Copy all the .mdx files, mintlify.json, etc. from our previous work)
```

### 2. Setup Cloudflare Pages

#### Option A: Connect GitHub Repository

1. **Go to Cloudflare Dashboard**
   - Navigate to Pages section
   - Click "Create a project"
   - Connect to GitHub account
   - Select `ai2fin/ai2fin-docs` repository

2. **Configure Build Settings**
   ```
   Framework preset: None
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

3. **Environment Variables**
   ```
   NODE_VERSION=18
   MINTLIFY_API_KEY=your_mintlify_api_key
   ```

#### Option B: Manual Setup

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create Pages project
wrangler pages project create ai2fin-docs
```

### 3. Configure Custom Domain

#### Subdirectory Setup (ai2fin.com/docs)

1. **Add Custom Domain**
   - In Cloudflare Pages, go to Custom domains
   - Add `docs.ai2fin.com` as custom domain
   - Enable SSL/TLS

2. **Setup Cloudflare Worker for Routing**
   ```bash
   # Create worker script
   wrangler generate ai2fin-router
   
   # Deploy worker
   wrangler deploy ai2fin-router
   ```

3. **Configure Worker Route**
   - In Cloudflare Dashboard, go to Workers & Pages
   - Select your worker
   - Add route: `ai2fin.com/docs/*`

## 🔧 Environment Variables

### GitHub Secrets

Add these secrets to your GitHub repository:

```bash
# Required for Cloudflare Pages deployment
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id

# Optional
MINTLIFY_API_KEY=your_mintlify_api_key
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Cloudflare Pages Environment Variables

```bash
# Build environment
NODE_VERSION=18
NPM_VERSION=8

# Mintlify configuration
MINTLIFY_API_KEY=your_mintlify_api_key

# Analytics
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📋 Complete Setup Checklist

### GitHub Repository Setup

- [ ] Create `ai2fin/ai2fin-docs` repository
- [ ] Add all documentation files
- [ ] Configure GitHub Actions secrets
- [ ] Enable GitHub Pages (if needed)
- [ ] Set up branch protection rules

### Cloudflare Configuration

- [ ] Create Cloudflare Pages project
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Add environment variables
- [ ] Setup custom domain (`docs.ai2fin.com`)
- [ ] Enable SSL/TLS
- [ ] Configure caching rules

### Subdirectory Routing

- [ ] Create Cloudflare Worker
- [ ] Deploy worker script
- [ ] Configure worker route (`ai2fin.com/docs/*`)
- [ ] Test routing functionality
- [ ] Setup redirects

### SEO & Analytics

- [ ] Configure Google Analytics
- [ ] Setup Google Search Console
- [ ] Submit sitemap
- [ ] Configure robots.txt
- [ ] Test meta tags
- [ ] Verify structured data

## 🛠️ Manual Deployment Commands

### Local Development

```bash
# Install dependencies
npm install

# Install Mintlify CLI
npm install -g @mintlify/cli

# Start development server
npm run dev
# or
mintlify dev

# Build for production
npm run build
# or
mintlify build

# Preview build
npm run preview
# or
mintlify preview
```

### Manual Deployment

```bash
# Build documentation
npm run build

# Deploy to Cloudflare Pages
npm run deploy
# or
mintlify deploy

# Update worker (if needed)
wrangler deploy ai2fin-router
```

## 🔍 Testing & Validation

### Local Testing

```bash
# Test build
npm run build

# Test preview
npm run preview

# Validate configuration
mintlify validate

# Lint content
mintlify lint
```

### Production Testing

```bash
# Test subdirectory routing
curl -I https://ai2fin.com/docs

# Test main app routing
curl -I https://ai2fin.com

# Test SSL certificates
openssl s_client -connect ai2fin.com:443 -servername ai2fin.com

# Test performance
lighthouse https://ai2fin.com/docs --only-categories=performance
```

## 📊 Monitoring & Analytics

### Cloudflare Analytics

- **Page Views**: Monitor documentation traffic
- **Performance**: Track Core Web Vitals
- **Security**: Monitor threats and attacks
- **Caching**: Optimize cache hit rates

### Google Analytics 4

```javascript
// Add to mintlify.json
{
  "seo": {
    "googleAnalytics": "GA_MEASUREMENT_ID"
  }
}
```

### Search Console

1. **Add Property**: `https://ai2fin.com/docs`
2. **Verify Ownership**: Use HTML file method
3. **Submit Sitemap**: `https://ai2fin.com/docs/sitemap.xml`
4. **Monitor Performance**: Track search rankings

## 🚨 Troubleshooting

### Common Issues

<AccordionGroup>
  <Accordion title="Build Failures">
    **Symptoms:**
    - GitHub Actions failing
    - Cloudflare Pages build errors
    - Missing dependencies
    
    **Solutions:**
    - Check Node.js version (18+)
    - Verify package.json scripts
    - Check environment variables
    - Review build logs
  </Accordion>
  
  <Accordion title="Routing Issues">
    **Symptoms:**
    - 404 errors on /docs/*
    - Worker not responding
    - Incorrect redirects
    
    **Solutions:**
    - Check worker script
    - Verify route configuration
    - Test worker locally
    - Check Cloudflare logs
  </Accordion>
  
  <Accordion title="SEO Problems">
    **Symptoms:**
    - Not indexed by Google
    - Missing meta tags
    - Poor search rankings
    
    **Solutions:**
    - Submit sitemap
    - Check robots.txt
    - Verify meta tags
    - Test structured data
  </Accordion>
</AccordionGroup>

### Debug Commands

```bash
# Check Cloudflare Pages status
wrangler pages project list

# Check worker status
wrangler tail ai2fin-router

# Test local build
npm run build && npm run preview

# Validate Mintlify config
mintlify validate

# Check GitHub Actions
gh run list --repo ai2fin/ai2fin-docs
```

## 🔄 CI/CD Pipeline

### Automatic Deployment

The GitHub Actions workflow automatically:

1. **On Push to Main**:
   - Builds documentation
   - Deploys to Cloudflare Pages
   - Updates worker script
   - Sends notifications

2. **On Pull Request**:
   - Builds preview
   - Deploys to preview URL
   - Runs validation tests

### Manual Triggers

```bash
# Trigger deployment
gh workflow run deploy.yml --repo ai2fin/ai2fin-docs

# Check deployment status
gh run list --repo ai2fin/ai2fin-docs
```

## 📈 Performance Optimization

### Cloudflare Settings

```yaml
# Caching
Cache Level: Standard
Browser Cache TTL: 1 month
Edge Cache TTL: 1 month

# Compression
Brotli: Enabled
Gzip: Enabled

# Minification
CSS: Enabled
HTML: Enabled
JavaScript: Enabled

# Image Optimization
Polish: Lossless
WebP: Enabled
```

### Build Optimization

```json
{
  "scripts": {
    "build": "mintlify build --minify",
    "build:analyze": "mintlify build --analyze"
  }
}
```

## 🎯 Success Metrics

### Deployment Success

- [ ] Documentation accessible at `https://ai2fin.com/docs`
- [ ] Subdirectory routing working
- [ ] SSL certificates valid
- [ ] Build process automated
- [ ] Performance scores > 90

### SEO Success

- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Meta tags optimized
- [ ] Core Web Vitals passing
- [ ] Mobile-friendly

---

**Deployment Complete!** Your AI2Fin documentation is now live at `https://ai2fin.com/docs` with full CI/CD automation.

