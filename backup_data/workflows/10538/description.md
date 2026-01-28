## 🧠 Overview
Discover and analyze the most valuable community-built n8n workflows on GitHub.  
This automation searches public repositories, analyzes JSON workflows using AI, and saves a ranked report to Google Sheets — including summaries, use cases, difficulty, stars, node count, and repository links.

---

## ⚙️ How It Works
1. **Search GitHub Code API** — queries for `extension:json n8n` and splits results  
2. **Fetch & Parse** — downloads each candidate file’s raw JSON and safely parses it  
3. **Extract Metadata** — detects AI-powered flows and collects key node information  
4. **AI Analysis** — evaluates the top N workflows (description, use case, difficulty)  
5. **Merge Insights** — combines AI analysis with GitHub data  
6. **Save to Google Sheets** — appends or updates by workflow name  

---

## 🧩 Setup Instructions (5–10 min)
- Open **Config** node and set:  
  - `search_query` — e.g., `"openai" extension:json n8n`  
  - `max_results` — number of results to fetch (1–100)  
  - `ai_analysis_top` — number of workflows analyzed with AI  
  - `SPREADSHEET_ID`, `SHEET_NAME` — Google Sheets target  
- Add **GitHub PAT** via HTTP Header Credential:  
  - `Authorization: Bearer &lt;YOUR_TOKEN&gt;`  
- Connect **OpenAI Credential** to **OpenAI Chat Model**  
- Connect **Google Sheets (OAuth2)** to **Save to Google Sheets**  
- *(Optional)* Enable **Schedule Trigger** to run weekly for automatic updates  

&gt; 💡 Tip: If you need to show literal brackets, use backticks like ``&lt;example&gt;`` (no HTML entities needed).

---

## 📚 Use Cases
### 1) Trend Tracking for AI Automations
- **Goal:** Identify the fastest-growing AI-powered n8n workflows on GitHub.  
- **Output:** Sorted list by stars and AI detection, updated weekly.

### 2) Internal Workflow Benchmarking
- **Goal:** Compare your organization’s workflows against top public examples.  
- **Output:** Difficulty, node count, and AI usage metrics in Google Sheets.

### 3) Market Research for Automation Agencies
- **Goal:** Discover trending integrations and tool combinations (e.g., OpenAI + Slack).  
- **Output:** Data-driven insights for client projects and content planning.

---

## 🧪 Notes & Best Practices
- 🔐 No hardcoded secrets — use **n8n Credentials**  
- 🧱 Works with self-hosted or cloud n8n  
- 🧪 Start small (`max_results = 10`) before scaling  
- 🧭 Use “AI Powered” + “Stars” columns in Sheets to identify top templates  
- 🧩 Uses only Markdown sticky notes — no HTML formatting required  

---

## 🔗 Resources
- **GitHub (template JSON):** [github-workflow-finder-ai.json](https://github.com/yskmtb0714/n8n-workflows/blob/main/github-workflow-finder-ai.json)￼
