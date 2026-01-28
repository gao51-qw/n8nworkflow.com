# Expense Logging with Telegram to Google Sheets using AI Voice & Text Parsing

> ## Use Cases
-Personal or family budget tracking.

-Small business expense logging via Telegram

-Hands-free logging (using voice messages)

---

## How it works:

-Trigger receives text or voice.

-Optional branch transcribes audio to text.

-AI parses into a structured array (SOP enforces schema).

-Split Out produces 1 item per expense.

-Loop Over Items appends rows sequentially with a Wait, preventing missed writes.

-In parallel, Item Lists (Aggregate) builds a single summary string; Merge (Wait for Both) releases one final Telegram confirmation.

----

## Setup Instructions 

1. Connect credentials: Telegram, Google, OpenAI.
2. Sheets: Create a sheet with headers Date, Category, Merchant, Amount, Note. Copy Spreadsheet ID + sheet name.
3. Map columns in Append to Google Sheet.
4. Pick models: set Chat model (e.g., gpt-4o-mini) and Whisper for transcription if using audio.
5. Wait time: keep 500–1000 ms to avoid API race conditions.
6. Run: Send a Telegram message like:
Gas 34.67, Groceries 82.45, Coffee 6.25, Lunch 14.90.

----
## Customization ideas:

-Add categories map (Memory/Set) for consistent labeling.

-Add currency detection/formatting.

-Add error-to-Telegram path for invalid schema.

## 📊 Basic Information

- **Workflow ID:** 10993
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 392
- **Downloads:** 39
- **Created:** 2025/11/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10993)

## 👤 Author

- **Name:** Calvin Cunningham
- **Username:** @calvinc4

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleSheets** 
- **wait** 
- **telegram** (×2)
- **splitOut** 
- **splitInBatches** 
- **telegramTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×2)
- **merge** 
- **stickyNote** (×6)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
