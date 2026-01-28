# Auto-label Gmail emails using Gemini 2.5 Pro AI classification

> ## AI-Powered Gmail Auto-Labeler

Automatically organize your Gmail inbox with seamless, dynamic AI classification! This workflow leverages Google Gemini’s latest model to continually sort new emails into your own custom Gmail labels—no manual intervention or tedious setup required.

## 🚀 What This Workflow Does

- **Watches for Unread Emails:**
Continuously polls your Gmail inbox for new unread emails (polling interval can be changed as needed).

- **Fetches All Available Labels:**
Dynamically syncs every custom & system label from your Gmail account—no hardcoded lists.

- **AI-Based Classification:**
Each new email’s subject and snippet/body are sent to the Gemini 2.5 Pro AI, which analyzes content and recommends the best matching label(s) from your own label list (not made up!).

- **Accurate Label Application:**
The workflow maps Gemini’s label name suggestions to the correct label IDs in Gmail and auto-applies one or more labels directly to each email.

- **Self-Updating / No Maintenance:**
If you add/change Gmail labels, the workflow always uses the current label list. You don’t need to update any configuration or nodes (completely dynamic).

- **Supports Multiple Simultaneous Labels:**
Gemini can assign several labels at once—perfect for nuanced sorting (ex: “Receipts”, “Work”, "Travel").

## 🔧 How to Set Up

**Connect Credentials:**

- Google Gmail account (OAuth2)

- Gemini API key (for Google Gemini)

- (Optional) Adjust Gmail Labels:
Add, rename, or customize labels in Gmail to suit your sorting preferences. You can continue to modify these at any time!

- Activate the Workflow:
Turn on the workflow. It starts processing new emails immediately.
No need to edit code or update nodes when labels change.

- (Optional) Customize Filtering or Post-Processing:

The default trigger checks for unread messages, but you can adjust this (e.g., all messages, specific senders, etc.).

Add extra workflow steps as desired for downstream automation.

## 📝 Key Features & Best Practices

- **Dynamic Label Handling:**
Workflow always references your live Gmail label list—ensuring AI only selects valid, current labels.

- **Never Misses a Label:**
Gemini never invents new labels; only suggests exact matches from your actual account.

- **Highly Customizable:**
Enhance/chain further automations—trigger from read emails, exclude newsletters, forward labeled messages, etc.

- **No Manual Updates:**
Completely plug-and-play. Adding/changing labels in Gmail immediately reflects in workflow.

- **Includes In-Workflow Notes:**
Clear sticky notes and documentation embedded for reference and troubleshooting.

## 🕰 Example Use Cases
- Automated Inbox Zero – Instantly sort incoming emails into actionable folders.

- Smart Multi-Labeling – Financial emails get “Receipts”, “Accounting” and “Work”, all at once.

- Personal & Work Split – Classify emails into "Personal", "Clients", "Leads", etc.

- Travel, Projects, Subscriptions – Transform your Gmail into a fully organized hub.

This workflow is perfect for anyone who wants Gmail organization powered by leading-edge AI, with absolutely minimal maintenance.

Just connect accounts and activate — let Gemini do the sorting!

## 📊 Basic Information

- **Workflow ID:** 8357
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 893
- **Downloads:** 89
- **Created:** 2025/9/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8357)

## 👤 Author

- **Name:** Aryan Shinde
- **Username:** @shindearyan

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **gmail** (×2)
- **set** 
- **aggregate** 
- **code** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
