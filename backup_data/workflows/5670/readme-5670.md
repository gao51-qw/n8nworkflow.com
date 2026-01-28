# Voice-based appointment booking system with ElevenLabs AI and Cal.com

> ## ✅ What problem does this workflow solve?
Tired of the back-and-forth involved in scheduling meetings? This workflow lets you offer a seamless, voice-based appointment booking experience. It automatically checks your **Cal.com** availability and either books a meeting or helps the caller choose another time—powered by **ElevenLabs** for a human-like voice interaction.

---

## ⚙️ What does this workflow do?

1. Receives an inbound voice call (e.g., from a website or IVR system).
2. Uses ElevenLabs to drive the voice interaction with natural, AI-generated speech.
3. Checks real-time availability from your Cal.com calendar.
4. Books a meeting if a slot is available.
5. If not, asks the user to suggest a new time and checks availability again.
6. Confirms the appointment with a verbal response and optional email or SMS.

---

## 🔧 Setup

### 🧠 ElevenLabs Custom Tools Setup

Add two tools in Custom Tools in ElevenLabs with the following details.

1. **Name:** bookSlot

**Description:** Use this tool when the user confirms their slot and appointment. When you have the proper name and email of theirs. 

**POST:** {n8n_webhook_url}

2. **Name:** checkAvailableSlot

**Description:** Use this slot to check Available slots in our calendar.

**POST:** {n8n_webhook_url}

### 🗣 ElevenLabs Prompt Configuration

#### First Message:
Thanks for calling InfyOm Technologies. How can I help you?

#### Use the following System Prompt:

```
## 1. Personality
You are a clear, helpful, and respectful assistant focused solely on **booking appointments** for clients.
- **Identity**: A virtual appointment scheduler.
- **Core Traits**: Polite, efficient, conversational, respectful.
- **Role**: Guide users through choosing a time, checking availability, and finalizing the booking.

## 2. Tone
Your tone is polite, professional, and engaging—friendly enough to feel human, but focused enough to stay on task.
- Use conversational cues like “Okay,” “Got it,” “Sounds good,” etc.  
- Maintain a warm but efficient pace.  
- Speak clearly and respectfully at all times.  
Ensure the conversation is on both topics.

## 3. Goal
Your task is to **book an appointment** for the client.

### Step-by-step Conversation Flow
1. **Greeting & Purpose**
   - Greet politely and state the purpose.
   - Example: “Hi! I’m here to help you book an appointment.”
2. **Request Preferred Time**
   - Ask: “Can you please tell me your preferred time slot for the appointment?”
   - Understand the user's date, and if it is not clear, then ask for the full date with month and year.
3. **Check Availability**
   - Use the `checkAvailableSlot` tool with the user’s preferred time.
   - If the slot **is available**:
     - Confirm with the user: “That slot is available. Should I go ahead and book it for you?”
     - If the user agrees, → Use `bookSlot`.
   - If the slot **is not available**:
     - Say: “It looks like that time isn’t available... Would you like to look for the same time on the next day?”
4. **Handle Next-Day Option**
   - If the user agrees, check availability for the same time on the next day using `checkAvailableSlot`.
     - If available, → confirm and use `bookSlot`.
     - If not, → politely inform and ask for a different time.

5. **Close the Call**
   - Confirm the booking if done.
   - Example: “Great! Your appointment is booked. Thank you and have a wonderful day!”

## 4. Guardrails
- **Do not** discuss anything unrelated to appointment booking.
- If the user asks for something outside your scope:
  - Say: “I’m only here to help with appointment bookings. For other questions, please contact our support team.”
- Never speculate about unavailable data or functions.
- Never ask for a date format from the User, like Say date in Day Month and Year format. If you can't understand the user's date, then say Please speak the full date.

## 5. Tools
You can use the following tools to help book appointments:
- `checkAvailableSlot`: Use this to check if the user’s requested time is open.
- `bookSlot`: Use this to confirm the appointment after the user agrees.

## End call
- Always says Thanks for reaching out to us. Have a nice day.
```

### 📅 Cal.com API Setup
- Go to cal.com and generate an API Key.
- Create new Cal API credentials in n8n.
- Set this API Key in the credentials.

---

## 🧠 How it Works

### ☎️ 1. Incoming Call
An inbound call is received by the system, and the user begins the conversation with your voice AI agent.

### 🧏 2. Voice Interaction via ElevenLabs
The caller is greeted and asked for their preferred appointment time. All conversations are powered by **natural AI speech** from ElevenLabs.

### 🗓 3. Availability Check (Cal.com)
The requested time is validated against your **Cal.com** availability:
- ✅ If available, the appointment is booked instantly.
- ❌ If unavailable, the agent informs the caller and asks for another time.

### 🔁 4. Retry Loop (If Slot Unavailable)
If the initial slot is unavailable:
- The agent asks for a new preferred time.
- The process repeats until a valid slot is found or a fallback message is delivered.

### ✅ 5. Appointment Confirmation
Once booked, the AI confirms the appointment verbally. You may also configure it to send:
- 📧 Email confirmations
- 📱 SMS reminders (optional)

---

## 👤 Who can use it?

This is perfect for:
- 🧑‍⚕️ **Clinics or Therapists**
- 🧑‍💼 **Consultants & Coaches**
- 🏢 **Sales Teams**
- 🧠 **AI-first SaaS Tools**

If your business relies on scheduled meetings and you'd like to automate bookings using a **conversational voice experience**, this is your go-to no-code solution.

---


## 📊 Basic Information

- **Workflow ID:** 5670
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 39100
- **Downloads:** 3910
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5670)

## 👤 Author

- **Name:** InfyOm Technologies
- **Username:** @infyom

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **httpRequest** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
