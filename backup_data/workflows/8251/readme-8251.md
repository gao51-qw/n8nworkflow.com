# WhatsApp AI agent that understand text, image , audio 

> Overview 📌

This template is a multimodal WhatsApp assistant that understands text, images, and audio, aggregates media inputs, and returns intelligent replies using Google Gemini. It can fetch knowledge from Google Docs, log conversations into Google Sheets, and respond via WhatsApp — all orchestrated inside n8n.

Features ✨

Multimodal input handling: Receives images and audio from WhatsApp, analyzes them, and sends contextual responses. 🖼️🎧

Audio transcription: Converts voice messages to text for analysis. 🔊➡️📝

Image analysis: Extracts objects/labels/text from images to inform responses. 🖼️🔍

Knowledge fetch: Pulls relevant documents from Google Docs for richer answers. 📄📚

Conversation logging: Appends each interaction to Google Sheets for auditing or analytics. 📈

Modular design: Clear subflows for media reception, transcription, image analysis, aggregation, and the AI Agent. ⚙️

Ready for customization: Swap models, change providers, or extend with a vector store. 🔁

Requirements ✅

n8n instance (self-hosted or n8n.cloud) with public webhook access

Google Cloud project with these APIs enabled: Vertex AI (Gemini), Cloud Vision API, Cloud Speech-to-Text, Drive & Docs & Sheets 🧠

Google Service Account JSON key (with permissions for above services) 🔐

WhatsApp Business API provider credentials (Twilio, 360dialog, or similar) 📞

(Optional) Pinecone or another vector store if you want embeddings / retrieval augmentation 🗂️

Setup Instructions 🔧

Import the workflow

Download the .json from your package and in n8n Editor → Import → From File → select JSON. Save.

Create credentials

Google Service Account: Create service account in GCP, grant Vertex AI, Vision, Speech, Drive, Docs, Sheets roles, download JSON → create n8n Google Service Account credential and upload JSON.

WhatsApp: Add your WhatsApp API credentials (API key/token, phone ID, webhook secret).

(Optional) Vector store: Add Pinecone credentials if using embeddings.

Configure media receiver nodes

WhatsApp Trigger: Ensure webhook URL is set on your WhatsApp provider to forward incoming messages/media to n8n. 🌐

Audio Receiver nodes: point to incoming audio payload path or download URL. 🎧

Image Receiver nodes: point to image URL or attachment field. 🖼️

Transcription & Image Analysis

Transcribe Audio: Select Google Speech-to-Text via your Google Service Account credential. Confirm language and sampling settings. 🗣️➡️📝

Analyze Image: Point to Vision API via same Google credential. Choose required outputs (labels, landmarks, OCR). 🔎

Aggregate media

Confirm the Aggregate node collects text + transcribed audio + image analysis results into a single payload for the AI Agent. 🧩

AI Agent (Gemini)

Open AI Agent node → choose your Google Gemini/Vertex AI credentials.

Edit System Prompt to include: how to prioritize image/audio text, where to look up knowledge (Docs), and style/tone. Replace placeholders (business name, policies). ✍️

Knowledge Fetch (Google Docs)

Configure Get a document in Google Docs node to point to your knowledge docs folder or specific document IDs. 📂

Conversation Logging

Configure Google Sheets node to append rows to your chosen spreadsheet (structure below). 🧾

WhatsApp Reply

Map AI Agent output to the WhatsApp Send message node and choose template messaging if needed. 💬

Test end-to-end

Activate the workflow, send a text message, an image, and an audio message to your WhatsApp test number. Verify the AI reply and that logs appear in Google Sheets. 🧪

Google Sheet: Conversation Log (suggested columns) 🗒️
Column	Type	Description
Timestamp	Date/Time	When the message arrived
UserID	Text	WhatsApp user identifier (phone)
MessageType	Text	text / image / audio / mixed
MessageText	Text	Original text or transcribed text
ImageAnalysis	Text	Vision API summary / labels / OCR text
AttachmentURL	Text	Link to image/audio file
AIResponse	Text	Final text reply sent to user
Notes	Text	Any extra flags (e.g., escalation)
Customization 🔁

Swap Gemini with another model provider by changing the AI node credentials and prompt structure. 🔄

Add a vector store (Pinecone) to enable retrieval-augmented generation from indexed docs. 🧠

Extend image analysis to OCR for receipts/invoices or barcode detection. 📑

Add an escalation path (send to human) by adding an “If → Escalate” node when confidence is low. 🚨

Suggested Node Renaming (for clarity) 🏷️

Rename generic nodes to explicit names so reviewers and users instantly understand flow:

WhatsApp Trigger → WhatsApp Trigger (Inbound)

Switch → Message Type Router

audio receiver1/2 → Audio Receiver (Download) / Audio Receiver (Fallback) 🎧

Transcribe a recording → Transcribe Audio (Speech-to-Text) 📝

image receiver1/2 → Image Receiver (Download) / Image Receiver (Fallback) 🖼️

Analyze image → Image Analysis (Vision API) 🔍

Aggregate → Aggregate Media Inputs 🧩

AI Agent → Multimodal AI Agent (Gemini) 🤖

Get a document in Google Docs → Fetch Knowledge Doc 📂

Code → Format AI Response 🧾

Send message → WhatsApp – Send Reply 💬

Testing & Going Live 🚀

Ensure n8n webhook is publicly reachable (use an SSL domain/tunnel). 🔒

Test in a sandbox WhatsApp number first. 🧪

Monitor n8n Executions and enable an Error Workflow for graceful failure handling. ⚠️

If you expect high media volume, consider storage/retention policy for attachments. 🗄️

Support & Notes 🤝

I offer setup assistance and will help troubleshoot credential issues or prompt tuning until your workflow is working perfectly. Include contact info and a short support pledge in your template description to build trust.
Feel free to ping me anytime—even after launch!👉 Contact: tharwat.elsayed2000@gmail.com | +20 106 180 3236

## 📊 Basic Information

- **Workflow ID:** 8251
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 127
- **Downloads:** 12
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8251)

## 👤 Author

- **Name:** Tharwat Mohamed
- **Username:** @tharwatelsayed

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** 
- **aggregate** 
- **whatsApp** (×2)
- **httpRequest** (×4)
- **googleDocsTool** 
- **stickyNote** 
- **code** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
