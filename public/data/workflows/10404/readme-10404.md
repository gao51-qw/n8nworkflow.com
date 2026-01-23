# Export icon metadata from Iconfinder to HTML & CSV with previews

> ## This n8n template demonstrates how to export all icons metadata from an Iconfinder account into an organized format with previews, names, iconset names and tags. It generates HTML and CSV outputs.

##### Good to know

- Iconfinder does not provide a built-in feature to export all icon data at once for contributors, which motivated the creation of this workflow.

- The workflow exports all iconsets for selected user account and can handle large collections.

- Preview image URLs are extracted in a consistent size (e.g., 128x128) for easy viewing.

- Basic icon metadata, including tags and iconset names is included for reference or further automation.

## How it works

1. The workflow fetches all iconsets from your Iconfinder account.

2. The workflow loops through all your iconsets, handling pagination automatically if an iconset contains more than 100 icons.

3. Each icon is processed to retrieve its metadata, including name, tags, preview image URLs, and the iconset name it belongs to.

4. An HTML file with a preview table and a CSV file with all icon details are generated.

## How to use

1. **Retrieve your User ID** – A dedicated node in the workflow is available to fetch your Iconfinder user ID. This ensures the workflow knows which contributor account to access.

2. **Setup API access** – The workflow includes a setup node where you provide your Iconfinder API key. This node passes the authorization token to all subsequent HTTP request nodes, so you don’t need to manually enter it multiple times.

3. **Trigger the workflow** – You can start it manually or attach it to a different trigger, such as a webhook or schedule.

4. **Export Outputs** – The workflow generates an HTML file with preview images and a CSV file containing all metadata. Both files are ready for download or further processing.

## Requirements

- Iconfinder account with an API key.

## Customising this workflow

You can adjust the preview size or choose which metadata to include in HTML and CSV outputs.

Combine with other workflows to automate asset cataloging.

## 📊 Basic Information

- **Workflow ID:** 10404
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 6
- **Downloads:** 0
- **Created:** 2025/11/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10404)

## 👤 Author

- **Name:** Nexio_2000
- **Username:** @flowbuddy

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×3)
- **code** (×3)
- **convertToFile** 
- **merge** 
- **set** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
