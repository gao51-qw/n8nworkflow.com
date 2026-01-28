# Conversational interviews with AI agents and n8n forms

> This n8n template combines an AI agent with n8n's multi-page forms to create a novel interaction which allows automated question-and-answer sessions. One of the more obvious use-cases of this interaction is what I'm calling the AI interviewer.

**You can read the full post here:** [https://community.n8n.io/t/build-your-own-ai-interview-agents-with-n8n-forms/62312](https://community.n8n.io/t/build-your-own-ai-interview-agents-with-n8n-forms/62312)

**Live demo here:** [https://jimleuk.app.n8n.cloud/form/driving-lessons-survey](https://jimleuk.app.n8n.cloud/form/driving-lessons-survey)

## How it works

* A form trigger is used to start the interview and a new session is created in redis to capture the transcript.
* An AI agent is then tasked to ask questions to the user regarding the topic of the interview. This is setup as a loop so the questions never stop unless the user wishes to end the interview.
* Each answer is recorded in our session set up earlier between questions.
* When the user requests to end the interview we break the loop and show the interview completion screen.
* Finally, the session is then saved in a Google Sheet which can then be shared with team members and for the purpose of data analysis.

## How to use

* You'll need to be on a n8n instance that is accessible to your target audience. **Not technical enough to setup your own server? [Try out n8n cloud](https://n8n.partnerlinks.io/ee7izbliiw0n) and instantly deploy template!**
* Remember to activate the workflow so the form trigger is published and available for users to use.

## Requirements
* Groq LLM for AI agent. Feel free to swap this out for any other LLM.
* Redis(-compatible) storage for capturing sessions

## Customising this workflow

* The next step would be adding tools! AI interviews with knowledge retrieval could definitely open up other possibilities. Eg. An onboarding wizard generating questions by pulling facts from internal knowledgebase.


## 📊 Basic Information

- **Workflow ID:** 2566
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 30439
- **Downloads:** 3043
- **Created:** 2024/11/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2566)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **if** (×2)
- **set** (×7)
- **@n8n/n8n-nodes-langchain.memoryManager** 
- **stickyNote** (×10)
- **formTrigger** 
- **form** (×2)
- **crypto** 
- **redis** (×6)
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **webhook** 
- **html** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **googleSheets** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
