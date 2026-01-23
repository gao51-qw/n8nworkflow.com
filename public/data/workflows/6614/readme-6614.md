# Practice job interviews with voice-based Google Gemini AI interviewer

> ## What does this workflow do?

This workflow acts as the backend "brain" for a sophisticated AI Voice Interviewer. It receives a user's resume text and a target job description, then uses a Large Language Model (LLM) to conduct a realistic, voice-based interview. The workflow maintains conversation history to ask relevant follow-up questions, creating a dynamic and personalized interview practice experience.

This template is designed to work with a simple HTML frontend that handles the voice-to-text and text-to-speech functionality.

## What services does this workflow use?

- **Google Gemini:** This is the LLM used to generate intelligent interview questions. You can easily swap this out for other models like OpenAI.

## What credentials do you need to have?

You will need one credential:
- A **Google Gemini API Key**. You can get one for free from the [Google AI Studio](https://aistudio.google.com/app/apikey).

## How to use this workflow

This workflow is the backend and requires a frontend to interact with.

1.  **Set up the Frontend:** You can find the complete frontend code and setup instructions in this [GitHub repository](https://github.com/Sarry000/ai-voice-interviewer).
2.  **Configure Credentials:** In this n8n workflow, click on the "Google Gemini Chat Model" node and add your own Gemini API credential.
3.  **Activate the Workflow:** Make sure the workflow is saved and active.
4.  **Connect Frontend to Backend:** Click on the "Webhook" node and copy the **Production URL**. Paste this URL into the `voice-interview.html` page as instructed in the GitHub repository's `README.md` file.
5.  **Start Interviewing:** Fill out the form on the web page to begin your voice interview!


## 📊 Basic Information

- **Workflow ID:** 6614
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1377
- **Downloads:** 137
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6614)

## 👤 Author

- **Name:** Sarry
- **Username:** @sarry

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **merge** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **respondToWebhook** 
- **stickyNote** (×6)
- **set** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
