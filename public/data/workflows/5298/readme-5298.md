# Automatic monitoring of multiple URLs with downtime alerts

> This n8n workflow allows you to automatically monitor the status of multiple URLs in a simple and efficient way. You just need to enter the URLs you want to scan and run the workflow (either manually or scheduled). For each URL, an availability check is performed. The results are logged in a Google Sheet, clearly distinguishing between successful checks and failures (downtime). If any URL fails, the system filters these errors and automatically sends an email alert notifying you of the detected outages.

The workflow includes help messages in both English and Spanish, integrates with Google Sheets and Gmail, and is suitable for both one-off tasks and scheduled monitoring.



### For Who?
- Webmasters
- SEO & Marketing Teams
- SysAdmins
- Anyone needing automated website uptime monitoring

### How it works?
Enter the URLs to scan in the “URLs” field.
Trigger the workflow manually or schedule it to run automatically.
For each URL, the workflow:
Checks if the URL is online or down.
Logs the status (success or error) in a Google Sheet.
At the end, filters the failed URLs (crashes) and sends an email alert l

## 📊 Basic Information

- **Workflow ID:** 5298
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 13628
- **Downloads:** 1362
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5298)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **splitOut** (×2)
- **set** 
- **googleSheets** (×2)
- **summarize** 
- **splitInBatches** 
- **manualTrigger** 
- **gmail** 
- **code** 
- **httpRequest** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
