# Api uptime monitoring with WhatsApp alerts & Google Sheets management

> This automated n8n workflow monitors API uptime by periodically checking API availability and sending instant WhatsApp alerts if any service goes down. It retrieves API details from a Google Sheet and includes retry logic for failed requests.

## Good to Know
- Checks API status every 15 minutes
- Integrates with Google Sheets for API list management
- Implements a retry mechanism with up to 4 attempts
- Sends WhatsApp alerts for downtime
- Supports customizable API request configurations

## How It Works
- **Schedule Trigger** - Triggers every 15 minutes
- **Read API List** - Fetches all API URLs from a Google Sheet
- **Process Each API1** - Loops through each API entry
- **Init Retry Counter** - Initializes `retryCount = 0`
- **Test API** - Sends the first request to the API
- **Check Response** - Checks if a valid response was received
- **If No Response** - Branches into retry flow if down
- **Wait 10 Min → Increment Retry → Retry API → Check Retry Response** - Wait and retry API call once
- **If Still No Response** - Verifies if retry also failed
- **If Still No Retry &gt; 4** - Checks if retry limit is reached (≥ 4)
- **Format Down Alert** - Formats the WhatsApp alert with API details
- **Send WhatsApp Alert** - Sends API down alert to the configured number
- **Continue Next API** - Moves to the next API in the list

## How to Use
- Import workflow into n8n
- Configure Google Sheets API for API list access
- Set up WhatsApp API for alerts
- Define API details in Google Sheet
- Test with sample APIs and verify alerts
- Adjust retry limits or schedule as needed

## Requirements
- Access to Google Sheets API
- WhatsApp API configuration
- Scheduled trigger setup in n8n

## Sheet Structure

| **Sheet Column**     | **Example Data**                                             |
| -------------------- | ------------------------------------------------------------ |
| `name`               | Timeout Test                                                 |
| `method`             | GET                                                          |
| `url`                | [https://httpbin.org/delay/15](https://httpbin.org/delay/15) |
| `headers`            | `{"Content-Type": "application/json"}`                       |
| `body`               | `{"key": "value"}`                                           |
| `expectedField`      | status                                                       |
| `expectedValue`      | success                                                      |
| `expectedStatusCode` | 200                                                          |



## Customizing This Workflow
- Modify trigger interval
- Adjust retry limits or wait times
- Customize WhatsApp alert format
- Add additional API headers or body data
- Integrate with other notification services



## 📊 Basic Information

- **Workflow ID:** 6747
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 539
- **Downloads:** 53
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6747)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **googleSheets** 
- **code** (×6)
- **httpRequest** (×2)
- **if** (×3)
- **wait** 
- **whatsApp** 
- **splitInBatches** 
- **scheduleTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
