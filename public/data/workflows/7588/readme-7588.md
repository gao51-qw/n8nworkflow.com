# Create automatic pivot tables in Google Sheets with n8n

> This n8n workflow pulls campaign data from Google Sheets and creates two pivot tables automatically each time it runs.

---

### ✅ Step 1: Connect Google Sheets

1. In n8n, go to **Credentials** → click **New Credential**
2. Select **Google Sheets OAuth2 API**
3. Log in with your Google account and authorize access
4. Use this sheet: [📄 Campaign Data Sheet](https://docs.google.com/spreadsheets/d/1lUEY6kPQbXizbmszLLNUJ_pBfGIKd75hu4uHj0vGRZQ/edit?usp=sharing)
5. Make sure the sheet includes:
   - A **Data** tab (row 1 = headers, rows 2+ = campaign data)
   - A tab for each **pivot view** (e.g. by Channel, by Campaign)

---

### 📬 Need Help?

Feel free to reach out:

- 📧 robert@ynteractive.com  
- 🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)


## 📊 Basic Information

- **Workflow ID:** 7588
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 168
- **Downloads:** 16
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7588)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **summarize** (×2)
- **googleSheets** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
