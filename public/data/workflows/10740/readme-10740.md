# Automate external attack surface mapping with Shodan API and DNS lookups

> The **Bug Bounty Target Recon** n8n workflow is a powerful automation tool for security professionals and ethical hackers.

It efficiently automates the time-consuming process of external attack surface mapping.

By taking a domain, the workflow performs DNS Lookups to identify all associated IP addresses, and then utilizes the Shodan API to query:

- Detailed service banners
- Open ports
- Technologies
- Known vulnerabilities

This system delivers crucial, organized OSINT data, saving the user hours of manual scripting and reconnaissance, and providing a clear, actionable map of a target's exposed infrastructure.

## 📊 Basic Information

- **Workflow ID:** 10740
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 305
- **Downloads:** 30
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10740)

## 👤 Author

- **Name:** Sean Birmingham
- **Username:** @knute

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **stickyNote** (×8)
- **manualTrigger** 
- **set** (×3)
- **httpRequest** (×2)
- **code** (×2)
- **if** 
- **wait** 
- **googleSheets** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
