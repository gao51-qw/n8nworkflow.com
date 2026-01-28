# WhatsApp expense tracker with multi-input (text, image & audio)

> # Description
**CashMate – Your AI-Powered WhatsApp Finance Agent**  
Turn WhatsApp into a smart finance assistant that auto-registers you, logs transactions in natural language, extracts data from receipts and voice notes, and delivers instant report summaries—no apps, no charts, just lightning-fast insights in chat.

# Who is this for?
- Personal finance enthusiasts wanting effortless expense tracking  
- Freelancers & solopreneurs juggling multiple incomes and expenses  
- Small business owners needing quick bookkeeping on the go  
- Busy professionals who prefer messaging over apps  
- Privacy-minded users who host data on their own PostgreSQL  

# What problem does this solve?
- Zero onboarding friction: Just send "Hi"—no forms, no sign-ups  
- No app switching: Track everything right inside WhatsApp  
- Manual entry eliminated: Natural-language, image, and voice input all auto-parsed  
- Instant summaries: On-demand report requests—no dashboards to navigate  

# How it works
## Auto-Registration
- New users: "Hi" → Creates your profile in PostgreSQL  
- Returning users: Bypasses creation if your number already exists  

## Intent Classification routes every message into one of five branches:
### Reports & Summaries
- Triggers on keywords like "today's report," "show May vs June," or "summary."  
- Returns concise text summary of income, expenses, and net balance.  

### Natural-Language Transactions
- Messages like "Give 200 to Mukesh for car repair" → AI extracts date, category, amount, payee → logs it.  

### Receipt OCR
- Attach a receipt image → Gemini OCR node reads line-items → AI categorizes and logs.  

### Voice-Driven Logging
- Send a voice note → Deepgram node transcribes → AI logs transaction.  

### General Chat & Greetings
- "Hi," "Hello," or casual finance questions → Routed to chat branch for greetings or tips.  

# Setup
## Prerequisites
- n8n instance (self-hosted or n8n.cloud, v1.0+)  
- WhatsApp Business Cloud API credentials  
- PostgreSQL database (host, port, user, password)  
- OpenRouter/OpenAI API key for NLP  
- Gemini API key for OCR  
- Deepgram API key for voice transcription  

## Quick Start
1. Import CashMate.n8n.json into n8n.  
2. Rename nodes to suit your environment.  
3. Configure Credentials in n8n's Credentials section—avoid hard-coding keys.  
4. Activate workflow and message "Hi" from WhatsApp.  
5. Test by sending a sample expense text, image receipt, or voice note.  

&gt; **Note:** All detailed setup instructions and deep configuration steps are provided in the sticky notes within the template.  

# How to Customize
- **Categories & Currencies:** Edit parsing logic in the Function nodes.  
- **AI Models:** Swap OpenAI/OpenRouter for GPT-4, Claude, or self-hosted alternatives.  
- **Multi-User Support:** Extend registration logic to tag team or family accounts.  
- **Additional Features:** Add budget alerts, multi-currency support, or bank integrations via Plaid.  

# Example Interactions
## 1. Text Transaction
```yaml
User: 300 given to James for the coffee  
CashMate: ✅ Transaction Added:
   • Date:          2025-06-24  
   • Category:      Coffee & Beverages  
   • Type:          Expense  
   • Amount:        ₹300.00  
   • Counterparty:  James
```

## 2. Receipt Image (OCR)

```yaml
User: [sends image of café bill totaling ₹450]  
CashMate: ✅ Transaction Added:
   • Date:          2025-06-24  
   • Category:      Coffee & Beverages  
   • Type:          Expense  
   • Amount:        ₹450.00  
   • Counterparty:  Café Aroma

```


## 3. Voice Transaction
```yaml
User: [voice note: "Paid 650 rupees for office stationery"]  
CashMate: ✅ Transaction Added:
   • Date:          2025-06-24  
   • Category:      Office Supplies  
   • Type:          Expense  
   • Amount:        ₹650.00  
   • Counterparty:  (none)

```

## 📊 Basic Information

- **Workflow ID:** 5201
- **Complexity:** advanced
- **Node Count:** 56
- **Views:** 1130
- **Downloads:** 113
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5201)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolCode** (×8)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **convertToFile** 
- **whatsApp** (×5)
- **@n8n/n8n-nodes-langchain.agent** (×8)
- **switch** 
- **code** (×4)
- **postgres** (×4)
- **extractFromFile** 
- **whatsAppTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×8)
- **if** (×2)
- **httpRequest** (×4)
- **splitOut** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 56 nodes with 49 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
