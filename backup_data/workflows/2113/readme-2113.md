# Enrich website visitors with Leadfeeder & Clearbit and save to Google Sheets

> # Use Case
When trying to maximize your outreach, website visitors are often an overlooked source of qualified new leads. This workflow allows your to track and enrich new website visitors and saves them to a Google Sheet once they meet a pre-defined criteria.
# What this workflow does
This workflow fires once a day and gets all your leads saved in Leadfeeder. It then takes the leads that meet a pre-defined engagement criteria, e.g. that they visited your site 3 times, and enriches them additionally with Clearbit. From there it filters the leads again by a criteria on the company, e.g. a minimum employee count, and saves matching leads into a Google Sheet document.
# Setup
1. Add your **Leedfeeder** credentials. The name should be `Authorization` and the value `Token token=yourapitoken`. You can find your token via **Settings -&gt; Personal -&gt; API-Token**
2. Add your **Google Sheet** credentials
3. Save the **Leedfeeder** account names you want to use in the `Setup` node
4. Copy the [Google Sheets Template](https://docs.google.com/spreadsheets/d/1a2gfBjZZpN0jiD7apR8fPplRp2aPHVy2_5lp4Yzp778/edit?usp=sharing) and add its URL to the `Setup` node
# How to adjust this to your needs
- Adjust and/or remove the engagement and company criteria
- Add more ways to enrich a company
# Potential ideas to enhance the use of this workflow
- Automatically reach out to users that meet the criteria / that get added to the sheet
- Create a workflow that finds the right employee in companies that are identified by this workflow

## 📊 Basic Information

- **Workflow ID:** 2113
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1354
- **Downloads:** 135
- **Created:** 2024/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2113)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **httpRequest** (×2)
- **filter** (×3)
- **clearbit** 
- **set** 
- **splitOut** (×2)
- **stickyNote** (×4)
- **scheduleTrigger** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
