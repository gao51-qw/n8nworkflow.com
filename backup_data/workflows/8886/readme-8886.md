# AI-powered ServiceNow chat triage with GPT-4 — incident & request manager

> # Automated Incident and Request Management in ServiceNow

### Who’s it for

This workflow is designed for IT teams, service desk agents, and operations managers who use ServiceNow. It reduces manual effort by automatically classifying chat messages as **Incidents** or **Requests**, creating/updating them in ServiceNow, and summarizing ticket updates.

---

### What it does

* Receives incoming chat messages.
* Classifies the message as one of:

  * **Incident** (something broken, unavailable, or a complaint)
  * **Request** (access, provisioning, product/order related)
  * **Follow-ups** (incident or request update checks)
  * **Update action** (user wants to add info to an existing ticket)
  * **Everything else** (knowledge search / general query).
* Creates **Incidents** in ServiceNow via the ServiceNow node.
* Creates **Requests** in ServiceNow using the Service Catalog API.
* Updates existing Incidents with new work notes when the user provides an update.
* Pulls existing incident/request work notes for summaries.
* Optionally uses **SerpAPI** for general queries (if enabled).
* Returns a concise summary back to the user through the webhook.

---

### Requirements

* **ServiceNow account** with API access (Basic Auth)
* **OpenAI API key** (used by the classifier and summarizer)
* **SerpAPI key** *(optional – for general web lookups)*

---

### Credentials needed

You will need to set up the following credentials in n8n:

1. **ServiceNow Basic Auth** (username, password, instance URL).
2. **OpenAI API** (API key).
3. **SerpAPI** *(optional – only if you want web search enabled)*.

---

### How to set up

1. Import the workflow JSON into your n8n instance.
2. Create the credentials mentioned above and assign them to the corresponding nodes:

   * `Create an incident` → **ServiceNow Basic Auth**
   * `HTTP Request1` (for Service Catalog requests) → **ServiceNow Basic Auth**
   * `OpenAI Chat Model` / `OpenAI Chat Model1` / `OpenAI Chat Model2` / `OpenAI Chat Model3` → **OpenAI API**
   * `SerpAPI` node (optional) → **SerpAPI key**
3. Adjust the **ServiceNow instance URL** in the HTTP Request node to match your environment.
4. Deploy the workflow.
5. Send a test chat message to trigger the workflow.

---

### How to customize

* Update the **classification rules** in the **Text Classifier** node if your organization uses different definitions for incidents vs. requests.
* Edit the **summary prompt** in the Summarization Chain to include or exclude specific fields.
* Add additional notification nodes (Slack, Teams, or Email) if you want updates pushed to other channels.

---

### Notes & Limitations

* This workflow creates **general requests** in ServiceNow using the catalog API. For production, update the Service Catalog item ID to match your environment.
* “Everything else” category uses SerpAPI. If not configured, those queries will not return results.
* This workflow requires **OpenAI GPT-4.1 mini** (or another supported model) for classification and summarization.

---



## 📊 Basic Information

- **Workflow ID:** 8886
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 426
- **Downloads:** 42
- **Created:** 2025/9/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8886)

## 👤 Author

- **Name:** Ritesh
- **Username:** @riteshk28

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **httpRequest** (×2)
- **serviceNow** (×4)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **stickyNote** (×5)
- **respondToWebhook** (×2)
- **aiTransform** (×2)
- **merge** 
- **set** 
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
