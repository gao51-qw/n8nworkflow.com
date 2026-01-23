# Automate personalized HR email outreach using Gmail, Google Sheets with rate limiting

> ## Automate Personalized HR Email Outreach with Rate Limiting

This workflow streamlines HR outreach by fetching contact data, validating emails, enforcing daily sending limits, and sending personalized emails with attachments, all while logging activity.

### How it works
1. Read HR contact data from Google Sheets.
2. Remove duplicates and validate email formats.
3. Apply dynamic daily email sending limits.
4. Generate personalized email content.
5. Download resumes for attachments.
6. Send emails via Gmail with attachments.
7. Log sending status (success/failure) to Google Sheets.

### Setup
1. Configure Google Sheets credentials.
2. Configure Gmail OAuth2 credentials.
3. Update 'Google Sheets - Read HR Data' with your document and sheet IDs.
4. Define email content in 'Email Creator' node.
5. Set 'Download Resume' URL to your resume repository.
6. Update 'Log to Google Sheets' with your tracking sheet IDs.

### Customization
Adjust the 'Rate Limiter' node's RAMP_START and LIMIT_BY_WEEK variables to match your desired sending schedule and volume.

## 📊 Basic Information

- **Workflow ID:** 11329
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 65
- **Downloads:** 6
- **Created:** 2025/11/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11329)

## 👤 Author

- **Name:** Panth1823
- **Username:** @panth1823

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **stickyNote** (×6)
- **if** (×2)
- **code** (×4)
- **httpRequest** 
- **gmail** 
- **googleSheets** (×2)
- **removeDuplicates** 
- **set** 
- **scheduleTrigger** 
- **splitInBatches** 
- **wait** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
