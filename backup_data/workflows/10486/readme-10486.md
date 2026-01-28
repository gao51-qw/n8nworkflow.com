# Automated QuickBooks sales anomaly detector with professional email alerts

> # 📈 Is Your Business Flying Blind Day-to-Day? Get QuickBooks Sales Alerts That Matter.

What if you could spot a major sales problem—or a winning campaign—the very next morning, instead of weeks later? Imagine receiving a beautiful, data-rich alert directly in your inbox the moment your sales deviate from the norm.

This workflow transforms n8n into an intelligent financial watchdog for your QuickBooks Online data. **Stop waiting for month-end reports. Start making next-day decisions.**

*This production-ready workflow was crafted with precision by the automation experts at [**Elegant Biztech**](https://www.elegantbiztech.com/). We specialize in creating powerful, bespoke automation solutions that drive business intelligence and efficiency. For custom workflow development or inquiries, please contact us at [**sales@elegantbiztech.com**](mailto:sales@elegantbiztech.com).*

![Screenshot 20251108 at 12.09.12 PM.png](fileId:3245)

***

## 🎯 Who is This Workflow For?

This tool is designed for anyone who needs a real-time pulse on their business's financial health. If you find yourself in one of these roles, this workflow is for you:

*   💼 **Business Owners & Executives:** Maintain a high-level overview of your company's daily performance without getting lost in spreadsheets. Make proactive, strategic decisions with confidence.
*   📈 **Sales & Marketing Leaders:** Get immediate, next-day feedback on your campaigns and promotions. Did that flash sale work? You'll know tomorrow, not next month.
*   📊 **Finance & Operations Managers:** Proactively detect financial irregularities, potential issues with payment channels, or significant data entry errors before they snowball.
*   👨‍💼 **Account Managers & Consultants:** Effortlessly monitor the financial health of your clients' accounts, providing exceptional, proactive service that sets you apart.

***

## 🌟 Key Features

*   **Daily Automated Execution:** Runs on a schedule every morning to analyze the previous day's performance.
*   **Intelligent Benchmarking:** Calculates a rolling 30-day average to create a dynamic and reliable performance benchmark.
*   **Complete Revenue Picture:** Gathers data from both **Paid Invoices** and **Sales Receipts** in QuickBooks Online to ensure total accuracy.
*   **Fully Configurable Threshold:** You have complete control over what constitutes an "anomaly." The default is a +/- 40% deviation, but it can be changed to any value.
*   **Premium Dark-Mode Email Alert:** Delivers a stunning, mobile-responsive HTML email that uses dynamic colors and icons to visually represent a sales spike (green) or drop (amber).
*   **Robust Error Handling:** The workflow is designed to run smoothly even on days with zero sales, preventing crashes and ensuring reliability.

***

## 🛠️ Prerequisites

To use this workflow, you will need active credentials for the following services:

1.  **QuickBooks Online:** To connect to your company's financial data.
2.  **Email (SMTP):** To send the final alert. This can be a generic SMTP provider, Gmail, Microsoft 365, etc.

***

## ⚙️ Step-by-Step Setup Guide

Getting this powerful detector running is a simple 3-step process.

### Step 1: Connect Your Credentials

This is the most important step. You only need to configure two types of credentials.

*   #### **(A) QuickBooks Online Account**
    1.  Find the first QuickBooks node, named **`Fetch_30Day_Invoices`**.
    2.  In the parameters panel on the right, locate the **"Credentials"** field.
    3.  Select your existing QuickBooks credential or create a new one.
    4.  Once configured, ensure you select this **same credential** for the other three QuickBooks nodes (`Fetch_30Day_Sales_Receipts`, `Fetch_Yesterday_Invoices`, and `Fetch_Yesterday_Sales_Receipts`).

*   #### **(B) Email Account**
    1.  Navigate to the final node in the workflow, named **`Send_Alert_Email`**.
    2.  In its "Credentials" field, select or create your SMTP/Email account credential.

### Step 2: Configure the Workflow Parameters

*   #### **(A) Set the Anomaly Threshold**
    1.  Click on the **`Check_If_Anomaly`** (IF) node.
    2.  In the parameters, you will see `Value 2` is set to `{{ 40 }}`. This represents a +/- 40% deviation.
    3.  **Action:** Change this number to make the alert more or less sensitive to your needs.

*   #### **(B) Configure the Email Recipient**
    1.  Click on the final node, **`Send_Alert_Email`**.
    2.  Update the **`To Email`** field with the email address (or a comma-separated list of addresses) where alerts should be sent.
    3.  Update the **`From Email`** to your desired sending address.

![Screenshot 20251104 at 11.52.46 AM.png](fileId:3159)
![Screenshot 20251104 at 11.53.06 AM.png](fileId:3158)


### Step 3: Activate Your Workflow

*   Click the **"Active"** toggle in the top-right corner of your n8n canvas.

Congratulations! Your automated Sales Anomaly Detector is now live and will keep you informed every morning.

***

## 🎨 Customization & Final Notes

*   **Schedule:** The `Run_Every_Morning` node is set to trigger at 7 AM daily. You can easily adjust this to any time or frequency you prefer.
*   **Email Design:** The HTML code in the `Send_Alert_Email` node is fully accessible. Feel free to modify the colors, text, or add your company logo to the footer to fully personalize it.
*   **Creator:** This workflow was designed and built by **Elegant Biztech**. We are passionate about leveraging automation to unlock business potential. Visit us at [**elegantbiztech.com**](https://www.elegantbiztech.com/).

## 📊 Basic Information

- **Workflow ID:** 10486
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 13
- **Downloads:** 1
- **Created:** 2025/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10486)

## 👤 Author

- **Name:** Elegant Biztech
- **Username:** @ebworkflows

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **set** (×4)
- **quickbooks** (×2)
- **filter** (×2)
- **httpRequest** (×2)
- **summarize** (×2)
- **if** 
- **emailSend** 
- **code** (×3)
- **merge** (×3)
- **scheduleTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
