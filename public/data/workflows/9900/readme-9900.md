# Track coupon points with Google Sheets, Drive Storage, and Gmail weekly summary

> ## Simple Coupon Points Tracker with Google Sheets and Weekly Summary Email
Take full control of your expected loyalty points. This workflow helps you log every coupon and the points you should receive, store proof of purchase, and get a weekly summary so you can quickly spot any points that haven’t been credited and follow up with the program if needed.
### Who’s it for
Ideal for frequent coupon users or anyone collecting loyalty points from programs like Payback, Miles & More, or similar reward systems. If you want a centralized, reliable way to track expected points, organize screenshots, and make sure nothing goes missing, this workflow is built for you.
### How it works
Log coupon details and screenshots: Submit your coupon info via an n8n form. Screenshots are automatically saved in a Google Drive folder, and coupon data is appended to a Google Sheet. 
Weekly points summary: Every week, a scheduled trigger scans your sheet for coupons that are due to have points credited. It generates a clear summary email via Gmail so you can easily see which points are expected and follow up if the program hasn’t credited them.
### How to set up
* Google credentials: Configure OAuth2 credentials in n8n for Google Drive, Sheets, and Gmail.
* Google Drive: Create a folder for storing screenshots and link it in the workflow.
* Google Sheets: Create a sheet with these columns, or use the [Google Sheets Template](https://docs.google.com/spreadsheets/d/1CwLxsHHff5rDrxamIfy77Qd1-21lwBu-eNyX9WcgsJg/edit?usp=sharing) and then set the sheet ID and name in the workflow nodes.
```
Coupon Name | Account Used to Buy | Program | Points | Bonus Points | Purchase Date | Redeem Delay (days) | Claimable Date | Coupon Screen 
```
* Email node: Configure Gmail credentials and recipient address for weekly summaries.
* Form trigger: Open the form URL to submit coupon data from any device.
* Schedule trigger: Runs weekly to send the summary; timing can be adjusted.
### Requirements
* n8n instance with Google OAuth2 credentials for Drive, Sheets, and Gmail
* Google Drive folder ID for screenshots
* Google Sheets ID and sheet name for logging points
* Gmail account for sending summary emails

Stay on top of your expected points, ensure no reward slips through the cracks, and keep proof safely stored automatically. Happy tracking!


## 📊 Basic Information

- **Workflow ID:** 9900
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 55
- **Downloads:** 5
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9900)

## 👤 Author

- **Name:** Remko Stas
- **Username:** @remkos

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **googleDrive** 
- **scheduleTrigger** 
- **code** (×3)
- **googleSheets** (×2)
- **gmail** 
- **merge** 
- **stickyNote** (×3)
- **formTrigger** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
