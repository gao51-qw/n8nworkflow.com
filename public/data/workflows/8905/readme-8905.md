# Analyze websites for UX & SEO quality with Airtop, GPT-4 Mini, and Gmail

> ### UX & SEO Website Analyst (Airtop + OpenAI + Gmail)

This workflow automatically analyzes a website for UX and SEO quality. It uses Airtop for realistic web scraping, OpenAI for structured evaluation of metadata (title, description, and overall SEO signals), and Gmail to send professional reports.  

#### What it does
- Scrapes website content and metadata through an Airtop session.  
- Evaluates SEO and UX factors (strengths, weaknesses, recommendations) with OpenAI.  
- Generates a clear, structured report.  
- Sends the report automatically via Gmail.  

#### Use cases
- Marketing agencies auditing client websites.  
- Freelancers offering SEO/UX review services.  
- Businesses monitoring their own website performance.  

#### Requirements
- **Airtop account** with API access.  
- **OpenAI API key**.  
- **Gmail credentials** connected in n8n.  

---

### How it works
- Start the flow with a target website URL.  
- Airtop opens a session and scrapes metadata naturally.  
- OpenAI analyzes and scores the title, description, and overall quality.  
- Gmail sends a formatted report to your chosen recipient.  

### Set up steps
- Connect Airtop, OpenAI, and Gmail credentials in n8n.  
- Provide the target URL to analyze.  
- Run the workflow and review the email report.  
- Keep detailed instructions inside sticky notes in the workflow.  


## 📊 Basic Information

- **Workflow ID:** 8905
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 616
- **Downloads:** 61
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8905)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **airtopTool** (×5)
- **formTrigger** 
- **set** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×9)
- **airtop** (×3)
- **gmail** 
- **httpRequest** 
- **html** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
