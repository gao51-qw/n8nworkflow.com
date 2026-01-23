# Delete Dialogflow intents via Telegram commands

> ## Delete a Dialogflow Intent via Telegram 🗑️

This workflow allows you to delete a specific Dialogflow intent simply by sending the keyword `delete` through Telegram. It’s designed for quick and safe deletions from your mobile device, without needing to access the Dialogflow console.

---

### 🔧 What does this workflow do?

1. **Listens for Telegram messages** using the `Telegram Trigger` node.
2. **Validates the user ID** through the `User validation by ID` node, ensuring only authorized users can trigger the deletion.
3. **Checks if the message equals `delete`** using the `Keyword validation` node.
4. If both checks pass:
   - Performs an HTTP GET request via `HTTP Request GET NAME` to **retrieve the name of the intent** (used in the confirmation message).
   - Adds a small delay using `simulated delay`.
   - Then executes a DELETE request to the Dialogflow API via the `HTTP Request ELIMINAR` node to **delete the intent**.
   - Sends a Telegram confirmation message through the `Confirmation message` node.
5. If the user ID or keyword is invalid:
   - Responds with a custom message using either `Invalid user message` or `Invalid keyword message`.

---

### 📌 Requirements

- A valid **Google API credential** (Service Account) set up in n8n.
- Obtain your `PROJECT_ID` and `INTENT_ID` from the URL of the intent in Dialogflow:

---

### ✅ Use Cases

- Delete test or unused intents **without opening Dialogflow**.
- Automate cleanup of outdated intents.
- Allow controlled Telegram-based access for specific users to delete intents remotely.

## 📊 Basic Information

- **Workflow ID:** 7409
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7409)

## 👤 Author

- **Name:** Eddy Medina
- **Username:** @troguis

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **stickyNote** (×7)
- **httpRequest** (×3)
- **if** (×2)
- **telegram** (×3)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
