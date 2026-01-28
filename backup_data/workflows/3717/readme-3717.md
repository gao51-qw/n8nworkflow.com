# Search LinkedIn companies and add them to Airtable CRM

> # Search LinkedIn companies and add them to Airtable CRM

### Who is this for?
This template is ideal for sales teams, business development professionals, and marketers looking to build a robust prospect database without manual LinkedIn research. Perfect for agencies, consultants, and B2B companies targeting specific business profiles.

### What problem does this workflow solve?
Manually researching companies on LinkedIn and adding them to your CRM is time-consuming and error-prone. This automation eliminates the tedious process of finding, qualifying, and importing prospects into your database.

### What this workflow does
This workflow automatically searches for companies on LinkedIn based on your criteria (keywords, size, location), retrieves detailed information about each company, filters them based on quality indicators (follower count and website availability), and adds new companies to your Airtable CRM while preventing duplicates.

### Setup
1. Create a Ghost Genius API account and get your API key
2. Configure HTTP Request nodes with Header Auth credentials (Name: "Authorization", Value: "Bearer your_api_key")
3. Create an Airtable base named "CRM" with columns: name, website, LinkedIn, id, etc.
4. Set up your Airtable credentials following n8n documentation
5. Add your company search selection criteria to the “Set Variables” node.

### How to customize this workflow
- Modify search parameters in the "Set Variables" node to target different industries, locations, or company sizes
- Adjust the follower count threshold in the "Filter Valid Companies" node based on your qualification criteria
- Customize the Airtable fields mapping in the "Add Company to CRM" node to match your database structure
- Add notification nodes (Slack, Email) to alert you when new companies are added

## 📊 Basic Information

- **Workflow ID:** 3717
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 4325
- **Downloads:** 432
- **Created:** 2025/4/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3717)

## 👤 Author

- **Name:** Matthieu
- **Username:** @yaznow

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **httpRequest** (×2)
- **if** (×2)
- **airtable** (×2)
- **stickyNote** (×7)
- **set** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
