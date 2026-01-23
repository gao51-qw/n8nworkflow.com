# Post images and text from Google Drive and Sheets to LinkedIn

> # How This LinkedIn Automation Workflow Helps You:

- Save time - Eliminate manual LinkedIn posting and content scheduling tasks
- Stay consistent - Automated daily posting keeps your LinkedIn profile active and engaging
- Keep control - Preview every post before it goes live via Telegram approval system
- Track everything - Complete posting history and status tracking in Google Sheets dashboard
- Never double-post - Smart status tracking prevents duplicate content and posting errors
- Scale content - Manage multiple posts in advance through organized spreadsheets
- Professional workflow - Streamlined process perfect for social media agencies and content creators
- Reduce errors - Automated file handling eliminates manual upload mistakes

## How This LinkedIn Auto-Posting System Works:

- Setup your content in Google Sheets with captions and Google Drive image URLs
- Schedule runs daily at your chosen time (default 4 PM) automatically via n8n
- Finds next eligible post with empty posting status column using smart filtering
- Downloads image directly from your Google Drive storage securely
- Sends Telegram preview with image and caption for manual approval
- Posts to LinkedIn immediately if approved, or marks as declined in database
- Updates sheet status automatically to "Posted" or "Declined" with timestamps
- Sends confirmation message to Telegram with posting results and analytics
## 
Requirements:

- Google Sheets with organized post content and image URLs
- Images stored in Google Drive for reliable access
- Telegram bot configured for approval notifications
- LinkedIn business account connected to n8n platform

Here is how your google sheet look like
![image.png](fileId:1446)

## 📊 Basic Information

- **Workflow ID:** 4702
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 278
- **Downloads:** 27
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4702)

## 👤 Author

- **Name:** papcy
- **Username:** @papcy

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×7)
- **function** 
- **httpRequest** (×2)
- **telegram** (×5)
- **if** (×2)
- **googleSheets** (×3)
- **code** (×2)
- **scheduleTrigger** 
- **linkedIn** 
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
