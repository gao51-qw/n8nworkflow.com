# Generate cold outreach drafts from Google Sheets with GPT-4o-mini & Gmail

> **How It Works**
1. Starts with a Manual Trigger

2. Reads lead list from Google Sheet

3. Filter rows where email wasn’t sent

4. Generate personalized email body (AI)

5. Generate email subject line (AI)

6. Merge AI outputs with original row data

7. Create Gmail draft

8. Update Google Sheet with email content and date

9. Wait 3 seconds between updates to avoid API limits

**Setup Steps**
- Connect Google Sheets, Gmail, and OpenAI credentials
- Check sheet column names (business_name, email, contact_name, city, business_type, email_sent)
- Run Manual Trigger to test one row
- Adjust AI prompts if needed

**Customization**
- Add unique ID column to match rows if needed
- Change AI prompts to adjust email style
- Increase wait time to avoid rate limits

**Use Cases**
- Draft cold emails for review before sending
- Automate lead outreach while keeping human oversight
- Generate personalized emails and subject lines quickly

**Troubleshooting Tips**
- Draft not created → check Gmail credentials and scopes
- Sheet not updating → check matching column exists
- AI outputs empty → increase tokens or check response path

## 📊 Basic Information

- **Workflow ID:** 11333
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/11/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11333)

## 👤 Author

- **Name:** Ayis Saliaris Fasseas
- **Username:** @ayissf

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **if** 
- **set** (×2)
- **wait** 
- **httpRequest** (×2)
- **stickyNote** (×5)
- **gmail** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
