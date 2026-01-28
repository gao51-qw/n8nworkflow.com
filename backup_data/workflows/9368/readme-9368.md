# Automate monthly CrUX report transfer from BigQuery to NocoDB with data cleanup

> ## **Overview**

This n8n workflow automatically **retrieves the monthly CrUX (Chrome User Experience) Report from Google BigQuery** and updates the data in **NocoDB**.  
It removes the previous month’s data before inserting the new dataset, ensuring your database always contains the latest CrUX rankings for website origins.  
The flow is fully automated, using schedule triggers to handle both data cleanup and data insertion each month.

---

## ✅ **Tasks**

* ⏰ Runs automatically on a **monthly schedule**  
* 🔢 Converts the **month name to a numeric value** for table selection  
* 🧹 Deletes last month’s CrUX data from **NocoDB**  
* 🌐 Queries **Google BigQuery** for the latest monthly dataset  
* 💾 Inserts the new CrUX rankings into **NocoDB**  
* ⚙️ Keeps your database up to date with **zero manual effort**

---

## **🛠 How to Use**

1️⃣ **Set Up BigQuery Access**  
   - Connect your **Google BigQuery** credentials.  
   - Make sure your project includes access to the **chrome-ux-report** public dataset.  

2️⃣ **Adjust the Query**  
   - In the **Google BigQuery** node, change the `LIMIT` value to control how many top-ranked sites are retrieved.  
   - Ensure the `{{ $json.table }}` field correctly references the dataset for the desired month (e.g., `202509`).  

3️⃣ **Prepare NocoDB Table**  
   - Create a table in **NocoDB** with fields: `origin`, `crux_rank`, and any additional metadata you wish to track.  

4️⃣ **Schedule Automation**  
   - The workflow includes two **Schedule Trigger** nodes:
     - One runs the **data cleanup** process (deletes last month).  
     - One runs the **data insertion** for the new month.  

5️⃣ **Run or Activate the Workflow**  
   - Activate it to run automatically each month.  
   - You can also run it manually to refresh data on demand.

## **📋 Prerequisites**

Before running this workflow, make sure you complete the following setup steps:

* 🧱 **Enable BigQuery API**  
  - Go to [Google Cloud Console → APIs & Services](https://console.cloud.google.com/apis/library/bigquery.googleapis.com)  
  - Enable the **BigQuery API** for your project.

* 📊 **Access the Chrome UX Report Dataset**  
  - In BigQuery, search for **“Chrome UX Report”** in the Marketplace or go directly to:  
    [https://console.cloud.google.com/marketplace/product/chrome-ux-report/chrome-ux-report](https://console.cloud.google.com/marketplace/product/chrome-ux-report/chrome-ux-report)  
  - Click **“View Dataset”** and add it to your BigQuery project.

* 🔑 **Connect BigQuery to n8n**  
  - In n8n, create credentials for your Google BigQuery account using **Service Account Authentication**.  
  - Ensure the account has permission to query the `chrome-ux-report` dataset.

* 🗄️ **Create a NocoDB Table**  
  - In NocoDB, create a new table to store your CrUX data with the following fields:  
    - **origin** → Short text  
    - **crux_rank** → Number  

* ⚙️ **Connect NocoDB to n8n**  
  - Use your **NocoDB API Token** to connect and allow the workflow to read/write data.


## **What is CrUX Rank?**

**CrUX Rank** (Chrome User Experience Rank) is a metric from Google’s **Chrome UX Report (CrUX)** dataset that indicates a website’s **popularity based on real user visits**.  
It reflects how frequently an origin (website) is loaded by Chrome users around the world.

- A **lower rank number** means the site is **more popular** (e.g., rank 1 = top site).  
- The data is collected from **anonymized Chrome usage statistics**, aggregated monthly.  
- This rank helps you **track site popularity trends** and compare your domain’s visibility over time.

## 📊 Basic Information

- **Workflow ID:** 9368
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 45
- **Downloads:** 4
- **Created:** 2025/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9368)

## 👤 Author

- **Name:** Nima Salimi
- **Username:** @salimi

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **googleBigQuery** 
- **nocoDb** (×3)
- **splitInBatches** 
- **code** 
- **set** 
- **stickyNote** (×5)
- **scheduleTrigger** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
