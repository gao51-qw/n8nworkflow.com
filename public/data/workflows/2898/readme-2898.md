# AI agent: Find the right LinkedIn profiles in seconds

> # Automate LinkedIn Prospecting with AI Agent and Get Results Straight to Google Sheets!

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

## 📊 Basic Information

- **Workflow ID:** 2898
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 4819
- **Downloads:** 481
- **Created:** 2025/2/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2898)

## 👤 Author

- **Name:** Badr
- **Username:** @b4dr

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **splitOut** 
- **httpRequest** 
- **code** 
- **googleSheets** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
