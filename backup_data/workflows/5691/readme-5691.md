# Generate personalized sales emails with LinkedIn data & Claude 3.7 via OpenRouter

> ## How it works
- The automation loads rows from a Google Sheet of leads that you want to contact.
- It makes a Google search via Apify for LinkedIn links based on the First name / Last name / Company.
- Another Apify actor fetches the right LinkedIn profile based on the first profile which is retuned
- The same process is done for the company that the lead works for, giving extra context. If the lead has a current company listed on their LinkedIn, we use that URL to do the lookup, rather than doing a separate Google search.
- A call is made to OpenRouter to get an LLM to generate an email based on a prompt designed to do personalized outreach.
- An email is sent via a Gmail node.


## Set up steps
- Connect your Google Sheets + Gmail accounts to use these APIs.
- Make an account with Apify and enter your credentials.
- Set your details in the "Set My Data" node to customize the workflow to revolve around your company + value proposition. 

I would recommend changing the prompt in the "Generate Personalized Email" node to match the tone of voice that you want your agent to have. 

You can change the guidelines to e.g. change whether the agent introduces itself, and give more examples in the style you want to make the output better.

## 📊 Basic Information

- **Workflow ID:** 5691
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 14765
- **Downloads:** 1476
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5691)

## 👤 Author

- **Name:** Adam Janes
- **Username:** @adamjanes

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **aggregate** (×2)
- **filter** (×2)
- **stickyNote** (×4)
- **httpRequest** (×4)
- **if** 
- **googleSheets** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
