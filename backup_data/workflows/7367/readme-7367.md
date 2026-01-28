# Automated on-page SEO analysis & logging with RapidAPI and Google Sheets

> ## [SEO On Page API](https://rapidapi.com/PrineshPatel/api/seo-on-page) – Complete Guide, Use Cases & Benefits

The [**SEO On Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page) is a powerful tool for keyword research, competitor analysis, backlink insights, and overall SEO optimization.  
With multiple endpoints, you can instantly gather actionable SEO data without juggling multiple tools.  
You can explore and subscribe via [**SEO On Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page).

---

## 📌 Description
The **SEO On Page API** on [**SEO On Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page) allows you to quickly analyze websites, keywords, backlinks, and competitors — all in one place.  
Ideal for SEO professionals, marketers, and developers who want fast, accurate, and easy-to-integrate data.

---


## Node-by-node Overview

1. **On form submission** — Shows a web form (field: `website`) and triggers the workflow on submit.  
2. **Global Storage** — Copies `website` (and optional `country`) into the execution JSON for reuse.  
3. **Website Traffic Cheker** — POSTs `website` to `webtraffic.php` (RapidAPI) to fetch traffic summary.  
4. **Re-Format** — Extracts `data.semrushAPI.trafficSummary[0]` from the traffic API response.  
5. **Website Traffic** — Appends traffic metrics (visits, users, bounce, etc.) to the **"WebSite Traffic"** sheet.  
6. **Website Metrics DA PA** — POSTs `website` to `dapa.php` (RapidAPI) to get DA, PA, spam score, DR, org traffic.  
7. **Re-Format 2** — Pulls the `data` object from the DA/PA API response for clean mapping.  
8. **DA PA** — Appends DA/PA and related fields into the **"DA PA"** sheet.  
9. **Top Baclinks** — POSTs `website` to `backlink.php` (RapidAPI) to retrieve backlink data.  
10. **Re-Format 3** — Extracts `data.semrushAPI.backlinksOverview` (aggregate backlink metrics).  
11. **Backlinks Overview** — Appends overview metrics into the **"Backlinks Overview"** sheet.  
12. **Re-Format 4** — Extracts detailed `data.semrushAPI.backlinks` (individual backlinks list).  
13. **Backlinks** — Appends each backlink row into the **"Backlinks"** sheet.  
14. **Competitors Analysis** — POSTs `website` to `competitor.php` (RapidAPI) to fetch competitors/data sets.  
15. **Re-Format 5** — Flattens all array datasets under `data.semrushAPI` into rows with a `dataset` label.  
16. **Competitor Analysis** — Appends the flattened competitor and keyword rows into the **"Competitor Analysis"** sheet.  
---

## 🚀 Use Cases
- **Keyword Research** – Find high-volume, low-competition keywords for content planning.  
- **Competitor Analysis** – Identify competitor strategies and ranking keywords.  
- **Backlink Insights** – Discover referring domains and link-building opportunities.  
- **Domain Authority Checks** – Evaluate site authority before guest posting or partnerships.  
- **Content Optimization** – Improve on-page SEO using actionable data.

---



## 💡 Benefits
- **One API, Multiple Insights** – No need for multiple SEO tools.  
- **Accurate Data** – Get trusted metrics for informed decision-making.  
- **Fast Integration** – Simple POST requests for quick setup.  
- **Time-Saving** – Automates complex SEO analysis in seconds.  
- **Affordable** – Access enterprise-grade SEO insights without breaking the bank.
---
📍 *Start using the [**SEO On Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page) today to supercharge your keyword research, backlink tracking, and competitor analysis.*

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!


## 📊 Basic Information

- **Workflow ID:** 7367
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 426
- **Downloads:** 42
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7367)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **httpRequest** (×4)
- **code** (×5)
- **googleSheets** (×5)
- **stickyNote** (×17)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
