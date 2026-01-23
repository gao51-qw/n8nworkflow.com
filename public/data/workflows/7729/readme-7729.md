# Daily crypto market report with CoinGecko, WhatsApp, and email alerts

> This workflow automates the generation of a daily crypto market report, identifying the top 24-hour gainers and losers among the top 100 cryptocurrencies. It fetches real-time data, processes it to highlight significant price movements, and delivers formatted alerts via WhatsApp and email.

## Quick Notes

- Ensure the CoinGecko API key is correctly configured.
- Verify phone numbers and email addresses for alert recipients.
- Confirm the workflow triggers at 00:00 UTC daily.

## Process Flow

1. Trigger the workflow daily at 00:00 UTC with the `Daily Crypto Trigger` node.
2. Configure phone numbers, email addresses, and API key with the `Set Configuration Variables` node.
3. Fetch crypto data from CoinGecko API with the `Fetch Crypto Data from CoinGecko` node.
4. Process crypto data to rank top 24-hour movements with the `Process Crypto Movements` node.
5. Format WhatsApp messages with the `Format WhatsApp Message` node.
6. Send WhatsApp alerts with the `Send WhatsApp Alert` node.
7. Format email content with the `Format Email Content` node.
8. Send email alerts with the `Send Email Alert` node.

## Output
![Screenshot from 20250822 151230.png](fileId:2173)
## Getting Started

- Import the workflow into n8n and set up CoinGecko API credentials.
- Configure WhatsApp and email service integrations.
- Run a test execution to verify data fetching and alert delivery.

## Tailored Adjustments

- Adjust the `Process Crypto Movements` node to change the number of top gainers/losers.
- Modify the `Set Configuration Variables` node to include additional recipient contacts or API parameters.

## 📊 Basic Information

- **Workflow ID:** 7729
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 483
- **Downloads:** 48
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7729)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **set** 
- **httpRequest** 
- **code** (×3)
- **emailSend** 
- **stickyNote** (×5)
- **whatsApp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
