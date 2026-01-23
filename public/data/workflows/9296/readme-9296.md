# Technical SEO audits with GPT-4o-mini & multi-format reporting (Sheets/Email)

> 
Instantly map all internal URLs, perform **AI-powered (ChatGPT)** analysis, and deliver results in **HTML via webhook, Google Sheets, or email.**
*All from your own n8n instance!*

---

## 💡 Why this workflow?

* **Forget expensive tools:** Run deep, visual audits replacing Screaming Frog or Ahrefs.
* **Real URL mapping:** Reads the sitemap, filters only internal URLs, and analyzes each one individually.
* **AI-powered analysis:** ChatGPT detects critical issues, recommendations, and best practices on every page.
* **Error handling:** The workflow includes robust error handling and guides you on what to do in each case.
* **Client-ready results:** Receive a professional HTML report, an email summary, or push it to Google Sheets for team collaboration.
* **Automate by webhook or manually:** Use it in backend integrations or trigger with a button.

---

## 🧠 What does the workflow do?

1. Automatically detects the sitemap (`robots.txt → sitemap.xml`).
2. Filters only internal URLs (ignores assets, images, scripts, etc).
3. Fetches the full HTML content of each URL.
4. Uses **ChatGPT (GPT-4o-mini)** for professional diagnostics (meta tags, headings, hreflang, Open Graph, links, duplicate content, etc).
5. Groups results (critical issues, recommendations, best practices) and presents them as:

   * 📄 Professional **HTML report** (ready to send/share)
   * 📊 **Google Sheets** (collaborative structure)
   * 🔗 **Webhook or HTML email** (for automation)

---

## 🛠️ Technologies / APIs Used

* **n8n** (self-hosted or cloud instance required)
* **ChatGPT API** (required, approx. cost: €0.01 per 20 URLs analyzed)
* **Google Drive/Sheets API** (only for Google Sheets output)
* **Email SMTP/Gmail** (for notifications)

---

## ⚡ Who should use it?

* SEOs and agencies needing technical reports in minutes
* Freelancers automating client SEO audits
* Web developers and growth hackers
* Website owners/businesses with multiple sites

---

## 🎯 Problems solved

* Slow, manual SEO auditing
* Dependence on expensive SaaS
* Lack of full-site coverage → every URL is checked with actionable recommendations
* Fast, visual delivery to clients (HTML “copy-paste” report and/or collaborative sheet)

---

## 📝 Quick Setup

1. Import the `.json` into your n8n.
2. Add your credentials:

   * **OpenAI (ChatGPT) API Key**
   * **Google account** (only for Google Sheets output)
3. Run manually or via webhook (you can pass the URL as a parameter).
4. View the results in the generated **HTML**, **Google Sheets**, or your **email**.

---

## 💡 Details & Tips

* Enter only the domain (e.g., `example.com`) — **no** `https://` and no trailing slash.
* If any error occurs (unusual sitemap, robots blocked, etc.), the messages are explained clearly.
* You can change the **analysis language** (default: Spanish).
* 100% **customizable and extendable** for other outputs (Notion, Slack, etc).

---

## 📦 What’s included?

* 🧩 `n8n workflow file` → `SEO n8n.json`
* 📘 Quick install guide (`README`)
* 💬 Direct support: [oriolrotllant3@gmail.com](mailto:oriolrotllant3@gmail.com)
* 📸 More info and photos: [oriolrotllant3@gmail.com](mailto:oriolrotllant3@gmail.com)


## 📊 Basic Information

- **Workflow ID:** 9296
- **Complexity:** advanced
- **Node Count:** 45
- **Views:** 94
- **Downloads:** 9
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9296)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **splitInBatches** 
- **splitOut** (×3)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×6)
- **httpRequest** (×3)
- **xml** 
- **googleSheets** 
- **html** 
- **stickyNote** (×15)
- **removeDuplicates** 
- **respondToWebhook** 
- **webhook** 
- **manualTrigger** 
- **stopAndError** (×3)
- **filter** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 45 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
