# Automate HR celebrations with Google Gemini, Sheets & Chat for team milestones

> ## Description

This workflow acts as your automated HR assistant, scanning for employee milestones and posting AI-generated celebration messages to Google Chat.

### How it works

* **Daily Scan:** Checks your Google Sheet every morning to identify birthdays and work anniversaries.
* **AI Drafting:** Uses **Google Gemini** to write unique, warm messages for each employee, ensuring wishes never sound robotic or repetitive.
* **Delivery:** Automatically posts the message to your team's **Google Chat** space and logs the activity.

### Set up steps

1.  **Connect Accounts:** Set up credentials for **Google Sheets** and **Google PaLM/Gemini**.
2.  **Configure Settings:** Open the `SET-BIRTHDAY` and `SET - ANNIVERSARY` nodes to enter your **Agency Name** and **Google Chat API** details (Space ID, Key, Token).
3.  **Prepare Data:** Ensure your Google Sheet contains columns for employee names, dates of birth, and joining dates.

## 📊 Basic Information

- **Workflow ID:** 11696
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 67
- **Downloads:** 6
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11696)

## 👤 Author

- **Name:** Dhruv Mali
- **Username:** @dhruvmali

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **if** (×2)
- **splitInBatches** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **set** (×3)
- **stickyNote** (×3)
- **httpRequest** (×2)
- **code** (×2)
- **googleSheets** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
