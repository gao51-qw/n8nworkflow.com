# Scrape Yelp business data with Scrape.do API & Google Sheets storage

> # Yelp Business Scraper by URL via [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) API with Google Sheets Storage

## Overview

This n8n workflow automates the process of scraping comprehensive business information from Yelp using individual business URLs. It integrates with [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) for professional web scraping with anti-bot bypass capabilities and Google Sheets for centralized data storage, providing detailed business intelligence for market research, competitor analysis, and lead generation.

---

## Workflow Components

### 1. 📥 Form Trigger

| Property | Value |
|----------|-------|
| **Type** | Form Trigger |
| **Purpose** | Initiates the workflow with user-submitted Yelp business URL |
| **Input Fields** | Yelp Business URL |
| **Function** | Captures target business URL to start the scraping process |

### 2. 🔍 Create [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) Job

| Property | Value |
|----------|-------|
| **Type** | HTTP Request (POST) |
| **Purpose** | Creates an async scraping job via [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) API |
| **Endpoint** | `https://q.scrape.do/api/v1/jobs` |
| **Authentication** | X-Token header |

**Request Parameters:**
- **Targets**: Array containing the Yelp business URL
- **Super**: `true` (uses residential/mobile proxies for better success rate)
- **GeoCode**: `us` (targets US-based content)
- **Device**: `desktop`
- **Render**: JavaScript rendering enabled with `networkidle2` wait condition

**Function**: Initiates comprehensive business data extraction from Yelp with headless browser rendering to handle dynamic content.

### 3. 🔧 Parse Yelp HTML

| Property | Value |
|----------|-------|
| **Type** | Code Node (JavaScript) |
| **Purpose** | Extracts structured business data from raw HTML |
| **Mode** | Run once for each item |

**Function**: Parses the scraped HTML content using regex patterns and JSON-LD extraction to retrieve:
- Business name
- Overall rating
- Review count
- Phone number
- Full address
- Price range
- Categories
- Website URL
- Business hours
- Image URLs

### 4. 📊 Store to Google Sheet

| Property | Value |
|----------|-------|
| **Type** | Google Sheets Node |
| **Purpose** | Stores scraped business data for analysis and storage |
| **Operation** | Append rows |
| **Target** | "Yelp Scraper Data - [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp)" sheet |

**Data Mapping:**
- Business Name, Overall Rating, Reviews Count
- Business URL, Phone, Address
- Price Range, Categories, Website
- Hours, Images/Videos URLs, Scraped Timestamp

---

## Workflow Flow

```
Form Input → Create Scrape.do Job → Parse Yelp HTML → Store to Google Sheet
     │              │                      │                    │
     ▼              ▼                      ▼                    ▼
 User submits   API creates job      JavaScript code      Data appended
 Yelp URL       with JS rendering    extracts fields      to spreadsheet
```

---

## Configuration Requirements

### API Keys & Credentials

| Credential | Purpose |
|------------|---------|
| **[Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) API Token** | Required for Yelp business scraping with anti-bot bypass |
| **Google Sheets OAuth2** | For data storage and export access |
| **n8n Form Webhook** | For user input collection |

### Setup Parameters

| Parameter | Description |
|-----------|-------------|
| `YOUR_SCRAPEDO_TOKEN` | Your [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) API token (appears in 3 places) |
| `YOUR_GOOGLE_SHEET_ID` | Target spreadsheet identifier |
| `YOUR_GOOGLE_SHEETS_CREDENTIAL_ID` | OAuth2 authentication reference |

---

## Key Features

### 🛡️ Anti-Bot Bypass Technology

- **Residential Proxy Rotation**: 110M+ proxies across 150 countries
- **WAF Bypass**: Handles Cloudflare, Akamai, DataDome, and PerimeterX
- **Dynamic TLS Fingerprinting**: Authentic browser signatures
- **CAPTCHA Handling**: Automatic bypass for uninterrupted scraping

### 🌐 JavaScript Rendering

- Full headless browser support for dynamic Yelp content
- `networkidle2` wait condition ensures complete page load
- Custom wait times for complex page elements
- Real device fingerprints for detection avoidance

### 📊 Comprehensive Data Extraction

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Business name | "Joe's Pizza Restaurant" |
| `overall_rating` | Average customer rating | "4.5" |
| `reviews_count` | Total number of reviews | "247" |
| `url` | Original Yelp business URL | "https://www.yelp.com/biz/..." |
| `phone` | Business phone number | "(555) 123-4567" |
| `address` | Full street address | "123 Main St, New York, NY 10001" |
| `price_range` | Price indicator | "$$" |
| `categories` | Business categories | "Pizza, Italian, Delivery" |
| `website` | Business website URL | "https://joespizza.com" |
| `hours` | Operating hours | "Mon-Fri 11:00-22:00" |
| `images_videos_urls` | Media content links | "https://s3-media1.fl.yelpcdn.com/..." |
| `scraped_at` | Extraction timestamp | "2025-01-15T10:30:00Z" |

### 🗂️ Centralized Data Storage

- Automatic Google Sheets export
- Organized business data format with 12 data fields
- Historical scraping records with timestamps
- Easy sharing and collaboration

---

## Use Cases

### 📈 Market Research
- Competitor business analysis
- Local market intelligence gathering
- Industry benchmark establishment
- Service offering comparison

### 🎯 Lead Generation
- Business contact information extraction
- Potential client identification
- Market opportunity assessment
- Sales prospect development

### 📊 Business Intelligence
- Customer sentiment analysis through ratings
- Competitor performance monitoring
- Market positioning research
- Brand reputation tracking

### 📍 Location Analysis
- Geographic business distribution
- Local competition assessment
- Market saturation evaluation
- Expansion opportunity identification

---

## Technical Notes

| Specification | Value |
|--------------|-------|
| **Processing Time** | 15-45 seconds per business URL |
| **Data Accuracy** | 95%+ for publicly available business information |
| **Success Rate** | 99.98% ([Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) guarantee) |
| **Proxy Pool** | 110M+ residential, mobile, and datacenter IPs |
| **JS Rendering** | Full headless browser with `networkidle2` wait |
| **Data Format** | JSON with structured field mapping |
| **Storage Format** | Structured Google Sheets with 12 predefined columns |

---

## Setup Instructions

### Step 1: Import Workflow

1. Copy the JSON workflow configuration
2. Import into n8n: **Workflows → Import from JSON**
3. Paste configuration and save

### Step 2: Configure [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp)

**Get your API token:**
1. Sign up at [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp)
2. Navigate to Dashboard → API Token
3. Copy your token

**Update workflow references (3 places):**
- `🔍 Create Scrape.do Job` node → Headers → X-Token
- `📡 Check Job Status` node → Headers → X-Token
- `📥 Fetch Task Results` node → Headers → X-Token

Replace `YOUR_SCRAPEDO_TOKEN` with your actual API token.

### Step 3: Configure Google Sheets

**Create target spreadsheet:**
1. Create new Google Sheet named "Yelp Business Data" or similar
2. Add header row with columns:
   ```
   name | overall_rating | reviews_count | url | phone | address | price_range | categories | website | hours | images_videos_urls | scraped_at
   ```
3. Copy the Sheet ID from URL (the long string between `/d/` and `/edit`)

**Set up OAuth2 credentials:**
1. In n8n: **Credentials → Add Credential → Google Sheets OAuth2**
2. Complete the Google authentication process
3. Grant access to Google Sheets

**Update workflow references:**
- Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
- Update `YOUR_GOOGLE_SHEETS_CREDENTIAL_ID` with credential reference

### Step 4: Test and Activate

**Test with sample URL:**
1. Use a known Yelp business URL (e.g., `https://www.yelp.com/biz/example-business-city`)
2. Submit through the form trigger
3. Monitor execution progress in n8n
4. Verify data appears in Google Sheet

**Activate workflow:**
1. Toggle workflow to "Active"
2. Share form URL with users

---

## Sample Business Data

The workflow captures comprehensive business information including:

| Category | Data Points |
|----------|-------------|
| **Basic Information** | Name, category, location |
| **Performance Metrics** | Ratings, review counts, popularity |
| **Contact Details** | Phone, website, address |
| **Visual Content** | Photos, videos, gallery URLs |
| **Operational Data** | Hours, services, price range |

---

## Advanced Configuration

### Batch Processing

Modify the input to accept multiple URLs by updating the job creation body:

```json
{
  "Targets": [
    "https://www.yelp.com/biz/business-1",
    "https://www.yelp.com/biz/business-2",
    "https://www.yelp.com/biz/business-3"
  ],
  "Super": true,
  "GeoCode": "us",
  "Render": {
    "WaitUntil": "networkidle2",
    "CustomWait": 3000
  }
}
```

### Enhanced Rendering Options

For complex Yelp pages, add browser interactions:

```json
{
  "Render": {
    "BlockResources": false,
    "WaitUntil": "networkidle2",
    "CustomWait": 5000,
    "WaitSelector": ".biz-page-header",
    "PlayWithBrowser": [
      { "Action": "Scroll", "Direction": "down" },
      { "Action": "Wait", "Timeout": 2000 }
    ]
  }
}
```

### Notification Integration

Add alert mechanisms:
- Email notifications for completed scrapes
- Slack messages for team updates
- Webhook triggers for external systems

---

## Error Handling

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| **Invalid URL** | URL is not a valid Yelp business page | Ensure URL format: `https://www.yelp.com/biz/...` |
| **401 Unauthorized** | Invalid or missing API token | Verify `X-Token` header value |
| **Job Timeout** | Page too complex or slow | Increase `CustomWait` value |
| **Empty Data** | HTML parsing failed | Check page structure, update regex patterns |
| **Rate Limiting** | Too many concurrent requests | Reduce request frequency or upgrade plan |

### Troubleshooting Steps

1. **Verify URLs**: Ensure Yelp business URLs are correctly formatted
2. **Check Credentials**: Validate [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) token and Google OAuth
3. **Monitor Logs**: Review n8n execution logs for detailed errors
4. **Test Connectivity**: Verify network access to all external services
5. **Check Job Status**: Use [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) dashboard to monitor job progress

---

## Performance Specifications

| Metric | Value |
|--------|-------|
| **Processing Time** | 15-45 seconds per business URL |
| **Data Accuracy** | 95%+ for publicly available information |
| **Success Rate** | 99.98% (with [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) anti-bot bypass) |
| **Concurrent Processing** | Depends on [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) plan limits |
| **Storage Capacity** | Unlimited (Google Sheets based) |
| **Proxy Pool** | 110M+ IPs across 150 countries |

---

## [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) API Reference

### Async API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/v1/jobs` | POST | Create new scraping job |
| `/api/v1/jobs/{jobID}` | GET | Check job status |
| `/api/v1/jobs/{jobID}/{taskID}` | GET | Retrieve task results |
| `/api/v1/me` | GET | Get account information |

### Job Status Values

| Status | Description |
|--------|-------------|
| `queuing` | Job is being prepared |
| `queued` | Job is in queue waiting to be processed |
| `pending` | Job is currently being processed |
| `rotating` | Job is retrying with different proxies |
| `success` | Job completed successfully |
| `error` | Job failed |
| `canceled` | Job was canceled by user |

For complete API documentation, visit: [Scrape.do Documentation](https://scrape.do/?utm_source=n8n&utm_medium=yelp)

---

## Support & Resources

- **[Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) Documentation**: https://scrape.do/documentation/
- **[Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) Dashboard**: https://dashboard.scrape.do/
- **n8n Documentation**: https://docs.n8n.io/
- **Google Sheets API**: https://developers.google.com/sheets/api

---

*This workflow is powered by [Scrape.do](https://scrape.do/?utm_source=n8n&utm_medium=yelp) - Reliable, Scalable, Unstoppable Web Scraping*


## 📊 Basic Information

- **Workflow ID:** 11454
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 39
- **Downloads:** 3
- **Created:** 2025/12/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11454)

## 👤 Author

- **Name:** Onur
- **Username:** @onurpolat05

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **stickyNote** (×7)
- **formTrigger** 
- **httpRequest** (×3)
- **wait** (×2)
- **if** 
- **code** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
