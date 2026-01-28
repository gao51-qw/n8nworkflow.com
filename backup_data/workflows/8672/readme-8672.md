# Generate domain insights with WHOIS lookup and GPT-5-Nano via RapidAPI

> This template allows you to automatically fetch WHOIS data for any domain and display it in a clean, modern HTML card. It doesn’t just stop at showing raw registry data — it also uses a lightweight AI model to generate a short analysis or conclusion about the domain.

It’s designed for **SEO specialists, web developers, sysadmins, digital marketers, and cybersecurity enthusiasts** who want quick and structured access to domain ownership and status details without wasting time on manual searches.

#### What it does:

* Receives a domain name via webhook.
* Queries the WHOIS API through RapidAPI.
* Extracts and formats key details (registrar, creation date, expiry date, DNS, domain status, etc.).
* Uses AI (GPT-5-Nano) to generate a short descriptive insight about the domain.
* Returns everything in a **responsive, styled HTML card** (light + dark mode included).

#### Requirements:

* A free account on [RapidAPI.com](https://rapidapi.com).
* Use of the **Bulk WHOIS API** (includes up to 1,000 requests per month free, no credit card required).

#### Who is it for?

* **SEO professionals** who need to quickly check domain lifespans, expirations, and registrar info.
* **Web developers** who want to integrate WHOIS checks into dashboards, apps, or chatbots.
* **IT admins & security teams** who monitor domains for fraud, abuse, or expiry.
* **Entrepreneurs & marketers** researching competitors’ domains.

This template saves time, improves workflows, and makes WHOIS data both **actionable** and **user-friendly**.



## 📊 Basic Information

- **Workflow ID:** 8672
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 460
- **Downloads:** 46
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8672)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **httpRequestTool** 
- **httpRequest** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
