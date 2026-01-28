# Generate monthly financial reports with Gemini AI, SQL, and Outlook

> # 🚀 AI-Powered Business Performance Reporting Automation

**Unlock executive-level insights with ZERO manual work!**  
This n8n template empowers you to automate your entire monthly business performance reporting using dynamic SQL queries, AI-driven analysis, and beautiful HTML dashboards — all delivered directly to your inbox.

---

## 🎯 What This Automation Does

- 📆 **Triggers automatically every month** (5th of each month)
- 🧮 **Fetches financial data** from SQL (ERPNext or any database)
- 🔁 **Loops over cost centers** to analyze each business unit individually
- 📊 **Generates Profit & Loss reports**, WIP, Employee stats, and vertical breakdowns
- 🤖 **Uses Google Gemini 2.5 AI** to perform advanced financial analysis
- 💌 **Delivers a polished HTML report** to your email inbox
- 🔧 **Fully modular** – replace data source with Excel, Google Sheets, or APIs

![Sample Report](https://syncbricks.com/wp-content/uploads/2025/04/report.png)  

---

## 🧑‍🏫 Step-by-Step Video Tutorial

🎥 **Watch the full tutorial on YouTube:**  
[![Watch Tutorial](https://img.youtube.com/vi/yatQpQZLqg4/0.jpg)](https://youtu.be/yatQpQZLqg4)  
📌 *Learn how each node works and see the AI-generated report in action.*

---

## 🌐 Useful Links

- 🔗 **Sign up for n8n Cloud** (recommended for non-tech users):  
  👉 [https://n8n.syncbricks.com](https://n8n.syncbricks.com)

- 📘 **Download the step-by-step Guidebook (Free)**:  
  👉 [https://lms.syncbricks.com/books/n8n](https://lms.syncbricks.com/books/n8n)

- 📚 **Explore the full course on n8n** (includes templates, workflows, and AI integrations):  
  👉 [https://lms.syncbricks.com/courses/n8n](https://lms.syncbricks.com/courses/n8n)

---

## 🛠 Requirements

- ✅ n8n (Self-hosted or Cloud)
- ✅ SQL Database (MySQL / PostgreSQL / ERPNext)
- ✅ Microsoft Outlook or Gmail (to send the report)
- ✅ Gemini API Key (for AI analysis)
- ✅ Basic understanding of your data schema

---

## 💡 Why Use This Template?

- ⏱ **Saves 2-3 days of manual work every month**
- 📈 **Improves financial visibility across business units**
- 🤝 **Great for CFOs, COOs, Finance Analysts, and BI teams**
- 🔄 **Scales across multiple divisions and companies**
- 🧠 **Leverages AI for actionable insights and recommendations**

---

## 🧩 Customize It Your Way

- Replace the SQL nodes with:
  - Excel / Google Sheets
  - Airtable / APIs
  - Custom Applications

- Swap the AI model:
  - OpenAI GPT
  - Claude
  - DeepSeek

- Adjust the report structure or HTML style

---

## 🙌 Get Started Now

🎯 Import the JSON template → Connect your data → Receive business insights via email.  
Don’t let manual reporting slow down your decision-making.

👉 [Sign up for n8n Cloud](https://n8n.syncbricks.com)  
👉 [Learn n8n with Amjid](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  
👉 [Download Guide](https://lms.syncbricks.com/books/n8n)

---

**Created by [Amjid Ali](https://amjidali.com) | SyncBricks™ – Automation for Everyone**


## 📊 Basic Information

- **Workflow ID:** 3617
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 20675
- **Downloads:** 2067
- **Created:** 2025/4/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3617)

## 👤 Author

- **Name:** Amjid Ali
- **Username:** @amjid

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **mySql** (×5)
- **splitInBatches** 
- **set** (×3)
- **dateTime** 
- **code** (×7)
- **filter** 
- **html** 
- **merge** 
- **microsoftOutlook** 
- **wait** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
