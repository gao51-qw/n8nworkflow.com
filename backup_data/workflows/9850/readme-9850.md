# Automated property & restaurant bookings with AI voice calls via Telegram

> ![image.png](fileId:3007)

This automation template is an AI-powered booking agent that schedules property viewings and reserves restaurant tables for you, all coordinated through Telegram. It checks your calendar to avoid conflicts, places the calls on your behalf, negotiates times, confirms details, and delivers a crisp summary back to Telegram—hands-free.

***Note: This workflow uses a voice-calling provider for outbound calls, your calendar for availability, and Telegram for notifications. Usage costs depend on your telephony provider, call duration, and any API usage.***

## Who Is This For?
- **Home Buyers & Renters:** Queue up and confirm viewings without calling around.
- **Real Estate Agents & Property Managers:** Automate client viewing scheduling and confirmations.
- **Relocation Specialists & Assistants:** Coordinate multi-property tours with calendar-aware logic.
- **Busy Professionals:** Let AI handle restaurant bookings and post-viewing meals.
- **Concierge & Ops Teams:** Standardize bookings with structured logs and Telegram updates.

## What Problem Does This Workflow Solve?
Scheduling property viewings and restaurant tables often means endless calls, conflicts, and coordination. This workflow removes the friction by:
- **AI Phone Calls on Your Behalf:** Natural voice calls to agents/venues to secure slots.
- **Calendar-Aware Booking:** Checks your real-time availability and avoids overlaps.
- **Preference Handling:** Location, budget, party size, time windows, language, and notes.
- **Instant Telegram Summaries:** Clear outcomes (confirmed, waitlist, action needed) and quick next steps.
- **Scalable Coordination:** Handles multiple properties and dining options with fallback logic.

## How It Works
1. **Intent Capture (Telegram):** You send a simple message (e.g., “Viewings tomorrow 17:00–20:00, Eixample, 2-bed; table for 4 at 21:30 near there”).
2. **Calendar Check:** Reads free/busy blocks and suggests viable windows or alternatives.
3. **AI Calling:** Places outbound calls to listing agents/restaurants, negotiates slots, and confirms.
4. **Result Parsing:** Extracts confirmed time, address, contact name, reservation name, and special instructions.
5. **Telegram Delivery:** Sends a concise recap plus optional quick-reply buttons (confirm/cancel/map/nav).
6. **Optional Calendar Hold:** Adds confirmed bookings to your calendar and blocks time.
7. **Logging (Optional):** Writes outcomes to a sheet/database for tracking and analytics.

## Setup
1. **Telephony Provider:** Connect your AI calling service (API key). Configure voice/language.
2. **Calendar Access:** Link Google Calendar (or similar). Grant read (and optionally write) access.
3. **Telegram Bot:** Create a bot with BotFather and add the bot token to credentials.
4. **Environment/Credentials:** Store calling API token, calendar credentials, Telegram token in n8n.
5. **Preferences:** Set defaults for viewings (areas, price range, time windows) and dining (party size, cuisine, budget).
6. **Test Run:** Trial a single booking to verify calling, calendar sync, and Telegram delivery.

## Requirements
- **Accounts:** n8n, telephony provider, calendar account, Telegram bot.
- **API Keys:** Telephony API token, Calendar credentials, Telegram bot token.
- **Permissions:** Calendar read (and write if auto-blocking); outbound calls enabled.
- **Budget:** Telephony per-minute fees and minor API costs where applicable.

## Features
- **Dual-Domain Booking:** Property viewings + restaurant tables in one flow.
- **Calendar Intelligence:** Checks conflicts and proposes best-fit time slots.
- **Telegram-Native UX:** Simple prompts, instant confirmations, and quick actions.
- **Preference Profiles:** Time windows, neighborhoods, max budget, language, and notes.
- **Fallbacks & Alternatives:** Suggests nearby times/venues if first choice is unavailable.
- **Multilingual Voice:** Configure voice and language to match region/venue.
- **Structured Logs:** Optional recording of outcomes for reporting and audits.
- **Extensible:** Add CRM, maps, SMS, or payment links as needed.

Automate your day from tours to tables: message your intent on Telegram, and let the AI book, confirm, and keep your calendar clean—so you just show up on time.

## 📊 Basic Information

- **Workflow ID:** 9850
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 1053
- **Downloads:** 105
- **Created:** 2025/10/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9850)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×5)
- **httpRequest** (×2)
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **telegram** (×2)
- **googleCalendarTool** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **filter** 
- **telegramTrigger** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
