### 🚀 How It Works  
Turn your WhatsApp chats into an **AI-powered meeting scheduler** with **Google Gemini**, **Google Calendar**, and **Google Sheets**.  
This workflow understands natural language like _“Book a meeting with Ali at 3 PM tomorrow”_, checks your contacts, avoids overlaps, and updates your calendar automatically all from WhatsApp.  

It’s a complete AI scheduling system built for founders, teams, and service providers who manage clients over chat.

---

### 🔁 Workflow Overview  
- **WhatsApp Trigger** → Captures incoming messages in real time  
- **Intent Agent (Gemini)** → Detects scheduling intent (create / edit / cancel)  
- **Google Sheets** → Finds contact names, emails, and tags  
- **Get Events** → Checks existing meetings to prevent conflicts  
- **Correction Agent + Intent Check** → Confirms details with AI  
- **Calendar Agent (Gemini)** → Executes the calendar action intelligently  
- **Create / Update / Delete Event** → Syncs instantly to Google Calendar  
- **Response Node** → Sends WhatsApp and email confirmations  

---

### ⚙️ Quick Setup (⏱ ~15 min)
1. **Connect WhatsApp Cloud API** – link your WhatsApp Business account  
2. **Authenticate Google Calendar & Sheets** – use Sheets for contacts (`Name | Email | Type`)  
3. **Add Google Gemini API Key** – used by `Intent`, `Correction`, and `Calendar` agents  
4. **Customize Prompts** – adjust tone and language in the Gemini nodes  
5. **Test Your Flow** – e.g., message “Schedule meeting with Ali at 10 AM Friday” to verify calendar and confirmation replies  

💡 *All setup details are also documented inside the workflow sticky notes.*

---

### 🧩 Integrations  
- WhatsApp Cloud API  
- Google Calendar API  
- Google Sheets API  
- Google Gemini (LLM)  

---

### 💡 Benefits  
✅ Automates scheduling directly from WhatsApp  
✅ Understands natural language requests  
✅ Prevents double-bookings automatically  
✅ Sends instant confirmations  
✅ Saves hours of manual coordination  

---

### 👥 Ideal For  
- Entrepreneurs & consultants managing clients on WhatsApp  
- Sales or support teams booking demos and meetings  
- Virtual assistants and AI service providers  
- Anyone who wants a **24/7 AI calendar manager**  

---
