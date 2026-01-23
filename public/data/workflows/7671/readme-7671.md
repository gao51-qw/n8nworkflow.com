# Blog writer & editor with Google Sheets memory (GPT-4)

> 
Chat to **write** or **reword** a blog post. The workflow stores each result in Google Sheets and uses a sub-workflow “Google tool” to **count rows per session** (your running context). If a session exceeds a row threshold, the flow can branch (e.g., stop or notify).

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n

### 2️⃣ Prepare Your Google Sheet
#### Connect your Data in Google Sheets
- Use this format: **[Sample Sheet](https://docs.google.com/spreadsheets/d/1NwnABaQIReMmG2sRGrC-lv-5kpmsKJkUlRm-KmvPsCE/edit?gid=0#gid=0)**
- Row 1 = **column names** (e.g., `session`, `Rows`, `output`)
- Data in rows **2–100** (or more if you prefer)
- In n8n, use **Google Sheets OAuth2** → pick your **Spreadsheet** and **Worksheet**
- (Optional) You can adapt this to **Airtable**, **Notion**, or a **Database**

---

## 🧠 How It Works
- **Chat Trigger**: Provide a topic (write) or paste existing text (reword).  
- **Code Node (“Choose to Write or Edit Blog”)**:  
  - Builds a `system_prompt` + `user_prompt`  
  - Instructs the agent to call the **Google tool** (sub-workflow) **with only the `sessionid`** to count existing rows.  
- **Tool Workflow (“google”)**:  
  - Fetches rows from the sheet → **filters by `session`** → **summarizes row count**.  
- **Agent (“Blog Writer & Editor”)**:  
  - Returns **structured JSON** (items/rows, session, blog body).  
- **Store (Google Sheets)**:  
  - Appends `{ session, Rows, output }` to the sheet.  
- **If Node**:  
  - Example rule: `Rows &gt; 3` → branch/limit/notify as needed.

---

## 💬 Example Prompts
- “Write a 600-word blog about **n8n agents** with 3 bullet takeaways. Session: `abc123`.”  
- “Reword this post into a concise LinkedIn article. Session: `launchQ3`:\n&lt;your text here&gt;”  
- “Draft a blog intro and 5 SEO headlines on **marketing automation**. Session: `mkt-01`.”

---

## 📬 Contact
Need help tailoring this to Airtable/Notion/DB, or adding auto-publishing?

- 📧 **rbreen@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7671
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1016
- **Downloads:** 101
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7671)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **summarize** 
- **filter** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **googleSheets** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
