# Flag bounced emails in Google Sheets from Gmail delivery error messages

> # Scanning Email Inbox for Delivery Errors

**Prerequisite:** [Automate Personalized Email Campaigns with Google Docs, Sheets, and SMTP](https://n8n.io/workflows/7065-automate-personalized-email-campaigns-with-google-docs-sheets-and-smtp/).

## How It Works

After running your email campaign, some messages may fail to deliver. This workflow scans your email inbox for delivery errors (e.g., bounced messages), flags problematic email addresses in the Google Sheet and ensures future campaigns skip them.

## How to Use

1. **Ensure Prerequisite Workflow:**  
   - You should have the [Email Campaign Workflow](https://n8n.io/workflows/7065-automate-personalized-email-campaigns-with-google-docs-sheets-and-smtp/) configured and running.

2. **Google Sheet Setup:**  
   - Use the [Google Sheet Template](https://docs.google.com/spreadsheets/d/1mFKp3wmbV9qp2tpGGsN72zdiC32y8H1nhjdgP885y-U/edit?usp=sharing).  
   - Identify your document’s ID (the string after `/d/` and before `/edit` in the URL).

3. **Configure Workflow:**  
   - Enter your Google Sheet ID in the `settings` node.  
   - Connect your Google credentials to n8n.

4. **Email Inbox:**  
   - Set up the `readspamfolder` node to search for bounce/error messages in your mail (e.g., in the Spam or Inbox folders—adjust label/folder if emails land elsewhere).  

5. **Google Sheet Update:**  
   - Configure the `lookupemail` and `update_err` nodes


## Requirements

- **Google Credentials** to access Gmail and sheets.
- **Gmail Account** (bounce/error messages must be accessible here).
- **n8n Version:** Tested with 1.105.2 (Ubuntu).

## Need Help?

- Comment this [post](https://www.linkedin.com/posts/n8n-about_n8n-emailing-smtp-activity-7358928869015310336-G_9n/) or contact me on [LinkedIn](https://www.linkedin.com/in/stephaneheckel/)
- Ask in the [n8n Community Forum](https://community.n8n.io/)!

## 📊 Basic Information

- **Workflow ID:** 7251
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 257
- **Downloads:** 25
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7251)

## 👤 Author

- **Name:** Stéphane Heckel
- **Username:** @stephaneheckel

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **code** 
- **set** (×3)
- **gmail** 
- **if** 
- **googleSheets** (×2)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
