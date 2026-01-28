# Export Dialogflow intents with priority levels to Google Sheets via Telegram

> ## What does this workflow do?

This workflow **exports the names of all Dialogflow intents** from your agent, **together with their priority levels**, directly into a **Google Sheets** spreadsheet.  
It is triggered via **Telegram** and includes **visual indicators (emojis)** for priority levels.

---

## 📜 Overview

- **🔔 Activation**:  
  Triggered when a **validated user** sends the keyword (e.g. `"backup"`) via Telegram.

- **📥 Data Retrieval**:  
  Fetches all intents of the specified Dialogflow agent using the **Dialogflow API**.

- **⚙️ Processing**:  
  - Transforms each intent into an **n8n-compatible item**.  
  - Extracts the `displayName` and `priority` of each intent.  
  - Assigns an **emoji and descriptive label** based on priority tier:  
    🔴 Highest, 🟠 High, 🔵 Normal, 🟢 Low, 🚫 Ignore.

- **📑 Storage**:  
  Appends each intent (name, priority number, emoji, and description), along with **current date and time**, to a **Google Sheets** document.

- **📩 Notification**:  
  Sends a **single confirmation message** to the Telegram user once insertion is complete *(using Execute Once)*.

---

## 🛠️ How to install and configure

1. **Import the workflow**: Upload the `.json` into your n8n instance.

2. **Connect Telegram**:  
   Add your Telegram bot credentials and configure the node `Validación de usuario por ID` with your **Telegram ID**.

3. **Configure Dialogflow**:  
   Authenticate using a **Google Service Account API Credential**.  
   Then, in the **Obtiene datos de los intents** node, replace the example **project ID** (`TU_PROJECT_ID`) with your actual Dialogflow agent's project ID.

4. **Connect Google Sheets**:  
   Authorize Google Sheets via **OAuth2** and select your destination document/sheet in the node `Añadir fila en la hoja`.

5. **Customize trigger keyword**:  
   Adjust the command text (default `"backup"`) if needed.
6. **Activate workflow**:  
   Ensure the **webhook** is correctly set up in Telegram before enabling the workflow.

---

## 👥 Who is this for?

- 🤖 Bot administrators who need **quick backups** of Dialogflow intent names.

- 🌐 Teams managing **multilingual or multi-intent** agents wanting **priority oversight**.

- 💻 Development teams needing an **automated way to audit** or **version** intent configurations regularly.

---

## 💡 Use Cases

- ⚙️ Backup intents **periodically** to monitor changes over time.
- 📊 Visualize priority assignment in a **spreadsheet** for analysis or team discussion.

- 📖 Document conversational structure for **onboarding** or **knowledge transfer**.


## 📊 Basic Information

- **Workflow ID:** 7073
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7073)

## 👤 Author

- **Name:** Eddy Medina
- **Username:** @troguis

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **telegramTrigger** 
- **googleSheets** 
- **stickyNote** (×4)
- **if** (×2)
- **telegram** (×3)
- **httpRequest** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
