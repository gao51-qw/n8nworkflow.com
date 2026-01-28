# Automated hotel price drop alerts with email notifications and database tracking

> This n8n workflow automatically tracks hotel room prices, detects price drops, and sends real-time email alerts with savings calculations. It continuously monitors multiple hotels and room types to help travelers, businesses, and agents secure the best rates.

### **Key Features**

* Automatically checks hotel prices every **6 hours**
* Monitors **multiple hotels and room categories**
* Detects and alerts when prices **drop**
* Compares **old vs new** pricing and highlights savings
* Sends **beautiful HTML email alerts**
* Logs price history for long-term insights
* Shows **availability changes** and urgency indicators

### **Price Drop Triggers**

Alerts are sent when:

* Price decreases by any amount
* Price drops by a certain percentage (configurable)
* Room becomes available again after being sold out

### **Email Alert Includes**

| Field                 | Details                         |
| --------------------- | ------------------------------- |
| Hotel Name & Location | ✅                               |
| Room Type & Plan      | ✅                               |
| Old Price             | Shown with **strikethrough**    |
| New Price             | Highlighted for visibility      |
| Savings Amount        | ₹ / $ value difference          |
| Savings %             | Percentage change               |
| Booking Link          | Direct hotel booking / OTA link |
| Urgency Badge         | Shows limited-time availability |

### **Workflow Logic**

1. **Schedule Trigger**
   Runs every **6 hours** (configurable)
2. **Fetch Hotel Price API**
   Calls hotel booking / OTA / aggregator API
3. **Compare With Stored Price**
   Retrieves previous price from database/storage
4. **Detect Price Drop & Availability Change**
5. **Save Latest Price**
   Updates price history record
6. **Send Email Alert**
   Sends formatted HTML email with price drop details
7. **Log Notification**
   Maintains complete log of events

### **Setup Requirements**

| Step | Action                                      |
| ---- | ------------------------------------------- |
| 1    | Schedule Trigger (cron: every 6 hours)      |
| 2    | Add Hotel API / scraping source credentials |
| 3    | Set up database or Google Sheet for storage |
| 4    | Configure SMTP for emails                   |
| 5    | Enter agent / user email address            |
| 6    | Populate hotel & room watchlist             |
| 7    | Test and verify price comparison logic      |

### **Best Use Cases**

* Travel agencies
* Corporate travel teams
* Personal trip planning
* Hotel revenue analysts
* Price intelligence dashboards

### **Extension Ideas**

* WhatsApp and Telegram alerts
* Push notifications to mobile apps
* Google Sheets dashboard
* Slack alerts for teams
* Price trend charts (Grafana / Google Charts)
* Integration with GPT for smart recommendations



## 📊 Basic Information

- **Workflow ID:** 10390
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 116
- **Downloads:** 11
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10390)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×15)
- **code** (×7)
- **httpRequest** (×3)
- **if** 
- **emailSend** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
