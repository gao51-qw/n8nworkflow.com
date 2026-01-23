# Automated website change monitoring with Bright Data, GPT-4.1 & Google Workspace

> ![Wispr_Flow_mxokqGw8g8.png](fileId:1379)
**Note: This template is for self-hosted n8n instances only**

You can use this workflow to fully automate website content monitoring and change detection on a weekly basis—even when there’s no native node for scraping or structured comparison. It uses an AI-powered scraper, structured data extraction, and integrates Google Sheets, Drive, Docs, and email for seamless tracking and reporting.

## Main Use Cases

- Monitor and report changes to websites (e.g., pricing, content, headings, FAQs) over time
- Automate web audits, compliance checks, or competitive benchmarking
- Generate detailed change logs and share them automatically with stakeholders

## How it works

The workflow operates as a scheduled process, organized into these stages:

### 1. Initialization & Configuration

- Triggers weekly (or manually) and initializes key variables: Google Drive folder, spreadsheet IDs, notification emails, and test mode.

### 2. Input Retrieval

- Reads the list of URLs to be monitored from a Google Sheet.

### 3. Web Scraping & Structuring

- For each URL, an AI agent uses [Bright Data's](https://brightdata.com/) `scrape_as_markdown` tool to extract the full web page content.
- The workflow then parses this content into a well-structured JSON, capturing elements like metadata, headings, pricing, navigation, calls to action, contacts, banners, and FAQs.

### 4. Saving Current Week’s Results

- The structured JSON is saved to Google Drive as the current week’s snapshot for each monitored URL.
- The Google Sheet is updated with file references for traceability.

### 5. Comparison with Previous Snapshot

- If a prior week’s file exists, it is downloaded and parsed.
- The workflow compares the current and previous JSON snapshots, detecting and categorizing all substantive content changes (e.g., new/updated plans, FAQ edits, contact info modifications).
- Optionally, in test mode, mock changes are introduced for demo and validation purposes.

### 6. Change Report Generation & Delivery

- A rich Markdown-formatted changelog is generated, summarizing the detected changes, and then converted to HTML.
- The changelog is uploaded to Google Docs and linked back to the tracking sheet.
- An HTML email with the full report and relevant links is sent to recipients.

---

**Summary Flow:**

1. Schedule/workflow trigger → initialize variables
2. Read URL list from spreadsheet
3. For each URL:
    - Scrape & structure as JSON
    - Save to Drive, update tracking sheet
    - If previous week exists:
        - Download & parse previous
        - Compare, generate changelog
        - Convert to HTML, save to Docs, update Sheet
        - Email results

---

**Benefits:**

- Fully automated website change tracking with end-to-end reporting
- Adaptable and extensible for any set of monitored pages and content types
- Easy integration with Google Workspace tools for collaboration and storage
- Minimal manual intervention required after initial setup



## 📊 Basic Information

- **Workflow ID:** 4382
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 866
- **Downloads:** 86
- **Created:** 2025/5/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4382)

## 👤 Author

- **Name:** Daniel Shashko
- **Username:** @tomax

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×3)
- **googleSheets** (×3)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDrive** (×2)
- **if** (×2)
- **extractFromFile** 
- **code** (×3)
- **markdown** 
- **googleDocs** (×2)
- **gmail** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** 
- **n8n-nodes-mcp.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
