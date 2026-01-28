# Automated error notifications with optional GPT-4o diagnostics via email

> **++Who’s it for++**

This template is ideal for anyone who needs reliable, real-time visibility into failed executions in n8n. Whether you’re a developer, operator, founder, or part of a small team, this workflow helps you detect issues quickly without digging through execution logs. It’s especially useful for users who want the flexibility to enable AI-powered diagnostics when needed.

**++What it does++**

The workflow sends an automated email alert whenever any workflow in your n8n instance encounters an error. It captures key details such as workflow name, timestamp, node name, and error message. If you enable AI analysis, the alert also includes a Severity Level and a Quick Resolution—giving you an instant, actionable understanding of the problem. If AI is disabled, you receive a clean, minimal error notification.

**++How it works++**

**1.** Error Trigger activates when any workflow fails.
**2.** Config — Set Fields stores your SMTP settings and the AnalyzeErrorWithAI toggle.
**3.** Use AI Analysis? decides whether to run the AI node.
**4.** If enabled, Analyze Error with AI generates structured recommendations.
**5.** Format Email Body builds the message based on the selected mode.
**6.** Send Email delivers the notification.

**++Requirements++**

**1.** SMTP credentials
**2.** A valid sender & recipient email
**3.** Optional: OpenAI credentials if using AI analysis

**++How to set up++**

**1.** Open the Config node and fill in email settings and the AI toggle.
**2.** Add your SMTP and (optional) OpenAI credentials.
**3.** Save, activate, and test the workflow.

## 📊 Basic Information

- **Workflow ID:** 11507
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 368
- **Downloads:** 36
- **Created:** 2025/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11507)

## 👤 Author

- **Name:** Chandan Singh
- **Username:** @coolchandan62

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **errorTrigger** 
- **emailSend** 
- **set** (×2)
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
