# Automated cold email campaign with Google Sheets, email verification & SMTP

> Use this template if you’re collecting leads in Google Sheets manually or automatically and need to send them emails daily using any personal or professional email provider. It’s simple yet effective.

I’ve kept it easy so that anyone without technical or coding knowledge can still automate their emails and achieve excellent ROI. Setting up the workflow takes only 15 minutes.


## How it works:
We connect Google Sheets with n8n to automatically fetch lead data. Google Sheets is used because it’s easy and widely accessible. Then, n8n sends emails daily at your scheduled times to the respective email addresses, using the subject lines and body text you've configured. It also verifies emails before sending.

It checks email availability, deliverability, and updates the Google Sheet/CRM with the respective fields.




## Requirements:
1. A Google Sheet/Excel/CRM tools with leads
(*A sample Google Sheet link is provided in the template*)

2. A working email account with SMTP information
(*SMTP info for the top 10 email providers is provided in the template*)

3. API key from any email verification tool
(*We use the Hunter API key in our use case. You can find the link in the template.*) 

## Setup Steps:
You need a Google Sheet where you're collecting leads. You can replace Google Sheets with your CRM tool. Connect it using your credentials.

Replace the manual trigger with a scheduled trigger to automate emails at your preferred time.

Replace the email verification tool/Hunter API with your own API key.

Add your SMTP credentials to connect the template with your preferred email provider. Using SMTP, you can send emails through Gmail, Outlook, Zoho, or any similar provider. This makes sending emails simple and cost-efficient.

```
Note: SMTP, which stands for Simple Mail Transfer Protocol, is a communication protocol used to send email messages between mail servers.

```

After sending the email, we update the Google Sheet with “Sent”; hence, the email is not sent again the next day.


## 📊 Basic Information

- **Workflow ID:** 6758
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 2777
- **Downloads:** 277
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6758)

## 👤 Author

- **Name:** Janak Patel
- **Username:** @dolphyai

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×6)
- **scheduleTrigger** 
- **googleSheets** (×2)
- **if** (×3)
- **set** 
- **noOp** (×3)
- **hunter** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
