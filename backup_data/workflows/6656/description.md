### Beginner AI Agent Duo: Lead‑Qualifier Task Automator & Ecommerce Chatbot

**Status:** Ready for Use ✅  
**Note:** This template is built entirely with **official n8n nodes**—no community‑node installation required.

---

### 📝 Description
This template demonstrates two beginner‑friendly AI‑agent patterns that cover the most common use cases:

| Agent | Purpose | Flow Highlights |
|-------|---------|-----------------|
| **Lead‑Qualifier Task Automator** | Classifies phone‑call transcripts to decide if the caller is a good bulk‑order lead. | Manual Trigger → Code (sample data) → AI Agent (GPT‑4o‑mini) → Structured Output Parser → Set (clean fields) |
| **Ecommerce Chatbot** | Answers customer questions about products, bulk pricing, shipping, and returns. | Chat Trigger (webhook) → AI Agent (GPT‑4o‑mini) with Memory → If node → Order‑placed reply or no‑op |

Both agents run on **GPT‑4o‑mini** and use n8n’s LangChain‑powered nodes for quick, low‑code configuration.

---

### ⚙️ How to Install & Run

1. **Import the Workflow**  
   - In n8n, go to **Workflows → Import from File** or **Paste JSON**, then save.

2. **Add Your OpenAI API Key**  
   - Go to **Credentials → New → OpenAI API**.  
   - Paste your key from &lt;https://platform.openai.com&gt;.  
   - Select this credential in both **OpenAI Chat Model** nodes.

3. **(Optional) Select a Different Model**  
   - Default model is **gpt‑4o‑mini**.  
   - Change to GPT‑4o, GPT‑3.5‑turbo, or any available model in each OpenAI node.

4. **Test the Lead‑Qualifier Agent**  
   - Click **Activate**.  
   - Press **Test workflow**.  
   - The Code node feeds four sample transcripts; the AI Agent returns JSON like:  
     ```json
     {
       "Name": "Jordan Lee",
       "Is Good Lead": "Yes",
       "Reasoning": "Customer requests 300 custom mugs, indicating a bulk order."
     }
     ```

5. **Test the Ecommerce Chatbot**  
   - Copy the **Webhook URL** from the **When chat message received** trigger.  
   - POST a payload like:  
     ```json
     { "message": "Hi, do you offer discounts if I buy 120 notebooks?" }
     ```  
   - The AI Agent replies with bulk‑pricing info.  
   - If the customer confirms an order, it appends `*****`; the If node then sends “Your order has been placed”.

---

### 🧩 Customization Ideas
- **Refine Qualification Logic** Edit the Task Agent’s system prompt to match your own lead criteria.  
- **Save Leads Automatically** Add Google Sheets, Airtable, or a database node after the Set node.  
- **Expand the Chatbot** Connect inventory APIs, payment gateways, or CRM integrations.  
- **Adjust Memory Length** Change the *Simple Memory* node’s window to retain more conversation context.

---

## 🤝 Connect with Me

## Description  
I’m Robert Breen, founder of Ynteractive — a consulting firm that helps businesses automate operations using **n8n**, **AI agents**, and custom workflows. I’ve helped clients build everything from intelligent chatbots to complex sales automations, and I’m always excited to collaborate or support new projects.

If you found this workflow helpful or want to talk through an idea, I’d love to hear from you.

## Links  
🌐 Website: [https://www.ynteractive.com](https://www.ynteractive.com)  
📺 YouTube: [@ynteractivetraining](https://www.youtube.com/@ynteractivetraining)  
💼 LinkedIn: [https://www.linkedin.com/in/robert-breen](https://www.linkedin.com/in/robert-breen)  
📬 Email: rbreen@ynteractive.com