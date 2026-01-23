# Update Dialogflow intent responses via Telegram bot commands

> ## Update a Dialogflow Intent's Response via Telegram

This template allows you to easily update the response of a Dialogflow intent by simply typing a keyword in Telegram. Ideal for those who need to edit responses without accessing the Dialogflow console.

---

### 🔧 What does this flow do?

1. **Listens for incoming messages** from a Telegram bot using the `Telegram Trigger` node.
2. **Validates the user** by ID through the `User validation by ID` node to ensure only authorized people can execute the action.
3. **Checks if the message contains the keyword** `update` using the `Keyword validation` node.
4. If both conditions are met:
   - Executes an **HTTP GET** request using the `HTTP Request GET` node to fetch the full intent in JSON format from the Dialogflow API.
   - The user copies that JSON, edits the response content, and pastes it into the `HTTP Request UPDATE` node (`PATCH`).
   - Finally, the flow sends a **confirmation message** via Telegram using the `Mensaje de confirmación` node.
5. If the user or keyword is invalid, the bot replies with an **error message** using the `Invalid user message` or `Invalid keyword message` nodes.

---

### 📌 Requirements

- A configured **Google API credential** (Service Account).
- Obtain the `PROJECT_ID` and `INTENT_ID` from the intent's URL in Dialogflow.
- Edit the `jsonBody` content in the `HTTP Request UPDATE` node, **removing the outer curly braces `{}`**.

---

### ✅ Use Cases

- Quickly modify responses in production without accessing Dialogflow.
- Allow non-technical users to update intents from Telegram.
- Foundation for more advanced flows that dynamically manage multiple intents.


## 📊 Basic Information

- **Workflow ID:** 7408
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 175
- **Downloads:** 17
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7408)

## 👤 Author

- **Name:** Eddy Medina
- **Username:** @troguis

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **stickyNote** (×8)
- **telegram** (×3)
- **httpRequest** (×2)
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
