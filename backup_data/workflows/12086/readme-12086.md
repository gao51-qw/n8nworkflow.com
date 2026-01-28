# Monitor Cloudflare incidents and alert via Slack, Telegram, and Jira

> # Cloudflare Incident Monitoring & Escalation Workflow
## 🚀 Try Decodo — Web Scraping & Data API (Coupon: **TRUNG**)
![Decodo Logo](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/decodo-logo-black.jpg)
**Decodo** is a powerful public data access platform offering managed web scraping APIs and proxy infrastructure to collect structured web data at scale. It handles proxies, anti-bot protection, JavaScript rendering, retries, and global IP rotation—so you can focus on data, not scraping complexity.
**Why Decodo**
- Managed **Web Scraping API** with anti-bot bypass & high success rates  
- Works with JS-heavy sites; outputs JSON/HTML/CSV  
- Easy integration (Python, Node.js, cURL) for eCommerce, SERP, social & general web data
**🎟️ Special Discount**
Use coupon **`TRUNG`** to get the **Advanced Scraping API** plan — ~**23,000 requests for ~$5**.

## Who this workflow is for
For **DevOps, SRE, IT Ops, and Platform teams** running production traffic behind Cloudflare who need reliable incident awareness without alert fatigue.
Use it if you want:
- Continuous Cloudflare incident monitoring
- Clear severity-based routing
- Automatic escalation into JIRA
- Clean Slack & Telegram notifications
- Deduplicated, noise-controlled alerts
## What this workflow does
This workflow polls the **Cloudflare Status API**, detects unresolved incidents, scores their impact, and routes them to the right channels.
High-impact incidents are escalated to JIRA.
Lower-impact updates are notified (or skipped) to reduce noise.
## How it works (high level)
1. Runs on a fixed schedule (e.g. every 5 minutes)
2. Fetches current Cloudflare incidents
3. Stops early if no active issues exist
4. Normalizes and scores incidents (severity, impact, affected service)
5. Deduplicates previously-alerted incidents
6. Builds human-readable notification payloads
7. Routes by impact:
   - **High** → create JIRA incident + notify
   - **Low** → notify or suppress
8. Sends alerts to Slack and Telegram
## Requirements
- Decoco Scrapper API credential
- n8n (self-hosted or Cloud)
- Cloudflare Status API (public)
- Slack bot (`chat:write`)
- Telegram bot + chat ID
- JIRA project with issue-create permission
- Optional LLM credentials (summarization/classification)
## Notes
- All secrets are stored in **n8n Credentials**
- Workflow is **idempotent** and safe to rerun
- No assumptions about root cause or remediation
Built for production-grade incident visibility with **n8n**.


## 📊 Basic Information

- **Workflow ID:** 12086
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 7
- **Downloads:** 0
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12086)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **if** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **noOp** (×3)
- **slack** (×3)
- **telegram** (×2)
- **googleSheets** 
- **code** (×3)
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **jira** 
- **set** 
- **@decodo/n8n-nodes-decodo.decodo** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
