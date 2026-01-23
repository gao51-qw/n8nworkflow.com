# Automate employee reimbursement workflow with Gmail, Google Drive & AI validation

> **Reimbursements used to be a headache.**

Employees submitted receipts through emails, managers got stuck in approval chains, and finance teams spent hours checking for duplicates, updating sheets, and sending follow-up emails.

**So, we automated it.**

Using n8n, we built a smart Employee Reimbursement Workflow that does everything… in just a few clicks.

**Here’s how it works.**]
When an employee uploads a receipt, the workflow first checks for duplicates.
If the file is new, it’s uploaded to Google Drive instantly.
Next, a unique tracking ID is generated—no manual typing, no mistakes.
Then, all the details are logged in Google Sheets in real time, ready for records.
And finally, the Finance team gets an email notification with everything they need to process the payment—no chasing, no missing info.

**The impact?**
We’ve cut processing time by over 70%, reduced errors to nearly zero, and made the entire process stress-free for employees and finance alike.

This isn’t just automation—it’s giving people their time back.


![Screenshot 20250805 152900.png](fileId:2049)

## 📊 Basic Information

- **Workflow ID:** 7271
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 390
- **Downloads:** 39
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7271)

## 👤 Author

- **Name:** Pramod Rathoure
- **Username:** @prathoure

## 🏷️ Categories

- Invoice Processing
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **merge** 
- **if** (×2)
- **googleDrive** (×4)
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **googleSheets** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
