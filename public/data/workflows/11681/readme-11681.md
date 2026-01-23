# LinkedIn email finder with AI domain detection using Google Sheets & Hunter.io

> ## Who’s it for
This template is designed for recruiters, lead-generation teams, agency owners, and sales professionals who collect LinkedIn profile data and need to automate the process of finding verified company domains and email addresses. It is ideal for teams looking to eliminate manual research and streamline prospect enrichment.

## What it does / How it works
This workflow reads contact records from a Google Sheet, including name, position, and description.  
An AI agent analyzes each profile to determine the company domain. If the domain is already identifiable from the description, it is used directly.  
If no domain is found, the workflow generates an intelligent search term and performs a Google Custom Search to extract the most accurate domain from real web results using another AI agent.  
Once the domain is confirmed, the workflow queries Hunter.io to find the best-matching email address for the contact.  
Finally, the enriched data—email and company domain—is appended back into the Google Sheet, updating each row automatically.

## Requirements
- Google Sheets OAuth2 credentials  
- Google Gemini (PaLM) API credentials  
- Hunter.io API key  
- Google Custom Search API key and CSE ID  
- A Google Sheet with columns for name, position, description, and domain  

## How to set up
1. Connect your Google Sheets, Gemini, Hunter.io, and Google Search credentials.  
2. Replace the Google Sheet ID and sheet name with your own.  
3. Add your API keys to the designated nodes.  
4. Ensure column names match your sheet structure.  
5. Execute the workflow to begin enrichment.

## How to customize the workflow
- Modify AI prompts for better domain inference  
- Add additional enrichment steps (social profiles, industry tags)  
- Add fallback email providers (Snov, Apollo, etc.)  
- Change update logic to support multiple sheets or batch processing  

## 📊 Basic Information

- **Workflow ID:** 11681
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 56
- **Downloads:** 5
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11681)

## 👤 Author

- **Name:** Pixcels Themes
- **Username:** @pixcelsthemes

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **code** (×3)
- **switch** 
- **httpRequest** (×3)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
