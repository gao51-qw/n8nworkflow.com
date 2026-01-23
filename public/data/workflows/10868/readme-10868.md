# IP threat intelligence report generator with VirusTotal, OpenAI and Google Docs

> Cybersec IP Intelligence Gatherer
---
This project utilizes the VirusTotal node and Geolocation node to thoroughly gather data on a provided IP address. 

From there a LLM AI assistant will assess the gathered data and create a report that will then be uploaded to Google Docs.

___

This workflow is perfect for:
- Cybersecurity Analysis
- Security Audits
- Penetration Testing
- Ethical Hacking

---
1. Configure Virus Total Node Credentials **Double click** to edit and enter your VirusTotal credentials. This node will assess the target IP's reputation.
2. Configure OpenAI Node Credentials **Double click** to edit and enter your OpenAI credentials.
3. Configure Google OAuth credentials **Double click** to edit and configure this node with your Google credentials and Sheet Settings.
5. Click the orange **'Execute Workflow'** button.
6. Enter an IP address and click 'submit' to generate a report.


## 📊 Basic Information

- **Workflow ID:** 10868
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 295
- **Downloads:** 29
- **Created:** 2025/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10868)

## 👤 Author

- **Name:** Sean Birmingham
- **Username:** @knute

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDocs** 
- **stickyNote** (×4)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
