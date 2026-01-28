![AI Translation N8N](https://i.ibb.co/JWJWP03y/AI-Translator-for-Whats-App-N8-N.png)

### 🌍 AI WhatsApp Translator – Multilingual Voice & Text Translator for n8n

Hi! I'm Bruno — I’ve been building AI-powered workflows for n8n and Make for 2+ years, focused on smart automation and real conversational agents.

This powerful workflow allows you to receive WhatsApp messages (text or audio), automatically **detect the sender’s language** using their phone prefix, **translate the content** using GPT-4o via LangChain, and **reply instantly** via WhatsApp — all with native tone and cultural fluency.

It’s ideal for international support, global communities, multilingual bots, and agencies managing clients from different countries.

---

### 🔧 How it works

1. Message (text or voice) is received via webhook (WhatsApp API or Evolution API)
2. Sender's prefix is mapped to a country/language
3. Audio messages are transcribed using **OpenAI Whisper**
4. The text is translated using **LangChain agent with GPT-4o**
5. The reply is structured in JSON and sent back via WhatsApp

---

### 🧰 Nodes & Tech Used

- **HTTP Request** (Webhook & API calls)
- **OpenAI Whisper** (Audio transcription)
- **LangChain + GPT-4o** (LLM for translation)
- **If, Set, Merge** (Routing and logic)
- **Custom JSON response** for WhatsApp formats

---

### 📌 What you’ll need

- OpenAI API key  
- WhatsApp API or Evolution API access  
- n8n (Cloud or self-hosted)  
- (Optional) Typebot, Airtable, CRM for integration

---

### 🛒 Want to use it?

❤️ Buy workflows: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)
