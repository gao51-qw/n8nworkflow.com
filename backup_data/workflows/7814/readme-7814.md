# Automate content publishing across 25 social media channels with Airtable & Postiz

> **How it works**
• Webhook triggers from content creation system in Airtable
• Downloads media (images/videos) from Airtable URLs
• Uploads media to Postiz cloud storage
• Schedules or publishes content across multiple platforms via Postiz API
• Tracks publishing status back to Airtable for reporting

**Set up steps**
• Sign up for Postiz account at https://postiz.com/?ref=max
• Connect your social media channels in Postiz dashboard
• Get channel IDs and API key from Postiz settings
• Add Postiz API key to n8n credentials (Header Auth)
• Update channel IDs in "Prepare for Publish" node
• Connect Airtable with your content database
• Customize scheduling times per platform as needed
• Full setup details in workflow sticky notes

## 📊 Basic Information

- **Workflow ID:** 7814
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 803
- **Downloads:** 80
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7814)

## 👤 Author

- **Name:** Max aka Mosheh
- **Username:** @aiwithapex

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **airtable** (×10)
- **stickyNote** (×9)
- **webhook** 
- **telegram** 
- **httpRequest** (×9)
- **wait** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
