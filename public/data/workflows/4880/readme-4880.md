# Segment WooCommerce customers for targeted marketing with RFM analysis

> ## Overview

This workflow is designed for eCommerce store owners and marketing teams who use WooCommerce. It helps segment customers based on their purchasing behavior using the RFM (Recency, Frequency, Monetary) model. By identifying high-value customers, new buyers, and at-risk segments, you can tailor your marketing strategies and improve customer retention.

## How It Works

1. **Trigger**: The workflow can be started manually or on a scheduled basis (e.g., weekly).
2. **Retrieve Orders**: It fetches completed orders from your WooCommerce store from the past year.
3. **RFM Analysis**: It groups orders by customer and calculates their RFM scores.
4. **Customer Segmentation**: Based on RFM scores, customers are categorized into marketing segments (e.g., Champions, At Risk, Lost).
5. **Summary Report**: Generates a styled HTML report with a table summarizing customer segments and suggested marketing actions.

## Setup Instructions

1. **Connect WooCommerce**:

   * Go to the WooCommerce node.
   * Add or select your WooCommerce API credentials. You need the Base URL, Consumer Key, and Consumer Secret.
   * Ensure API access is enabled in your WooCommerce settings.

2. **Customize Segmentation (Optional)**:

   * In the "Calculate RFM Scores" code node, you can adjust the logic that assigns segment labels based on score combinations.
   * You can also update the marketing suggestions in the second "Code" node.

3. **Run the Workflow**:

   * Use the "Manual Start" node for testing.
   * Enable the "Weekly Trigger" node to automate execution.

4. **View Report**:

   * The final HTML node outputs a complete styled report.
   * You can send this via email or integrate it with other services.

## Requirements

* WooCommerce store with API access enabled.
* Valid API credentials (Base URL, Consumer Key, Consumer Secret).
* n8n instance with access to the internet.

## 📊 Basic Information

- **Workflow ID:** 4880
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1089
- **Downloads:** 108
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4880)

## 👤 Author

- **Name:** Mohammadreza azari
- **Username:** @mrazari

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **start** 
- **scheduleTrigger** 
- **wooCommerce** 
- **code** (×2)
- **html** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
