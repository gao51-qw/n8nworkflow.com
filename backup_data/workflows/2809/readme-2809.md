# Microsoft Outlook AI email assistant with contact support from Monday and Airtable

> # Microsoft Outlook AI Email Assistant

## **Prerequisites**

### **1. Microsoft 365 Login Credentials**
- Provide your Office 365 credentials to connect Outlook.

### **2. Monday.com**
- Generate an API token and have a board with your contact details.

### **3. Airtable**
- Obtain an API key (or personal access token) and set up a base to store:
  - **Contacts** (populated by the Monday.com sync).
  - **Rules & Categories** (used by the AI Email Assistant).
- Use this Airtable base as the template: [Airtable AI Email Assistant Template](https://airtable.com/appuffxqy5HlNYAXJ/shrhb2T92ZMF8FezS/tblP9SIola8yglSc0/viwxAIMM6TvWoahfM?blocks=hide). Define your own rules, categories, and delete rules.

### **4. OpenAI API Key**
- Sign up for OpenAI if you don’t already have an account.
- Generate a new API key at [OpenAI API Keys](https://platform.openai.com/api-keys).

---

## **What the System Does**

### **1. Daily Contact Sync (Monday.com → Airtable)**
- Runs **once a day** to pull the latest contacts from Monday.com and store or update them in Airtable.

### **2. AI Email Categorisation & Prioritisation**
- Fetches **Outlook emails** with filters.
- Cleans and processes email content.
- Matches emails with known contacts from Airtable.
- Uses an **AI agent** to classify, categorise, and prioritise emails.
- Updates **Outlook categories and importance** based on AI results.
- Runs in parallel with **Airtable rules & categories retrieval** for real-time decision-making.

---

# **Workflow 1: Daily Contact Sync (Monday.com → Airtable)**

### **Purpose**
Keep Airtable’s **Contacts** table up to date by pulling new or updated contact data from Monday.com **daily**.

### **Steps**
1. **Schedule Trigger**  
   - Runs at a set interval (daily) to initiate contact syncing.

2. **Monday.com: Get Contacts**  
   - Reads the specified **board/columns** from Monday.com where you store contact details.

3. **Airtable - Contacts**  
   - **Upserts** (adds or updates) the fetched Monday.com data into Airtable’s **Contacts** table.
   - Ensures **daily updates** reflect changes from Monday.com.

### **Result**
A **consolidated contact list** in Airtable, ready for AI email categorisation.

---

# **Workflow 2: Categorise & Prioritise Outlook Emails**

### **Purpose**
Fetches **Outlook emails**, cleans and processes their content, **matches senders** with known contacts, and uses AI to categorise and prioritise them.

### **Steps**

#### **1. Get Outlook Emails with Filters**
- **Trigger**: Either scheduled (`Check Mail Schedule Trigger`) or manual (`Test Workflow`).
- **Outlook Filters**:
  - **Not flagged** (`flag/flagStatus == 'notFlagged'`).
  - **Not categorised** (`not categories/any()`).

**🔹 Result**: A batch of **fresh, unprocessed emails** ready for processing.

---

#### **2. Sanitise Email**
- **Convert to Markdown**: Strips **HTML tags** and normalises formatting.
- **Email Messages Processing**: Allows manual removal of **signatures, disclaimers, or extra content**.

**🔹 Result**: A **clean, AI-friendly email** for categorisation.

---

#### **3. Match Contact**
- **Loop Over Emails**: Iterates over each email.
- **Contact Lookup**: Checks Airtable’s **Contacts** table (updated daily).
- **Merge Data**: Enriches emails with known **client, supplier, or internal team** info.

**🔹 Result**: Enhanced email context **for AI processing**.

---

#### **4. AI Agent to Categorise & Prioritise**
- **Retrieve Rules & Categories**  
  - Reads **Rules, Categories, and Delete Rules** from Airtable in parallel.
- **AI: Analyse Email (Tools Agent)**  
  - Uses **email text, sender info, and rules** to build a **structured AI prompt**.
- **OpenAI Chat Model**  
  - Processes the AI prompt and outputs:
    - **Category**
    - **Subcategory (optional)**
    - **Priority level**
    - **Short rationale**
- **Structured Output Parser**  
  - Ensures AI response is valid **JSON format**.

**🔹 Result**:  
Each email is **labelled, categorised, and prioritised** with AI-driven logic.

---

#### **5. Set Outlook Category & Importance**
- **Set Category**: Updates Outlook with the assigned **category**.
- **Check Priority Conditions** (`If` Node):  
  - If **Action Required** or from a VIP, mark as **High Priority**.
- **Set Importance**: Updates the email's **importance flag** in Outlook.

**🔹 Result**:  
Outlook is updated with **categories & importance** based on AI recommendations.

---

## **Parallel Processing: Retrieve Rules & Categories**
- Runs **alongside** the email categorisation workflow.
- Ensures **Airtable-based rules** are available before AI processing.

### **Steps**
1. **Airtable: Get Rules & Categories**  
   - Fetches **Rules, Categories, and Delete Rules** from Airtable.
2. **Delete Rules (Optional)**  
   - If a delete rule matches, the email is removed.

**🔹 Result**:  
A dynamic, **updatable rule system** ensuring emails are handled properly.

---

## **Final Outcome**
- **Daily Contact Sync** keeps contacts up to date.
- **AI-driven email workflow** ensures smart categorisation.
- **Outlook automatically updated** with AI-generated categories and importance.

---

This **automated system** saves time, ensures **efficient inbox management**, and allows for **customisable rules** via Airtable.


## 📊 Basic Information

- **Workflow ID:** 2809
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 6880
- **Downloads:** 688
- **Created:** 2025/1/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2809)

## 👤 Author

- **Name:** Cognitive Creators
- **Username:** @cognitivecreators

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×8)
- **microsoftOutlook** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** (×2)
- **mondayCom** 
- **airtable** (×5)
- **markdown** 
- **set** 
- **splitInBatches** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
