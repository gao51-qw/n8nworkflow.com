# Automate bug reports with Gemini AI: Jotform to GitHub with Telegram alerts

> Execution video: [https://youtu.be/Gj7uzz9cIfU?si=jTu8nktmxM-dfKoZ](https://youtu.be/Gj7uzz9cIfU?si=jTu8nktmxM-dfKoZ)


This workflow automates the process of handling bug reports submitted through a form, from checking for duplicates on GitHub to logging the report and sending a notification.



---

### 1. A Bug is Reported 🐛

* **Trigger:** The entire process kicks off when a user submits a bug report through a **JotForm**. This form collects the user's name, email, and a description of the bug.

---

### 2. The AI Agent Gets to Work 🤖

* **Action:** The submitted bug description is sent to an **AI Agent** powered by Google Gemini.
* **Intelligence:** The agent has a clear set of instructions:
    1.  **Check for Duplicates:** It first connects to a specific GitHub repository (`iamvaar-dev/pomodoro-timer`) and checks if an issue matching the bug description already exists.
    2.  **Create a New Issue:** If it's a new bug (not found on GitHub), the agent automatically creates a new issue in the repository.
    3.  **Report Back:** The agent then neatly packages its findings into a structured JSON format, noting the issue's details and whether it was already present on GitHub.

---

### 3. Log Everything in Google Sheets 📝

* **Action:** The information from the JotForm submission and the AI Agent's analysis is sent to a **Google Sheet**.
* **Purpose:** This step creates a clean log of all submitted bugs, including who submitted them and whether a new GitHub issue was created for them.

---

### 4. Prepare a Smart Notification 📣

* **Action:** A small piece of **JavaScript code** runs to create a custom notification message.
* **Logic:** The message is dynamic:
    * If the bug was **already on GitHub**, the message will say something like, "An issue was submitted, but it's already reported. No action is needed." ✅
    * If the bug was **new**, the message will be more urgent, like, "A new bug was reported and an issue has been created on GitHub. Please review it." ❗

---

### 5. Send the Alert via Telegram 📲

* **Final Step:** The custom message created in the previous step is sent to a specific **Telegram chat** using a bot. This instantly notifies the relevant people about the new bug report and what action (if any) is required.

## 📊 Basic Information

- **Workflow ID:** 9655
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 72
- **Downloads:** 7
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9655)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Ticket Management
- AI Chatbot

## 🔗 Nodes Used

- **telegram** 
- **jotFormTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **githubTool** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
