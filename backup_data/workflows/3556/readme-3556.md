# 💰 Automate currency rates update in invoices with Google Sheet, ExchangeRate API

> *Tags: Automation, Finance, Google Sheets, API*

*Note: This workflow uses the Exchange rate API and requires a valid API key.*

### Context
I’m [Samir Saci](https://samirsaci.com), a **Supply Chain Data Scientist** who builds automations to streamline operations, reduce manual tasks, and boost decision-making through real-time data.

In this workflow, I automated the task of **fetching live currency exchange rates**, updating a **Google Sheet** with the latest values, and **archiving historical records** — all without writing any code.

&gt; Improve your productivity by automating admin tasks with n8n!

📬 For business inquiries, you can add me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?
This template is perfect for:
- **Finance teams** tracking multi-currency cashflows
- **Analysts** building dashboards or models requiring updated FX data
- **Anyone working with spreadsheets** who needs up-to-date exchange rates

It updates:
- A live sheet with the latest USD-based exchange rates
- An archive tab to track historical changes over time

![Exchange Rate Workflow](https://www.samirsaci.com/content/images/size/w1000/2025/04/image-4.png)

### How does it work?
This workflow runs in N8N and performs the following steps:

1. 🌐 **Calls the ExchangeRate API** to get the latest rates based on USD
2. 🧠 **Extracts and formats key fields**: base currency, timestamp, and conversion values
3. 📊 **Updates a main Google Sheet** with the latest data (using upsert logic)
4. 🗂️ **Appends all rates** to a second Google Sheet tab for historical tracking

You can schedule this workflow to run daily, hourly, or on-demand.

### What do I need to start?
You don’t need to write a single line of code.
#### Prerequisites:
- A **Google Sheet** with two tabs: `Rate Sheet` and `Archives` *(Link of the publicly available example in the template)*
- A **valid Exchangerate API key**
- **Google Sheets API** connected via OAuth2

### Next Steps
Use the sticky notes in the workflow to understand how to:
- Add your Exchangerate API key
- Map the fields to match your Google Sheet layout
- Schedule the run frequency using the **Cron node**
- Optionally add Slack or email alerts if the base rate changes

For more information, check my tutorial:

[![Tutorial YouTube](https://www.samirsaci.com/content/images/2025/04/temp-6.png)](https://www.youtube.com/watch?v=Lhi6hV6rWEo)

[🎥 Watch My Tutorial](https://www.youtube.com/watch?v=Lhi6hV6rWEo)

🚀 Want to build finance automation workflows like this?
📬 Let’s connect on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Notes
- You can adapt this template for **other currencies** by changing the API endpoint


*This workflow was built using **n8n 1.85.4**
Submitted: April 15th, 2025*


## 📊 Basic Information

- **Workflow ID:** 3556
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1395
- **Downloads:** 139
- **Created:** 2025/4/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3556)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **set** 
- **merge** 
- **httpRequest** 
- **googleSheets** (×2)
- **stickyNote** (×3)
- **code** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
