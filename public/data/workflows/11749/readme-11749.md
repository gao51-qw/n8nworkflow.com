# Monitor German company register & financial events with Implisense API & notifications

> This n8n workflow monitors significant register, financial, and news-related events for German companies. It takes a list of companies (for example from a CRM or lead list), resolves them via the Implisense / German Company Data API, retrieves recent company events, normalizes and filters them by relevance (e.g. management changes, financing, M&A, insolvency), deduplicates results, and prepares structured notifications with urgency levels. The output can be routed to email, chat tools, webhooks, or downstream systems such as CRMs or data stores for continuous company monitoring and alerting.

## Setup steps

1. **Replace Mock Data**: Change "Mock Lead Input" node to your actual lead source
   - CRM connector (Salesforce, HubSpot, etc.)
   - Database query
   - CSV import

2. **Configure Credentials**: Set up RapidAPI API credentials
   - Create an account on RapidAPI  (free tier available)
    - [RapidAPI](https://rapidapi.com/Implisense/api/German%20Company%20Data)
   - Insert your RapidAPI x-rapidapi-key as password

3. **Adjust Notification**: Configure your peferred Notification system if needed

4. **Connect Output**: Add nodes after the 'Create Summary' node

## 📊 Basic Information

- **Workflow ID:** 11749
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 5
- **Downloads:** 0
- **Created:** 2025/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11749)

## 👤 Author

- **Name:** as311
- **Username:** @implisense

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **splitInBatches** 
- **wait** 
- **if** (×3)
- **code** (×6)
- **merge** (×2)
- **removeDuplicates** 
- **noOp** (×2)
- **httpRequest** (×2)
- **set** 
- **manualTrigger** 
- **stickyNote** (×4)
- **function** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
