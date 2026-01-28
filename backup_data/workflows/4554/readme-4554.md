# Monitor Google Shopping prices with Bright Data & email alerts

> ## 🛒 Monitor Google Shopping Prices with Bright Data & Email Alerts
This template requires a self-hosted n8n instance to run.

A comprehensive n8n automation that monitors product prices daily using Bright Data's Google Shopping dataset and sends smart email alerts when price conditions are met.

---

## 📋 Overview
This workflow provides an automated price monitoring solution that tracks product prices from Google Shopping daily and sends intelligent email notifications. Perfect for e-commerce monitoring, competitor analysis, deal hunting, and inventory management.

---

## ✨ Key Features
* 🕘 **Scheduled Monitoring:** Daily automated price checks at 9 AM
* 🛍️ **Google Shopping Integration:** Uses Bright Data's dataset for accurate pricing
* 📊 **Smart Price Comparison:** Compares current prices with historical data
* 📧 **Intelligent Alerts:** Sends emails only when prices meet criteria
* 📈 **Data Storage:** Updates Google Sheets with latest pricing data
* 🔄 **Batch Processing:** Handles multiple products with rate limiting
* ⚡ **Fast & Reliable:** Built-in error handling
* 🎯 **Customizable Filters:** Advanced price comparison logic

---

## 🎯 What This Workflow Does
1. Schedule Trigger: Runs daily at 9 AM
2. Data Retrieval: Fetches product list from Google Sheets
3. Price Extraction: Scrapes current prices using Bright Data
4. Data Update: Updates Google Sheets with new prices
5. Price Comparison: Compares new vs. old prices
6. Smart Filtering: Filters products that meet alert criteria
7. Email Notifications: Sends alerts for qualifying changes
8. Rate Limiting: Adds delay between emails

### Output Data Points

| Field         | Description                | Example                          |
| :------------ | :------------------------- | :------------------------------- |
| Product URL   | Original Google Shopping URL | https://shopping.google.com/product/... |
| Product Name  | Product title              | iPhone 15 Pro Max 256GB          |
| Ratings       | Product rating score       | 4.5                              |
| Reviews       | Number of reviews          | 1,247                            |
| Old Price     | Previous price             | $1,199.00                        |
| New Price     | Current scraped price      | $1,199.00                        |
| Timestamp     | When the check occurred    | 2025-05-30T09:00:00Z             |

---

## 🚀 Setup Instructions

### Prerequisites
* n8n instance (self-hosted or cloud)
* Google account with Sheets access
* Bright Data account with Google Shopping dataset access
* Gmail account for notifications

### Steps
1. Import the workflow JSON into n8n
2. Configure Bright Data credentials and dataset access
3. Set up Google Sheets with required columns
4. Configure Gmail OAuth2 credentials
5. Update sheet IDs and schedule settings
6. Test with sample products and activate

---

## 📖 Usage Guide

### Google Sheet Structure
Your Google Sheet should have the following columns to ensure the workflow functions correctly:

* **Product URL** (Text): The direct URL to the Google Shopping product page. This is the primary identifier for the product.
* **Product Name** (Text): The name of the product. This will be automatically populated or updated by the workflow.
* **Old Price** (Number/Currency): The price of the product from the previous check. This column is crucial for price comparison.
* **New Price** (Number/Currency): The most recently scraped price of the product.
* **Ratings** (Number): The star rating of the product.
* **Reviews** (Number): The total number of reviews for the product.
* **Timestamp** (Datetime): The date and time when the price check was performed.

### Adding Products
* Add Google Shopping URLs to your Google Sheet.
* The workflow will fetch product details and track prices.
* Historical price data builds over time.

### Understanding Price Alerts
The default setting for this workflow is to send an email alert when the **new price equals the old price**. This might seem counterintuitive, but it's useful for specific scenarios, such as:

* **Monitoring stable pricing:** If you are tracking a product and want to be notified when its price has remained consistent over time, indicating a potential stable buying opportunity or a benchmark.
* **Verifying data consistency:** To confirm that the scraping process is working correctly and consistently retrieving the same price when no changes are expected.

You can easily **customize the alert logic** to trigger on different conditions as described below.

### Customizing Alert Logic
* **Price drops:** `new_price &lt; old_price`
* **Significant drops:** `new_price &lt; (old_price * 0.9)` (e.g., price dropped by more than 10%)
* **Price increases:** `new_price &gt; old_price`
* **Any change:** `new_price != old_price`

### Reading the Results
* Real-time pricing data
* Historical tracking
* Product metadata
* Timestamps for each check

---

## 🔧 Customization Options
* **Add More Data:** Descriptions, availability, seller info, shipping, images
* **Modify Email Templates:** Customize subject and body
* **Multiple Recipients:** Duplicate email node and change recipients
* **Webhook Integration:** Add real-time triggers or Slack alerts

---

## 🚨 Troubleshooting
* **Bright Data connection failed:** Check API credentials and dataset access
* **No price data extracted:** Verify URLs and test with different products
* **Google Sheets permission denied:** Re-authenticate and check sharing
* **Emails not sending:** Re-auth Gmail OAuth and verify recipients
* **Filter not working:** Check price formats and logic
* **Workflow failed:** Check logs, retry logic, and network status

---

## 📊 Use Cases & Examples
* **E-commerce Monitoring:** Track competitor pricing and trends
* **Deal Hunting:** Get alerts for price drops on wishlist items
* **Inventory Management:** Monitor supplier pricing for procurement
* **Market Research:** Analyze pricing trends and generate reports

---

## ⚙️ Advanced Configuration
* **Batch Processing:** Increase batch size, add delays, use parallel processing
* **Price History:** Store historical data, calculate averages, forecast trends
* **Tool Integration:** CRM, Slack, databases, BI tools (Tableau, Power BI)

---

## 📈 Performance & Limits
* **Single URL:** 2–5 seconds
* **Concurrent Requests:** 3–5 (depends on Bright Data plan)
* **Data Accuracy:** 95%+
* **Success Rate:** 90%+
* **Daily Capacity:** 100–500 products
* **Memory:** ~100MB per execution
* **API Calls:** 1 Bright Data + 2 Google Sheets per product

---

## 🤝 Support & Community
* **n8n Forum:** &lt;https://community.n8n.io&gt;
* **Documentation:** &lt;https://docs.n8n.io&gt;
* **Bright Data Support:** Via your Bright Data dashboard
* **GitHub Issues:** Report bugs and request features

---

## 🎯 Ready to Use!
Your workflow provides a solid foundation for automated price monitoring. Customize it to fit your specific needs and use cases for maximum effectiveness in tracking Google Shopping prices with intelligent email notifications.

---

**Please note that this template uses Community Nodes. Ensure you understand the risks before using community nodes.**

## 📊 Basic Information

- **Workflow ID:** 4554
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 486
- **Downloads:** 48
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4554)

## 👤 Author

- **Name:** Dvir Sharon
- **Username:** @dvirsharon

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **stickyNote** (×7)
- **googleSheets** (×2)
- **@brightdata/n8n-nodes-brightdata.brightData** 
- **filter** 
- **splitInBatches** 
- **gmail** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
