# Automate LinkedIn Prospecting with AI Agent and Get Results Straight to Google Sheets!

A practical AI-powered workflow that helps you find relevant LinkedIn profiles using natural language queries and saves the results automatically to Google Sheets.

## 🎯 What It Actually Does

- Accepts natural language requests (e.g., "Find marketing managers in Paris")
- Uses AI to extract search parameters:
  - Job titles
  - Industry
  - Location
- Searches for matching LinkedIn profiles
- Saves profile URLs and titles to Google Sheets

## 🛠️ Technical Components

1. **AI Query Processor**
   - Converts natural language to structured search parameters
   - Handles various input formats and languages
   - Maintains context for accurate parameter extraction

2. **Search Engine Integration**
   - Uses Google Custom Search API
   - Handles pagination for multiple results
   - Filters for actual LinkedIn profile URLs

3. **Data Storage**
   - Automatically saves to Google Sheets
   - Stores profile titles and URLs
   - Easy to access and export

## 📋 Prerequisites

- OpenAI API key
- Google Custom Search API credentials
- Google Sheets access

## 💡 Adaptation Possibilities

This template can be modified to scrape other websites by:
- Changing the search domain in the HTTP Request node
- Adjusting the URL filter in the Code node
- Modifying the column structure in Google Sheets
- Updating the AI prompt for different parameter extraction

Example adaptations:
- Twitter profile finder
- GitHub repository search
- Company website finder
- Professional blog discovery

## 🔧 Setup Instructions

1. **API Setup**
   - Configure Google Custom Search API
   - Set up OpenAI API
   - Prepare Google Sheets

2. **Workflow Configuration**
   - Import both workflows
   - Connect your API credentials
   - Set up your Google Sheet
   - Test with a sample query

## 📝 Usage Example

Input: "Find software developers in London working in fintech"
Output: A Google Sheet containing:
- LinkedIn profile URLs of software developers
- Profile titles/headlines
- Ready for your review and outreach

#AIAgent #WebScraping #Automation #n8n #Workflow #LinkedInProspecting