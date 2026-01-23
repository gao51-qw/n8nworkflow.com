# Real-time lead response across social channels with Llama AI & Google Sheets

> ## How it works
This workflow acts as an instant SDR that replies to new inbound leads across multiple channels in real time. It first captures and normalizes all incoming lead data into a unified structure. The workflow then evaluates IST working days and hours, generates a context-aware AI response, and routes the reply to the correct channel. Finally, it logs the full interaction, response status, and timing into Google Sheets.

## Step-by-step
- **Step 1: Lead intake & normalization**
  - **Incomming Lead whatsapp1** – Receives new WhatsApp lead messages via webhook.
  - **Incomming Lead facebook1** – Captures incoming Facebook lead messages.
  - **Incomming Lead instagram1** – Listens for Instagram lead messages.
  - **Incomming Lead linkdin1** – Captures LinkedIn lead messages.
  - **Incomming Lead Website1** – Receives website form submissions.
  - **Normalize Lead Data6** – Normalizes WhatsApp lead fields.
  - **Normalize Lead Data7** – Normalizes Facebook lead fields.
  - **Normalize Lead Data8** – Normalizes Instagram lead fields.
  - **Normalize Lead Data9** – Normalizes LinkedIn lead fields.
  - **Normalize Lead Data5** – Normalizes website lead data.
  - **Switch2** – Merges all normalized leads into a single processing path.

- **Step 2: Working hours & AI response**
  - **Extract Day and Hours1** – Converts timestamps to IST and extracts day and time.
  - **Is Working Day and Working Hour?1** – Determines whether the lead arrived during business hours.
  - **Code in JavaScript3** – Builds the AI prompt using lead details and timing context.
  - **Get Ai Response1** – Generates a short, human-like response.


- **Step 3: Send reply & log data**
  - **Code in JavaScript4** – Combines AI output with normalized lead data.
  - **Switch3** – Routes the response based on the source channel.
  - **Send message** – Sends WhatsApp replies.
  - **Send Instagram Message1** – Sends Instagram responses.
  - **Send Facebook Messages1** – Sends Facebook replies.
  - **Send Linkdin Messages1** – Sends LinkedIn responses.
  - **Send a message1** – Sends email replies for website leads.
  - **Code in JavaScript5** – Finalizes response status and metadata.
  - **google-sheet-name** – Appends or updates lead and response data in Google Sheets.

## Why use this?
- Replies instantly to leads across all major inbound channels  
- Keeps all lead data standardized and easy to manage  
- Automatically respects IST working days and hours  
- Reduces manual SDR workload without losing response quality  
- Maintains a complete response log for reporting and follow-up  


## 📊 Basic Information

- **Workflow ID:** 12094
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 92
- **Downloads:** 9
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12094)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **googleSheets** 
- **set** (×5)
- **switch** (×2)
- **httpRequest** (×4)
- **gmail** 
- **code** (×4)
- **if** 
- **webhook** (×5)
- **whatsApp** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
