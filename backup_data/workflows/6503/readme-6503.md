# Monitor flight price drops and send email alerts with SerpAPI and Gmail

> ## **Problem:**
🚨It is difficult to manually track changing flight prices and quickly identify the best time to book a ticket. Many travelers miss deals or spend too much time monitoring fares for their specific routes and travel dates.

## **Prerequisites:**
- An active SerpAPI account (for flight search API access)
- Gmail or another email service account (for email alerts)


## **This would be helpful for:**
- Frequent flyers wanting to book flights at the lowest price
- Budget travelers planning trips in advance
- Corporate travelers managing travel expenses
- Travel agencies monitoring deals for clients

## **Step-by-step workflow:**
Takes 5-10 minutes to set up

1. Set your preferred flight route and travel date
2. Choose the price alert threshold
3. Automatically monitor flight prices at your selected interval
4. Get notified by email when a price drop is detected

## **Sample Query**

*Input:*
Origin: “JFK” (New York)
Destination: “SEA” (Seattle)
Outbound Date: “2025-09-06”
Price Threshold: $250
Notification Email: your@email.com

*Output:*
If flight from JFK to SEA on 2025-09-06 drops to $250 or below, you’ll receive an email notification:
“Hi! The flight price to Seattle just dropped to $242. Book your ticket now!”


## 📊 Basic Information

- **Workflow ID:** 6503
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 855
- **Downloads:** 85
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6503)

## 👤 Author

- **Name:** Yash Choudhary
- **Username:** @yashnitiim

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **function** 
- **if** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
