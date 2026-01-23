# Qualify real estate buyer leads with GPT-4o & Airtable CRM integration

> # 🧠 How It Works

This **AI Agent** automatically qualifies **property buyer leads** from form submissions and sends them directly to your CRM.

### 🔄 Workflow Steps

1. **Form Submission Trigger**  
   - When a user submits their details via a property inquiry form, the workflow is activated.

2. **AI Lead Classification**  
   - The buyer’s input (budget, location, timeline, etc.) is analyzed by **OpenAI**.  
   - Structured data is extracted, and a **lead score (0–100)** is generated.

3. **Lead Qualification Logic**  
   - Leads with a **score ≥ 70** are marked as **qualified**.  
   - Leads with a lower score can be ignored or stored separately for later review.

4. **Follow-Up Actions (for Qualified Leads)**  
   - An **email notification** is sent to the real estate agent.  
   - A **record is created in Airtable** to act as a lightweight CRM.

---

# ⚙️ How to Set Up

### 1. Form Setup
- Replace the default trigger with your preferred source:  
  - Typeform, Google Forms, Webflow form, etc.  
- Ensure your form collects the following fields:  
  - `Name`, `Email`, `Budget`, `Location`, `Timeline`, `Property Type`

### 2. Connect Your Credentials
- Add your **OpenAI API key** for the LLM node  
- Connect your **Gmail account** for notifications  
- Link your **Airtable base & table** to store qualified leads  

### 3. Customize Scoring Logic (Optional)
- Edit the **Information Extractor** prompt to tweak how scoring is calculated  
- Example: prioritize budget fit, location, or timeline  

### 4. Test the Workflow
- Submit a test entry via the form  
- Confirm:  
  - You receive the notification email  
  - A new lead record appears in Airtable  

### 5. Activate & Go Live
- Turn on the workflow  
- Start qualifying **real buyer leads in real-time** 🎯  

---

# 🚀 Use Cases
- Realtors → Filter out unqualified leads automatically  
- Agencies → Save time by only engaging with high-quality inquiries  
- Teams → Centralize qualified leads in Airtable for instant collaboration  

---


## 📊 Basic Information

- **Workflow ID:** 9132
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 532
- **Downloads:** 53
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9132)

## 👤 Author

- **Name:** Nitesh
- **Username:** @niteshdk11

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **if** 
- **set** 
- **gmail** 
- **airtable** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
