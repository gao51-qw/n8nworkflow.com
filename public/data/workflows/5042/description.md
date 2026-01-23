## 🔍 How it works  
This workflow turns WhatsApp into a smart email command center using AI.

Users can speak or type instructions like:  
- "Send a follow-up to Claire”
- "Write a draft email to Claire to confirm tomorrow’s meeting at 5 PM”
- "What is the name of Claire's firm?”

The agent transcribes voice notes, extracts intent with GPT, interacts with Gmail (send, draft, search), and replies with a confirmation via WhatsApp — either as text or a voice message.

## ⚙️ Key Modules Used
- WhatsApp Business Webhook (Meta)
- OpenAI Whisper (voice transcription)
- GPT (intent + content generation)
- Gmail (search, draft, send)
- Airtable (contact lookup + memory logging)

## 🧠 Memory Layer (Optional)
The agent logs key fields in Airtable:
- Recipient email
- Company / job title
And more...
This creates a lightweight "gut memory” so the agent feels context-aware.

## 🗺️ Setup Steps
1. Connect WhatsApp Business API (via Meta Developer Console)
2. Add OpenAI and Gmail credentials in n8n
3. Link your Airtable base for contacts and logging

## 🧩 Best Use Cases
- Hands-free email reply while commuting
- Fast Gmail access for busy consultants / solopreneurs
- Custom business agents for service-based professionals

## ⏱️ Estimated Setup Time
30–60 minutes

## ✅ Requirements
- WhatsApp Business Cloud access
- OpenAI API Key
- Gmail or Google Workspace
- Airtable account (free plan OK)
- n8n instance (cloud or self-hosted with HTTPS)