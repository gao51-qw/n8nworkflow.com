# Automate call center sentiment analysis with GPT-4o-mini and Google Sheets

> ## ✅ What problem does this workflow solve?

Call centers often record conversations for quality control and training, but reviewing every transcript manually is tedious and inefficient.
This workflow automates sentiment analysis for each call, providing structured feedback across multiple key categories, so managers can focus on improving performance and training.

---

## ⚙️ What does this workflow do?

1. Accepts a **Google Sheet** containing:
   - Call transcript
   - Agent name
   - Customer name
2. Analyzes each call transcript across multiple sentiment dimensions:
   - 👋 **Greeting Sentiment**
   - 🧑‍💼 **Agent Friendliness**
   - ❓ **Problem-Solving Sentiment**
   - 🙂 **Customer Sentiment**
   - 👋 **Closing Sentiment**
   - ✅ **Issue Resolved (Yes/No)**
3. Add Conversation Topics discussed in a call
4. Calculates an **overall call rating** based on combined analysis.
5. Updates the Google Sheet with:
   - Individual sentiment scores
   - Issue resolution status
   - Final call rating

---

## 🔧 Setup Instructions

### 📄 Google Sheets
- Prepare a sheet with the following columns:
  - Transcript
  - Agent Name
  - Customer Name

The workflow will append results in new columns automatically:
- Greeting Sentiment
- Closing Sentiment
- Agent Friendliness
- Problem Solving
- Customer Sentiment
- Issue Resolved
- Overall Call Rating (out of 5 or 10)

### 🧠 OpenAI Setup
- Connect OpenAI API to perform NLP-based sentiment classification.
- For each transcript, use structured prompts to analyze individual components.

---

## 🧠 How it Works – Step-by-Step

1. **Sheet Scan** – The workflow reads rows from the provided Google Sheet.
2. **Loop Through Calls** – For each transcript, it:
   - Sends prompts to OpenAI to analyze:
     - Greeting tone (friendly/neutral/rude)
     - Problem-solving quality (clear/confusing/helpful)
     - Closing sentiment
     - Agent attitude
     - Customer satisfaction
     - Whether the issue was resolved
   - Calculates a **composite rating** from all factors.
3. **Update Sheet** – All analyzed data is written back into the Google Sheet.

---

## 📊 Example Output

[https://docs.google.com/spreadsheets/d/1aWU28D_73nvkDMPfTkPkaV53kHgX7cg0W4NwLzGFEGU/edit?gid=0#gid=0](https://docs.google.com/spreadsheets/d/1aWU28D_73nvkDMPfTkPkaV53kHgX7cg0W4NwLzGFEGU/edit?gid=0#gid=0)

---

## 👤 Who can use this?

This workflow is ideal for:
- ☎️ **Call Centers**
- 🎧 **Customer Support Teams**
- 🧠 **Training & QA Departments**
- 🏢 **BPOs or Support Vendors**

If you want deeper insight into every customer interaction, this workflow delivers **quantified, actionable sentiment metrics** automatically.

---

## 🛠 Customization Ideas

- 📅 Add scheduled runs (daily/weekly) to auto-analyze new calls.
- 📝 Export flagged or low-rated calls into a review dashboard.
- 🧩 Integrate with Slack or email to send alerts for low-score calls.
- 🗂 Filter by agent, category, or score to track performance trends.

---

## 🚀 Ready to Use?

Just connect:
- ✅ Google Sheets (with transcript data)
- ✅ OpenAI API

…and this workflow will automatically turn your raw call transcripts into **actionable sentiment insights**.



## 📊 Basic Information

- **Workflow ID:** 7624
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 678
- **Downloads:** 67
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7624)

## 👤 Author

- **Name:** InfyOm Technologies
- **Username:** @infyom

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitInBatches** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
