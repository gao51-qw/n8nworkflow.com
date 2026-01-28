# Generate PII-safe Helpdocs from Crisp Support chats with GPT-4.1-mini

> # Turn Crisp chats into Helpdocs

Automatically create help articles from resolved Crisp chats. This n8n workflow listens for chat events, formats Q&A pairs, and uses an LLM to generate a PII‑safe helpdoc saved to a Data Table.

---

## Highlights

* 🧩 **Trigger:** Crisp Webhook when a chat is marked resolved.
* 🗂️ **Store:** Each message saved in a Data Table (`crisp`).
* 🧠 **Generate:** LLM turns Q&A into draft helpdoc.
* 💾 **Save:** Draft stored in another Data Table (`crisphelp`) for review.

---

## How it works

1. **Webhook** receives `message:send`, `message:received`, and `state:resolved` events from Crisp.
2. **Data Table** stores messages by `session_id`.
3. On `state:resolved`, workflow fetches the full chat thread.
4. **Code** node formats messages into `Q:` and `A:` pairs.
5. **LLM** (OpenAI `gpt-4.1-mini`) creates a redacted helpdoc.
6. **Data Table** `crisphelp` saves the generated doc with `publish = false`.

---
![G5engABXQAAx96x.jpeg](fileId:3291)
---

## Requirements

* Crisp workspace with webhook access (Settings → Advanced → Webhooks)
* n8n instance with Data Tables and OpenAI credentials

---

## Customize

* Swap the model in the LLM node.
* Add a Slack or Email node after `store-doc` to alert reviewers.
* Extend prompt rules to strengthen PII redaction.

---

## Tips

* Ensure Crisp webhook URL is public.
* Check IF condition: `{{$json.body.data.content.namespace}} == "state:resolved"`.
* Use the `publish` flag to control auto‑publishing.

---

**Category:** AI • Automation • Customer Support


## 📊 Basic Information

- **Workflow ID:** 10773
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 81
- **Downloads:** 8
- **Created:** 2025/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10773)

## 👤 Author

- **Name:** Cooper
- **Username:** @cooper

## 🏷️ Categories

- Internal Wiki
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **dataTable** (×3)
- **if** 
- **code** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
