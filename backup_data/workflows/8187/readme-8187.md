# Generate email newsletters from Telegram keywords with Dumpling AI and GPT

> ### Who is this for?  
This workflow is perfect for content creators, newsletter publishers, digital marketers, and virtual assistants who need a quick way to generate professional newsletters from trending news without manually curating and formatting articles.  

---  

### What problem is this workflow solving?  
Manually searching for news, summarizing articles, formatting them into a newsletter, and sending them by email is time-consuming and inconsistent. This workflow automates the process end-to-end: from capturing a keyword in Telegram to sending a ready-to-publish HTML newsletter by Gmail.  

---  

### What this workflow does  
The workflow begins when a keyword is received from Telegram. The keyword is expanded into trending suggestions using Dumpling AI Autocomplete, then passed to Dumpling AI Google News to fetch recent articles. The results are structured, split, and scraped for clean content. The combined content is sent to OpenAI to generate a professional HTML newsletter and subject line, which is finally delivered to a chosen inbox via Gmail.  

---  

### Nodes Overview  

1. Telegram Trigger – `Start: Receive Keyword`  
   Listens for a keyword sent from Telegram to initiate the workflow.  

2. HTTP Request – `Google Autocomplete via Dumpling AI`  
   Expands the keyword into trending search suggestions.  

3. HTTP Request – `Search Google News via Dumpling AI`  
   Fetches recent news articles related to the autocomplete suggestions.  

4. Parser and Split Nodes – `Process Articles`  
   Formats results into structured JSON and splits them into individual articles.  

5. HTTP Request – `Scraper via Dumpling AI`  
   Scrapes and cleans each article to extract high-quality text.  

6. Aggregate – `Combine Article Content`  
   Merges all cleaned articles into a single dataset for newsletter generation.  

7. OpenAI – `Generate Newsletter`  
   Produces a ready-to-use HTML newsletter and subject line.  

8. Gmail – `Send Newsletter`  
   Delivers the completed newsletter to the specified inbox.  

---  

### 📝 Notes  

- You must connect Dumpling AI and OpenAI accounts with valid API keys before running.  
- The Telegram trigger can be configured for private or group chats depending on your use case.  
- Ensure Gmail is properly connected with send permissions enabled.  


## 📊 Basic Information

- **Workflow ID:** 8187
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 173
- **Downloads:** 17
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8187)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **httpRequestTool** (×2)
- **wait** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **splitInBatches** 
- **httpRequest** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
