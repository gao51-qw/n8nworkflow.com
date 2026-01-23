# Automate business lead scraping from Apify to Google Sheets with data cleaning

> 
## 🚀 Automated Lead Scraper Workflow (Apify + n8n + Google Sheets)

### 🧠 What It Does

This n8n workflow automates the process of scraping leads using **Apify**, cleaning the extracted data, and exporting it to **Google Sheets**—ready for use in outreach, prospecting, or CRM pipelines.

---

### 🔄 Workflow Steps

1. ✅ **Start** – Manually triggers the workflow.
2. 🧩 **Set Variables** – Stores required Apify credentials:

   * `APIFY_TOKEN`: Your Apify token.
   * `APIFY_TASK_ID`: The Apify task to run.
3. 🕸️ **Run Apify Scraper** – Launches the scraper and fetches the dataset.
4. 🧹 **Clean Data** – Processes scraped results to:

   * ✂️ Strip non-numeric characters from phone numbers.
   * ✉️ Format emails (lowercase + trimmed).
5. 📊 **Export to Google Sheets** – Appends clean data to your spreadsheet:

   * 🏢 `company name` → from `title`
   * 📞 `phone` → cleaned number
   * 📍 `address` → from scraped info

---

### 🛠️ Requirements

* 🕷️ **Apify Account**

  * A valid `APIFY_TOKEN`
  * An existing Apify task (`APIFY_TASK_ID`)

* 📗 **Google Sheets Access**

  * OAuth2 credentials set up in n8n (e.g., `"Google Sheets account 2"`)

---

### 🚦 How to Use

1. ⚙️ Open the **Variables** node and plug in your Apify credentials.
2. 📄 Confirm the **Google Sheets** node points to your desired spreadsheet.
3. ▶️ Run the workflow manually from the **Start** node.

---

### 📥 Output

A ready-to-use sheet of **cleaned lead data** containing:

* Company names
* Phone numbers
* Addresses

---

### 💼 Perfect For:

* Sales teams doing outbound prospecting
* Marketers building lead lists
* Agencies running data aggregation tasks

---



## 📊 Basic Information

- **Workflow ID:** 4295
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 24498
- **Downloads:** 2449
- **Created:** 2025/5/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4295)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **code** 
- **googleSheets** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
