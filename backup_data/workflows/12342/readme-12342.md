# Write personalized cold emails from LinkedIn leads with Wiza, Perplexity and GPT-5

> ## What it does
Submit a LinkedIn profile URL through a form. The workflow finds their email and company info using Wiza, then researches the prospect and their company with Perplexity AI to uncover recent news, growth signals, and pain points. Your choice of AI model uses that research to write a personalized icebreaker email with a relevant hook. The finished draft shows up in your Gmail inbox, ready to review and send.

## Who's it for
Sales teams, recruiters, and marketers scaling personalized outreach without manual research.


## Requirements
- n8n (self-hosted or cloud)
- Wiza API Key
- OpenAI API Key
- Perplexity API Key
- Gmail OAuth2 credentials

## How to set up

1. Import workflow JSON into n8n
2. Configure Wiza, OpenAI, Perplexity, and Gmail credentials
3. Create Leads and Case Studies data tables in n8n
4. Update business context in the "Your Offer" node
5. Activate workflow and use the form URL

## How to customize

- Modify email templates in the "Ice Breaker Email Generator" prompt
- Update business profile and case studies for relevance
- Adjust AI model settings for tone and creativity



## 📊 Basic Information

- **Workflow ID:** 12342
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 23
- **Downloads:** 2
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12342)

## 👤 Author

- **Name:** Mezie
- **Username:** @mezie

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **set** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **perplexityTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **switch** 
- **@wizaco/n8n-nodes-wiza.wiza** 
- **form** 
- **formTrigger** 
- **dataTable** 
- **dataTableTool** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
