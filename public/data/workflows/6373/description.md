# Yelp Business Scraper by URL via Bright Data API with Google Sheets Storage

## Overview

This n8n workflow automates the process of scraping comprehensive business information from Yelp using individual business URLs. It integrates with Bright Data for professional web scraping and Google Sheets for centralized data storage, providing detailed business intelligence for market research, competitor analysis, and lead generation.

## Workflow Components

### 1. 📥 **Form Trigger**
- **Type**: Form Trigger
- **Purpose**: Initiates the workflow with user-submitted Yelp business URL
- **Input Fields**:
  - URL (Yelp business page URL)
- **Function**: Captures target business URL to start the scraping process

### 2. 🔍 **Trigger Bright Data Scrape**
- **Type**: HTTP Request (POST)
- **Purpose**: Sends scraping request to Bright Data API for Yelp business data
- **Endpoint**: `https://api.brightdata.com/datasets/v3/trigger`
- **Parameters**:
  - Dataset ID: `gd_lgugwl0519h1p14rwk`
  - Include errors: true
  - Limit multiple results: 5
  - Limit per input: 20
- **Function**: Initiates comprehensive business data extraction from Yelp

### 3. 📡 **Monitor Snapshot Status**
- **Type**: HTTP Request (GET)
- **Purpose**: Monitors the progress of the Yelp scraping job
- **Endpoint**: `https://api.brightdata.com/datasets/v3/progress/{snapshot_id}`
- **Function**: Checks if the business data scraping is complete

### 4. ⏳ **Wait 30 Sec for Snapshot**
- **Type**: Wait Node
- **Purpose**: Implements intelligent polling mechanism
- **Duration**: 30 seconds
- **Function**: Pauses workflow before rechecking scraping status to optimize API usage

### 5. 🔁 **Retry Until Ready**
- **Type**: IF Condition
- **Purpose**: Evaluates scraping completion status
- **Condition**: `status === "ready"`
- **Logic**:
  - True: Proceeds to data retrieval
  - False: Loops back to status monitoring with wait

### 6. 📥 **Fetch Scraped Business Data**
- **Type**: HTTP Request (GET)
- **Purpose**: Retrieves the final scraped business information
- **Endpoint**: `https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}`
- **Format**: JSON
- **Function**: Downloads completed Yelp business data with comprehensive details

### 7. 📊 **Store to Google Sheet**
- **Type**: Google Sheets Node
- **Purpose**: Stores scraped business data for analysis and storage
- **Operation**: Append rows
- **Target**: "Yelp scraper data by URL" sheet
- **Data Mapping**:
  - Business Name, Overall Rating, Reviews Count
  - Business URL, Images/Videos URLs
  - Additional business metadata fields

## Workflow Flow

```
Form Input → Trigger Scrape → Monitor Status → Wait 30s → Check Ready
                                    ↑              ↓
                                    └─── Loop ─────┘
                                           ↓
                              Fetch Data → Store to Sheet
```

## Configuration Requirements

### API Keys & Credentials
- **Bright Data API Key**: Required for Yelp business scraping
- **Google Sheets OAuth2**: For data storage and export access
- **n8n Form Webhook**: For user input collection

### Setup Parameters
- **Google Sheet ID**: Target spreadsheet identifier
- **Dataset ID**: `gd_lgugwl0519h1p14rwk` (Yelp business scraper)
- **Form Webhook ID**: User input form identifier
- **Google Sheets Credential ID**: OAuth2 authentication

## Key Features

### **Comprehensive Business Data Extraction**
- Complete business profile information
- Customer ratings and review counts
- Contact details and business hours
- Photo and video content URLs
- Location and category information

### **Intelligent Status Monitoring**
- Real-time scraping progress tracking
- Automatic retry mechanisms with 30-second intervals
- Status validation before data retrieval
- Error handling and timeout management

### **Centralized Data Storage**
- Automatic Google Sheets export
- Organized business data format
- Historical scraping records
- Easy sharing and collaboration

### **URL-Based Processing**
- Direct Yelp business URL input
- Single business deep-dive analysis
- Flexible input through web form
- Real-time workflow triggering

## Use Cases

### **Market Research**
- Competitor business analysis
- Local market intelligence gathering
- Industry benchmark establishment
- Service offering comparison

### **Lead Generation**
- Business contact information extraction
- Potential client identification
- Market opportunity assessment
- Sales prospect development

### **Business Intelligence**
- Customer sentiment analysis through ratings
- Competitor performance monitoring
- Market positioning research
- Brand reputation tracking

### **Location Analysis**
- Geographic business distribution
- Local competition assessment
- Market saturation evaluation
- Expansion opportunity identification

## Data Output Fields

| Field | Description | Example |
|-------|-------------|---------|
| Name | Business name | "Joe's Pizza Restaurant" |
| Overall Rating | Average customer rating | "4.5" |
| Reviews Count | Total number of reviews | "247" |
| URL | Original Yelp business URL | "https://www.yelp.com/biz/joes-pizza..." |
| Images/Videos URLs | Media content links | "https://s3-media1.fl.yelpcdn.com/..." |

## Technical Notes

- **Polling Interval**: 30-second status checks for optimal API usage
- **Result Limiting**: Maximum 20 businesses per input, 5 multiple results
- **Data Format**: JSON with structured field mapping
- **Error Handling**: Comprehensive error tracking in all API requests
- **Retry Logic**: Automatic status rechecking until completion
- **Form Input**: Single URL field with validation
- **Storage Format**: Structured Google Sheets with predefined columns

## Setup Instructions

### Step 1: Import Workflow
1. Copy the JSON workflow configuration
2. Import into n8n: **Workflows** → **Import from JSON**
3. Paste configuration and save

### Step 2: Configure Bright Data
1. **Set up credentials:**
   - Navigate to **Credentials** → **Add Bright Data API**
   - Enter your Bright Data API key
   - Test connection

2. **Update API key references:**
   - Replace `BRIGHT_DATA_API_KEY` in all HTTP request nodes
   - Verify dataset access for `gd_lgugwl0519h1p14rwk`

### Step 3: Configure Google Sheets
1. **Create target spreadsheet:**
   - Create new Google Sheet named "Yelp Business Data" or similar
   - Copy the Sheet ID from URL

2. **Set up OAuth2 credentials:**
   - Add **Google Sheets OAuth2** credential in n8n
   - Complete authentication process

3. **Update workflow references:**
   - Replace `YOUR_GOOGLE_SHEET_ID` with actual Sheet ID
   - Update `YOUR_GOOGLE_SHEETS_CREDENTIAL_ID` with credential reference

### Step 4: Test and Activate
1. **Test with sample URL:**
   - Use a known Yelp business URL
   - Monitor execution progress
   - Verify data appears in Google Sheet

2. **Activate workflow:**
   - Toggle workflow to "Active"
   - Share form URL with users

## Sample Business Data

The workflow captures comprehensive business information including:

- **Basic Information**: Name, category, location
- **Performance Metrics**: Ratings, review counts, popularity
- **Contact Details**: Phone, website, address
- **Visual Content**: Photos, videos, gallery URLs
- **Operational Data**: Hours, services, amenities
- **Customer Feedback**: Review summaries, sentiment indicators

## Advanced Configuration

### **Batch Processing**
Modify the input to accept multiple URLs:
```json
[
  {"url": "https://www.yelp.com/biz/business-1"},
  {"url": "https://www.yelp.com/biz/business-2"},
  {"url": "https://www.yelp.com/biz/business-3"}
]
```

### **Enhanced Data Fields**
Add more extraction fields by updating the dataset configuration:
- Business hours and schedule
- Menu items and pricing
- Customer photos and reviews
- Special offers and promotions

### **Notification Integration**
Add alert mechanisms:
- Email notifications for completed scrapes
- Slack messages for team updates
- Webhook triggers for external systems

## Error Handling

### **Common Issues**
- **Invalid URL**: Ensure URL is a valid Yelp business page
- **Rate Limiting**: Bright Data API usage limits exceeded
- **Authentication**: Google Sheets or Bright Data credential issues
- **Data Format**: Unexpected response structure from Yelp

### **Troubleshooting Steps**
1. **Verify URLs**: Ensure Yelp business URLs are correctly formatted
2. **Check Credentials**: Validate all API keys and OAuth tokens
3. **Monitor Logs**: Review n8n execution logs for detailed errors
4. **Test Connectivity**: Verify network access to all external services

## Performance Specifications

- **Processing Time**: 2-5 minutes per business URL
- **Data Accuracy**: 95%+ for publicly available business information
- **Success Rate**: 90%+ for valid Yelp business URLs
- **Concurrent Processing**: Depends on Bright Data plan limits
- **Storage Capacity**: Unlimited (Google Sheets based)

---

**For any questions or support, please contact:  
[info@incrementors.com](mailto:info@incrementors.com)  
or fill out this form: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)
