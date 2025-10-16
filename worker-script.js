// Cloudflare Worker for subdirectory routing
// Routes /docs/* to documentation and everything else to main app

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Route /docs/* to documentation
  if (url.pathname.startsWith('/docs')) {
    const docsUrl = new URL(url.pathname.replace('/docs', ''), 'https://ai2fin-docs.pages.dev')
    docsUrl.search = url.search
    
    // Preserve headers
    const headers = new Headers(request.headers)
    headers.set('Host', 'ai2fin-docs.pages.dev')
    
    return fetch(docsUrl, {
      method: request.method,
      headers: headers,
      body: request.body
    })
  }
  
  // Route everything else to main app
  const appUrl = new URL(url.pathname, 'https://app.ai2fin.com')
  appUrl.search = url.search
  
  // Preserve headers
  const headers = new Headers(request.headers)
  headers.set('Host', 'app.ai2fin.com')
  
  return fetch(appUrl, {
    method: request.method,
    headers: headers,
    body: request.body
  })
}
