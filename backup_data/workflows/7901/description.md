---

**Use cases are many:** Manage your Gmail inbox, schedule calendar events, and handle contact details — all from one central AI-powered assistant. Perfect for freelancers managing clients, agency owners who need streamlined communication, or busy professionals who want a personal AI secretary handling their email and calendar.

---

**Good to know**
At time of writing, each Gemini request is billed per token. See [Gemini Pricing](https://ai.google.dev/pricing) for the latest info.
The workflow requires Gmail, Calendar, Sheets, and Telegram integrations. Ensure you’ve set up OAuth2 credentials correctly before running.

---

**How it works**

* **Triggers**: The workflow listens for **new Gmail messages** or **Telegram commands**.
* **Smart AI Processing**: Incoming emails are summarized, classified (Client, Sponsorship, or Not Business), and labeled automatically.
* **Auto-Replies**: Depending on classification, the assistant sends pre-written replies (e.g., client acknowledgment, sponsorship rates, or polite rejection).
* **Calendar Management**: Through natural language requests in Telegram, you can schedule, update, or delete calendar events with conflict-checking in place.
* **Contact Handling**: If you send an email to someone not yet in your database, the agent will prompt you for their email, add it to Google Sheets, and reuse it for future tasks.
* **Memory**: The AI maintains conversation context, so repeated tasks feel seamless and natural.

---

**How to use**

* Send commands via Telegram like:
  *“Schedule a meeting with Sarah on Monday at 3 PM”*
  *“Send an email to David about the proposal”*
* Watch as the assistant checks your calendar, sends emails, and keeps your contacts updated — all automatically.

---

**Requirements**

* Gmail account (with labels created for *Client*, *Sponsorship Request*, and *Not Business*)
* Google Calendar for scheduling
* Google Sheets for contact management
* Google Gemini API key
* Telegram bot for live interaction

---

**Customising this workflow**

You can expand it to:

* Handle **Slack or WhatsApp** messages in addition to Telegram.
* Add more **classification categories** (e.g., Invoices, Personal, Leads).
* Extend auto-replies with **dynamic templates** stored in Google Sheets.
* Log all interactions to **Notion or Airtable** for a CRM-style history of communications.

---

👉 [Rakin Jakaria](https://www.youtube.com/@RakinJakaria)
