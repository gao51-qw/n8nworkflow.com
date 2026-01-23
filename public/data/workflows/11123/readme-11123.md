# Generate AI sales proposals from transcripts using Azure OpenAI, PandaDoc & Slack approval

> ## AI Proposal Workflow Overview

This workflow turns your **sales calls + intake form** into a polished, send-ready proposal.  
It pulls the latest call transcript from **Fireflies**, generates structured proposal content with **Azure OpenAI**, builds a proposal in **PandaDoc**, routes it for **Slack approval**, and then handles sending, CRM stage updates (Airtable/HubSpot), and automated follow-ups using the PandaDoc audit trail.

This workflow is modular. You can replace each major tool:
- **Fireflies** → Gong, Fathom, Wingman, Avoma (any transcript provider)  
- **PandaDoc** → DocuSign, Qwilr, Proposify, Google Docs API  
- **Slack Approval** → Gmail Approval, MS Teams Approval, Notion DB Approvals  
- **Airtable CRM** → HubSpot, Pipedrive, Salesforce, Zoho, Monday Sales CRM  
- **Intake Form** → Typeform, Tally, Jotform, HubSpot forms  
- **Azure OpenAI** → OpenAI, Anthropic Claude, Mistral, or any LLM connected through an API  

The core logic stays the same — you only swap the nodes.

---

## Who It’s For
- Agencies & consultants who send similar proposals after every call  
- B2B SaaS / tech teams that want proposals going out within hours  
- Solo operators who want AI to handle most of the draft but keep final control  
- Teams already working out of **Slack**, wanting approval flows there  

---

## How It Works

### 1. Form Trigger (Client Proposal Intake)
Client fills a form with:
- Name, email, website  
- Industry / business context  
- Problem, solution idea, scope  
- Budget, timeline, deliverables  

### 2. Sales Call Intelligence (Fireflies or Gong)
- Workflow searches transcripts using the client email  
- Fetches the relevant transcript + summary  

### 3. AI Proposal Generator (Azure OpenAI or any LLM)
- Sets initial variables (`draftText`, `lastFeedback`)  
- Sends transcript + form data into LLM  
- Returns structured JSON:
  - introduction  
  - client_problem  
  - proposed_solution  
  - scope_of_work 
  - deliverables 
  - timeline_breakdown 
  - investment  
  - next_steps  

### 4. Proposal Creation (PandaDoc, DocuSign, etc.)
- Creates the proposal document from a template  
- Fills tokens with AI-generated content  
- Inserts pricing table using Budget  

### 5. Slack Approval Loop
- Slack message is sent to reviewer with:
  - **Approve** button  
  - **Request Changes** button  
  - Optional comment thread for feedback  
- If **Approved**:
  - Proposal is sent automatically via PandaDoc/DocuSign 
  - Slack message to notify proposal has been sent
- If **Changes Requested**:
  - Feedback + draft are stored  
  - Passed back into the LLM to regenerate  
  - New document is created and the Slack approval request is sent again  
- This loop continues until approval happens  

### 6. CRM Update (Airtable / HubSpot)
- After proposal is sent, Stage → **Proposal Sent**  

### 7. Follow-Up System (PandaDoc Audit Trail)
After a 48-hour wait:
- Audit trail is fetched  
- If document is **not yet signed**:
  - Reminder is sent  
  - Stage → **Reminder Sent**  
  - Slack message to notify a reminder has been sent
- If **signed**:
  - Stage → **Document Signed**  
---

### Ideal use cases
- Sales teams creating tailored proposals at scale  
- Agencies responding quickly to inbound RFPs  
- Freelancers producing polished proposals in minutes  
- RevOps teams standardizing proposal formats  
- SaaS companies automating repetitive proposal creation

---

## Requirements
- n8n (self-hosted or cloud)  
- Transcript provider (Fireflies, Gong, Fathom, etc.)  
- LLM API (Azure OpenAI, OpenAI, Claude, etc.)  
- Proposal tool (PandaDoc, DocuSign, Qwilr)  
- Slack API app for approval flow  
- CRM (Airtable, HubSpot, Pipedrive)  
- Intake form  

---

You can now integrate this into your lead workflow and let AI + automation handle proposal drafting, Slack approvals, sending, CRM updates, and follow-ups.


## 📊 Basic Information

- **Workflow ID:** 11123
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11123)

## 👤 Author

- **Name:** Sparsh From Automation Jinn
- **Username:** @sparsh-automation-jinn

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** (×5)
- **if** (×2)
- **wait** (×2)
- **stickyNote** (×9)
- **set** (×2)
- **airtable** (×3)
- **@firefliesai/n8n-nodes-fireflies.fireflies** (×2)
- **slack** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
