# Automated voice appointment reminders with Google Calendar GPT ElevenLabs Gmail

> This workflow automates **voice reminders** for upcoming appointments by generating a professional audio message and **sending** it to clients **via email** with the voice file attached.

It integrates Google Calendar to track appointments, ElevenLabs to generate high-quality voice messages, and Gmail to deliver them efficiently.

![CleanShot 20250320 at 09.17.232x.png](fileId:1025)

## Who Needs Automated Voice Appointment Reminders?

This automated voice appointment reminder system is ideal for businesses that rely on scheduled appointments. It helps reduce no-shows, improve client engagement, and streamline communication.

- Medical Offices & Clinics – Ensure patients receive timely appointment reminders.
- Real Estate Agencies – Keep potential buyers and renters informed about property visits.
- Service-Based Businesses – Perfect for salons, consultants, therapists, and coaches.
- Legal & Financial Services – Help clients remember important meetings and consultations.

If your business depends on scheduled appointments, this workflow saves time and enhances client satisfaction. 🚀

## Why Use This Workflow?

- Ensures clients receive timely reminders.
- Reduces appointment no-shows and scheduling issues.
- Automates the process with a personalized voice message.

## Step-by-Step: How This Workflow Automates Voice Reminders

1. Trigger the Workflow – The system runs manually or on a schedule to check upcoming appointments in **Google Calendar**.
2. Retrieve Appointment Data – It **fetches event details** (client name, time, and location) from Google Calendar.
The workflow uses the summary, start.dateTime, location, and attendees[0].email fields from Google Calendar to personalize and send the voice reminders.
3. **Generate a Voice Reminder** – Using [ElevenLabs](https://try.elevenlabs.io/text-audio), the workflow converts the appointment details into a natural-sounding voice message.
4. **Send via Email** – The generated audio file is attached to an email and sent to the client as a reminder.

## Customization: Tailor the Workflow to Your Business Needs

- Adjust Trigger Frequency – Modify the scheduling to run daily, hourly, or at specific intervals.
- Customize Voice Message Format – Change the script structure and voice tone to match your business needs.
- Change Notification Method – Instead of email, integrate SMS or WhatsApp for delivery.

## 🔑 Prerequisites

- **Google Calendar Access** – Ensure you have access to the calendar with scheduled appointments.
- [ElevenLabs API Key](https://try.elevenlabs.io/text-audio) – Required for generating voice messages (you can start for free).
- **Gmail API Access** – Needed for sending reminder emails.
- **n8n Setup** – The workflow runs on an n8n instance (self-hosted or cloud).


## 🚀 Step-by-Step Installation & Setup

- **Set Up Google Calendar API**
	1.	Go to Google Cloud Console.
	2.	Create a new project and enable Google Calendar API.
	3.	Generate OAuth 2.0 credentials and save them for n8n.

- **Get an ElevenLabs API Key**
	1.	Sign up at [ElevenLabs](https://try.elevenlabs.io/text-audio).
	2.	Retrieve your API key from the dashboard.

- **Configure Gmail API**
	1.	Enable Gmail API in Google Cloud Console.
	2.	Create OAuth credentials and authorize your email address for sending.

- **Deploy n8n & Install the Workflow**
	1.	Install n8n (Installation Guide).
	2.	Add the required Google Calendar, ElevenLabs, and Gmail nodes.
	3.	Import or build the workflow with the correct credentials.
	4.	Test and fine-tune as needed.

### ⚠ Important:
The LangChain Community node used in this workflow only works on self-hosted n8n instances. It is not compatible with n8n Cloud. Please ensure you are running a self-hosted instance before using this workflow.

## Summary

This workflow ensures a professional and seamless experience for your clients, keeping them informed and engaged. 🚀🔊


.

---
[Phil | Inforeole](https://inforeole.fr) | [Linkedin](https://www.linkedin.com/in/philippe-eveilleau-inforeole/)

🇫🇷 Contactez nous pour automatiser vos processus

## 📊 Basic Information

- **Workflow ID:** 3194
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 5909
- **Downloads:** 590
- **Created:** 2025/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3194)

## 👤 Author

- **Name:** phil
- **Username:** @phil

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **scheduleTrigger** 
- **stickyNote** (×3)
- **code** 
- **httpRequest** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleCalendar** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
