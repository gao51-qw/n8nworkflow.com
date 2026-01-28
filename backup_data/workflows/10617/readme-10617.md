# Brand DNA generator using JotForm, Google Search, Gemini AI & Notion

> # Automated Brand DNA Generator Using JotForm, Google Search, AI Extraction & Notion

The Brand DNA Generator workflow automatically scans and analyzes online content to build a company’s Brand DNA profile.  It starts with input from a form, then crawls the company’s website and Google search results to gather relevant information. Using AI-powered extraction, the system identifies insights such as value propositions, ideal customer profiles (ICP), pain points, proof points, brand tone, and more.  All results are neatly formatted and automatically saved to a Notion database as a structured Brand DNA report, eliminating the need for manual research.

## 🛠️ Key Features
- Automated data capture, collects company data directly from form submissions and Google search results.  
- Uses AI-powered insight extraction with LLMs to extract and summarize brand-related information from website content.  
- Fetches clean text from multiple web pages using HTTP requests and a content extractor.  
- Merges extracted data from multiple sources into a single Brand DNA JSON structure.  
- Automatically creates a new page in Notion with formatted sections (headings, paragraphs, and bullet points).  
- Handles parsing failures and processes multiple pages efficiently in batches.

## 🔧 Requirements
- JotForm API Key, to capture company data from form submissions.  
- SerpAPI Key, to perform automated Google searches.  
- OpenRouter / LLM API, for AI-based language understanding and information extraction.  
- Notion Integration Token & Database ID, to save the final Brand DNA report to Notion.

## 🧩 Setup Instructions
1. Connect your JotForm account and select the form containing the fields Company Name and Company Website.  
2. Add your SerpAPI Key.  
3. Configure the AI model using OpenRouter or LLM.  
4. Enter your Notion credentials and specify the databaseId in the Create a Database Page node.  
5. Customize the prompt in the Information Extractor node to modify the tone or structure of AI analysis (Optional).  
6. Activate the workflow, then submit data through the JotForm to test automatic generation and Notion integration.

## 💡 Final Output  
A complete Brand DNA Report containing:
- Company Description  
- Ideal Customer Profile  
- Pain Points  
- Value Proposition  
- Proof Points  
- Brand Tone  
- Suggested Keywords  
All generated automatically from the company’s online presence and stored in Notion with no manual input required.

## 📊 Basic Information

- **Workflow ID:** 10617
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 41
- **Downloads:** 4
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10617)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **jotFormTrigger** 
- **code** (×5)
- **n8n-nodes-serpapi.serpApi** 
- **httpRequest** 
- **n8n-nodes-webpage-content-extractor.webpageContentExtractor** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **splitInBatches** 
- **notion** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
