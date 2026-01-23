# News search & categorization chatbot with Google News, SerpAPI, and OpenAI

> ## 🧑‍💻 Description
This workflow connects **SerpApi** with **OpenAI** inside **n8n** to automate Google News monitoring and analysis.  

It’s built for **market researchers, analysts, communications teams, and business leaders** who need to stay on top of fast-changing news without wasting time scrolling through endless headlines. Instead of manually searching, this workflow automatically fetches news, groups it into meaningful categories, and recommends the most relevant articles.  

**Problem it solves**:  
- Reduces time spent manually monitoring news.  
- Helps track competitors, industries, or emerging trends.  
- Provides structured, actionable insights from unstructured headline feeds.  

**Disclaimer: this template can only be used on self-hosted installations.**

![image.png](fileId:2208)

---

## 📌 Use Cases
- **Market Intelligence**: Track industry-specific news to guide strategy.  
- **Competitor Monitoring**: Automatically surface competitor mentions in the press.  
- **Research Support**: Organize articles into categories for academic or professional projects.  
- **Executive Briefings**: Deliver a curated daily digest to stakeholders.  
- **Trend Spotting**: Detect recurring topics to understand where coverage is growing.  

---

## ⚙️ Setup Instructions

### Preconditions
- You need a **self-hosted n8n instance** (this template doesn’t run on n8n.cloud).  
- A valid **SerpApi account + API Key**.  
- An **OpenAI API Key** with billing enabled.  
- Optional: Connected Slack, Email, or Google Sheets credentials if you plan to extend output.  

---

### 1️⃣ Set Up SerpApi Connection
1. Create a free account at [SerpApi](https://serpapi.com/)  
2. Copy your **API Key** from the dashboard  
3. In **n8n → Credentials → New → SerpApi**  
   - Paste your API Key → **Save**  
4. In the workflow, select your SerpApi credential in the **Google News Search** node.  

### 2️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to **Billing** and ensure your account has credits/funding  
3. Copy your **API Key** into the **OpenAI credentials** in n8n  

---

## 🧠 Workflow Breakdown
1. **Chat Trigger** → A user enters a search query (e.g., “EV market 2025”).  
2. **Google News Search (SerpApi)** → Fetches the latest headlines for that query.  
3. **Split Out Links** → Separates articles into individual items.  
4. **Aggregate Node** → Merges article titles and links into a structured list.  
5. **OpenAI Agent** → Summarizes, categorizes, and selects the most relevant article per category.  
6. **Response Output** → Returns a clean, categorized digest with clickable links.  

---

## 🎛️ Customization Guidance
- **Adjust Categories**: Change the OpenAI system prompt to return 3, 5, or 10 categories depending on the depth you want.  
- **Regional Focus**: Use SerpApi’s filters (`gl=us`, `hl=en`) to restrict results by geography or language.  
- **Delivery Methods**: Add Slack, Email, or Google Sheets nodes to automatically share the digest with your team.  
- **Automation Frequency**: Add a **Schedule Trigger** to run daily, weekly, or at custom intervals.  
- **Extended Analysis**: Modify the prompt to include sentiment analysis, top keywords, or executive summaries.  
- **Multi-Query Runs**: Duplicate the SerpApi node to monitor multiple industries or competitors in one workflow.  

---

## 💬 Example Q&A
**Question:** *“What’s happening in renewable energy today?”*  
**Response:**  
- **Policy**: “US expands solar subsidies” – [link]  
- **Innovation**: “New battery breakthrough announced” – [link]  
- **Market Moves**: “Wind energy stocks surge” – [link]  
- **Competition**: “Shell invests in offshore projects” – [link]  
- **Sustainability**: “Community solar initiatives expand” – [link]  

---

## 📬 Contact
Need help customizing this template (e.g., tracking multiple industries, adding auto-delivery, or integrating dashboards)?  

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7741
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 565
- **Downloads:** 56
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7741)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **n8n-nodes-serpapi.serpApi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×4)
- **splitOut** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
