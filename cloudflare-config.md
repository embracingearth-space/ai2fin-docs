# Cloudflare Pages Configuration

## Build Settings

```yaml
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: /
```

## Environment Variables

```bash
# Required
NODE_VERSION=18
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here

# Optional
MINTLIFY_API_KEY=your_mintlify_key_here
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## Custom Domain Setup

1. **Add Custom Domain**: `docs.ai2fin.com`
2. **Enable SSL**: Automatic SSL/TLS
3. **Configure DNS**: CNAME record to `ai2fin-docs.pages.dev`

## Worker Configuration

```javascript
// Worker script for subdirectory routing
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  if (url.pathname.startsWith('/docs')) {
    const docsUrl = new URL(url.pathname.replace('/docs', ''), 'https://ai2fin-docs.pages.dev')
    docsUrl.search = url.search
    
    return fetch(docsUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    })
  }
  
  const appUrl = new URL(url.pathname, 'https://app.ai2fin.com')
  appUrl.search = url.search
  
  return fetch(appUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })
}
```

## Caching Rules

```yaml
# Static assets
*.css, *.js, *.png, *.jpg, *.svg
Cache Level: Standard
Browser Cache TTL: 1 month
Edge Cache TTL: 1 month

# HTML pages
*.html, *.mdx
Cache Level: Standard
Browser Cache TTL: 1 hour
Edge Cache TTL: 1 day
```

## Performance Settings

```yaml
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

## Security Headers

```yaml
# Security headers
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google-analytics.com; style-src 'self' 'unsafe-inline'
```
