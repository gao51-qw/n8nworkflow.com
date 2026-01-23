## 🧠 How it works

This workflow automates QA review of Intercom support conversations by:

* Triggering on `conversation.admin.closed` events via a webhook
* Fetching full conversation data using Intercom API
* Structuring and summarizing the conversation into a readable transcript
* Using GPT to evaluate:

  * Response time
  * Clarity
  * Tone & behavior
  * Urgency handling
  * Ownership & resolution
* Logging structured QA scores in a Google Sheet
* Providing coaching-style feedback if the rating is 3 or below

---

## ⚙️ Set up steps

* 🔐 Configure your Intercom and OpenAI credentials in n8n
* 📩 Set up the webhook in Intercom to post on conversation close
* 🧠 Use your OpenAI API key for the GPT-based nodes
* 🗃️ Connect your Google Sheet (or replace with another data sink)
* ✅ Add your own filtering logic for spam/promotional tickets if needed

*Note: This workflow contains a sticky notes to explain each step inside the n8n canvas.*