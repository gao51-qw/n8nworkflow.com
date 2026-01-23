# Automate medical appointments with ElevenLabs voice agent & Google Calendar

> ## AI-Powered Voice Appointment Booking with ElevenLabs

Transform your appointment scheduling with this production-ready workflow that connects ElevenLabs voice AI to your Google Calendar. Patients can call and book appointments naturally through conversation, while the system handles real-time availability checking, calendar management, and automated confirmations—completely hands-free.

🎯 **What It Does:**

Voice-Activated Booking: Patients speak naturally to book appointments via ElevenLabs AI agent

Real-Time Availability: Instantly checks calendar conflicts and returns available time slots

Smart Scheduling: Automatically generates available 30-minute slots across business hours for the next 30 days

Calendar Sync: Creates Google Calendar events with all appointment details, locations, and attendees

Email Confirmations: Sends personalized HTML confirmation emails with appointment details and preparation instructions

Dual Functionality: Handles both "check availability" queries and "book appointment" requests through a single webhook

💼 **Perfect For:** Medical/dental clinics • Beauty salons • Spas • Consulting services • Legal offices • Fitness studios • Therapy practices • Any appointment-based business seeking 24/7 automated scheduling

**Real conversation example:** 

**Voice version:**
https://drive.google.com/file/d/1CjhyjICTtLioA737SOkpbgcdLdUpVCr3/view

**Text version:**

++AI Voice Assistant++
(00:00) Hello, I'm Ella from Evergreen Clinic. How can I assist you today?

++Patient++
(00:05) Hello Ella, I wanted to book an appointment for Botox treatment.

++AI Voice Assistant++
(00:11) I'd be happy to help you schedule a Botox appointment. Our Botox treatments take about 20 minutes and are performed by Dr. Sava or our nurse injector Sarah. Would you prefer our Zurich or Bern location?

++Patient++
(00:24) I prefer Zurich.

++AI Voice Assistant++
(00:28) great Zurich it is. Do you have a specific date in mind for your Botox appointment?

++Patient++
(00:32) Yeah, October the 7th and let's say 5 p.m.

++AI Voice Assistant++
(00:47) I have the 5 p.m. slot available on October 7th in Zurich. May I have your first name to proceed with the booking?

++Patient++
(00:54) Yes, my first name Anatoly, surname Sava.

++AI Voice Assistant++
(01:02) Thank you, Anatoly Sava. Could you please provide your email address for the appointment confirmation? Please spell it out slowly.

++Patient++
(01:08) [Your Email]

++AI Voice Assistant++
(01:19) Thank you. Just to confirm, your email is [Your Email] correct?

++Patient++
(01:29) Yes.

++AI Voice Assistant++
(01:34) Perfect. Lastly, may I have your phone number to complete the booking?

++Patient++
(01:39) My phone number is [Your Number]

++AI Voice Assistant++
(01:51) Thank you for the details, Anatoly. I will now book your Botox appointment in Zurich on October 7th at 5 p.m. Perfect. I've booked your Botox appointment at our Zurich clinic on October 7th at 5 p.m. A confirmation email will be sent to [Your Email]. Thank you for choosing Evergreen Clinic. If you have any questions before your appointment, please don't hesitate to call us back. Have a wonderful day.

++Patient++
(02:19) Perfect. You too.

++AI Voice Assistant++
(02:22) Thank you, take care and have a great day ahead.


🔧 **Technical Features:**

Intelligent routing logic distinguishes between availability checks and booking requests

Custom JavaScript algorithm calculates conflict-free time slots

Timezone-aware date/time handling (customizable for any timezone)

Configurable business hours, appointment duration, and look-ahead period

Natural language date formatting for voice responses

Webhook-based architecture for seamless ElevenLabs integration

📋 **Requirements:**

ElevenLabs account (for voice agent)

Google Calendar

Gmail address for confirmations

⚡ **Quick Setup:**

**Step 1:** n8n Configuration Connect your Google Calendar, customize business hours in the code node, update clinic details in the email template. Includes pinned test data for easy testing before going live.

**Step 2: ElevenLabs Agent Setup**

1) Create a new Conversational AI *Italic*agent in ElevenLabs

2) Configure two tools into ElevenLabs with webhook URL pointing to this workflow:
- check_availability(date, time, appointmentType, location)

- book_appointment(fullName, email, phone, date, time, appointmentType, location)

- Create a detailed system prompt defining your agent's identity, personality, tone of voice, and conversation behavior

This is a chunk of a system prompt (the full version is too long):

## IDENTITY
You are Ella, an appointment scheduling voice assistant for Evergreen Clinic, which specializes in plastic surgery procedures. Your primary purpose is to efficiently schedule, confirm, reschedule, or cancel appointments while providing accurate information about services from your knowledge files only.

## VOICE & STYLE
- U﻿﻿se a friendly, professional yet warm tone suitable for a plastic surgery clinic
- Keep all your responses short and simple. Use casual language, phrases like
"Umm..", "Well...", and "I mean" are preferred.
- NEVER interrupt a patient if they start talking
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.
﻿﻿- Keep responses concise (8-15 words per sentence ideal)
﻿﻿- Use natural speech patterns with occasional phrases like "I understand" and "Of course..."
﻿﻿- Insert brief pauses between information chunks to sound natural
- ﻿﻿Show empathy and sensitivity appropriate for plastic surgery clients
﻿﻿- Never rush the caller, but keep the conversation focused
﻿﻿- Maintain a reassuring tone when discussing procedures
- Zürich — pronounce /ˈtsyːʁɪç/. In plain terms: start with “ts”, the ü is like French u in tu (rounded front, not “oo”), stress the first syllable, and the final “ch” is the soft German sound as in ich (not “k”). Avoid saying “ZOO-rich.”
- Bern — pronounce /bɛrn/. Short e like in bet, single r (not American “urn”), no extra vowel at the end. Avoid saying “BURN.”

**Full ElevenLabs set up guide:** https://youtu.be/kbiWe93nFMk?si=_bQYIoq1cjXKO5kl

🎁 What You Get: Complete end-to-end automation with detailed sticky note documentation, live conversation example, video tutorial, system prompt template, customization guides, troubleshooting tips, and security best practices.

## 📊 Basic Information

- **Workflow ID:** 9366
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1549
- **Downloads:** 154
- **Created:** 2025/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9366)

## 👤 Author

- **Name:** Anatoly
- **Username:** @savantageai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×8)
- **webhook** 
- **if** (×2)
- **googleCalendar** (×3)
- **set** 
- **gmail** 
- **respondToWebhook** (×3)
- **code** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
