Description:
Automate your personal email management with this AI-powered inbox triage system built entirely in n8n. This template connects Gmail, Azure OpenAI (GPT-4o-mini), and Notion to classify, summarize, and store your incoming emails—helping you focus only on what matters.
The workflow fetches unread emails from Gmail, runs them through a custom AI classification model (Important, Ignore, Delegate, Reply Later), creates clear summaries, and stores the results in Notion for future reference. No more clutter—your inbox is automatically sorted, prioritized, and documented.

**✅ What This Template Does (Step-by-Step):**

📧 Fetch Unread Emails from Gmail

- Retrieves only unread, inbox-labeled emails via Gmail API.
- Captures sender, subject, and email content for processing.

🔄 Split Emails for Individual Process- ing

- Breaks down bulk email retrieval into single-item batches for parallel AI classification.

✏️ Clean & Structure Email Data

- Extracts subject, sender, and message text.
- Removes unnecessary metadata for cleaner AI inputs.

🤖 AI Classification with Azure OpenAI (GPT-4o-mini)

- Categorizes emails into Important, Ignore, Delegate, or Reply Later.
- Uses a precise, prompt-engineered LLM chain for consistent results.

📊 Generate Clear, Actionable Summaries

- Combines classification and key email details into concise summaries.

📈 Aggregate Results into a Digest

- Merges all processed email summaries into a batch report.

🗂 Store Insights in Notion

- Saves structured summaries and classifications into a Notion page for easy tracking and retrieval.

**🎯 Perfect For:**
- Busy professionals who want a clutter-free inbox.
- Founders & executives managing high email volume.
- Remote teams needing quick email triage and visibility.
- Productivity enthusiasts looking to integrate AI into their workflow.

**⚙️ Built With:**
- Gmail API (email retrieval)
- n8n Split In Batches (parallel processing)
- Azure OpenAI GPT-4o-mini (classification & summarization)
- Notion API (data storage & archiving)

**🌟 Key Benefits:**
✅ Saves hours of manual email triage.
🔍 Ensures no important emails are missed.
🧠 AI-driven, consistent prioritization.
📒 Centralized email intelligence in Notion.
🛠 Fully no-code and customizable.
