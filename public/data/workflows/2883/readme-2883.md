# Open deep research - AI-powered autonomous research workflow

> # **Open Deep Research - AI-Powered Autonomous Research Workflow**  

### **Description**  
This workflow automates deep research by leveraging **AI-driven search queries, web scraping, content analysis, and structured reporting**. It enables autonomous research with **iterative refinement**, allowing users to collect, analyze, and summarize high-quality information efficiently.

### **How it works**  

1. **🔹 User Input**  
   - The user submits a research topic via a chat message.

2. **🧠 AI Query Generation**  
   - A Basic LLM generates **up to four refined search queries** to retrieve relevant information.

3. **🔎 SERPAPI Google Search**  
   - The workflow loops through each generated query and retrieves **top search results** using the **SerpAPI API**.

4. **📄 Jina AI Web Scraping**  
   - Extracts and summarizes webpage content from the URLs obtained via SerpAPI.

5. **📊 AI-Powered Content Evaluation**  
   - An **AI Agent** evaluates the **relevance** and **credibility** of the extracted content.

6. **🔁 Iterative Search Refinement**  
   - If the AI finds **insufficient** or **low-quality information**, it generates **new search queries** to improve results.

7. **📜 Final Report Generation**  
   - The AI compiles a **structured markdown report**, including **sources with citations**.

### **Set Up Instructions**  
🚀 **Estimated setup time**: ~10-15 minutes  

- **✅ Required API Keys:**  
  - [SerpAPI](https://serpapi.com/) → For Google Search results  
  - [Jina AI](https://jina.ai/) → For text extraction  
  - [OpenRouter](https://openrouter.ai/) → For AI-driven query generation and summarization  

- **⚙️ n8n Components Used:**  
  - AI Agents with **memory buffering** for iterative research  
  - **Loops** to process multiple search queries efficiently  
  - **HTTP Requests** for direct API interactions with **SerpAPI** and **Jina AI**  

- **📝 Recommended Enhancements:**  
  - Add **sticky notes** in n8n to explain each step for new users  
  - Implement **Google Drive or Notion Integration** to save reports automatically  

---

🎯 **Ideal for:**  
✔️ **Researchers & Analysts** - Automate background research  
✔️ **Journalists** - Quickly gather reliable sources  
✔️ **Developers** - Learn how to integrate multiple AI APIs into n8n  
✔️ **Students** - Speed up literature reviews  

🔗 **Completely free and open-source!** 🚀  


## 📊 Basic Information

- **Workflow ID:** 2883
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 28926
- **Downloads:** 2892
- **Created:** 2025/2/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2883)

## 👤 Author

- **Name:** Leonard
- **Username:** @leonardvanhemert

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **code** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **splitInBatches** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
