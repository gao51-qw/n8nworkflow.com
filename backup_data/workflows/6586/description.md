*Crawl the web, mine LinkedIn, think with GPT, and auto‑enrich Salesforce—all inside n8n.*

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