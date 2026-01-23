# Create ideal customer profile from websites content to Google Doc

> ## Who’s it for
Growth, marketing, sales, and founder teams that want a **decision-ready Ideal Customer Profile (ICP)**—grounded in their own site content.

## How it works / What it does
- **On form submission** collects **Website URL** and **Business Name** and redirects to Google Drive Folder after the final node.  
- **Crawl and Scrape the Website Content** - crawls and scrape **20 pages** from the website. 
- **ICP Creator** builds a **Markdown ICP** with:  
A) **Executive Summary**
B) **One-Pager ICP**
C) **Tiering & Lead Scoring**
D) **Demand Gen & ABM Plays**
E) **Evidence Log**
F) **Section Confidence**
**Facts vs. Inferences**, confidence scores and tables. 
- **Markdown to Google Doc** converts Markdown to Google Docs `batchUpdate` requests. Then this is used in **Update a document** for updating the empty doc. 
- **Create a document** + **Update a document** generate **“ICP for &lt;Business Name&gt;”** in your Drive folder and apply formatting.

## How to set up
1) Add credentials: **Firecrawl** (Authorization header), **OpenAI** (Chat), **Google Docs OAuth2**.  
2) Replace placeholders: `{{API_KEY}}`, `{{google_drive_folder_id}}`, `{{google_drive_folder_url}}`.  
3) Publish and open the Form URL to test.

## Requirements
Firecrawl API key • OpenAI API key • Google account with access to the target Drive folder.

## Resources
Google OAuth2 Credentials Setup - https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/  
OpenAI API key - https://docs.n8n.io/integrations/builtin/credentials/openai/  
Firecrawl API key - https://take.ms/lGcUp

## 📊 Basic Information

- **Workflow ID:** 8461
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 241
- **Downloads:** 24
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8461)

## 👤 Author

- **Name:** Simeon Penev
- **Username:** @monkatagpt

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDocs** 
- **httpRequest** (×2)
- **formTrigger** 
- **code** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
