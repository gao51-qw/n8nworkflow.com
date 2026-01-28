# On-demand email newsletter summaries from Gmail to Telegram with GPT-4.1-mini

> ## Summary
Send a number to your Telegram bot (e.g., 2) and get a neatly formatted digest of all Gmail newsletters received since that date. Each email is summarized by an LLM into concise topics, merged into a single Telegram message, automatically split into chunks to fit Telegram limits, and safely formatted as HTML.

## What this workflow does
-  Triggers on your Telegram message containing a number of days, e.g., 1, 2, 7
-  Fetches all Gmail messages since that date using a custom search query, optionally filtered by senders
-  Retrieves and decodes each email’s HTML, subject, sender name, date
-  Prompts an LLM (GPT‑4.1‑mini) to produce a consistent JSON summary of topics per email
-  Merges topics from all emails into a single digest
-  Builds a readable, enumerated message (with bold titles)
-  Splits it into 3 500‑char parts and sanitizes Markdown to Telegram‑safe HTML
-  Sends the digest to your Telegram chat with preview disabled

## Apps and credentials
-  Gmail OAuth2: Gmail account
-  Telegram: Telegram account (bot)
-  OpenAI: OpenAi account

## Typical use cases
-  Personal or team daily/weekly newsletter digests in Telegram
-  Curated feeds from selected senders compiled on demand
-  Lightweight knowledge briefings without leaving Telegram

## How it works (node-by-node)
-  Telegram Trigger
	- Waits for your message (e.g., "2"). Chat ID is restricted to your Telegram ID for safety.
-  Get days (Code)
	- Takes the numeric daysAgo from the Telegram message text
	- Computes YYYY/MM/DD for Gmail’s after: filter
-  Get many messages (Gmail → getAll, returnAll: true)
	- Uses a custom q filter like:
    =(from:____@____.com) OR (from:____@____.com) OR (from:____@____.com -"____") after:{{ $json.dateString }}
	- Returns a list of message IDs
-  Loop Over Items (Split in Batches)
	- Iterates through each message ID
-  Get a message (Gmail → get)
	- Retrieves the full message/payload for the current email
-  Get message data (Code)
	- Extracts HTML from Gmail’s payload (body/parts)
	- Normalizes sender to just the name
  	- Formats the date as DD.MM.YYYY
  	- Passes html, subject, from, date forward
-  Clean (Code)
  	- Converts DD.MM.YYYY → MM.DD (for prompt brevity)
  	- Passes html, subject, from, date to the LLM
-  Message a model (OpenAI, model: gpt‑4.1‑mini, JSON output)
  	- Prompt instructs:
    		- Produce JSON: { "topics": [ { "title", "descr", "subject", "from", "date" } ] }
    	- Split multi-news blocks into separate topics
    	- Combine or ignore specific blocks for particular senders (placeholders ____)
    	- Keep subject untranslated; other values in ____ language
    	- Injects subject/from/date/html from the current email
-  Loop Over Items (continues)
  	- After all iterations complete, the aggregated per-email results are available
-  Merge (Code)
  	- Flattens the topics arrays from all processed emails into one combined topics list
-  Create TG message (Code)
  	- Renders an enumerated list:
    	- 1. Title (bold)
    	- Short description
    	- Original subject
    	- From — Date
-  Split (Code)
  	- Splits into 3 500‑character chunks to stay below Telegram’s 4 096 limit with HTML overhead
-  Sanitize (Code)
  	- Escapes &, &lt;, &gt;
  	- Fixes unbalanced * and _
  	- Converts basic Markdown markers to Telegram HTML
-  Send a message (Telegram)
  	- Sends each part with parse_mode=HTML, previews disabled

Node map
| Node | Type | Purpose |
|---|---|---|
| Telegram Trigger | Trigger | Receive daysAgo command from Telegram |
| Get days | Code | Compute Gmail after:YYYY/MM/DD from daysAgo |
| Get many messages | Gmail (getAll) | Search emails since date with custom from: filters |
| Loop Over Items | Split in Batches | Iterate messages one-by-one |
| Get a message | Gmail (get) | Fetch full message payload |
| Get message data | Code | Extract HTML/subject/from/date; normalize sender and date |
| Clean | Code | Reformat date and forward fields to LLM |
| Message a model | OpenAI | Summarize email into JSON topics |
| Merge | Code | Merge topics from all emails |
| Create TG message | Code | Build human-friendly digest text |
| Split | Code | Chunk into 3 500‑char parts |
| Sanitize | Code | Escape HTML and map Markdown to Telegram HTML |
| Send a message | Telegram | Deliver digest to Telegram chat |

## Before you start
-  Create a Telegram bot and get its token (via @BotFather)
-  Get your Telegram user ID to restrict access
-  Connect Gmail OAuth2 in n8n
-  Add your OpenAI API key
-  Import the provided workflow JSON into n8n

## Setup instructions
1) Telegram
-  Telegram Trigger node:
  	- additionalFields.chatIds = your Telegram user ID
-  Send a message node:
  	- chatId = your Telegram user ID
  	- parse_mode = HTML
  	- disable_web_page_preview = true

2) Gmail
-  Connect a Gmail OAuth2 credential (Gmail account)
-  In Get many messages, adjust filters.q to your senders and rules:
 	 - Example: =(from:news@publisher.com) OR (from:briefs@media.com -"promo") after:{{ $json.dateString }}
-  If needed, add label: or category: filters

3) OpenAI
-  Message a model:
  	- Model: gpt‑4.1‑mini (can swap to gpt‑4o‑mini or your preferred)
 	 - Update the prompt placeholders:
   		 - ____ language → your target language
   		 - ____ sender rules → your special cases (combine blocks, ignore sections)

4) Safety and formatting
-  Keep parse_mode=HTML in Telegram
-  The Sanitize node is designed for `<b>` and `<i>` only; avoid other HTML tags
-  The Split node uses 3 500 chars per part to stay safe under Telegram limits

## How to use
-  In Telegram, send a number indicating “days ago”
  	- Example: 2 → will query Gmail after the date 2 days ago
-  The workflow compiles and returns a digest in your chat
-  Rerun anytime with a new number

## Customization ideas
-  Labels instead of global search: q = label:Newsletters after:{{ $json.dateString }}
-  Time window control: add before: or exact date ranges
-  Different language: set the ____ language in the LLM prompt
-  Model choice: swap to cheaper/faster models if volume is high
-  Chunk size: adjust from 3 500 to your needs
-  Formatting: tweak Create TG message to include links parsed from HTML (if you add an HTML parser step)

## Limits and notes
-  Telegram messages are limited to ~4 096 characters; we chunk to 3 500 per part
-  Gmail “after:” uses YYYY/MM/DD and Google’s interpretation of dates; your n8n server time influences the computed date
-  LLM usage incurs cost and latency proportional to email size and count
-  HTML extraction is robust for typical Gmail structures but may need tweaks for exotic MIME layouts

## Privacy and safety
-  Emails are sent to OpenAI for summarization—ensure that’s acceptable for your data policies
-  The Telegram Trigger restricts chat access; keep your chatIds locked down
-  Avoid sending raw HTML to Telegram; rely on the Sanitize node

Sample output format (Telegram)
1. Bold topic title

One-sentence description

Original Subject Line
→ Sender Name — DD.MM.YYYY

2. Next topic title

...

## Tips and troubleshooting
-  Got empty digests? Check Gmail filters.q and make sure there really are emails after the computed date
-  Model errors or empty JSON? Lower prompt complexity or switch model
-  HTML formatting issues in Telegram? Ensure parse_mode=HTML and keep only `<b>`, `<i>`
-  Long messages not fully delivered? Reduce chunk size from 3 500

## Tags
-  gmail, telegram, openai, llm, newsletters, digest, summarization, automation

## Changelog
-  v1: Initial release with sender filters, topic merging, Telegram HTML sanitization, and on-demand time window via Telegram message



## 📊 Basic Information

- **Workflow ID:** 7254
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 426
- **Downloads:** 42
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7254)

## 👤 Author

- **Name:** Vlad Arbatov
- **Username:** @vladzima

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **gmail** (×2)
- **telegramTrigger** 
- **splitInBatches** 
- **code** (×7)
- **telegram** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
