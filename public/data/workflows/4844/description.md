# 🔍 Yelp Business Finder: Scraping Local Businesses by Keyword, Category & Location Using Bright Data and Google Sheets

**Description:** Automate local business data collection from Yelp using AI-powered input validation, Bright Data scraping, and automatic Google Sheets integration. Perfect for market research, lead generation, and competitive analysis.

## 🛠️ How It Works

1. **Form Submission:** Users submit a simple form with country, location, and business category parameters.

2. **AI Validation:** Google Gemini AI validates and cleans input data, ensuring proper formatting and Yelp category alignment.

3. **Data Scraping:** Bright Data's Yelp dataset API scrapes business information based on the cleaned parameters.

4. **Status Monitoring:** The workflow monitors scraping progress and waits for data completion.

5. **Data Export:** Final business data is automatically appended to your Google Sheets for easy analysis.

## 📋 Setup Steps

**⏱️ Estimated Setup Time:** 10-15 minutes

### Prerequisites

✅ Active n8n instance (cloud or self-hosted)
✅ Google account with Sheets access
✅ Bright Data account with Yelp scraping dataset
✅ Google Gemini API access

### Configuration Steps

1. **Import Workflow:**
   - Copy the provided JSON workflow
   - In n8n: Go to Workflows → + Add workflow → Import from JSON
   - Paste the JSON and click Import

2. **Configure Google Sheets:**
   - Create a new Google Sheet or use an existing one
   - Set up OAuth2 credentials in n8n
   - Update the Google Sheets node with your document ID
   - Configure column mappings for business data

3. **Setup Bright Data:**
   - Add your Bright Data API credentials to n8n
   - Replace `BRIGHT_DATA_API_KEY` with your actual API key
   - Verify your Yelp dataset ID in the HTTP request nodes
   - Test the connection

4. **Configure Google Gemini:**
   - Add your Google Gemini API credentials
   - Test the AI Agent connection
   - Verify the model configuration

5. **Test & Activate:**
   - Activate the workflow using the toggle switch
   - Test with sample data: country="US", location="New York", category="restaurants"
   - Verify data appears correctly in your Google Sheet

## 📊 Data Output

**📍 Business Name**  
Official business name from Yelp

**⭐ Overall Rating**  
Average customer rating (1-5 stars)

**📝 Reviews Count**  
Total number of customer reviews

**🏷️ Categories**  
Business categories and tags

**🌐 Website URL**  
Official business website

**📞 Phone Number**  
Contact phone number

**📍 Address**  
Full business address

**🔗 Yelp URL**  
Direct link to Yelp listing

## 🎯 Use Cases

**🔍 Market Research**  
Analyze local business landscapes and competition

**📈 Lead Generation**  
Build prospect lists for B2B outreach

**🏪 Location Analysis**  
Research business density by area and category

**📊 Competitive Intelligence**  
Monitor competitor ratings and customer feedback

**⚠️ Important Notes:**
- Ensure you comply with Yelp's terms of service and rate limits
- Bright Data usage may incur costs based on your plan
- AI validation helps improve data quality and reduce errors
- Monitor your Google Sheets for data accuracy

## 🔧 Troubleshooting

**Common Issues:**
- **API Rate Limits:** Implement delays between requests if needed
- **Invalid Categories:** AI agent helps standardize category names
- **Empty Results:** Verify location spelling and category alignment
- **Authentication Errors:** Check all API credentials and permissions

**🚀 Ready to start scraping Yelp business data efficiently!**
