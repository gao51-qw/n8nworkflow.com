# Analyze competitor visual content across Instagram and TikTok with GPT-4o Vision

> ## Who Is This For

Marketing teams, social media managers, and brand strategists who want to understand competitor visual strategies across multiple platforms. Perfect for agencies managing multiple client accounts or brands looking to benchmark their visual content.

## What This Template Does

This workflow automates competitive visual intelligence gathering across Instagram and TikTok using AI-powered image analysis:

1. Collects recent posts from your account and up to 3 competitors via a simple form interface
2. Routes content to appropriate Apify scrapers based on selected platforms
3. Filters and processes image content from scraped posts
4. Analyzes each image using GPT-4o Vision to extract color palettes, composition styles, mood/emotion, and text design elements
5. Generates a comprehensive competitive analysis report with actionable recommendations
6. Logs all analysis results to Google Sheets for historical tracking

## Requirements

- **Apify account** with API access (for Instagram and TikTok scraping)
- **OpenAI API key** with GPT-4o access
- **Google Sheets** connected for logging results

## How to Set Up

1. **Configure Apify credentials**: Connect your Apify account in the credential settings
2. **Add OpenAI API key**: Enter your API key in the "Workflow Configuration" node (replace `YOUR_OPENAI_API_KEY`)
3. **Set up Google Sheets**: 
   - Create a new spreadsheet with columns: `timestamp`, `own_account`, `competitors`, `platforms`, `posts_analyzed`, `summary`
   - Update the "Log Results to Google Sheets" node with your document ID
4. **Activate the workflow** and access the form via the provided webhook URL

## How to Customize

- **Adjust analysis depth**: Modify the `postsCount` variable to analyze more or fewer posts per account
- **Customize AI prompts**: Edit the prompt in "Analyze Images with GPT-4o Vision" to extract different visual attributes
- **Add more platforms**: Extend the Platform Router to include additional social networks
- **Change report format**: Modify the prompt in "Generate Competitive Analysis Report" for different output structures

## 📊 Basic Information

- **Workflow ID:** 11573
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 208
- **Downloads:** 20
- **Created:** 2025/12/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11573)

## 👤 Author

- **Name:** 福壽一貴
- **Username:** @fukujukazuki

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@apify/n8n-nodes-apify.apify** (×2)
- **code** (×2)
- **aggregate** 
- **googleSheets** 
- **formTrigger** 
- **set** 
- **switch** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
