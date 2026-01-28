# Automatically enrich Salesforce accounts with web crawling, LinkedIn data, GPT

> *Crawl the web, mine LinkedIn, think with GPT, and auto‑enrich Salesforce—all inside n8n.*

---

## 🔧 How It Works (High-Level)

1. **Listen** – Trigger on new Salesforce Accounts.  
2. **Discover** – Crawl the company site (depth-limited) + grab/parse LinkedIn.  
3. **Distill** – GPT (JSON mode) returns a clean insight object + HTML summary.  
4. **Enrich** – Update the Account record in Salesforce automatically.

---

## 🛠 Setup Steps (≈15–25 minutes)

1. **Import** the workflow JSON into n8n.  
2. **Connect Credentials**: Salesforce OAuth2 + OpenAI API key.  
3. **Tune Settings**: Set `maxDepth` (default = 1), confirm the model (e.g., gpt‑4o).  
4. **Test** with a sample Account to verify crawl + update.  
5. **Enable Trigger** and let it run.

---

## 💼 Business Impact

- **Zero manual research**: Insights appear in Salesforce instantly.  
- **Consistent data**: Unified JSON schema + confidence rating.  
- **Faster qualification**: Reps see services, size, HQ, etc., without leaving SF.  
- **Scalable & automated**: Works 24/7 on every new Account.  
- **AI-ready outputs**: Raw JSON for automations, HTML for dashboards/Lightning.

---

### 🌟 Optional Enhancements

- Push insights to Slack/Teams.  
- Auto-create tasks if rating &lt; 60 or data missing.  
- Archive raw HTML to S3 for audits.

## 📊 Basic Information

- **Workflow ID:** 6586
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 374
- **Downloads:** 37
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6586)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×3)
- **stickyNote** (×2)
- **salesforceTrigger** 
- **salesforce** (×2)
- **set** (×3)
- **code** (×10)
- **if** (×2)
- **merge** (×3)
- **html** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
