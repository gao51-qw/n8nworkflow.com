## **Overview**

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
