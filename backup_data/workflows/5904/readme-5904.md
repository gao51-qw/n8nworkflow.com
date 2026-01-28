# Transform meeting notes into action items with Gemini & Google Workspace

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## ❓ What Problem Does It Solve?

Manual transcription and action planning from meeting notes is often error-prone, time-consuming, and inconsistent. Important tasks, decisions, or deadlines can be overlooked or delayed. This workflow solves these pain points by automatically analyzing notes using AI and turning them into actionable, structured data. It drastically reduces follow-up delays, miscommunications, and administrative effort, letting teams focus on execution instead.

## 💡 Why Use Google Meet Automation?

* **Save Hours of Manual Work:** Automatically transform raw meeting notes into structured tasks and emails without lifting a finger.
* **Ensure Accurate Follow-up:** Never miss important action items or decisions buried in text; everything is extracted and assigned clearly.
* **Improve Team Collaboration:** Instantly distribute meeting summaries and next steps to attendees, keeping everyone aligned.
* **Leverage Advanced AI:** Utilize Google Gemini’s powerful natural language processing tailored specifically for meetings.
* **Fully End-to-End Automated:** From receiving notes to task creation and email dispatch — your post-meeting workflow is completely hands-free.



### ⚡ Who Is This For?

* **Project Managers:** Streamline task delegation and keep project timelines on track.
* **Team Leads:** Quickly communicate key takeaways and follow-ups to team members.
* **Sales and Account Teams:** Document client meetings efficiently and automate follow-up outreach.
* **Remote Teams:** Ensure clarity and continuity after virtual meetings.
* **Executives:** Get concise summaries and important decision logs automatically.

### 🔧 What This Workflow Does

* ⏱ **Trigger:** Activated via a POST webhook receiving meeting notes, title, attendees, date, and duration.
* 📎 **Step 2:** Validates inputs; if missing required fields, sends an error response.
* 🔍 **Step 3:** Extracts and formats meeting data into structured variables for processing.
* 🤖 **Step 4:** Sends meeting notes to Google Gemini AI for advanced analysis to identify action items, decisions, summaries, follow-ups, and dates.
* 💌 **Step 5:** Splits AI responses to create Google Tasks from action items and send personalized follow-up emails via Gmail.
* 🗂 **Step 6:** Generates a Google Docs meeting summary document and finally returns a success response with all processed results.


### 🔐 Setup Instructions

1. Import the provided `Google Meet Automation.json` file into your n8n instance. use [Payload example](https://docs.google.com/document/d/1SJIt0WzRqAVKQeEo7K_dqdHlw37L5aywds9qET2sYGE/edit?usp=sharing)

2. Set up credentials for:
   * Google OAuth2 API (Google Tasks, Google Docs)
   * Gmail OAuth2 API for sending emails
   * Google Palm API (for Google Gemini AI access)
3. Customize workflow parameters:

   * Webhook URL and access permissions
   * Google Tasks project or folders if applicable
   * Email templates if desired (subject line, branding)
4. Update any API endpoints or credential references to match your account setup.
5. Thoroughly test with sample meeting note payloads to ensure smooth execution.

### 🧩 Pre-Requirements

* Active [n8n instance](https://n8n.partnerlinks.io/khaisastudio) (Cloud or Self-hosted)
* Google Cloud Platform project with:

  * Google Tasks API enabled
  * Google Docs API enabled
  * Gmail API enabled
  * Google Palm API access (Google Gemini AI)
* Valid OAuth2 credentials configured in n8n for above services
* API quota and permissions for sending emails, creating docs, and tasks


### 🛠️ Customize It Further

* Integrate with calendar apps (Google Calendar, Outlook) to auto-schedule next meetings.
* Add Slack or Microsoft Teams notifications for real-time alerts.
* Extend AI prompt for deeper insights like sentiment analysis or risk flags.
* Customize email templates with branding, signatures, or attachments.
* Connect task outputs with project management tools like Asana, Trello, or Jira.


## 📞 Support

**Made by:** [khaisa Studio](khaisa.studio)
**Tag:** automation, google meet, meeting notes, AI, google tasks, gmail, google docs
**Category:** Productivity
**Need a custom?** **[Contact Us](khaisa.studio/contact)** 


## 📊 Basic Information

- **Workflow ID:** 5904
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1802
- **Downloads:** 180
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5904)

## 👤 Author

- **Name:** Khaisa Studio
- **Username:** @khaisastudio

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **splitOut** (×2)
- **googleTasks** 
- **gmail** 
- **googleDocs** 
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
