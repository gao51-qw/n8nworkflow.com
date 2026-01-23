# AI-powered lead processing from Apify with Gemini and Google Sheets

> ## AI-Powered Lead Scraping Automation using APIFY Scraper and Gemini Filtering to Google Sheets

This is a fully automated, end-to-end pipeline designed to solve the challenge of inconsistent and low-quality lead data from large-scale scraping operations. The system programmatically fetches raw lead information from sources like Apollo or via Apify, processes it through an intelligent validation layer, and delivers a clean, deduplicated, and ready-to-use dataset directly into Google Sheets. By integrating Google Gemini for data cleansing, it moves beyond simple presence checks to enforce data hygiene and standardization, ensuring that sales teams only engage with properly formatted and complete leads. This automation eliminates hours of manual data cleaning, accelerates the speed from lead acquisition to outreach, and significantly improves the integrity of the sales pipeline.

### Features

-   **Batch Processing**: Systematically processes up to 1000 leads per batch and automatically loops through the entire dataset. This ensures stable, memory-efficient operation even with tens of thousands of scraped contacts.
-   **AI Validation**: Google Gemini acts as a data quality gatekeeper. It validates the presence and plausible format of critical fields (e.g., First Name, Company Name) and cleanses data by correcting common formatting issues.
-   **Smart Deduplication**: Before appending a new lead, the system cross-references its email address against the entire Google Sheet to prevent duplicate entries, ensuring a single source of truth.
-   **Auto Lead IDs**: Generates a unique, sequential ID for every new lead in the format `AP-DDMMYY-xxxx`. This provides a consistent reference key for tracking and CRM integration.
-   **Data Quality Reports**: Delivers real-time operational visibility by sending a concise summary to a Telegram channel after each batch, detailing success, warning, and error counts.
-   **Rate Limiting**: Incorporates a 30-second delay between batches to respect Google Sheets API limits, preventing throttling and ensuring reliable, uninterrupted execution.

#### How It Works

1.  The workflow is initiated by an external trigger, such as a webhook, carrying the raw scraped data payload.
2.  It authenticates and fetches the complete list of leads from the Apify or Apollo API endpoint.
3.  The full list is automatically partitioned into manageable batches of 1000 leads for efficient processing.
4.  Each lead is individually passed to the Gemini AI Agent, which validates that required fields like Name, Email, and Company are present and correctly formatted.
5.  Validated leads are assigned a unique Lead ID, and all data fields are standardized for consistency.
6.  The system performs a lookup in the target Google Sheet to confirm the lead's email does not already exist.
7.  Clean, unique leads are appended as a new row to the designated spreadsheet.
8.  A completion notice is sent via the Telegram Bot, summarizing the batch results with clear statistics.

### Requirements

-   Apify/Apollo API access credentials.
-   Google Cloud project with OAuth2 credentials for Google Sheets API access.
-   A configured Telegram Bot with its API Token and a target Chat ID.
-   A Google Gemini API Key for data validation and cleansing.

This system is ideal for sales and marketing operations teams managing high-volume lead generation campaigns, providing automated data quality assurance and accelerating pipeline development.

## 📊 Basic Information

- **Workflow ID:** 9266
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 151
- **Downloads:** 15
- **Created:** 2025/10/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9266)

## 👤 Author

- **Name:** Ahmed Sherif
- **Username:** @asherif08

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×8)
- **executeWorkflowTrigger** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** (×2)
- **telegram** 
- **httpRequest** (×2)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
