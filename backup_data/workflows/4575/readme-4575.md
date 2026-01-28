# Hostinger form lead capture & qualification with OpenAI, Beehiiv & Google Sheets

> This n8n workflow provides a robust solution for Hostinger website owners looking to streamline their lead capture and qualification process. By integrating AI and popular marketing tools, it ensures efficient management of new leads.

### How it works

This workflow automates the process of capturing leads from a Hostinger website form, qualifying them using an AI model, and syncing them with Beehiiv and Google Sheets.

* A new form submission on your Hostinger website triggers the workflow via Gmail.
* An AI model (OpenAI) extracts and qualifies relevant data from the form response, transforming it into a structured JSON format.
* The qualified lead is then added as a new subscriber to your Beehiiv newsletter.
* Finally, the lead information is appended to a Google Sheet for comprehensive tracking and record-keeping.

### Set up steps

* Create an account on [Hostinger](https://hostinger.es?REFERRALCODE=6MKHELLOUQOS) and set up a form on your website.
* Configure a Gmail trigger to capture form submissions from your Hostinger email sender.
* Ensure your email is mapped correctly for the Hostinger sender.
* Set up your OpenAI API key for the "Extract & Qualify Message Model" node.
* Create an account on [Beehiiv](https://www.beehiiv.com?via=1node-ai). Obtain your Beehiiv API key and create your credentials.
* Set up a Google Sheet and configure the "insert in Sheets" node with the correct mapping.

#### Approximate setup time: 15-30 minutes

### Why you need this?

You need this workflow if you're a Hostinger website owner who wants to:

* **Automate lead capture:** Say goodbye to manual lead processing and ensure no lead slips through the cracks.
* **Qualify leads intelligently:** Leverage AI to instantly extract and qualify crucial lead information, saving you valuable time and improving lead quality.
* **Grow your audience efficiently:** Seamlessly add qualified leads to your Beehiiv newsletter, nurturing them from the moment they express interest.
* **Maintain organized records:** Automatically centralize all your lead data in a Google Sheet for easy access, analysis, and follow-up.
* **Boost productivity:** Free up your time from repetitive administrative tasks and focus on growing your business.

### 👉 Need Help?
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.

## 📊 Basic Information

- **Workflow ID:** 4575
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 576
- **Downloads:** 57
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4575)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmailTrigger** 
- **googleSheets** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
