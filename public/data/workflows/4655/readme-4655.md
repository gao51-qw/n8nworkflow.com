# Automated invoice management with Nextcloud, email and Telegram notifications

> This workflow automatically fetches PDF invoices from a Nextcloud folder (`/Invoice/Incoming`), sends them via email to a fixed recipient (`invoice@example.com`), sends a Telegram notification, and archives the file to `/Invoice/2025/archive`.

**Key Steps:**
1. Triggered daily at 8 AM
2. Lists files in `/Invoice/Incoming`
3. Filters for existing entries
4. Downloads the file
5. Sends the invoice via email
6. Sends a Telegram message with filename
7. Moves the file to archive

📦 Technologies used:
- Nextcloud
- SMTP Email
- Telegram Bot

⚙️ Use case:
Perfect for freelancers or small businesses to automate recurring invoice sending with minimal effort.


## 📊 Basic Information

- **Workflow ID:** 4655
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 999
- **Downloads:** 99
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4655)

## 👤 Author

- **Name:** Joachim Hummel
- **Username:** @jhummel

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **nextCloud** (×3)
- **if** 
- **emailSend** 
- **telegram** 
- **stickyNote** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
