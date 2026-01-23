# Auto-clip long videos into viral short clips with Vizard AI and social publishing

> ## Auto-clip long videos into viral short clips using Vizard AI

This workflow turns long-form YouTube or video URLs into short, high-viral-potential clips, then automatically publishes them to social platforms and logs results in Google Sheets.

## Who’s it for?
Content creators, social media managers, and marketers who want to scale short-form video production automatically.

## How it works
1. Collect a video URL and viral score via form or schedule.
2. Create a clipping project in Vizard AI.
3. Poll project status until processing is complete.
4. Filter clips by viral score and limit quantity.
5. Publish selected clips and log results to Google Sheets.

## How to set up
Connect Vizard AI, Google Sheets, and social credentials. Configure thresholds and limits in the Set Configuration node, then activate the workflow.


## 📊 Basic Information

- **Workflow ID:** 12054
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 640
- **Downloads:** 64
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12054)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×3)
- **wait** 
- **switch** 
- **splitOut** 
- **formTrigger** 
- **filter** 
- **googleSheets** (×3)
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
