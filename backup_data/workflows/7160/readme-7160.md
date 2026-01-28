# Deep research agent - automated research & Notion report builder

> ### Overview  

- This workflow acts as an AI-powered research assistant that takes a topic from the user, performs multi-step intelligent research, and stores the final report in Notion. It uses advanced search, content extraction, and AI summarization to deliver a high-quality research report—fully automated from query to publication.

---

### How It Works  
- **User Interaction**  
  - The workflow starts by asking the user what topic they want to research.  
  - A “Strategy Agent” asks 2–3 clarifying questions to refine the scope.  
  - Once the user confirms, it creates a **Notion database page** with the research title.

- **Search Query Generation**  
  - Generates up to **3 relevant search queries** for the given topic.

- **Data Gathering** (Loop over each query)  
  - Sends the query to **Tavily Search API** to find the most relevant blogs/articles.  
  - Picks the top-matched link and uses Tavily again to extract its content.  
  - Repeats the process for all 3 queries.

- **Report Compilation**  
  - Aggregates extracted content from all sources.  
  - A **Final Report Agent** creates a well-structured research report in **Markdown**.  
  - Converts Markdown → HTML → splits into chunks.  
  - Pushes each chunk into the Notion report page.  

- **Delivery**  
  - Sends the **final Notion report link** back to the user.

---

### How to Use  
- This workflow is triggered via **Webhook**.  
- **Attach the provided webhook URL** to any application, form, or chatbot to collect the user’s topic.  
- Once triggered, the workflow will run automatically and deliver the research link without any manual steps.

---

### Requirements  
To use this workflow, you’ll need:  
- **n8n account** (self-hosted or cloud)  
- **Notion account** with a database where reports will be stored  
- **Tavily API Key** – for search & content extraction  
- **OpenRouter API key** *or* **OpenAI API key** – for AI agents & report generation  
- **Google Gemini API Key** – for converting Markdown to HTML and splitting content for Notion  
- Notion database ID connected in n8n


## 📊 Basic Information

- **Workflow ID:** 7160
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 2426
- **Downloads:** 242
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7160)

## 👤 Author

- **Name:** Aziz B
- **Username:** @azizb28

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **splitOut** (×2)
- **splitInBatches** (×2)
- **httpRequest** (×4)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **aggregate** (×2)
- **notion** (×3)
- **markdown** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **filter** 
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **webhook** 
- **respondToWebhook** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
