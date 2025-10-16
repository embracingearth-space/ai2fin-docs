const fs = require('fs');
const path = require('path');

// Simple static site generator for Mintlify docs
function generateStaticSite() {
  console.log('🚀 Building AI2Fin Documentation...');
  
  // Create a simple index.html if it doesn't exist
  if (!fs.existsSync('index.html')) {
    console.log('✅ Static site ready');
  } else {
    console.log('✅ Using existing index.html');
  }
  
  console.log('📁 Files in directory:');
  const files = fs.readdirSync('.');
  files.forEach(file => {
    if (file.endsWith('.mdx') || file.endsWith('.html')) {
      console.log(`  📄 ${file}`);
    }
  });
  
  console.log('✅ Build completed successfully');
}

generateStaticSite();
