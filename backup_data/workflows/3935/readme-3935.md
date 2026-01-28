# AI marketing agent for lead generation: Reddit + OpenRouter + Gmail

> # What it is
This n8n workflow monitors Reddit for posts relevant to a specific business or industry, identifies potential leads, and delivers them directly to your inbox.

Full tutorial (https://findleads.agency/blog/n8n-ai-agent-for-lead-generation-using-reddit-openai-gmail)  for those wanting to build it themselves.

# How It Works
1. A user submits their website URL and email through a form
2. The workflow analyzes the website to determine the industry and extract relevant keywords
3. It searches Reddit for posts containing those keywords and filters them based on custom engagement metrics (i.e. upvotes &gt; 15, non-empty text content, posted within the last 90 days)
4. An AI agent (using OpenRouter's GPT-4.1-mini) analyzes each post to determine relevance and summarizes the key points
5. Relevant posts are stored in Google Sheets and formatted into a professional HTML email
6. The email is sent to the user's provided email address with a summary of potential leads

# Setup
To run this workflow, you need to set up credentials in n8n for:

- Reddit: Uses OAuth 2.0. Requires creating an app on Reddit to get a Client ID & Secret. (YT Tutorial for Reddit App Creation: https://youtu.be/zlGXtW4LAK8)
- OpenRouter: Uses an API Key. Generate this key directly from your OpenRouter account settings. (YT Tutorial: https://youtu.be/Cq5Y3zpEhlc)
- Google Sheets: Recommend OAuth2 (just connect by authenticating) or setup in Google Cloud Console (enable Sheets API, create OAuth Client ID with n8n redirect URI) to get a Client ID & Secret.
- Gmail: Uses OAuth 2.0. Requires setup in Google Cloud Console to enable Gmail API and create OAuth credentials.

## 📊 Basic Information

- **Workflow ID:** 3935
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 2532
- **Downloads:** 253
- **Created:** 2025/5/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3935)

## 👤 Author

- **Name:** Ari Nakos
- **Username:** @just-aristides

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **splitOut** 
- **reddit** 
- **code** 
- **googleSheets** 
- **removeDuplicates** 
- **formTrigger** 
- **set** (×2)
- **if** (×2)
- **merge** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
