# Post hourly crypto market summaries via Coingecko to X and to email

> **Description**  
This workflow, delivers real-time cryptocurrency market updates (default: Bitcoin) by fetching data from the CoinGecko API. It formats the information into a visually engaging message and shares it on X (formerly Twitter) and via email. The workflow is set to trigger hourly but is fully customizable to suit different schedules or cryptocurrencies.

### Key Features  
- **Real-Time Market Data Retrieval:** Fetches up-to-date cryptocurrency market data using CoinGecko API.  
- **AI-Driven Message Formatting:** Converts raw data into a structured, engaging message.  
- **Social Media Integration:** Posts updates to X with OAuth2 authentication.  
- **Email Notifications:** Sends updates via email to specified recipients.  
- **Flexible Customization:** Adaptable for tracking multiple cryptocurrencies or adding new notification channels.  

### Workflow Steps  
1. **Trigger Workflow:** Default is hourly, but the interval can be customized.  
2. **Fetch Cryptocurrency Data:** Retrieves market data using the CoinGecko API.  
3. **Format the Message:** Converts the data into a readable and visually appealing format.  
4. **Post Update on X:** Shares the message on X (formerly Twitter).  
5. **Send Email Notifications:** Sends the update to a specified email address.  
6. **Optional Notifications:** Expand to additional channels like Slack or Telegram.

## 📊 Basic Information

- **Workflow ID:** 2746
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1050
- **Downloads:** 105
- **Created:** 2025/1/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2746)

## 👤 Author

- **Name:** Badr
- **Username:** @b4dr

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×2)
- **scheduleTrigger** 
- **httpRequest** 
- **code** 
- **twitter** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
