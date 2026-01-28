	A production-ready n8n workflow that automatically analyzes websites to detect e-commerce platforms, frameworks, payment gateways, and technology stacks. Perfect for lead generation, competitive analysis, and market research.

🎯 Use Cases
Lead Generation: Identify potential e-commerce clients

Competitive Analysis: Analyze competitor technology stacks

Market Research: Understand technology adoption trends

Sales Intelligence: Qualify prospects based on their tech stack

Agency Services: Automated technology audits for clients

⚡ Key Features
Comprehensive Detection
50+ E-commerce Platforms: Magento, Shopify, WooCommerce, BigCommerce, Squarespace, Wix, etc.

Modern Frameworks: React, Vue.js, Next.js, Angular, WordPress, Gatsby

Payment Gateways: Stripe, PayPal, Square, Klarna, Razorpay, Braintree

E-commerce Features: Cart, Catalog, Checkout, Wishlist, PWA capabilities

Custom E-commerce: Detects custom-built e-commerce solutions

Production-Ready Features
Intelligent Error Handling: Specific error types (DNS, SSL, timeout, 404, 500, etc.)

Rate Limiting: Respectful 2-second delays between requests

Batch Processing: Processes domains in chunks of 5 for optimal performance

Retry Logic: 3 attempts with exponential backoff for failed requests

SSL Handling: Ignores certificate issues for broader compatibility

Smart Domain Processing
Multiple Detection Methods: 8 different approaches to extract domain names

Protocol Auto-Addition: Automatically adds https:// to bare domains

Domain Cleaning: Removes www, paths, and query parameters

HTML Meta Extraction: Fallback domain detection from og:url and canonical tags

Advanced Analysis
Confidence Scoring: 0-100% accuracy rating for each detection

Comprehensive Logging: Detailed console output for debugging

Multiple Triggers: Manual execution or scheduled automation

Flexible Output: Updates Google Sheets with structured results