# Build an AI-powered SMS support system with Twilio, GPT-4 and PostgreSQL

> ## How it works

1. **User Signup & Verification:**  
   The workflow starts when a user signs up. It generates a verification code and sends it via SMS using Twilio.

2. **Code Validation:**  
   The user replies with the code. The workflow checks the code and, if valid, creates a session for the user.

3. **Conversational AI:**  
   Incoming SMS messages are analyzed by Chat GPT AI for sentiment, intent, and urgency. The workflow stores the conversation context and generates smart, AI-powered replies.

4. **Escalation Handling:**  
   If the AI detects urgency or frustration, the workflow escalates the session—alerting your team and sending a supportive SMS to the user.

---

## Set up steps

- **Estimated setup time:** 10–20 minutes for most users.
- **What you’ll need:**  
  - A free n8n account (self-hosted or cloud)
  - Free Twilio account (for SMS)
  - OpenAI API key (for AI)
  - A PostgreSQL database (Supabase, Neon, or local)

- **Setup process:**  
  1. Import this workflow into n8n.
  2. Add your Twilio and OpenAI credentials as environment variables or n8n credentials.
  3. Update webhook URLs in your Twilio console (for incoming SMS).
  4. (Optional) Adjust sticky notes in the workflow for detailed, step-by-step guidance.


## 📊 Basic Information

- **Workflow ID:** 9220
- **Complexity:** advanced
- **Node Count:** 49
- **Views:** 120
- **Downloads:** 12
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9220)

## 👤 Author

- **Name:**  John
- **Username:** @johnshamshum

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×9)
- **postgres** (×9)
- **httpRequest** (×5)
- **switch** (×3)
- **code** (×8)
- **respondToWebhook** (×4)
- **webhook** (×3)
- **openAi** (×5)
- **gmail** 
- **awsS3** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 49 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
