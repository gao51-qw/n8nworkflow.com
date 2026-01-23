**Schema Markup Generator**
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