# Automatically update YouTube video descriptions with inserted text

> ## Who is this for?

This workflow is designed for YouTubers who want to update their video descriptions in bulk without manually editing each one. It's especially useful for creators who include a standard set of links in their descriptions and need to insert a new link between existing ones across multiple videos.
## What problem does this workflow solve?

Manually updating video descriptions for multiple videos can be tedious and time-consuming. If you have a section in your video descriptions that contains important links, adding a new one in a specific position (e.g., between two existing links) can be a challenge. This workflow automates that process, allowing you to insert a specific string between two predefined rows in all of your video descriptions at once.
## What this workflow does

1. Fetches all videos from your YouTube channel.
2. Iterates through each video to retrieve its existing description.
3. Identifies two predefined rows in the description.
4. Inserts a new row between the two specified rows.
5. Updates the video description with the modified text.

## Setup

1. Connect your YouTube account to n8n and grant necessary permissions.
2. Define your variables in the "Set String to Insert" node:
   - **rowBefore**: The existing row after which the new row will be inserted.
   - **rowToInsert**: The new text or link to insert.
   - **rowAfter**: The existing row before which the new row will be inserted.
3. Run the workflow using the manual trigger.
4. Review the updated descriptions to ensure accuracy.

## How to customize this workflow to your needs

- **Change the insertion criteria** by modifying the rowBefore and rowAfter values.
- **Insert multiple rows** by adjusting the JavaScript code in the Code node.
- **Extend the workflow** by adding conditions (e.g., only updating descriptions of videos with certain tags).
- **Filter specific** videos instead of updating all by modifying the "Get All Videos" node.

This workflow ensures that all your YouTube descriptions stay updated and consistent with minimal effort.

## 📊 Basic Information

- **Workflow ID:** 3080
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 2059
- **Downloads:** 205
- **Created:** 2025/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3080)

## 👤 Author

- **Name:** Akram Kadri
- **Username:** @akramkadri

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **youTube** (×3)
- **manualTrigger** 
- **stickyNote** (×2)
- **set** 
- **splitInBatches** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
