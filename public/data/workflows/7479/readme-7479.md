# Turn YouTube comments into content ideas with GPT-4.1-mini, Tavily & Apify

> ## Description

This n8n template demonstrates how to turn raw YouTube comments into **research-backed content ideas** complete with **hooks and outlines**.

Use cases include:

* Quickly mining a competitor’s audience for video ideas.  
* Generating hooks and outlines for your own channel’s comments.  
* Validating content opportunities with live audience feedback.  

**Good to know**

* Apify is used to scrape YouTube comments (requires an API token).  
* GPT-4.1-mini is used for both filtering and content generation.  
* Tavily provides fresh research to ground the AI’s responses.  
* All outputs are stored in Google Sheets, making it easy to manage and track ideas.  

---

## How it works

1. **Trigger** – Paste a YouTube URL into the chat trigger.  
2. **Scrape Comments** – Apify fetches all comments and metadata.  
3. **Filter** – GPT-4.1-mini decides if each comment could inspire a content idea.  
4. **Store** – Comments and “Yes/No” decisions are appended to Google Sheets.  
5. **Research & Enrich** – For “Yes” comments, Tavily provides context, and GPT generates a topic, hook, and outline.  
6. **Update Sheet** – The same row in Google Sheets is updated with enriched fields.  

---

## Google Sheets Setup  

Your Google Sheet should include these columns (in this order):  


id | text | author | likes | isIdea | topic | research | hook | outline
- **id** – unique identifier for each comment  
- **text** – the full YouTube comment  
- **author** – commenter’s name/handle  
- **likes** – number of likes on the comment  
- **isIdea** – “Yes” or “No” depending on GPT filter  
- **topic** – extracted video topic  
- **research** – 300–500 word background from Tavily  
- **hook** – engaging opening sentence for a video  
- **outline** – structured video outline  

---

## Setup Steps

* Connect your **Apify**, **OpenAI**, **Tavily**, and **Google Sheets** credentials in n8n.  
* Point the Google Sheets nodes to your own document and ensure the above headers exist.  
* Replace sample API keys with your own stored in n8n Credentials.  

**Time to set up:** \~15–25 minutes for a first-time n8n user (less if you already have credentials handy).  

---

## Customizing this workflow  

* **Filter logic** – Loosen the GPT filter to allow borderline ideas, or tighten it to only accept the best ones.  
* **Research depth** – Change Tavily’s search depth (e.g., `depth: basic` vs `depth: advanced`) to control how detailed the background research is.  
* **Notification channels** – Send new “Yes” ideas directly to **Slack** (`#content-ideas`), **Notion** (your content board), or **Email** (notify the content manager instantly).  
* **Alternative outputs** – Instead of hooks/outlines, generate:  
  - A **script draft** for YouTube Shorts.  
  - **Blog post angles** based on the same audience comments.  
  - A **poll question** for community engagement.  


## 📊 Basic Information

- **Workflow ID:** 7479
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 513
- **Downloads:** 51
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7479)

## 👤 Author

- **Name:** Muhammad Bello
- **Username:** @muhammad-bello

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **stickyNote** (×10)
- **httpRequest** 
- **filter** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
