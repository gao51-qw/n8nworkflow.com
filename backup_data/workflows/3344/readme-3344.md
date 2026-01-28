# 🛻 AI agent for logistics order processing with GPT-4o, Gmail and Google Sheet

> *Tags: Supply Chain, Logistics, AI Agents*

### Context

Hey! I’m [Samir](https://samirsaci.com), a Supply Chain Data Scientist from Paris, and the founder of [LogiGreen Consulting](https://logi-green.com).

We design tools to help companies improve their **logistics processes** using data analytics, AI, and automation—to **reduce costs and minimize environmental impacts**.

&gt;Let’s use N8N to improve logistics operations!

📬 For business inquiries, you can add me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow template is designed for **logistics or manufacturing operations** that receive orders by email.

[![Example of emails](https://www.samirsaci.com/content/images/2025/03/image-17.png)](https://www.youtube.com/watch?v=kQ8dO_30SB0) 

The example above illustrate the challenge we want to tackle using an **AI Agent** to parse the information and load them in a **Google sheet**.

If you want to understand how I built this workflow, check my detailed tutorial:

[![Tutorial Screenshot](https://www.samirsaci.com/content/images/2025/03/Miniature-2.png)](https://www.youtube.com/watch?v=kQ8dO_30SB0)

  
[🎥 Step-by-Step Tutorial](https://www.youtube.com/watch?v=kQ8dO_30SB0)

### How does it work?

The workflow is connected to a **Gmail Trigger** to open all the emails that include *Inbound Order* in their subject.

The email is parsed by an **AI Agent** equipped with **OpenAI's GPT** to collect all the information.

The results are pulled in a **Google Sheet**.

[![Final Results](https://www.samirsaci.com/content/images/2025/03/image-18.png)](https://www.youtube.com/watch?v=kQ8dO_30SB0)

These orderlines can then be **transferred to warehouse teams** to prepare ***order receiving**.

### What do I need to get started?

You’ll need:
- **Gmail and Google Drive Accounts** with the API credentials to access it via n8n
- An **OpenAI API key** (GPT-4o) for the chat model.
- A **Google Sheet** with these columns: **PO_NUMBER, EXPECTED_DELIVERY DATE, SKU_ID, QUANTITY**

### Next Steps

Follow the sticky notes in the workflow to configure each node and start using **AI to support your logistic operations**.

🚀 Curious how N8N can transform your logistics operations?  
📬 Let’s connect on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Notes

- An example of email is included in the template so you can try it with your mailbox.

*This workflow was built using N8N version 1.82.1*  
*Submitted: March 28, 2025*


## 📊 Basic Information

- **Workflow ID:** 3344
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 10764
- **Downloads:** 1076
- **Created:** 2025/3/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3344)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **gmailTrigger** 
- **if** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
