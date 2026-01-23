# Inserting Brevo contact reports into NocoDB

> ## **Overview**

This n8n workflow automatically **retrieves Brevo contact reports** and **inserts summarized engagement data into NocoDB**.  
It groups campaign activity by email, creating a clean, unified record that includes sent, delivered, opened, clicked, and blacklisted events.  
This setup keeps your CRM or marketing database synchronized with the latest Brevo email performance data.

---

## ✅ **Tasks**

* ⏰ Runs automatically on schedule or manually  
* 🌐 Fetches contact activity data from **Brevo API**  
* 🧩 Groups all campaign activity per email  
* 💾 Inserts summarized data into **NocoDB**  
* ⚙️ Keeps engagement metrics synced between **Brevo** and **NocoDB**  

---

## **🛠 How to Use**

* 🧱 **Prepare your NocoDB table**  
  Create a table with fields for: **email**, **messagesSent**, **delivered**, **opened**, **clicked**, **done**, and **blacklisted**.  

* 🔑 **Connect your Brevo credentials**  
  Add your **Brevo API Key** in the **HTTP Request** node to fetch contact data securely.  

* 🧮 **Review the Code Nodes**  
  These nodes group contact activity by email and prepare a single dataset for insertion.  

* 🚀 **Run or schedule the workflow**  
  Execute it manually or use a **Schedule Trigger** to automate the data sync process.  

---

## **📌 Notes**

* 🗂 Make sure the **field names** in NocoDB match those used in the workflow.  
* 🔐 Keep your **Brevo API Key** secure and private.  
* ⚙️ The workflow can be expanded to include additional fields or filters.  
* 📊 Use the data for engagement analytics, segmentation, or campaign performance tracking.


## 📊 Basic Information

- **Workflow ID:** 9364
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 47
- **Downloads:** 4
- **Created:** 2025/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9364)

## 👤 Author

- **Name:** Nima Salimi
- **Username:** @salimi

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **httpRequest** 
- **splitOut** (×4)
- **code** (×5)
- **set** (×4)
- **scheduleTrigger** 
- **filter** 
- **merge** 
- **nocoDb** (×3)
- **if** 
- **splitInBatches** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
