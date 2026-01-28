## How it works
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
