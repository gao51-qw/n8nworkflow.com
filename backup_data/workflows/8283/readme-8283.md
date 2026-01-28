# Monitor new CVEs for bug bounty hunting with Gemini AI and Slack alerts

> ## How it works
Automatically monitors NIST's CVE database every hour for new vulnerabilities and uses AI to assess their relevance for bug bounty hunting, delivering actionable intelligence directly to Slack.

## Set up steps
- Get Google Gemini API key from AI Studio (free tier available)
- Create Slack bot with chat:write permissions  
- Configure your target Slack channel
- AI filters and scores each CVE for exploitation potential

## What you'll get
Real-time CVE intelligence with:
- Bug bounty relevance scoring (HIGH/MEDIUM/LOW/NONE)
- Actionable testing strategies for each vulnerability
- Slack-formatted reports with CVSS severity scores
- Focus on web-testable vulnerabilities only

Part of "The Warden" project - perfect for security researchers who want AI-filtered, actionable CVE intelligence without the noise.

![image.png](fileId:2313)

## 📊 Basic Information

- **Workflow ID:** 8283
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 851
- **Downloads:** 85
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8283)

## 👤 Author

- **Name:** Kunsh
- **Username:** @ethicxlhuman

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×5)
- **httpRequest** 
- **splitOut** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
