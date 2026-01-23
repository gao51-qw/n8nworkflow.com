## 📘 Description
 This workflow automates AI-driven Facebook Messenger product inquiry handling, connecting Facebook DMs with Airtable inventory and returning instant automated replies based on product availability.
 It runs hourly, fetches new messages, extracts the latest customer query, uses GPT-4o to identify the product and intent, merges this with the Airtable inventory dataset, performs an AI-assisted product match, and replies automatically inside the same Facebook conversation.
 Invalid or malformed messages are logged to Google Sheets for review.

## ⚙️ What This Workflow Does (Step-by-Step)

▶️ Trigger – Fetch New Facebook Messages (Every Hour)
 Schedules hourly polling of new conversations from Facebook Messenger.

🟦 Fetch Facebook Conversation List (Graph API)
 Retrieves conversation threads from the connected Facebook Page.

💬 Fetch Facebook Conversation Messages (Graph API)
 Loads message details (content, sender, timestamp) for the selected conversation.

📩 Extract Latest Facebook Message (Code)
 Sorts all messages and picks the latest one → this is the message analyzed by AI.

🔍 Validate Record Structure (IF)
 Ensures the incoming message has required fields.
 Valid → AI analysis
 Invalid → logged to Google Sheets.

📄 Log Invalid Records to Google Sheet
 Stores malformed or unprocessable messages for audit and correction.

🧠 Configure GPT-4o — Message Classification Model
 Defines AI model used to extract product details and intent from the customer’s message.

🤖 AI – Extract Product & Customer Intent
 AI identifies:
product name (standardized)
customer intent (availability, pricing, inquiry)
cleaned query
always returns structured JSON
No inventory lookup happens here.

📦 Fetch Inventory Records from Airtable
 Pulls complete product inventory list to cross-match with customer request.

🔁 Merge AI Output With Inventory Dataset
 Combines:
AI-interpreted message data
Airtable inventory records
 This prepares a unified object for product lookup.

📝 Build Combined AI + Inventory Payload (Code)
 Constructs { ai: {...}, inventory: [...] } for the product-matching AI agent.

🧠 Configure GPT-4o — Product Matching Model
 Sets strict rules for identifying whether the requested product exists in inventory.

🤖 AI – Match Requested Product in Inventory
 AI checks:
exact / close match to product name
whether item exists
generates structured JSON reply text + confidence score.

🧹 Parse AI Product Match JSON (Code)
 Ensures the AI output is valid JSON before making decisions.

🔍 Check If Product Exists (IF)
 If found → sends “product available” reply
 If not → sends “product not found” reply.

📨 Send Facebook Reply — Product Found (Graph API)
 Sends a personalized Messenger reply including matched product details.

📨 Send Facebook Reply — Product Not Found (Graph API)
 Replies politely informing customer that the product is not available.

## 🧩 Prerequisites
- Facebook Graph API access token
- Airtable API token
- Azure OpenAI GPT-4o credentials
- Google Sheets OAuth

## 💡 Key Benefits
 ✔ Fully automated Facebook DM handling
 ✔ AI-powered product identification even with typos or unclear wording
 ✔ Real-time product availability responses
 ✔ Unified Airtable-driven catalog lookup
 ✔ Automatic fallback for invalid messages
 ✔ Zero manual intervention for customer support

## 👥 Perfect For
- Ecommerce stores
- Catalog-based product businesses
- Teams handling large volumes of Facebook DM inquiries
- Businesses wanting instant customer replies without agents
