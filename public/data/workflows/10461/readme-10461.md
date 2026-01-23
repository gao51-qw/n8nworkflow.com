# Daily morning haiku generation with OpenRouter AI, Google Docs and Gmail

> ## How it works
This workflow automatically generates a new haiku poem every morning using AI, formats it in 5-7-5 structure, saves it to Google Docs, and sends it to your email inbox.

**Workflow steps:**
1. **Schedule Trigger** – Runs daily at 7:00 AM.
2. **AI Agent** – Asks AI to output four words (*kigo*, *noun*, *verb1*, *verb2*) in JSON format.
3. **Code in JavaScript** – Builds a 5-7-5 haiku using the AI-generated words and sets today’s title.
4. **Edit Fields** – Prepares document fields (title and body) for Google Docs.
5. **Create a document** – Creates a new Google Document for the haiku.
6. **Prepare Append** – Collects the document ID and haiku text for appending.
7. **Update a document** – Inserts the haiku into the existing Google Doc.
8. **Send a message** – Sends the haiku of the day to your Gmail inbox.
9. **OpenRouter Chat Model** – Connects the OpenRouter model used by the AI Agent.

---

## Setup steps
1. Connect your **OpenRouter API key** as a credential (used in the AI Agent node).  
2. Update your **Google Docs folder ID** and Gmail account credentials.  
3. Change the **email recipient address** in the “Send a message” node.  
4. Adjust the **Schedule Trigger** time as you like.  
5. Run the workflow once to test and verify document creation and email delivery.

---

## Ideal for
- Writers and poets who want daily creative inspiration.  
- Individuals seeking a fun morning ritual.  
- Educators demonstrating AI text generation in a practical example.  

---

⚙️ **Note:**  
Each node includes an **English Sticky Note** above it for clarity and documentation.


## 📊 Basic Information

- **Workflow ID:** 10461
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 22
- **Downloads:** 2
- **Created:** 2025/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10461)

## 👤 Author

- **Name:** Tsubasa Shukuwa
- **Username:** @tsubasa-shukuwa

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** 
- **set** (×2)
- **googleDocs** (×2)
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
