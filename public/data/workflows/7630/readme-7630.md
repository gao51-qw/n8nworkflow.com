# Generate Automated SEO Reports with RapidAPI's SEO Analyzer and Google Docs

>  ## Automated SEO Website Audit with n8n, Google Docs & RapidAPI's SEO Analyzer

**Description:**  
Use n8n to automate SEO audits with the [**Website SEO Analyzer and Audit AI**](https://rapidapi.com/PrineshPatel/api/website-seo-analyzer-and-audit-ai) from RapidAPI. Capture a URL, run a full audit, and export a structured SEO report to Google Docs — all without manual steps.

---

## ⚙️ Node-by-Node Explanation

### 🟢 `formTrigger` — On Form Submission
- Starts the workflow when a user submits a URL through a form.
- Collects the website to be analyzed.

### 🌐 `httpRequest` — Website Audit
- Sends the submitted URL to the [**Website SEO Analyzer and Audit AI**](https://rapidapi.com/PrineshPatel/api/website-seo-analyzer-and-audit-ai) via a POST request.
- Fetches detailed SEO data, including meta tags, keyword usage, and technical performance.

### 🧠 `code` — Reformat
- Transforms raw JSON from the [**Website SEO Analyzer and Audit AI**](https://rapidapi.com/PrineshPatel/api/website-seo-analyzer-and-audit-ai) into a structured Markdown summary.
- Organizes insights into sections like Metadata, Keyword Density, Page Performance, and Security.

### 📄 `googleDocs` — Add Data In Google Docs
- Automatically inserts the formatted SEO audit report into a pre-connected Google Docs file.
- Allows audit data to be easily shared, tracked, or archived.

---

## 🌟 Benefits

- ✅ **Powered by [**Website SEO Analyzer and Audit AI**](https://rapidapi.com/PrineshPatel/api/website-seo-analyzer-and-audit-ai):** Leverage a reliable, cloud-based SEO tool via RapidAPI.
- 🔁 **End-to-End SEO Workflow:** Fully automates input, audit, formatting, and export to documentation.
- 📊 **Human-Readable Reports:** Translates raw API output into structured, insightful summaries.
- 📂 **Centralized Documentation:** Stores SEO audits in Google Docs for easy reference and historical tracking.

---

## 🚀 Use Cases

- 📈 **SEO Agencies:** Generate fast and consistent SEO audits using the [**Website SEO Analyzer and Audit AI**](https://rapidapi.com/PrineshPatel/api/website-seo-analyzer-and-audit-ai) — ideal for client reporting.
- 🏢 **In-House Web Teams:** Regularly audit corporate websites and track performance in a document-based SEO log.
- 🧲 **Lead Generation for SEO Services:** Offer real-time audits through a public form to attract and qualify leads.
- 📅 **Monthly SEO Health Checks:** Automate recurring site audits and log results using n8n and RapidAPI.

---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 📊 Basic Information

- **Workflow ID:** 7630
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 332
- **Downloads:** 33
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7630)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **code** 
- **googleDocs** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
