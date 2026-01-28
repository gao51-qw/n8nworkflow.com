# Qualify & auto-reply to leads with OpenAI, Airtable, and Gmail

> ## 🧠 How it works
This workflow turns your website form into a fully automated AI Lead Qualification system.  
Whenever a new lead submits your form, the workflow:

1. Receives the submission through a Webhook  
2. Cleans and normalizes the input fields  
3. Uses the AI Agent node to score and qualify the lead  
4. Saves all details (including AI analysis) into an Airtable CRM  
5. Automatically routes high-quality leads (score ≥ 7)  
6. Sends an instant Gmail notification  
7. Sends an AI-generated personalized auto-reply back to the lead  

This gives you a hands-free, intelligent front-door to your business — ensuring you only spend time on high-value opportunities.

---

## ⚙️ Set-up steps
These steps help users configure the workflow quickly:

1. **Create a Webhook trigger**  
   – Copy the webhook URL and add it to your form tool (Tally, Typeform, Webflow, etc.).

2. **Prepare your Airtable base**  
   – Create a "Leads" table with fields for name, email, website, message, lead score, priority, use case, timeline, budget, and AI notes.

3. **Add the AI Agent node**  
   – Insert the provided System + User prompts  
   – Enable Structured Output  
   – Paste the JSON Schema included in the sticky note inside the workflow.

4. **Connect Airtable**  
   – Map the original form fields + AI Agent “output” fields to Airtable columns.

5. **Set up the Gmail node**  
   – Connect your Gmail account  
   – Configure the notification email and auto-reply templates.

6. **Configure the IF node**  
   – Score ≥ 7 routes to the “Hot Lead” branch  
   – Everything else is captured but not routed.

7. **Run a test submission**  
   – Verify that the workflow writes to Airtable  
   – Confirm the Gmail notification + auto-reply are delivered  
   – Adjust prompting if needed.

All detailed explanations and prompt configurations are included inside the workflow through sticky notes for easy reference.


## 📊 Basic Information

- **Workflow ID:** 10928
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 90
- **Downloads:** 9
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10928)

## 👤 Author

- **Name:** Shri Deshmukh
- **Username:** @shri-ai-automation

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **airtable** 
- **stickyNote** (×6)
- **if** (×2)
- **slack** 
- **whatsApp** 
- **gmail** (×2)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
