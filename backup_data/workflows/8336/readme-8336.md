# Automatic email categorization and organization with Outlook and GPT-4o

> # n8n – Outlook AI Categorization & Labeling (Fully Automated)

&gt; **Zero manual mapping.** The workflow automatically discovers your Outlook folders, understands the context, assigns the correct category, and moves the email into the right folder. It uses the original **Microsoft Outlook nodes** plus an **AI Agent**. You can connect OpenAI or any other LLM provider.

---

## ✨ Features

- **Self-Discovery:** Scans your Outlook folders automatically – no manual mapping required.
- **AI-Powered Decisions:** Considers sender, subject, content, links, attachments, timing, and business context.
- **Label + Move:** Assigns the right Outlook category and moves the email into the correct folder.
- **Dual Category Logic:** Can apply both a primary and a secondary category (e.g., `Action` + `Project`).
- **Error Handling:** Captures errors and continues without breaking the workflow.
- **Flexible AI Backend:** Replace OpenAI with your own LLM if preferred.

---

## 🚀 Setup (5 Steps)

1. **Connect Outlook**  
   In *n8n → Credentials → Microsoft Outlook*, grant at least `Mail.ReadWrite`.

2. **Connect AI**  
   In *n8n → Credentials*, set up OpenAI (or another model). Works best with GPT-4.x or GPT-4o.

3. **Import the Workflow**  
   *n8n → Workflows → Import from File/Clipboard* and paste the provided JSON.

4. **Enable Trigger**  
   Adjust the *Schedule Trigger* (e.g., every 5 minutes).

5. **Run & Verify**  
   Test run and watch emails get categorized and moved automatically.

---

## 🧠 How It Works

1. **Schedule Trigger** pulls new emails  
2. **Loop Over Items** processes them one by one  
3. **Markdown / varEmail** cleans the content  
4. **Get Many Folders** fetches Outlook categories and folders  
5. **Summarize + Code** prepare category IDs  
6. **AI Agent** applies deep categorization logic  
7. **Update Category** applies the Outlook category  
8. **Move Folder** places the email in the right folder  
9. **Error Handling** ensures workflow stability  

---

## 🧩 System Prompt Example

```text
You are an advanced AI email categorization system. Your mission is to intelligently analyze and categorize emails with maximum accuracy and context awareness.

INTELLIGENT CATEGORIZATION ENGINE:

- Parse all available categories: {{ $json.category }}
- Multi-layer analysis: Sender, Subject, Body, Links, Attachments
- Prioritize: Security threats, Action Required, Business Context
- Specialized: SaaS, Hosting, E-commerce, Finance, Support, Corporate
- Anti-Spam: Pattern detection, spoofing, red-flag subjects
- Dual Logic: Primary + Secondary categories when applicable

OUTPUT FORMAT (JSON only):
{
  "subject": "EXACT_EMAIL_SUBJECT",
  "category": "PRIMARY_CATEGORY_FROM_AVAILABLE_LIST",
  "subCategory": "SECONDARY_CATEGORY_IF_APPLICABLE",
  "analysis": "Reasoning",
  "confidence": "HIGH/MEDIUM/LOW"
}

Available Categories: {{ $json.category }}
```

---

## ⚙️ Parameters & Notes

- Uses only **existing Outlook categories** (never invents new ones).  
- Works with any LLM that supports Chat Completions.  
- Requires `Mail.ReadWrite` permissions.  
- Safe fallback: if unsure, it uses the **Action** category.  

---

## 🛡️ Security

- Processes only what is needed for classification.  
- No external logging of email content unless you configure it.  
- AI provider can be swapped for self-hosted LLMs for compliance.  

---

## 📄 License & Sharing

- **License:** MIT (or your choice).  
- **Tags:** `n8n`, `Outlook`, `Email`, `AI`, `Automation`, `Categorization`  
- **Import Method:** Copy/paste workflow JSON into n8n.  

---

## ✅ Summary

**Connect → Import → Run.**  
No manual mapping. AI-powered categorization that **labels and organizes your Outlook mailbox automatically**.


## 📊 Basic Information

- **Workflow ID:** 8336
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1813
- **Downloads:** 181
- **Created:** 2025/9/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8336)

## 👤 Author

- **Name:** Can KURT
- **Username:** @ubden

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** 
- **splitInBatches** 
- **markdown** 
- **set** (×4)
- **filter** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **merge** 
- **code** 
- **microsoftOutlook** (×5)
- **summarize** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
