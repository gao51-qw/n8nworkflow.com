# Generate daily Bitcoin on-chain metrics PDF report with NASDAQ data

> # Purpose and Audience
This n8n automation workflow is designed to generate a Bitcoin Daily On-Chain Metrics report in PDF format by fetching and transforming real-time blockchain data. It is ideal for cryptocurrency analysts, traders, investors, and blockchain enthusiasts who want to monitor Bitcoin's network activity, market valuation, and security metrics efficiently.

## What It Does
The workflow automates the retrieval of Bitcoin blockchain data via the Nasdaq API, processes key on-chain metrics such as transaction volume, fees, market cap, hash rate, and mining difficulty, and dynamically populates a visually appealing PDF report template. It provides a clear snapshot of Bitcoin’s network health, adoption levels, and market dynamics based on the latest available data.

## Who Is It For
This workflow is perfect for crypto analysts, financial data scientists, blockchain researchers, and investors who require automated, up-to-date, and detailed Bitcoin network reports. It serves those looking to integrate real-time crypto data into their decision-making, reporting, or portfolio management processes with minimal manual intervention.

## How to Setup
1. Import the provided n8n workflow into your n8n instance.
2. Configure API keys for Nasdaq data access and APITemplate.io for PDF generation within the workflow nodes.
3. Trigger the workflow manually or use schedule trigger node for automatic execution to fetch the previous day's Bitcoin on-chain metrics.
4. Review or download the generated PDF report containing all key Bitcoin metrics, including transaction volumes, market cap, miner revenue, hash rate, and more.

Note: Step by step setup guide is inlcuded with the workflow file.

## Report Snapshot:
![image.png](fileId:2188)

## 📊 Basic Information

- **Workflow ID:** 7836
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 52
- **Downloads:** 5
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7836)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×2)
- **set** 
- **httpRequest** (×3)
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
