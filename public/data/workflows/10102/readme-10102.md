# Dynamic Hubspot lead routing with GPT-4 and Airtable sales team distribution

> # AI Agent for Dynamic Lead Distribution (HubSpot + Airtable)

![Manish Kumar](https://i.ibb.co/Z1hJmL6T/Gemini-Generated-Image-ewsigewsigewsige.png)

🧠 **AI-Powered Lead Routing and Sales Team Distribution**
  
This intelligent n8n workflow automates end-to-end **lead qualification and allocation** by integrating **HubSpot, Airtable, OpenAI, Gmail, and Slack**.
  
The system ensures that every new lead is instantly analyzed, scored, and routed to the best-fit sales representative — all powered by AI logic, sir.  

---

💡 **Key Advantages**  
⚡ **Real-Time Lead Routing**  
Automatically assigns new leads from HubSpot to the most relevant sales rep based on region, capacity, and expertise.  

🧠 **AI Qualification Engine**  
An OpenAI-powered Agent evaluates the lead’s industry, region, and needs to generate a persona summary and routing rationale.  

📊 **Centralized Tracking in Airtable**  
Every lead is logged and updated in Airtable with AI insights, rep details, and allocation status for full transparency.  

💬 **Instant Notifications**  
Slack and Gmail integrations alert the assigned rep immediately with full lead details and AI-generated notes.  

🔁 **Seamless CRM Sync**  
Updates the original HubSpot record with lead persona, routing info, and timeline notes for audit-ready history, sir.  

---

⚙️ **How It Works**  
1. **HubSpot Trigger** – Captures a new lead as soon as it’s created in HubSpot.  
2. **Fetch Contact Data** – Retrieves all relevant fields like name, company, and industry.  
3. **Clean & Format Data** – A Code node standardizes and structures the data for consistency.  
4. **Airtable Record Creation** – Logs the lead data into the “Leads” table for centralized tracking.  
5. **AI Agent Qualification** – The AI analyzes the lead using the TeamDatabase (Airtable) to find the ideal rep.  
6. **Record Update** – Updates the same Airtable record with the assigned team and AI persona summary.  
7. **Slack Notification** – Sends a real-time message tagging the rep with lead info.  
8. **Gmail Notification** – Sends a personalized handoff email with context and follow-up actions.  
9. **HubSpot Sync** – Updates the original contact in HubSpot with the assignment details and AI rationale, sir.  

---

🛠️ **Setup Steps**  
* **Trigger Node:** HubSpot → Detect new leads.  
* **HubSpot Node:** Retrieve complete lead details.  
* **Code Node:** Clean and normalize data.  
* **Airtable Node:** Log lead info in the “Leads” table.  
* **AI Agent Node:** Process lead and match with sales team.  
* **Slack Node:** Notify the designated representative.  
* **Gmail Node:** Email the rep with details.  
* **HubSpot Node:** Update CRM with AI summary and allocation status, sir.  

---

🔐 **Credentials Required**  
* **HubSpot OAuth2 API** – To fetch and update leads.  
* **Airtable Personal Access Token** – To store and update lead data.  
* **OpenAI API** – To power the AI qualification and matching logic.  
* **Slack OAuth2** – For sending team notifications.  
* **Gmail OAuth2** – For automatic email alerts to assigned reps, sir.  

---

👤 **Ideal For**  
* Sales Operations and RevOps teams managing multiple regions  
* B2B SaaS and enterprise teams handling large lead volumes  
* Marketing teams requiring AI-driven, bias-free lead assignment  
* Organizations optimizing CRM efficiency with automation, sir  

---

💬 **Bonus Tip**  
You can easily extend this workflow by adding **lead scoring logic, language translation for follow-ups, or Salesforce integration**.  
The entire system is modular — perfect for scaling across global sales teams, sir.  


## 📊 Basic Information

- **Workflow ID:** 10102
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 111
- **Downloads:** 11
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10102)

## 👤 Author

- **Name:** MANISH KUMAR
- **Username:** @manipritraj

## 🏷️ Categories

- CRM
- AI RAG

## 🔗 Nodes Used

- **hubspotTrigger** 
- **hubspot** (×2)
- **code** 
- **airtable** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **airtableTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **slack** 
- **gmail** 
- **noOp** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
