# WhatsApp AI assistant for Q&A & bookings with Gemini, Pinecone & Google Sheets

> ## Overview
Turn WhatsApp chats into instant answers and real-time bookings—all in one n8n workflow. Your AI Agent leverages Gemini embeddings + Pinecone for on-the-fly knowledge retrieval, then logs reservations directly into Google Sheets.

## Features
AI-powered Q&A: Natural-language responses driven by Gemini + Pinecone vector search

Seamless Reservations: Book services via WhatsApp; entries auto-append to Google Sheets

Auto-Embedding Sub-workflow: Drag-and-drop Google Drive docs get indexed in Pinecone

24-Hour Follow-Up: Automated template messages if no response within a day

Personal Support Pledge: Hands-on help until your workflow runs flawlessly

## Requirements
n8n account (self-hosted or n8n.cloud)

Google Cloud project with Gemini & Drive APIs enabled

Pinecone account (free tier works)

Google Sheets account

WhatsApp Business API credentials (e.g. Twilio, 360dialog)

## Setup Instructions
Import Workflow

Download the .json file from your Gumroad purchase

In n8n Editor → Import → From File → select the JSON

Add Credentials

Google Service Account (Gemini & Drive APIs)

Pinecone (API Key + Environment)

Google Sheets OAuth2

WhatsApp Business API (HTTP credential or native)

Configure Nodes

AI Agent: select Gemini credentials; update system prompt with your business name & services

Pinecone Loader: point “Google Drive” node to your docs folder

Sheets Append: set Spreadsheet ID, sheet name “reservations”, map Timestamp, UserID, Service, Date, Time, Notes

WhatsApp Trigger & Send: set webhook URL; choose approved template name

Test End-to-End

Activate the workflow → send a test WhatsApp message → verify AI reply + new row in your sheet

## Google Sheet Structure
Column		Description
Timestamp		Auto-generated when a user books
UserID :	Unique WhatsApp user identifier
Service :	Chosen service or product name
Date :	Booking date
Time :	Booking time slot
Notes :	Any extra information (e.g., special requests)

## Customization
Add New Services: Edit the system prompt’s services list

Change Follow-Up Window: Adjust the “24-hour window check” node logic

Embed Different Docs: Point the Drive node at any folder of PDFs/TXT



📞 Personal Support Pledge: I’ll work with you (via WhatsApp or email, remote desktop ) until your workflow is running flawlessly—no extra fees, no “good luck” drop‑off.
Just send a message via:





Email: tharwat.elsayed2000@gmail.com



WhatsApp: +20 106 180 3236








## 📊 Basic Information

- **Workflow ID:** 5781
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 603
- **Downloads:** 60
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5781)

## 👤 Author

- **Name:** Tharwat Mohamed
- **Username:** @tharwatelsayed

## 🔗 Nodes Used

- **code** (×2)
- **whatsApp** (×2)
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **dateTime** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheetsTool** 
- **manualTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **whatsAppTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
