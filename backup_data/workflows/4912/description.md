# 🛒 Lead Workflow: Yelp & Trustpilot Scraping + OpenAI Analysis via BrightData

&gt; **Description:** Automated lead generation workflow that scrapes business data from Yelp and Trustpilot based on location and category, analyzes credibility, and sends personalized outreach emails using AI.

&gt; ⚠️ **Important:** This template requires a self-hosted n8n instance to run.

## 📋 Overview

This workflow provides an automated lead generation solution that identifies high-quality prospects from Yelp and Trustpilot, analyzes their credibility through reviews, and sends personalized outreach emails. Perfect for digital marketing agencies, sales teams, and business development professionals.

## ✨ Key Features

- **🎯 Smart Location Analysis**  
  AI breaks down cities into sub-locations for comprehensive coverage

- **🛍 Yelp Integration**  
  Scrapes business details using BrightData's Yelp dataset

- **⭐ Trustpilot Verification**  
  Validates business credibility through review analysis

- **📊 Data Storage**  
  Automatically saves results to Google Sheets

- **🤖 AI-Powered Outreach**  
  Generates personalized emails using Claude AI

- **📧 Automated Sending**  
  Sends emails directly through Gmail integration

## 🔄 How It Works

1. **User Input:** Submit location, country, and business category through a form  
2. **AI Location Analysis:** Gemini AI identifies sub-locations within the specified area  
3. **Yelp Scraping:** BrightData extracts business information from multiple locations  
4. **Data Processing:** Cleans and stores business details in Google Sheets  
5. **Trustpilot Verification:** Scrapes reviews and company details for credibility check  
6. **Email Generation:** Claude AI creates personalized outreach messages  
7. **Automated Outreach:** Sends emails to qualified prospects via Gmail

## 📊 Data Output

| Field         | Description                      | Example                          |
|---------------|----------------------------------|----------------------------------|
| Company Name  | Business name from Yelp/Trustpilot | Best Local Restaurant            |
| Website       | Company website URL              | https://example-restaurant.com   |
| Phone Number  | Business contact number          | (555) 123-4567                   |
| Email         | Business email address           | demo@example.com                 |
| Address       | Physical business location       | 123 Main St, City, State         |
| Rating        | Overall business rating          | 4.5/5                            |
| Categories    | Business categories/tags         | Restaurant, Italian, Fine Dining |

## 🚀 Setup Instructions

**⏱️ Estimated Setup Time: 10–15 minutes**

### Prerequisites

- n8n instance (self-hosted or cloud)
- Google account with Sheets access
- BrightData account with Yelp and Trustpilot datasets
- Google Gemini API access
- Anthropic API key for Claude
- Gmail account for sending emails

### Step 1: Import the Workflow

1. Copy the JSON workflow code  
2. In n8n: **Workflows → + Add workflow → Import from JSON**  
3. Paste JSON and click **Import**

### Step 2: Configure Google Sheets Integration

1. Create two Google Sheets:  
   - Yelp data: `Name, Categories, Website, Address, Phone, URL, Rating`  
   - Trustpilot data: `Company Name, Email, Phone Number, Address, Rating, Company About`
2. Copy Sheet IDs from URLs  
3. In n8n: **Credentials → + Add credential → Google Sheets OAuth2 API**  
4. Complete OAuth setup and test connection  
5. Update all Google Sheets nodes with your Sheet IDs

### Step 3: Configure BrightData

1. Set up BrightData credentials in n8n  
2. Replace API token with: `BRIGHT_DATA_API_KEY`  
3. Verify dataset access:  
   - Yelp dataset: `gd_lgugwl0519h1p14rwk`  
   - Trustpilot dataset: `gd_lm5zmhwd2sni130p`  
4. Test connections

### Step 4: Configure AI Models

- **Google Gemini (Location Analysis)**  
  - Add Google Gemini API credentials  
  - Configure model: `models/gemini-1.5-flash`

- **Claude AI (Email Generation)**  
  - Add Anthropic API credentials  
  - Configure model: `claude-sonnet-4-20250514`

### Step 5: Configure Gmail Integration

1. Set up Gmail OAuth2 credentials in n8n  
2. Update "Send Outreach Email" node  
3. Test email sending

### Step 6: Test & Activate

1. Activate the workflow  
2. Test with sample data:  
   - Country: United States  
   - Location: Dallas  
   - Category: Restaurants  
3. Verify data appears in Google Sheets  
4. Check that emails are generated and sent

## 📖 Usage Guide

### Starting a Lead Generation Campaign

1. Access the form trigger URL  
2. Enter your target criteria:  
   - **Country:** Target country  
   - **Location:** City or region  
   - **Category:** Business type (e.g., restaurants)  
3. Submit the form to start the process

### Monitoring Results

- **Yelp Data Sheet:** View scraped business information  
- **Trustpilot Sheet:** Review credibility data  
- **Gmail Sent Items:** Track outreach emails sent

## 🔧 Customization Options

### Modifying Email Templates

Edit the "AI Generate Email Content" node to customize:

- Email tone and style  
- Services mentioned  
- Call-to-action messages  
- Branding elements

### Adjusting Data Filters

- Modify rating thresholds  
- Set minimum review counts  
- Add geographic restrictions  
- Filter by business size

### Scaling the Workflow

- Increase batch sizes  
- Add delays between requests  
- Use parallel processing  
- Add error handling

## 🚨 Troubleshooting

### Common Issues & Solutions

**1. BrightData Connection Failed**  
- *Cause:* Invalid API credentials or dataset access  
- *Solution:* Verify credentials and dataset permissions

**2. No Data Extracted**  
- *Cause:* Invalid location or changed page structure  
- *Solution:* Verify location names and test other categories

**3. Gmail Authentication Issues**  
- *Cause:* Expired OAuth tokens  
- *Solution:* Re-authenticate and check permissions

**4. AI Model Errors**  
- *Cause:* API quota exceeded or invalid keys  
- *Solution:* Check usage limits and API key

### Performance Optimization

- **Rate Limiting:** Add delays  
- **Error Handling:** Retry failed requests  
- **Data Validation:** Check for malformed data  
- **Memory Management:** Process in smaller batches

## 📈 Use Cases & Examples

### 1. Digital Marketing Agency Lead Generation

- **Goal:** Find businesses needing marketing  
- **Target:** Restaurants, retail stores  
- **Approach:** Focus on good-rated but low-online-presence businesses

### 2. B2B Sales Prospecting

- **Goal:** Find software solution clients  
- **Target:** Growing businesses  
- **Approach:** Focus on recent positive reviews

### 3. Partnership Development

- **Goal:** Find complementary businesses  
- **Target:** Established businesses  
- **Approach:** Focus on reputation and satisfaction scores

## ⚡ Performance & Limits

### Expected Performance

- **Processing Time:** 5–10 minutes/location  
- **Data Accuracy:** 90%+  
- **Success Rate:** 85%+  
- **Daily Capacity:** 100–500 leads

### Resource Usage

- **API Calls:** ~10–20 per business  
- **Storage:** Minimal (Google Sheets)  
- **Execution Time:** 3–8 minutes/10 businesses  
- **Network Usage:** ~5–10MB/business

## 🤝 Support & Community

### Getting Help

- **n8n Community Forum:** [community.n8n.io](https://community.n8n.io)  
- **Docs:** [docs.n8n.io](https://docs.n8n.io)  
- **BrightData Support:** Via dashboard

### Contributing

- Share improvements  
- Report issues and suggestions  
- Create industry-specific variations  
- Document best practices

&gt; 🔒 **Privacy & Compliance:** Ensure GDPR/CCPA compliance. Always respect robots.txt and terms of service of scraped sites.

---

## 🎯 Ready to Generate Leads!

This workflow provides a complete solution for automated lead generation and outreach. Customize it to fit your needs and start building your pipeline today!

For any questions or support, please contact:  
📧 [info@incrementors.com](mailto:info@incrementors.com)  
or fill out this form: [Contact Us](https://www.incrementors.com/contact-us/)

