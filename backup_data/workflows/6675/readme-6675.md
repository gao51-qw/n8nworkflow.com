# Manage construction projects with tasks, photo reports, Telegram & Google Sheets

> ## How it works
This template helps project managers collect task updates and photo reports from field workers via Telegram and stores everything in a Google Sheet. It enables daily project reporting without paper or back-office overhead.

High-level flow:

Workers receive daily tasks via Telegram

They respond with photo reports

Bot auto-saves replies (photos + status) to a Google Sheet

The system tracks task completion, adds timestamps, and maintains report history

## Set up steps
🕒 Estimated setup time: 15–30 min
You’ll need:

A Telegram bot (via BotFather)

A connected Google Sheet (with specific column headers)

A set of preconfigured tasks

👉 Detailed setup instructions and required table structure are documented in sticky notes inside the workflow.

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 📊 Basic Information

- **Workflow ID:** 6675
- **Complexity:** advanced
- **Node Count:** 111
- **Views:** 2705
- **Downloads:** 270
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6675)

## 👤 Author

- **Name:** Artem Boiko
- **Username:** @datadrivenconstruction

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **if** (×29)
- **code** (×26)
- **noOp** (×4)
- **cron** (×2)
- **googleSheets** (×18)
- **telegram** (×16)
- **stickyNote** (×11)
- **telegramTrigger** 
- **merge** (×3)
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 111 nodes with 79 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
