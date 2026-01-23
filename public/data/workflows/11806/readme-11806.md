# Generate daily tech, manga & movies newsletter from RSS feeds with Brevo

> # 🔧 How it works

### Scheduled Trigger

The workflow is triggered automatically every day at 12:00 PM using a Cron node.

### RSS Feed Collection

It fetches the latest content from multiple RSS feeds related to Technology, Manga, and Movies.

### Content Processing & Formatting

The collected data is filtered and organized based on your interests.

A dynamic HTML email template is generated to present the content in a clean and readable layout.

### Email Delivery

The final newsletter is sent directly to your inbox using the Send Email node.

# ⚙️ Set up steps

### Configure RSS Sources

Update the RSS feed URLs inside the Set nodes to match your preferred sources.

### Set Email Recipient

Replace the email address in the Send Email node with your own.

### Adjust Schedule

Modify the execution time in the Cron Trigger node if you want the newsletter to be sent at a different time.

### Activate the Workflow

Enable the workflow to start receiving your personalized daily newsletter automatically.

## 📊 Basic Information

- **Workflow ID:** 11806
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 75
- **Downloads:** 7
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11806)

## 👤 Author

- **Name:** Ninmegne Paul
- **Username:** @paul02prof

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×7)
- **splitOut** 
- **scheduleTrigger** 
- **rssFeedRead** (×3)
- **splitInBatches** (×3)
- **googleSheets** 
- **switch** 
- **code** (×6)
- **aggregate** 
- **merge** 
- **gmail** 
- **sendInBlue** 
- **html** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
