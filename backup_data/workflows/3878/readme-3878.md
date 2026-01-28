# Monitor Amazon product prices with Bright Data and Google Sheets

> ## Amazon Price Monitoring Workflow

This workflow enables you to monitor the prices of Amazon product listings directly from a Google Sheet, using data provided by Bright Data’s Amazon Scraper API. It automates the retrieval of price data for specified products and is ideal for market research, competitor analysis, or personal price tracking.


### ✅ Requirements

Before using this template, ensure you have the following:
- A Bright Data account and access to the Amazon Scraper API.
- An active API key from Bright Data.
- A Google Sheet set up with the required columns.
- N8N account (self-host or cloud version)

⸻

## ⚙️ Setup
#### 1. Create a Google Sheet with the following columns:
- Product URL
- ZIP Code (used for regional price variations)
- ASIN (Amazon Standard Identification Number)

#### 2. Extract ASIN Automatically using the following formula in the ASIN column:

```
=REGEXEXTRACT(A2, "/(?:dp|gp/product|product)/([A-Z0-9]{10})")
```
- Replace A2 with the appropriate cell reference

#### 3. Obtain an API Key:

- Sign in to your Bright Data account.
- Go to the API section to generate an API key.
- Create a Bearer Authentication Credential using this key in your automation tool.
#### 4. Configure the Workflow:
- Use a node (e.g., “Google Sheets”) to read data from your sheet.
- Use an HTTP Request node to send a query to Bright Data’s Amazon API with the ASIN and ZIP code.
- Parse the returned JSON response to extract product price and other relevant data.
- Optionally write the output (e.g., current price, timestamp) back into the sheet or another data store.

⸻

## Workflow Functionality

- The workflow is triggered periodically (or manually) and reads product details from your Google Sheet.
- For each row, it extracts the Product URL and ZIP code and sends a request to the Bright Data API.
- The API returns product price information, which is then logged or updated back into the sheet using ASIN.
- You can also map the product URL to the product URL, but ensure that the URL has no parameters. If the URL has appended parameters, refer to the input field from the Bright Data snapshot result.

⸻

### 💡 Use Cases
- E-commerce sellers monitoring competitors’ prices.
- Consumers tracking price drops on wishlist items.
- Market researchers collecting pricing data across ZIP codes.
- Affiliate marketers ensuring accurate product pricing on their platforms.

⸻

### 🛠️ Customization
- Add columns for additional product data such as rating, seller, or stock availability.
- Schedule the workflow to run hourly, daily, or weekly depending on your needs.
- Implement email or Slack alerts for significant price changes.
- Filter by product category or brand to narrow your tracking focus.


## 📊 Basic Information

- **Workflow ID:** 3878
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1569
- **Downloads:** 156
- **Created:** 2025/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3878)

## 👤 Author

- **Name:** Cyril Nicko Gaspar
- **Username:** @cngaspar

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **wait** (×2)
- **scheduleTrigger** 
- **httpRequest** (×3)
- **googleSheets** (×2)
- **splitInBatches** 
- **aggregate** 
- **switch** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
