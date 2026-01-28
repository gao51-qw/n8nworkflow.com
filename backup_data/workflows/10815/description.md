## 📝 Description

Access your Razorpay insights instantly from Telegram—no dashboard, filters, or manual queries needed. Simply send messages like “show my payments”, “list recent orders”, or “check refunds”, and the bot retrieves the latest information from your Razorpay merchant account in seconds.

Powered by AI, the workflow understands your message, fetches the relevant Razorpay data, and transforms it into a clear, easy-to-read summary. Everything is delivered back to you within the same Telegram chat, giving you fast, convenient, and conversational access to your business analytics.

## ⚙️ How It Works
### 1. Trigger — Telegram Bot Message

The workflow starts when a user sends a message to your Telegram bot via the Telegram Trigger node.

### 2. Intent Classification

An AI model analyzes the incoming message and identifies what the user is asking for.

#### 🔹 Orders Intent

Retrieves order information from Razorpay

Handles pagination and filtering logic

Uses AI to generate order summaries and insights

#### 🔹 Refunds Intent

Queries Razorpay for refund events

Computes refund totals and status breakdowns

Produces formatted summaries with the AI model

#### 🔹 General Chat Intent

Handles all non-transactional or fallback messages.
Useful for:


## 💡 Use Cases

- Get instant Razorpay payment analytics in Telegram

 - Retrieve daily or weekly order summaries

 - View recent refund activity

 - Provide your team with quick insight access directly from chat

 - Automate repetitive Razorpay queries without dashboards

#### 🧰 Requirements

 - Razorpay API Credentials (Key ID + Key Secret) [here](http://dashboard.razorpay.com/])

 - Telegram Bot Token

#### 🚀 Setup Instructions

Import this workflow into your n8n workspace.

Add and configure your Razorpay and Telegram credentials.

Activate the workflow.

Start chatting with your Telegram bot to receive Razorpay insights on demand.

## 🖼️ Workflow Components

#### This workflow includes the following nodes:

 - Telegram Trigger – Receives user messages

 - AI Intent Classifier – Detects what the user wants

 - Payments Processor

 - Orders Processor

 - Refunds Processor

 - General Chat Processor

 - Merge + Telegram Reply – Sends final response