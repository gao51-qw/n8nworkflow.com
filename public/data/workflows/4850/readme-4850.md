# Export Cloudflare domains with DNS records and settings to Google Sheets

> ## How it works

This workflow simply exports all your CloudFlare domains to Google Sheet to get high overview of all of your settings. This could help for easy debugging, searching or similar needs. 
In flow simple pagging nodes are used to iterate over all your domains, because this list could be huge. 
For each host we are merging DNS & Settings and transforming them into columns for all our domains.

## Requirements

For storing and processing of data in this flow you will need:

- CloudFlare.com API key/token - for retrieving your data (https://dash.cloudflare.com/:account/api-tokens) (need full access)
- Google Spreadsheet auth connected in your n8n Credentials
- Google Spreadsheet template - you can copy [my sheet](https://docs.google.com/spreadsheets/d/1jt6od8FMt-Yo7A_CPGuyfqWzL7HJk6SZmQQFO6kkWBo/edit?usp=sharing) as starting point, start by copying it to your account 
- Match Sheet ID in 'Export' node to your newly created.

#### Official CloudFlare api Documentation
For full details and specifications please use API documentation from: https://developers.cloudflare.com/api/

### Potential API timeouts
If you encounter CF API timeouts - I would suggest to only put somewhere in the loop simple sleep/wait node - for couple of seconds - and it should resolve timeouts.

### Google Sheet
I've used simple Google Sheet feature `conditional formatting` to visually distinct my on|off toggles that was of my interest to easily get high overview for debuggint some of the settings on my hosts - but please use your own logic or change it completely.

## 📊 Basic Information

- **Workflow ID:** 4850
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 550
- **Downloads:** 55
- **Created:** 2025/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4850)

## 👤 Author

- **Name:** KPendic
- **Username:** @kres

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **stickyNote** (×7)
- **manualTrigger** 
- **wait** 
- **set** (×2)
- **if** 
- **merge** 
- **httpRequest** (×3)
- **splitOut** 
- **code** (×4)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
