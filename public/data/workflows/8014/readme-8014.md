# Automate sales outreach with OpenAI, Tavily & Google Sheets for prospect research

> ### ⚙️ Sales Assistant Build: Automate Prospect Research and Personalized Outreach for Sales Calls


---

### 🚀 Steps to Connect:

1. **Google Sheets Setup**
    - Connect your Google account via OAuth2 in the "Review Calls", "Product List", "Testimonials Tool", "Update Sheet", and "Update Sheets 2" nodes.
    - Duplicate the mock Google Sheet (ID: `1u3WMJwYGwZewW1IztY8dfbEf5yBQxVh8oH7LQp4rAk4`) to your drive and update the `documentId` in all Google Sheets nodes to match your copy's ID.
    - Ensure the sheet has tabs for "Meeting Data", "Products", and "Success Stories" populated with your data.
    - Setup time: ~5 minutes.

2. **OpenAI API Key**
    - Go to [OpenAI](https://platform.openai.com/) and generate your API key.
    - Paste this key into the credentials for both "OpenAI Chat Model" and "OpenAI Chat Model1" nodes.
    - Setup time: ~2 minutes.

3. **Tavily API Key**
    - Sign up at [Tavily](https://tavily.com/) and get your API key.
    - In the "Tavily" node, replace the placeholder `api_key` in the JSON body with your key (e.g., `"api_key": "your-tavily-key-here"`).
    - Setup time: ~3 minutes.

---

### How it Works
• Triggers on a new sales call booking (manual for testing).  
• Pulls prospect details from Google Sheets and researches their company, tech stack, and updates using Tavily.  
• Matches relevant products/solutions from your product list and updates the sheet.  
• Generates personalized email confirmation (subject + body) and SMS using testimonials for relevance.  
• Updates the sheet with the outreach content for easy follow-up.

Setup takes ~10-15 minutes total. All nodes are pre-configured—edit only the fields above. Detailed notes (e.g., prompt tweaks) are in sticky notes within the workflow.

---


## 📊 Basic Information

- **Workflow ID:** 8014
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 441
- **Downloads:** 44
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8014)

## 👤 Author

- **Name:** LeeWei
- **Username:** @leeweihernandez07

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **googleSheetsTool** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **googleSheets** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
