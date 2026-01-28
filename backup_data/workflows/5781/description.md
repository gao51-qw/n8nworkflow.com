## Overview
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






