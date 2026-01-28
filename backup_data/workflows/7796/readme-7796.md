# Auto-categorize Outlook emails into color categories with GPT-4o

> This workflow fetches recent emails from Outlook and uses OpenAI to assign a category (e.g., **Red**, **Yellow**, **Green**). It then updates each message’s category in Outlook.

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up Outlook Connection
1. In n8n → **Credentials → New → Microsoft Outlook OAuth2 API**  
2. Log in with your Outlook account & approve access  
3. Attach this credential to the **Get Messages from Outlook** and **Update Category** nodes in the workflow  
4. (Optional) Adjust the **limit** field in **Get Messages from Outlook** if you want more/less than 5 results  

---

### 2️⃣ Set Up OpenAI Connection
1. Go to the **[OpenAI Platform](https://platform.openai.com/api-keys)**  
2. Navigate to **[OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)**  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI** credentials in n8n and select it on the **OpenAI Chat Model** and **Categorizing Agent** nodes  

---

## ✅ Notes
- The agent reads `subject` + `bodyPreview` and returns a JSON category.  
- The **Update Category** node writes that category back to Outlook.  
- You can tweak the category names or logic in the **Categorizing Agent** system message.  

---

## 📬 Contact
Need help customizing the categorization rules or routing categories to folders?

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7796
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 720
- **Downloads:** 72
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7796)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **splitInBatches** 
- **manualTrigger** 
- **microsoftOutlook** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
