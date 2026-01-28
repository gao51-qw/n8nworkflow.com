# Waitlist form stored in GoogleSheet with email verification step

> ## Instructions

This automation streamlines the process of **collecting user information** using a Form Node, enabling individuals to join a **waitlist managed via Google Sheets.**

It also **generates a verification code**, prompting users to input this code in the Second Form Step. If the code is _nvalid, the workflow keeps the user in a verification loop until a valid code is entered.

Once a **valid code is provided**, the workflow proceeds to the final step, where **additional information** can be collected.

All e**ntered data and intermediate states** are securely **stored in the Google Sheet**.

### Structure of the GoogleSheet

Firstname | Lastname | Email | Company | Verification-Code | Verified | Intended Use
Marcel | Claus-Ahrens | foo[at]bar| foobar | abc123 | TRUE | Just testing

### Setup

1. Set Up a Google Sheet: Create a Google Sheet with the specified columns, or customize them to suit your needs.
2. Verify the "Send Mail" Node: Ensure your "Send Mail" node is functional, or replace it with another email-sending node.
3. Customize Texts and Fields: Update email content, form texts, and form fields to align with your specific use case.
4. Done!

![Image](https://cloud.let-the-work-flow.com/logo-64.png)  
Enjoy the workflow! ❤️  
[let the workf low](https://let-the-work-flow.com) — Workflow Automation & Development

## 📊 Basic Information

- **Workflow ID:** 2550
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 2180
- **Downloads:** 218
- **Created:** 2024/11/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2550)

## 👤 Author

- **Name:** Marcel Claus-Ahrens
- **Username:** @geckse

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheets** (×3)
- **set** (×3)
- **emailSend** 
- **form** (×3)
- **stickyNote** (×5)
- **if** 
- **merge** 
- **crypto** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
