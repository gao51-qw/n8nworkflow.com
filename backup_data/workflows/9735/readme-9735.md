# Subdomain enumeration with Subfinder, HTTPX & GPT-4-Mini for security reconnaissance

> Generates a wordlist of 1,000–15,000 subdomains created by an AI agent by correlating detected technologies and recurring patterns.
## **Objective**
Assist security researchers, bug bounty hunters, and web pentesters in the reconnaissance phase by incorporating an AI agent that generates additional potential subdomains. This enables discovery of assets outside the scope of traditional scans and expands the analyzable attack surface.
## **How it works**
1. The user uploads a list of domains to scan (scope).
2. The workflow performs a passive, comprehensive scan using four sources (subfinder, assetfinder, crt.sh, Wayback Machine).
3. The scan results and detected technologies are passed to an AI agent.
4. The agent runs in a loop up to 20 iterations, generating new subdomains each pass (average output depends on input and model).
5. Generated subdomains are validated and deduplicated. Syntax is checked and availability is tested (host active / httpx).
### Requirements
- SSH access with a root user and the following tools:

1. [Subfinder](https://github.com/projectdiscovery/subfinder)
2. [Assetfinder](https://github.com/tomnomnom/assetfinder)
3. [HTTPX](https://github.com/projectdiscovery/httpx)

It is recommended to use a VPS with SSH because if the scope is very large the workflow will take a long time.

## 📊 Basic Information

- **Workflow ID:** 9735
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 1212
- **Downloads:** 121
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9735)

## 👤 Author

- **Name:** Javier Rieiro
- **Username:** @pyus3r

## 🏷️ Categories

- SecOps
- AI Chatbot

## 🔗 Nodes Used

- **ssh** (×6)
- **httpRequest** (×2)
- **code** (×10)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×14)
- **summarize** (×2)
- **webhook** 
- **respondToWebhook** 
- **convertToFile** (×2)
- **splitOut** 
- **set** (×3)
- **merge** (×2)
- **splitInBatches** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
