# Automate LinkedIn invitations with Browserflow & Google Sheets tracking

> # Manage LinkedIn Invitations with Browserflow
**Automate personalized LinkedIn outreach while maintaining human-like behavior**

## Overview
This workflow helps you send targeted LinkedIn invitations with customized messages, automatically checking existing connections to avoid duplicate requests. Perfect for recruiters, sales professionals, and anyone building their professional network systematically.

## How It Works
1. **Contact Management**: Store your prospects in a Google Sheet with their LinkedIn profile URLs
2. **Connection Verification**: Automatically check if you're already connected to avoid duplicate invitations
3. **Smart Invitations**: Send personalized invitations to new contacts
4. **Progress Tracking**: Update the Google Sheet with invitation status

## Setup Instructions

### Prerequisites
- **Google account** with Sheets access
- **Browserflow account** with available credits ([sign up here](https://browserflow.io/))
- **n8n instance** (tested on version 1.109.1)

### Step-by-Step Setup
1. **Prepare Your Contact List**
   - Download the [Google Sheet Template](https://docs.google.com/spreadsheets/d/1mFKp3wmbV9qp2tpGGsN72zdiC32y8H1nhjdgP885y-U/edit?usp=sharing)
   - Make a copy to your Google Drive
   - Extract the Sheet ID from your URL (the string between `/d/` and `/edit`)

2. **Configure Workflow Settings**
   - Open the `settings` node and enter your Google Sheet ID
   - Customize your invitation message in the `message` node
   - Set up your Google Sheets credentials
   - Configure your Browserflow credentials

3. **Populate Your Data**
   - Add contacts to your Google Sheet with their LinkedIn profile URLs

4. **Test & Deploy**
   - Run a test with 1-2 contacts first (update the `Limit` node)
   - Monitor execution and adjust `Wait` if needed 

## Important Considerations

- **Responsible Usage**: This tool mimics human behavior and respects LinkedIn's natural usage patterns. It's designed for quality networking, not mass spamming.

- **Rate Limits**: Stay within LinkedIn's acceptable limits.

- **Account Safety**: Excessive automation can result in LinkedIn restrictions. Always prioritize authentic, valuable connections.


## Support & Community

Need assistance? Here's how to get help:
- **LinkedIn Discussion**: Comment on this [workflow post](https://www.linkedin.com/posts/n8n-about_n8n-browserflow-activity-7368758690025320448-zupZ/)
- **Direct Contact**: Connect with me on [LinkedIn](https://www.linkedin.com/in/stephaneheckel/)
- **Community Forum**: Ask questions in the [n8n Community](https://community.n8n.io/)




## 📊 Basic Information

- **Workflow ID:** 8224
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 177
- **Downloads:** 17
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8224)

## 👤 Author

- **Name:** Stéphane Heckel
- **Username:** @stephaneheckel

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **manualTrigger** 
- **limit** 
- **n8n-nodes-browserflow.browserflow** (×2)
- **if** 
- **set** (×2)
- **splitInBatches** 
- **wait** 
- **stickyNote** (×9)
- **googleSheets** (×3)
- **noOp** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
