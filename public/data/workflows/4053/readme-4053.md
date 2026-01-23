# Sort Gmail emails with GPT-4o into action required and no action labels

> 🧾 Description:

This automation uses GPT-4o to scan unread Gmail emails and intelligently classify them as:

    Action → Requires your attention (reply, review, schedule, or respond)

    No Action → Informational or promotional; no action needed

The result? You eliminate inbox noise and gain a clear daily routine: only check what's in Action Required.
⚙️ How It Works:

    Trigger: Runs on a customizable schedule

    Fetch Emails: Pulls unread messages from Gmail

    Classify via GPT-4o: Determines if each email needs action or not

    Sort Emails:

        Labels actionable emails as Action Required

        Labels non-actionable ones as No Action

        Removes the Inbox label to clean your primary inbox view

        ✅ Emails stay in your account—just better organized

🚀 How to Use:

    Import the workflow into your n8n instance

    Set up Gmail and OpenAI credentials

    Create Gmail labels:

        Action Required

        No Action

    Activate the workflow

    Start your day by checking only the Action Required label

📦 Requirements:

    n8n (self-hosted or cloud)

    Gmail OAuth2 account

    OpenAI API key (GPT-4o or GPT-4o-mini)

    Gmail labels: Action Required, No Action

💡 Why It Matters:

Stop manually filtering emails.
This workflow helps you focus only on what matters while keeping everything else out of your way—without deleting or archiving anything.

## 📊 Basic Information

- **Workflow ID:** 4053
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1346
- **Downloads:** 134
- **Created:** 2025/5/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4053)

## 👤 Author

- **Name:** Khaled
- **Username:** @khaled

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** (×5)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
