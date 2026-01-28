# Automatically collect bug bounty tips from Twitter to Google Sheets

> ## How it works
Automatically monitors Twitter for bug bounty tips and educational content every 4 hours, then saves valuable insights to Google Sheets for easy reference and organization.

## Set up steps
- Get your API key from https://twitterapi.io/ (free tier available)
- Configure Google Sheets credentials in n8n
- Create a Google Sheet with the required columns
- Update the Sheet ID in the final node

## What you'll get
A continuously updated database of bug bounty tips, techniques, and insights from the security community, perfectly organized in Google Sheets with:
- Tweet content and URLs
- Engagement metrics (likes, retweets, replies)
- Formatted timestamps for easy sorting
- Automatic duplicate prevention

Perfect for security researchers, bug bounty hunters, and cybersecurity professionals who want to stay updated with the latest tips and techniques from Twitter's security community.

![image.png](fileId:2299)

## 📊 Basic Information

- **Workflow ID:** 8146
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 290
- **Downloads:** 29
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8146)

## 👤 Author

- **Name:** Kunsh
- **Username:** @ethicxlhuman

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×4)
- **httpRequest** 
- **code** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
