🧠 AI Telegram Customer Support Assistant + Lead Manager

This n8n workflow provides a fully automated AI-driven customer support assistant connected to Telegram, with built-in lead management, knowledge-base querying, and context-aware answers.

⭐ What this workflow does

Receives user messages from Telegram

Logs all incoming/outgoing messages into a Data Table

Checks if a lead exists for the user (via chat_id)

Creates new leads automatically if needed

Builds an AI-ready context (user info + lead info + latest message)

Uses the AI Agent to answer questions using:

FAQ database

Services table (programs, prices, descriptions)

Settings table (agency info)

Lead update tool

Sends a natural, friendly reply back to Telegram

Updates leads in real time (name, phone, email, notes…)

📦 Required Data Tables (to be created by the user)

leads
Stores all user information (full_name, phone, email, etc.)

services
List of available programs/services with prices, duration, category.

faq
Frequently asked questions with answers and optional tags.

settings
Company/agency details used by the assistant.

chat_logs
Logs all messages exchanged with users (user + bot).

🔧 Required Credentials

Telegram Bot API Key

AI Model Credential (OpenAI, OpenRouter, Groq…)

No other credentials required.

🚀 How to use it

Import the workflow into your n8n instance

Create the required Data Tables as defined inside the Sticky Notes

Add your credentials (Telegram + AI Model)

Customize the prompt to match your business

Activate the workflow — you're ready to go!

💡 Suitable for:

Travel agencies

Customer support chatbots

Lead qualification + automation

AI knowledge-based assistants

Telegram-first businesses