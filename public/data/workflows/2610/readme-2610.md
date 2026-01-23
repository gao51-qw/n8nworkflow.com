# Smartlead to HubSpot performance analytics

> 
*Smartlead to HubSpot Performance Analytics
A streamlined workflow to analyze your Smartlead performance metrics by tracking lifecycle stages in HubSpot and generating automated reports.*

## **Who is this for?**

(Outbound) Automation Agencies, Sales and marketing teams using Smartlead for outreach campaigns who want to track their performance metrics and lead progression in HubSpot.

**What problem does this workflow solve?**

Manual tracking of lead performance across Smartlead and HubSpot is time-consuming and error-prone. This workflow automates performance reporting by connecting your Smartlead data with HubSpot lifecycle stages, providing clear insights into your outreach campaign effectiveness.

**What this workflow does**

Automatically pulls performance data from your Smartlead campaigns
Cross-references contact status with HubSpot lifecycle stages
Generates comprehensive performance reports in Google Sheets
Provides customizable reporting schedules to match your team's needs

## **Setup Requirements**

### **PostgreSQL Database**

Set up your PostgreSQL instance (includes $300 free GCP credits)
Follow our step-by-step setup guide: [Find a step-by-step guide here](https://github.com/wukimidaire/postgres_table_templates)


### **Google Account Integration**

Connect your Google Account to n8n
[Find the guide here](https://docs.n8n.io/integrations/builtin/credentials/google/#compatible-nodes)


### **Smartlead Configuration**

Connect your Smartlead instance:
Detailed connection guide included in workflow



### **How to customize this workflow**

Configure the Trigger node to adjust report frequency
Modify the Google Sheets template to match your specific KPIs
Customize HubSpot lifecycle stage mapping in the Function node
Adjust PostgreSQL queries to track additional metrics

Need assistance or have suggestions? 
lmk [**here**](https://www.linkedin.com/in/victordecoster/)

## 📊 Basic Information

- **Workflow ID:** 2610
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1880
- **Downloads:** 188
- **Created:** 2024/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2610)

## 👤 Author

- **Name:** victor de coster
- **Username:** @vliegendepater

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **httpRequest** (×2)
- **splitInBatches** (×2)
- **postgres** (×7)
- **merge** 
- **code** 
- **hubspot** 
- **if** 
- **scheduleTrigger** 
- **stickyNote** (×5)
- **set** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
