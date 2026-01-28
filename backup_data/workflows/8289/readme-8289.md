# Create SEO content brief from keyword to Google Doc

> Who’s it for
------------

Content/SEO teams who want a fast, consistent, research-driven brief for a copywriters from a single keyword—without manual review and analysis of the SERP (Google results).

How it works / What it does
---------------------------

- Form Trigger collects the keyword/topic and redirects to Google Drive Folder after the final node.
- FireCrawl Search & Scrape pulls the top 5 pages for the chosen keyword.
- AI Agent (with Think + OpenAI Chat Model) analyzes sources and generates an original Markdown brief.
- Markdown to JSON converts the Markdown into Google Docs batchUpdate requests (H1/H2/H3, lists, links, spacing). Then this is used in Update a document for updating the empty doc.
- Create a document + Update a document write a Google Doc titled “SEO Brief for ” and update the Google Doc in your target Drive folder.

How to set up
-------------

1.  Add credentials: Firecrawl (Authorization header), OpenAI (Chat), Google Docs OAuth2.
2.  Replace placeholders: {{APIKEY}}, {{googledrivefolderid}}, {{googledrivefolderurl}}.
3.  Publish and open the Form URL to test.

Requirements
------------

Firecrawl API key • OpenAI API key • Google account with access to the target Drive folder.

Resources
---------

Google OAuth2 Credentials Setup - [https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/)  
Firecrawl API key - [https://take.ms/lGcUp](https://take.ms/lGcUp)  
OpenAI API key - [https://docs.n8n.io/integrations/builtin/credentials/openai/](https://docs.n8n.io/integrations/builtin/credentials/openai/)

## 📊 Basic Information

- **Workflow ID:** 8289
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 941
- **Downloads:** 94
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8289)

## 👤 Author

- **Name:** Simeon Penev
- **Username:** @monkatagpt

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **code** 
- **googleDocs** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
