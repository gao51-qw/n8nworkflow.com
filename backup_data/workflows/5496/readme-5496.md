# Extract email tasks with Gmail, ChatGPT-4o and Supabase

> 
# 📩 Gmail → GPT → Supabase | Task Extractor

This n8n workflow automates the extraction of actionable tasks from unread Gmail messages using OpenAI's GPT API, stores the resulting task metadata in Supabase, and avoids re-processing previously handled emails.

---

## ✅ What It Does

1. **Triggers on a schedule** to check for unread emails in your Gmail inbox.
2. **Loops through each email individually** using `SplitInBatches`.
3. **Checks Supabase** to see if the email has already been processed.
4. If it's a new email:
   - Formats the email content into a structured GPT prompt
   - Calls **ChatGPT-4o** to extract structured task data
   - Inserts the result into your `emails` table in Supabase

---

## 🧰 Prerequisites

Before using this workflow, you must have:

- An active **n8n Cloud or self-hosted instance**
- A connected **Gmail account** with OAuth credentials in n8n
- A **Supabase project** with an `emails` table and:
  ```sql
  ALTER TABLE emails ADD CONSTRAINT unique_email_id UNIQUE (email_id);
  ```
- An **OpenAI API key** with access to GPT-4o or GPT-3.5-turbo

---

## 🔐 Required Credentials

| Name            | Type       | Description                       |
|-----------------|------------|-----------------------------------|
| Gmail OAuth     | Gmail      | To pull unread messages           |
| OpenAI API Key  | OpenAI     | To generate task summaries        |
| Supabase API    | HTTP       | For inserting rows via REST API   |

---

## 🔁 Environment Variables or Replacements

- `Supabase_TaskManagement_URI` → e.g., `https://your-project.supabase.co`
- `Supabase_TaskManagement_ANON_KEY` → Your Supabase anon key

These are used in the HTTP request to Supabase.

---

## ⏰ Scheduling / Trigger

- Triggered using a **Schedule node**
- Default: every X minutes (adjust to your preference)
- Uses a Gmail API filter: **unread emails with label = INBOX**

---

## 🧠 Intended Use Case

&gt; Designed for productivity-minded professionals who want to extract, summarize, and store actionable tasks from incoming email — without processing the same email twice or wasting GPT API credits.

This is part of a larger system integrating GPT, calendar scheduling, and optional task platforms (like ClickUp).

---

## 📦 Output (Stored in Supabase)

Each processed email includes:
- `email_id`
- `subject`
- `sender`
- `received_at`
- `body` (email snippet)
- `gpt_summary` (structured task)
- `requires_deep_work` (from GPT logic)
- `deleted` (initially false)

## 📊 Basic Information

- **Workflow ID:** 5496
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 880
- **Downloads:** 88
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5496)

## 👤 Author

- **Name:** Paul Taylor
- **Username:** @ptylr

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 
- **gmail** 
- **supabase** 
- **if** 
- **splitInBatches** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
