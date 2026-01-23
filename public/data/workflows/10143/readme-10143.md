# Create personalized email outreach with AI, Telegram bot & website scraping

> # Demo Personalized Email

This n8n workflow is built for AI and automation agencies to **promote their workflows through an interactive demo** that prospects can try themselves.  
The featured system is a **deep personalized email demo**.

---

## 🔄 How It Works

1. **Prospect Interaction**
   - A prospect starts the demo via Telegram.  
   - The Telegram bot (created with BotFather) connects directly to your n8n instance.

2. **Demo Guidance**
   - The **RAG agent** and **instructor** guide the user step-by-step through the demo.  
   - Instructions and responses are dynamically generated based on user input.

3. **Workflow Execution**
   - When the user triggers an action (e.g., testing the email demo), n8n runs the workflow.  
   - The workflow collects website data using **Crawl4AI** or standard HTTP requests.

4. **Email Demo**
   - The system personalizes and sends a demo email through **SparkPost**, showing the automation’s capability.  

5. **Logging and Control**
   - Each user interaction is logged in your database using their `name` and `id`.  
   - The workflow checks limits to prevent misuse or spam.  

6. **Error Handling**
   - If a low-CPU scraping method fails, the workflow automatically escalates to a higher-CPU method.  

## ⚙️ Requirements

Before setting up, make sure you have the following:

- [**n8n**](https://n8n.io/) — Automation platform to run the workflow  
- [**Docker**](https://www.docker.com/) — Required to run Crawl4AI  
- [**Crawl4AI**](https://github.com/unclecode/crawl4ai) — For intelligent website crawling  
- [**Telegram Account**](https://t.me/BotFather) — To create your Telegram bot via BotFather  
- [**SparkPost Account**](https://www.sparkpost.com/) — To send personalized demo emails  
- A database (e.g., PostgreSQL, MySQL, or SQLite) — To store log data such as user name and ID  


## 🚀 Features

- **Telegram interface** using the BotFather API  
- **Instructor and RAG agent** to guide prospects through the demo  
- **Flow generation limits per user ID** to prevent abuse  
- **Low-cost yet powerful web scraping**, escalating from low- to high-CPU flows if earlier ones fail  

---

## 💡 Development Ideas

- Replace the RAG logic with your own query-answering and guidance method  
- Remove the flow limit if you’re confident the demo can’t be misused  
- Swap the personalized email demo with any other workflow you want to showcase  

---

## 🧠 Technical Notes

- **Telegram bot** created with BotFather  
- **Website crawl process:**
  - Extract sub-links via `/sitemap.xml`, `sitemap_index.xml`, or standard HTTP requests  
  - Fall back to **Crawl4AI** if normal requests fail  
  - Fetch sub-link content via HTTPS or Crawl4AI as backup  
- **SparkPost** used for sending demo emails  

---

## ⚙️ Setup Instructions

### 1. Create a Telegram Bot
- Use **BotFather** on Telegram to create your bot and get the **API token**.  
- This token will be used to connect your n8n workflow to Telegram.  

### 2. Create a Log Data Table
- In your database, create a table to store user logs.  
- The table must include at least the following columns:
  - `name` — to store the user’s name or Telegram username.  
  - `id` — to store the user’s unique identifier.  

### 3. Install Crawl4AI with Docker
- Follow the installation guide from the official repository:  
  👉 [https://github.com/unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)  
- **Crawl4AI** will handle website crawling and content extraction in your workflow.  

---
## 📦 Notes

This setup is optimized for **low cost**, **easy scalability**, and **real-time interaction** with prospects.  
You can customize each component — **Telegram bot behavior**, **RAG logic**, **scraping strategy**, and **email workflow** — to fit your agency’s demo needs.


👉 You can try the live demo here: [**@email_demo_bot**](https://t.me/email_demo_bot)

---



## 📊 Basic Information

- **Workflow ID:** 10143
- **Complexity:** advanced
- **Node Count:** 58
- **Views:** 433
- **Downloads:** 43
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10143)

## 👤 Author

- **Name:** Michael A Putra
- **Username:** @michael-ap

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** (×5)
- **httpRequest** (×6)
- **markdown** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **splitOut** 
- **aggregate** (×2)
- **emailSend** 
- **dataTable** (×4)
- **scheduleTrigger** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.agent** 
- **postgresTool** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStorePGVector** 
- **stickyNote** (×8)
- **xml** 
- **telegram** (×6)
- **switch** 
- **code** (×4)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 58 nodes with 44 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
