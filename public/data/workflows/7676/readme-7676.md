# Import research papers from Telegram to Zotero with AI abstract summaries

> # Automatically Import Research Papers using DOI URL from Telegram to Zotero

This workflow allows you to automatically import research papers into your Zotero library by simply sending a DOI link through Telegram. It fetches metadata from reliable sources such as Crossref, DataCite, and Unpaywall, enriches the bibliographic details, attaches the best available full-text PDF when possible, and generates a concise summary of the abstract using an LLM before sending it back to Telegram.  

## ✨ Key Features  
- **Telegram Integration** – Send a DOI link via Telegram bot to trigger the workflow.  
- **DOI Parsing** – Automatically detects and extracts DOI or arXiv identifiers from user messages.  
- **Metadata Fetching** – Retrieves bibliographic information from **Crossref**, **DataCite**, and **Unpaywall**.  
- **Smart PDF Finder** – Locates the best available PDF (publisher link, open access, or arXiv).  
- **Zotero Integration** – Creates a Zotero parent item with complete metadata and attaches the PDF link when available.  
- **Abstract Summarization** – Uses a basic LLM chain to generate a short and clear summary of the abstract.  
- **Telegram Feedback** – Sends the title, URL, and abstract summary back to the user in Telegram.  


## 🔑 Required Credentials  
- **Telegram API** – To connect the workflow with your Telegram bot.  
- **Zotero API Key** – To create and update items in your Zotero library.  
- **OpenRouter API Key** – To enable the LLM for generating abstract summaries.  
- *(Optional)* Email for **Unpaywall API** requests (recommended for stable access).  

## 💡 Benefits  
- Save time by automating manual research paper imports.  
- Ensure high-quality metadata by combining multiple sources (Crossref, DataCite, Unpaywall).  
- Get instant summaries of abstracts directly in Telegram for quick understanding.  
- Keep your Zotero library organized with accurate titles, abstracts, authors, and tags.  
- Quickly attach available full-text PDFs without manual searching.  
- Improve your academic workflow by managing references and summaries directly from Telegram.  


## 📊 Basic Information

- **Workflow ID:** 7676
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 225
- **Downloads:** 22
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7676)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **code** (×2)
- **httpRequest** (×6)
- **set** (×4)
- **merge** 
- **if** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
