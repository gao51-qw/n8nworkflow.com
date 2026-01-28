# Stock market daily digest with Bright Data scraping & Gemini AI email reports

> This workflow makes it easier to keep track of the stocks market and get an email with a summary of the daily highlights on what happened, key insights and trends 


## Setup Guide 

1. Define the schedule (days, times, intervals).
2. Replace sample stock data with your desired stock list (ticker, name, etc.) in JSON format.
3. Split Out the fields to have a clean list of the stocks to monitor
4. set keyword node Extracts the stock ticker from each item and sets it to the `keyword` property.
5. Financial times scraper Triggers the Bright Data Datasets API to scrape financial data. Set the node as below

    *   **Method:** `POST`
    *   **URL:** `https://api.brightdata.com/datasets/v3/trigger`
    *   **Query Parameters:**
        *   `dataset_id`: Replace with your Bright Data dataset ID.
        *   `include_errors`: `true`
        *   `type`: `discover_new`
        *   `discover_by`: `keyword`
    *   **Headers:**
        *   `Authorization`: `Bearer YOUR_BRIGHTDATA_API_KEY` Replace with your Bright Data API key.
    *   **Body:** JSON,  `={{ $('set keyword').all().map(item =&gt; item.json)}}`
    *   **Execute Once:** Checked.
6. Get progress node Checks the status of the Bright Data scraping job if complete, or running
**Setup:**
    *   **URL:** `https://api.brightdata.com/datasets/v3/progress/{{ $json.snapshot_id }}`
    *   **Headers:**
        *   `Authorization`: `Bearer YOUR_BRIGHTDATA_API_KEY` Replace with your Bright Data API key.

7. Get snapshot + data retrieves the scraped data from the Bright Data API. Pass the request as 
    *   **URL:** `https://api.brightdata.com/datasets/v3/snapshot/{{ $json.snapshot_id }}`
    *   **Query Parameters:** `format`: `json`
    *   **Headers:**
        *   `Authorization`: `Bearer YOUR_BRIGHTDATA_API_KEY` Replace with your Bright Data API key.

8. Aggregate. Combines the data from each stock item into a single object
9. Update to sheet and add all items to [This sheet](https://docs.google.com/spreadsheets/d/1I5CvpHlmDsIFOfnGg4DEtniem0oTiumWWzGs4CV6AuM/edit?usp=sharing). Make a copy before you can map the data 

10. create summary node generates a summary of the scraped stock data using the Google Gemini AI model and notifies you via Gmail.
**Setup:**
    *   **Prompt Type:** `define`
    *   **Text:** Customize the prompt to define the AI's role, input format, tasks, output format (HTML email), and constraints.
11. Google Sheets. Appends the scraped data to a Google Sheet. This should be set to automap so as to adjust to the results found in the request

**Important Notes:**

*   Remember to replace placeholder values (API keys, dataset IDs, email addresses, Google Sheet IDs) with your actual values.
*   Review and customize the AI prompt for the "create summary" node to achieve the desired email summary output.
*   Consider adding error handling for a more robust workflow.
*   Monitor API usage to avoid rate limits.


## 📊 Basic Information

- **Workflow ID:** 5305
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 9064
- **Downloads:** 906
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5305)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **wait** 
- **httpRequest** (×3)
- **switch** 
- **splitOut** 
- **set** (×2)
- **aggregate** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** 
- **stickyNote** (×8)
- **gmailTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
