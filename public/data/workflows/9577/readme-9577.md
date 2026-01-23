# Automate freelance project intake with custom proposals using Jotform & Gemini

> Workflow explaination: [https://youtu.be/ecafBTFPuvE?si=7csA1yNsaUxUG72F](https://youtu.be/ecafBTFPuvE?si=7csA1yNsaUxUG72F)

This workflow is designed to automatically handle new freelance project requests from a JotForm, analyze the requirements using AI, create a **custom proposal**, log the details in a Google Sheet, and send a personalized response to the client.

---

## 1. JotForm Trigger

* **Purpose**: This node is the entry point of the entire automation. It waits for a new freelance project submission from your specified JotForm.
* **Action**: When a potential client fills out and submits the form, this node **instantly triggers** the workflow, passing all submitted data (name, email, project requirements, and budget) to the next node.
* **Key Detail**: Uses a webhook for real-time activation, ensuring immediate processing of every new project request.

---

## 2. AI Agent

* **Purpose**: The central brain of your freelance workflow. 🧠 It takes the project submission and turns it into a structured, customized proposal.
* **Action**: The agent follows a prompt sequence to perform these tasks:

  1. **Calls the `My Freelance Document` Tool**: Fetches your Google Doc containing details about your services, pricing, and project templates — your “source of truth.”
  2. **Analyzes the Project Request**: Reads the client’s requirements and goals from the form.
  3. **Generates a Custom Proposal**: Based on scope, budget, and relevance to your offerings, it prepares a short, tailored proposal or quote that fits the project.
  4. **Creates a Personalized Email**: Builds an HTML email with the proposal embedded, including next steps or a scheduling link for further discussion.
  5. **Outputs Structured Data**: Packages everything (project summary, proposal text, email subject, and body) into a clean JSON object for downstream use.

---

## 3. Append or Update Row in Sheet (Google Sheets)

* **Purpose**: Serves as your lightweight CRM for all project inquiries.
* **Action**: Logs data from the AI Agent (proposal details, client info, and project summary) into a Google Sheet.
* **Key Detail**: Configured to **Append or Update**—if an email already exists, it updates that row instead of duplicating. Keeps your client records clean and organized.

---

## 4. If

* **Purpose**: Acts as a control node to decide whether a proposal email should be sent.
* **Action**: Checks the output from the AI Agent to ensure the proposal text is valid (not empty).
* **Key Detail**: If the proposal generation fails or returns “NAN,” the workflow stops here to avoid sending incomplete responses.

---

## 5. Send a Message (Gmail)

* **Purpose**: Sends the final personalized proposal email to the client.
* **Action**: Pulls the recipient’s email from the sheet and sends the **AI-generated subject and HTML proposal email** automatically.
* **Key Detail**: The email is customized per project, giving the client an instant, professional response with no manual effort.


## 📊 Basic Information

- **Workflow ID:** 9577
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 339
- **Downloads:** 33
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9577)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **jotFormTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleDocsTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
