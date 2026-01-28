# AI-powered price watchdog: competitor monitoring & alerting (Decodo & Gemini)

> **Never miss a competitor price change again.**

This advanced workflow automates the most difficult aspect of market monitoring: intelligently extracting structured pricing data from complex, dynamic competitor websites and comparing it against your historical baseline. It sends instant, conditional alerts only when a significant price shift is detected.

The workflow uses **Decodo** for dynamic scraping, **Gemini** for reliable data parsing, and **Google Sheets** for robust historical state management.

### ✨ Key Features
* **AI-Powered Extraction:** Uses **Gemini 2.5 Flash** to analyze raw, noisy website HTML and output a clean JSON array of plan names, prices, and features, bypassing brittle CSS selectors.
* **Historical Comparison:** Automatically retrieves the price from the previous workflow run and calculates the percentage difference (diff) for every single plan item.
* **Edge Case Handling:** Includes specific code logic to prevent errors and flag crucial events like a **"Free-to-Paid"** plan transition (division by zero).
* **Conditional Alerting:** Sends immediate Slack notifications only when the price change exceeds your predefined percentage threshold.
* **State Management:** Uses Google Sheets to automatically **shift data** (Current Price $\rightarrow$ Old Price) to maintain the historical baseline for the next scheduled execution.

### ⚙️ How it Works (The Monitoring Loop)

1.  **Setup & Sourcing:** The workflow is executed on a schedule, defining the global alert threshold and retrieving the list of target URLs from a Google Sheet.
2.  **Scraping (Dynamic):** **Decodo** runs with **JavaScript rendering ON** to fetch the complete, dynamic HTML of the pricing page.
3.  **AI Structuring:** **Gemini** receives the raw HTML and uses a strict System Prompt to extract a clean JSON array of all pricing plans.
4.  **Comparison & Calculation:** A **Code Node** parses the current plan list and the list from the previous run (stored in Sheets). It calculates the percentage change for every matching plan.
5.  **Alert Decision:** An **If Node** checks the calculated change against the threshold. If the condition is met, the filtered alert proceeds to Slack.
6.  **Data Shift & Log:** The final **Sheets Update** node shifts the current plan data to the "Last Plans" column and moves the previous "Last Plans" to the "Old Plans" column, setting the new baseline for the next scheduled check.
---

### 📥 Decodo Node Installation

The Decodo node is used three times in this workflow for precision scraping and searching.

1.  **Find the Node:** Click the **+** button in your n8n canvas.
2.  **Search:** Search for the **`Decodo`** node and select it.
3.  **Credentials:** When configuring the first Decodo node, use your API key (obtained with the 80% discount coupon).
-----

### 🎁 Exclusive Deal for n8n Users

To run this workflow, you require a robust scraping provider. We have secured a massive discount for Decodo users:

  * **Get 80% OFF** the **23k Advanced Scraping API** plan.
  * **Coupon Code:** `ATTAN8N`
  * **Sign Up Here:** [**Claim 80% Discount on Decodo**](https://visit.decodo.com/c/6679292/3071239/17480)
-----
### 🛠️ Setup Instructions

1.  **Credentials:** Obtain API keys for **Decodo** (using the coupon below), **Google Sheets**, and **Slack**.
2.  **Google Sheets Setup:** Create a sheet with the following required columns for tracking (one row per URL):
    * `Name`
    * `URL`
    * `Old Plans` (JSON String)
    * `Last Plans` (JSON String)
    * `Updated At` (Date)
3.  **Global Configuration:** Open the **`Config: Alert Parameters`** node to set your `alert_threshold` (e.g., `10`).

I understand. To complete the final template description for your **Competitor Price Monitoring** workflow, here is the dedicated **How to Adapt the Template** section, focusing on functional changes a user can make for advanced monitoring.

***

### ➕ How to Adapt the Template

The workflow is currently configured for maximum efficiency and stability. To expand its functionality or change its dependencies, you can implement the following adaptations:

* **Change Database for Storage:** Replace the **Google Sheets** nodes with **Airtable** or **Notion** nodes for historical storage. Since your comparison logic relies on the JSON string being saved and retrieved, you will only need to change the read/write operations (the Code logic remains the same).
* **Change Alert Channel:** Easily swap the **Slack** node with a **Gmail**, **Discord**, or **Pushover** node to deliver critical price alerts to a different team or application.
* **Dynamic Thresholds:** Modify the **`Config: Alert Parameters`** to include separate fields for price *increases* (e.g., `alert_increase_threshold`) and price *decreases* (e.g., `alert_decrease_threshold`), allowing you to track competitor sales differently than price hikes.
* **Advanced Price Filtering:** Adjust the code logic in **`Code: Isolate Pricing Section`** to target specific currency symbols (e.g., `€`, `£`) or to filter out prices that appear to be marked as promotional (e.g., text containing "SALE" or "Discount").
* **Add Advanced Alert Reporting:** Instead of sending a simple Slack message, use the full list of `price_diffs` (which contains all plans) to generate a consolidated daily **CSV report** or a professional **HTML email** summarizing all movements, even those below the alert threshold.


## 📊 Basic Information

- **Workflow ID:** 11063
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 142
- **Downloads:** 14
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11063)

## 👤 Author

- **Name:** Atta
- **Username:** @attakhalighi

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **noOp** 
- **googleSheets** (×2)
- **if** (×3)
- **splitOut** 
- **slack** 
- **code** (×2)
- **stickyNote** (×9)
- **scheduleTrigger** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
