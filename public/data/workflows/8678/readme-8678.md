# Extract Amazon product data with Scrape.do, GPT-4 & Google Sheets

> 

## Amazon Product Scraper with Scrape.do & AI Enrichment



&gt; This workflow is a fully automated Amazon product data extraction engine. It reads product URLs from a Google Sheet, uses Scrape.do to reliably fetch each product page’s HTML without getting blocked, and then applies an AI-powered extraction process to capture key product details such as name, price, rating, review count, and description. All structured results are neatly stored back into a Google Sheet for easy access and analysis.

This template is designed for consistency and scalability—ideal for marketers, analysts, and e-commerce professionals who need clean product data at scale.

---

### 🚀 What does this workflow do?

*   **Reads Input URLs:** Pulls a list of Amazon product URLs from a Google Sheet.
*   **Scrapes HTML Reliably:** Uses **Scrape.do** to bypass Amazon’s anti-bot measures, ensuring the page HTML is always retrieved successfully.
*   **Cleans & Pre-processes HTML:** Strips scripts, styles, and unnecessary markup, isolating only relevant sections like title, price, ratings, and feature bullets.
*   **AI-Powered Data Extraction:** A LangChain/OpenRouter GPT-4 node verifies and enriches key fields—product name, price, rating, reviews, and description.
*   **Stores Structured Results:** Appends all extracted and verified product data to a results tab in Google Sheets.
*   **Batch & Loop Control:** Handles multiple URLs efficiently with `Split In Batches` to process as many products as you need.

### 🎯 Who is this for?

*   **E-commerce Sellers & Dropshippers:** Track competitor prices, ratings, and key product features automatically.
*   **Marketing & SEO Teams:** Collect product descriptions and reviews to optimize campaigns and content.
*   **Analysts & Data Teams:** Build accurate product databases without manual copy-paste work.

### ✨ Benefits

*   **High Success Rate:** **Scrape.do** handles proxy rotation and CAPTCHA challenges automatically, outperforming traditional scrapers.
*   **AI Validation:** LLM verification ensures data accuracy and fills in gaps when HTML elements vary.
*   **Full Automation:** Runs on-demand or on a schedule to keep product datasets fresh.
*   **Clean Output:** Results are neatly organized in Google Sheets, ready for reporting or integration with other tools.

### ⚙️ How it Works

1.  **Manual or Scheduled Trigger:** Start the workflow manually or via a cron schedule.
2.  **Input Source:** Fetch URLs from a Google Sheet (`TRACK_SHEET_GID`).
3.  **Scrape with Scrape.do:** Retrieve full HTML from each Amazon product page using your `SCRAPEDO_TOKEN`.
4.  **Clean & Pre-Extract:** Strip irrelevant code and use regex to pre-extract key fields.
5.  **AI Extraction & Verification:** LangChain GPT-4 model refines and validates product name, description, price, rating, and reviews.
6.  **Save Results:** Append enriched product data to the results sheet (`RESULTS_SHEET_GID`).

### 📋 n8n Nodes Used

*   `Manual Trigger` / `Schedule Trigger`
*   `Google Sheets` (read & append)
*   `Split In Batches`
*   `HTTP Request` (Scrape.do)
*   `Code` (clean & pre-extract HTML)
*   `LangChain LLM` (OpenRouter GPT-4)
*   `Structured Output Parser`

### 🔑 Prerequisites

*   Active n8n instance.
*   **Scrape.do API token** (bypasses Amazon anti-bot measures).
*   **Google Sheets** with:
    *   `TRACK_SHEET_GID`: tab containing product URLs.
    *   `RESULTS_SHEET_GID`: tab for results.
*   **Google Sheets OAuth2 credentials** shared with your service account.
*   **OpenRouter / OpenAI API credentials** for the GPT-4 model.

### 🛠️ Setup

1.  **Import the Workflow** into your n8n instance.
2.  **Set Workflow Variables:**
    *   `SCRAPEDO_TOKEN` – your Scrape.do API key.
    *   `WEB_SHEET_ID` – Google Sheet ID.
    *   `TRACK_SHEET_GID` – sheet/tab name for input URLs.
    *   `RESULTS_SHEET_GID` – sheet/tab name for results.
3.  **Configure Credentials** for Google Sheets and OpenRouter.
4.  **Map Columns** in the “add results” node to match your Google Sheet (e.g., name, price, rating, reviews, description).
5.  **Run or Schedule:** Start manually or configure a schedule for continuous data extraction.

---
This Amazon Product Scraper delivers fast, reliable, and AI-enriched product data, ensuring your e-commerce analytics, pricing strategies, or market research stay accurate and fully automated.

## 📊 Basic Information

- **Workflow ID:** 8678
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 612
- **Downloads:** 61
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8678)

## 👤 Author

- **Name:** Onur
- **Username:** @onurpolat05

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×2)
- **splitInBatches** 
- **httpRequest** 
- **html** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **splitOut** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
