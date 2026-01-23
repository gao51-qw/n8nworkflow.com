# Enrich HubSpot contacts with LinkedIn profiles using SerpAPI, Google Docs and AI

> ## HubSpot Lead Refinement

🚀 **How it works**

**Triggers:**
* HubSpot Trigger: Fires when contacts are created/updated.
* Manual Trigger: Run on demand for testing or batch checks.
* Get Recently Created/Updated Contacts: Pulls fresh contacts from HubSpot.
* Edit Fields (Set): Maps key fields (First Name, Last Name, Email) for the Agent.


**AI Agent:**
* First reads your Google Doc (via the Google Docs tool) to learn the research steps and output format.
* Then uses SerpAPI (Google engine) to locate the contact’s likely LinkedIn profile and produce a concise result.
* Code – Remove Think Part: Cleans the model output (removes hidden “think” blocks / formatting) so only the final answer remains.
* HubSpot Update: Writes the cleaned LinkedIn URL to the contact (via email match).


🔑 **Required Credentials:**
* HubSpot App Token (Private App) — for Get/Update contact nodes.
* HubSpot Developer OAuth (optional) — if you use the HubSpot * Trigger node for event-based runs.
* Google Service Account — for the Google Docs tool (share your * playbook doc with this service account).
* OpenRouter — for the OpenRouter Chat Model used by the AI Agent.
* SerpAPI — for targeted Google searches from within the Agent.


🛠️ **Setup Instructions**

**HubSpot**
* Create a Private App and copy the Access Token.
* Add or confirm the contact property linkedinUrl (Text).
* Plug the token into the HubSpot nodes.
* If using HubSpot Trigger, connect your Developer OAuth app and subscribe to contact create/update events.


**Google Docs (Living Instructions)**

[➡️ Sample configuration doc file](https://docs.google.com/document/d/1nn69H3wdwXJolDwu0avlFw7sIwnX_Hpr3bmOD6PgdW4/edit?usp=sharing)
* Copy the sample doc file and modify to your need.
* Share the doc with your Google Service Account (Viewer is fine).
* In the Read Google Docs node, paste the Document URL.

**OpenRouter & SerpAPI**
* Add your OpenRouter key to the OpenRouter Chat Model credential.
* Add your SerpAPI key to the SerpAPI tool node.
* (Optional) In your Google Doc or Agent prompt, set sensible defaults for SerpAPI (engine=google, hl=en, gl=us, num=5, max 1–2 searches).


✨ **What you get**
* Auto-enriched contacts with a LinkedIn URL and profile insights (clean, validated output).
* A research process you can change anytime by editing the Google Doc—no workflow changes needed.
* Tight, low-noise searches via SerpAPI to keep costs down.


And that’s it—publish and let the Agent enrich new leads automatically while you refine the rules in your doc. It allows handing off to a team who wouldn't necessarily tweak the automation nodes.

## 📊 Basic Information

- **Workflow ID:** 8434
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 166
- **Downloads:** 16
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8434)

## 👤 Author

- **Name:** Axiomlab.dev
- **Username:** @axiomlab

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **hubspot** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **hubspotTrigger** 
- **manualTrigger** 
- **code** 
- **googleDocsTool** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
