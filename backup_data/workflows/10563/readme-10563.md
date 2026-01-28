# Scheduled Walmart product scraping to Google Sheets with ScrapeOps

> ## Overview

This n8n template automates Walmart product discovery and sends clean results to Google Sheets on a fixed schedule (default: every 4 hours). It uses **ScrapeOps Proxy API** for resilient page fetches (with JS render + scroll) and **ScrapeOps Parser API** for structured data extraction (title, price, rating, reviews, image, URL, sponsored flag). The result is a repeatable, low-maintenance workflow for market research, price monitoring, and assortment tracking; ideal for ops and growth teams that need fresh data without babysitting scrapers.

## Who is this for?

* **E-commerce operators** tracking price & inventory signals
* **Market/competitive analysts** building price baskets and trend views
* **Growth & SEO teams** validating product coverage and SERP facets
* **No-code/low-code builders** who prefer visual pipelines over custom code

## What problems it solves

* **Reliability:** Offloads JS rendering and scrolling to ScrapeOps to reduce breakage.
* **Structure:** Normalizes fields for analysis-ready rows in Sheets.
* **Scale:** Runs on a timer; no manual downloading or copy-paste.
* **Speed to value:** Simple setup, minimal credentials, immediate output.

## How it works

1. **Schedule** triggers every 4 hours.
2. **Keyword** builds a Walmart search URL.
3. **ScrapeOps Proxy API** fetches HTML (render + scroll).
4. **ScrapeOps Parser API** extracts structured product fields.
5. **Validate & format** rows; drop empties/bad prices.
6. **Append to Google Sheets** for reporting/dashboards.
7. *(Optional)* **Slack** posts a summary with your results link.

## Set up steps *(~5–10 minutes)*

* **Google Sheets:** Duplicate the **[template](https://docs.google.com/spreadsheets/d/1WbIzWaXjuQeTxrn_C7PjGMNNibUyLIgY2hdeWh3gOLA/edit?gid=0#gid=0)** and paste your link in the Google Sheets node.
* **ScrapeOps API:** Get a free key **[here](https://scrapeops.io/app/register/main/)** and add it under **Credentials → ScrapeOps API**. See **[docs](https://scrapeops.io/docs/n8n/overview/)**.
* **Keyword:** Update the search term in **Set Search Parameters**.
* *(Optional)* Configure the **Slack** node or remove it.

## Pre-conditions

* n8n instance running with outbound internet access.
* Google account with access to the destination Sheet.
* ScrapeOps account + API key with sufficient quota.
* Basic familiarity with editing node parameters in n8n.


## Disclaimer

This template uses ScrapeOps as a community node. You are responsible for complying with Walmart’s Terms of Use, robots directives, and applicable laws in your jurisdiction. Scraping targets may change at any time; adjust render/scroll/wait settings and parsers as needed. Use responsibly for legitimate business purposes.


## 📊 Basic Information

- **Workflow ID:** 10563
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 39
- **Downloads:** 3
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10563)

## 👤 Author

- **Name:** Ian Kerins
- **Username:** @iankerins

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@scrapeops/n8n-nodes-scrapeops.ScrapeOps** (×2)
- **set** (×3)
- **googleSheets** 
- **code** 
- **scheduleTrigger** 
- **if** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
