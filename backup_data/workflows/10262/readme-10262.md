# Reduce meeting no-shows with Gemini AI, email & WhatsApp reminders for Calendly

> ## **How it works:**
This n8n workflow automates communication with meeting invitees to decrease no-show rates by sending timely email and WhatsApp reminders, and a clarification request if more information is needed to prepare the meeting.

## **Step-by-step:**
The workflow is triggered by an incoming email notification from Calendly about a newly scheduled meeting.

- It uses AI to extract key meeting data from the email content.
- It checks if the invitee didn't provide sufficient information, and, if there is a need for more information, sends a clarification request email.
- It calculates the waiting time required for the 24-hour and 1-hour reminders.
- It uses an If node to determine the correct waiting path based on the meeting time.
- It uses Wait nodes for timing the reminders correctly.
- Finally, it sends a reminder email and a WhatsApp reminder before the meeting. 

## **Customization Options:**
- Replace Google Gemini with your preferred LLM model (though Gemini works on the free tier).
- Tailor email and WhatsApp messages to speak your brand's language.
- Replace Twillio node to WhatsApp node to be a completly free usage flow.

## 📊 Basic Information

- **Workflow ID:** 10262
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 2094
- **Downloads:** 209
- **Created:** 2025/10/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10262)

## 👤 Author

- **Name:** Razvan Bara
- **Username:** @amzneer

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **emailSend** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **emailReadImap** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **if** (×2)
- **code** 
- **wait** (×3)
- **twilio** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
