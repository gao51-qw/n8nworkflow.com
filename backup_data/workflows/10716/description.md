## Who Is This For?
This **n8n automation workflow** is designed for **customer support teams**, **business owners**, or **service providers** who want to **automate customer interactions on WhatsApp**.

If you regularly receive customer queries about your products, services, or technical issues — and need a system that can instantly respond, fetch data from Google Sheets or Docs, log support tickets, and send human-like replies — this workflow is for you.
It’s perfect for teams using **Rapiwa**, **Google Sheets**, and **Google Docs** who want to provide a smart, AI-driven, yet personal support experience.

## What This Workflow Does
This workflow is structured around a single intelligent AI assistant called **Rapiwa** that interacts with customers in real time through WhatsApp.


## Key Features
**AI-Driven Support Assistant (Rapiwa)**  
**WhatsApp Integration via Rapiwa API**  
**Dynamic Data Access (Google Sheets + Docs)**  
**Knowledge Base Search**  
**Conversation Memory**  
**Automatic Logging**  
**Multi-Product Support**


### Workflow Overview
1. **Rapiwa Trigger (Start Node)**
   - Starts the workflow automatically whenever a new WhatsApp message is received in your Rapiwa account.
   - Example: When a customer sends a message like “What’s the price of SocialVibe?” or “I can’t access my dashboard”, this node triggers the workflow.
2. **If (Check Text)**
   - Detects if the incoming message contains text (not just images, videos, or audio).
   - If it’s text, the workflow continues; otherwise, it stops or handles it differently.

3. **AI Agent – Customer Support Agent**
   - This is the brain of the system — your **AI Assistant (Rapiwa)**.
   - Interprets the user’s question, retrieves information, and replies in a clear, WhatsApp-friendly format.
   - Reads product details and company info from Google Sheets/Docs.
   - Fetches documentation links from the connected “Support Desk” and product-specific HTTP tools.
   - Logs customer issues to the support sheet for tracking and analysis.

4. **Memory (Session Context)**
   - Stores chat history per user session so Rapiwa remembers context during a conversation.

5. **Research (AI Support Tool)**
   - Acts as Rapiwa’s research assistant — gathers and organizes information from multiple sources.
   - Sources: Google Sheets, Google Docs, HTTP Tools, and Support Desk.

6. **Replay (Rapiwa Send Message)**
   - Sends the AI’s final message back to the customer on WhatsApp using the Rapiwa API.
   - WhatsApp-optimized plain text messages only.


## Data & Integrations
### 🔹 Google Sheets (Database)
- **Product Data Sheet:** Holds product names, descriptions, and pricing.
- **Service Data Sheet:** Lists offered services with details.
- **Support Log Sheet:** Records each issue (Issue, Category, Solution).

### 🔹 Google Docs
- Provides company information when a user asks about your organization.

## Example Use Case
**User Message:**  
&gt; “Hi, I’m having a problem with my Faculty login.”

**Rapiwa’s AI Response:**  
&gt; “I’m sorry you’re having trouble logging in to Faculty. Please try resetting your password here: https://faculty.spagreen.net/docs/#reset-password  
&gt; If the issue continues, I can log this for support. Would you like me to do that?”

## Useful Links
- **install process:** [how to install rapiwa](https://www.npmjs.com/package/n8n-nodes-rapiwa)
- **Dashboard:** [https://app.rapiwa.com](https://app.rapiwa.com/login)
- **Official Website:** [https://rapiwa.com](https://rapiwa.com/)
- **Documentation:** [https://docs.rapiwa.com](https://docs.rapiwa.com/)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)