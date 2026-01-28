# Automate personalized email campaigns with Google Docs, Sheets and SMTP

> # Emailing Using Google Sheet, Google Docs, and SMTP

Automate personalized email campaigns using a Google Sheets contact list, a Google Docs template, and SMTP delivery.

## How It Works

- **Google Docs** is used as the email template with variables: `{{firstname}}`, `{{lastname}}`, `{{company}}`, `{{email}}`.
- **Google Sheet** contains your list of recipients (one per row).
- For each contact, the workflow merges personal data into the Google Docs template.
- Email is sent to each recipient via SMTP (batch size: 1). Use the `Wait` node to respect provider quotas.
- After sending, the workflow updates the "process" column of the Google Sheet with the date/time.

## How to Use

1. **Copy Templates:**
   - [Google Docs Template](https://docs.google.com/document/d/1sR1Mjee0heur6CgEV_ssYzOUbFNaDnyEnPSt1CFEMWI/edit?usp=sharing)
   - [Google Sheet Template](https://docs.google.com/spreadsheets/d/1mFKp3wmbV9qp2tpGGsN72zdiC32y8H1nhjdgP885y-U/edit?usp=sharing)
   - Find each document’s ID (the text after `/d/` and before `/edit` in the URL).

2. **Configure Workflow:**
   - Enter your Google Docs and Google Sheets IDs in the `settings` node.
   - Set your email subject in the appropriate parameter.

3. **Set Up Credentials:**
   - Connect your Google account.
   - Configure the SMTP node with your mail server details.

4. **Update Data:**
   - Edit the Google Docs template with your message and variables.
   - Prepare your Google Sheet with these columns: **email**, **firstname**, **lastname**, **company**.

5. **Deploy and Test:**
   - Connect all nodes.
   - Test with a small contact batch.
   - Troubleshoot any node errors (indicated in red in n8n).

## Requirements

- **Google Credentials & permissions**: For Sheets and Docs access.
- **SMTP Server**: For email delivery (adjust Wait node for rate limits).
- **n8n Version**: Tested on 1.105.2 (Ubuntu). 

## Need Help?

- Comment this [post](https://www.linkedin.com/posts/n8n-about_n8n-emailing-smtp-activity-7358928869015310336-G_9n/) or contact me on [LinkedIn](https://www.linkedin.com/in/stephaneheckel/)
- Ask in the [n8n Community Forum](https://community.n8n.io/)!

## See Also

After running your email campaign, some messages may fail to deliver. This [workflow](https://n8n.io/workflows/7251-flag-bounced-emails-in-google-sheets-from-gmail-delivery-error-messages/) scans your email inbox for delivery errors (e.g., bounced messages), flags problematic email addresses in the Google Sheet and ensures future campaigns skip them.

## 📊 Basic Information

- **Workflow ID:** 7065
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1259
- **Downloads:** 125
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7065)

## 👤 Author

- **Name:** Stéphane Heckel
- **Username:** @stephaneheckel

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **googleDocs** 
- **set** (×2)
- **emailSend** 
- **filter** 
- **splitInBatches** 
- **wait** 
- **noOp** 
- **merge** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
