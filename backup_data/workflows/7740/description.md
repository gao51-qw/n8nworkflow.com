This workflow pulls deals from **Pipedrive**, categorizes them by stage, and logs them into a **Google Sheet** for reporting and tracking.  

---

## ⚙️ Setup Instructions  

### 1️⃣ Connect Pipedrive  
1. In **Pipedrive** → **Personal preferences → API** → copy your **API token**  
   - URL shortcut: `https://{your-company}.pipedrive.com/settings/personal/api`  
2. In **n8n** → **Credentials → New → Pipedrive API**  
   - **Company domain**: `{your-company}` (the subdomain in your Pipedrive URL)  
   - **API Token**: paste the token from step 1 → **Save**  
3. In the **Pipedrive Tool** node, select your Pipedrive credential and (optionally) set filters (e.g., owner, label, created time).  

---

### 2️⃣ Prepare Your Google Sheet  
#### Connect your Data in Google Sheets  
- Use this format: **[Sample Sheet](https://docs.google.com/spreadsheets/d/1u0i-sfPxmfmm5YMU3ekEdQgdOHA6OgnbI-VwuRMDq4Q/edit?gid=0#gid=0)**  
- Row 1 = **column names**  
- In **n8n**, create credentials: **Google Sheets (OAuth2)**  
- Log in with your Google account and select your **Spreadsheet** + **Worksheet**  

---

## 🧠 How it works  
- **Get many deals (Pipedrive)**: Fetches all deals with stage IDs.  
- **Categorize Stages**: Maps stage IDs → friendly stage names (Prospecting, Qualified, Proposal, Negotiation, Closed Won).  
- **Today's Date**: Adds a date stamp to each run.  
- **Set Fields**: Combines stage, deal name, and date into clean columns.  
- **Google Sheets (Append)**: Writes all rows to your reporting sheet.  

---

## 📬 Contact  
Need help customizing this (e.g., pulling only active deals, calculating win-rates, or sending dashboards)?  

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**
