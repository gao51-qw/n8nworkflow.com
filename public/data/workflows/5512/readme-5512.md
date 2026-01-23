# Send daily currency exchange rate updates via CurrencyFreaks API and Gmail

> # Daily Currency Update Workflow (n8n)

- Trigger: ScheduleTrigger node (configurable interval)
- Set Variables: API Key, Preferred Currencies (PKR, GBP, EUR, USD, BDT, INR)
- HTTP Request: Fetch latest exchange rates from CurrencyFreaks API
- Set Recipient Email
- Set Email Subject
- Send Email: HTML formatted via Gmail OAuth2 with dynamic rate data (date, base currency, rates)
- Flow: ScheduleTrigger → Set API Key & Currencies → HTTP Request → Set Recipient → Set Subject → Gmail Send


## 📊 Basic Information

- **Workflow ID:** 5512
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 235
- **Downloads:** 23
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5512)

## 👤 Author

- **Name:** Sarfaraz Muhammad Sajib
- **Username:** @sarfarazmuhammad

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×3)
- **httpRequest** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
