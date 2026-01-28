# Automated CVE scanning of Bug Bounty programs with Nuclei and Project Discovery

> ## Description
Automates daily CVE-driven scanning against bug bounty scopes. It fetches bug-bounty domains, pulls newly published Project Discovery templates, converts them to Nuclei rules, runs targeted scans, and emails findings.
## Objective
Help security researchers and bug bounty hunters discover exploitable instances quickly by automatically running the latest public templates from Project Discovery against a consolidated bug-bounty scope. Reduce manual steps and maintain continuous reconnaissance.
## How it works
1. The workflow accepts or fetches a domain list that covers HackerOne, Bugcrowd, Intigriti, and YesWeHack.
2. It downloads the latest public templates from Project Discovery.
3. For each new template published since the last run it: creates a file, uploads it to a remote host, and converts it to a Nuclei-compatible YAML.
4. It uploads a consolidated domains wordlist to the remote host.
5. It executes Nuclei with the new templates against the domains list using configured flags (concurrency, rate limits, severity tags).
6. It collects and deduplicates Nuclei output.
7. If results exist, it sends the findings via Gmail.
## Requirements
• SSH access (root or equivalent) to a VPS or host.
• Nuclei installed on the remote host.
• Gmail OAuth2 credentials for sending notifications.
• Recommended: VPS with enough CPU and network capacity for concurrent scanning when scope is large.

## 📊 Basic Information

- **Workflow ID:** 10054
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 915
- **Downloads:** 91
- **Created:** 2025/10/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10054)

## 👤 Author

- **Name:** Javier Rieiro
- **Username:** @pyus3r

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **convertToFile** (×2)
- **ssh** (×5)
- **splitInBatches** (×2)
- **splitOut** 
- **filter** 
- **if** (×2)
- **set** (×3)
- **gmail** 
- **summarize** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
