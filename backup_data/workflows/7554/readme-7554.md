# Automate pet grooming posts & bookings with AI, Facebook & Telegram bot

> 
## Telegram Pet Grooming Bot – Social Media & Booking Automation

This workflow automates **Facebook posting** and **appointment booking** directly from a **Telegram bot**, making it especially useful for pet grooming businesses that want to keep their social media active while also confirming new bookings in real time.

If you are managing posts manually and handling bookings through chat, this workflow replaces that with an integrated system that connects **Telegram, Google Sheets, Facebook, Google Calendar, and AI models**.

**Use case:** Perfect for grooming shops that want to streamline customer communication, reduce missed appointments, and keep a steady flow of engaging Facebook content.

---

## How It Works

1. **Trigger Input**

   * The workflow starts when a Telegram user sends either:

     * `/post` → to publish the next pending social media post.
     * `/book` → to schedule a grooming appointment.
     * Or when the workflow runs on a schedule for auto-posting.

2. **Social Media Posting**

   * The workflow retrieves the first entry from a **Google Sheet** where `Uploaded = Fa`.
   * An **AI model** analyzes the pet image and generates a warm, engaging caption.
   * The post (image + caption) is published to your **Facebook Page**.
   * The Google Sheet is updated to mark the post as “Uploaded,” keeping the content queue organized.

3. **Appointment Booking**

   * When a user sends `/book`, the bot collects booking details (pet name, date, and time).
   * The AI model interprets natural inputs like “next Friday at 2 pm” into a proper date-time format.
   * Availability is checked in **Google Calendar**.

     * If free → a new event is created, and the bot sends a confirmation.
     * If unavailable → the user receives a rejection message with alternative suggestions.

4. **Post Queueing**

   * When a user sends an **image with a caption**, the workflow saves it to the **Post Queue Google Sheet**.
   * This keeps posts lined up for later scheduling.

---

## Google Sheet Queue Structure

Example queue columns:

* **Image\_URL**
* **Pet\_Name**
* **Owner\_Name**
* **Uploaded** (True/False)

![Screenshot 20250820 204556.png](fileId:2169)
*(Refer to the attached screenshot for a sample queue format.)*

---

## How to Use

1. Import this workflow into **n8n**.
2. Connect your accounts in n8n:

   * **Telegram Bot** (via BotFather token).
   * **Google Sheets** (for the posting queue).
   * **Google Calendar** (for bookings).
   * **Facebook Page** (for publishing posts).
   * **OpenAI / Google Gemini** (for captioning and booking interpretation).
3. Create a Google Sheet with the required columns (`Image_URL`, `Pet_Name`, `Owner_Name`, `Uploaded`).
4. Start the workflow — your Telegram bot can now manage both posts and bookings automatically.

---

## Requirements

* **Telegram Bot API Token** (from BotFather).
* **Google Sheets + Calendar access** (connected in n8n).
* **Facebook Page Admin access**.
* **AI API Key** (OpenAI or Google Gemini).
* Basic knowledge of connecting credentials in **n8n**.

---

## Customizing This Workflow

You can tailor this workflow to fit your business by:

* **Adding approval steps:** Require admin approval before a queued post goes live.
* **Expanding queue fields:** Track post type, hashtags, or scheduling time.
* **Custom booking logic:** Adjust availability rules (e.g., block lunch breaks, add buffer time).
* **Integrating downstream apps:** Sync confirmed bookings to CRM or send reminders via SMS/WhatsApp.


## 📊 Basic Information

- **Workflow ID:** 7554
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 768
- **Downloads:** 76
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7554)

## 👤 Author

- **Name:** Christian Moises
- **Username:** @hyxcreation

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **telegramTrigger** 
- **switch** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **telegram** (×6)
- **googleCalendar** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **googleCalendarTool** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **googleSheetsTool** 
- **set** 
- **telegramTool** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **scheduleTrigger** 
- **facebookGraphApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
