# Track BlueSky post engagement metrics in Google Sheets automatically

> This workflow automatically syncs engagement metrics (Likes, Reposts, Replies) from BlueSky back to your content calendar in Google Sheets. It ensures your reporting is always up to date without manual data entry.

## Who is this for
Great for social media managers, agencies, and creators who need to report on content performance or analyze which post topics are driving the most engagement.

## What it does
The workflow uses a smart "Active Window" strategy to save API calls and ensure stability:
* **Fetch:** Pulls rows from your Google Sheet that are marked as "Posted."
* **Smart Filter:** Only processes posts published in the last 14 days (catching viral spikes while ignoring old archived content).
* **Safe Updates:** Queries the BlueSky API for the latest stats. If a post has been deleted, it handles the error gracefully instead of breaking the workflow.
* **Sync:** Updates the `Like Count`, `Repost Count`, and `Reply Count` columns in your sheet.

## How to set up
1. **Google Sheet:** Ensure your sheet has these columns: `Post Link`, `Posted At`, `Like Count`, `Repost Count`, `Reply Count`.
   * *(A sample Google Sheet link is provided inside the workflow notes)*.
2. **Credentials:** Enter your BlueSky Handle and App Password in the "Configuration" node.
3. **Select Sheet:** In both the "Get row(s)" and "Update row" nodes, select your specific Google Sheet.
4. **Schedule:** Set the trigger to run once daily (e.g., at 9 AM).

## 🚀 The BlueSky Growth Suite
This workflow is part of a 3-part automation suite designed to help you grow on BlueSky:
* **Part 1: Post Scheduler** (Manage content from Google Sheets)
* **Part 2: Analytics Tracker** (This template)
* **Part 3: Lead Magnet Bot** (Auto-DM users who reply to your posts)

## 📊 Basic Information

- **Workflow ID:** 12156
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 4
- **Downloads:** 0
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12156)

## 👤 Author

- **Name:** Soumya Sahu
- **Username:** @sahu

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **httpRequest** (×2)
- **set** 
- **stickyNote** (×10)
- **splitInBatches** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
