# Audit & generate JSON-LD schema markup for SEO with GPT-4.1-mini + Gmail

> **Schema Markup Generator**
Automatically audit and optimize your site’s JSON-LD structured data and email a step-by-step implementation guide.

---

**What It Does**

* Collects a website URL & email via form
* Extracts existing JSON-LD, identifies gaps
* Generates optimized schema markup (GPT-4.1-mini)
* Builds an HTML before/after guide with action items
* Emails the full implementation instructions

---

**Prerequisites**

* n8n instance (self-hosted, Desktop, or Cloud)
* Gmail OAuth2 credentials
* OpenRouter API key (for GPT-4.1-mini)

---

**Quick Setup**

1. **Gmail**: Add OAuth2 credential → select in “Send Email” node
2. **OpenRouter**: Store API key → link in “Schema Markup Agent” node
3. **Form**: Configure fields `websiteUrl` & `emailAddress` in your Webhook/Form node

---

**Customization**

* **AI Prompt**: Tweak system message to focus on specific schema types or output style
* **Email Template**: Modify HTML header/footer or add sections

---

**Troubleshooting & Limits**

* Monitor OpenRouter rate limits and Gmail send quotas
* Ensure target sites allow scraping for schema extraction

## 📊 Basic Information

- **Workflow ID:** 3980
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 481
- **Downloads:** 48
- **Created:** 2025/5/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3980)

## 👤 Author

- **Name:** Ari Nakos
- **Username:** @just-aristides

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.toolCode** 
- **formTrigger** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
