# Resume reviewer with GPT-4o-mini and human validation via gotoHuman

> 
This workflow reviews resumes against a job description using **OpenAI** for automated scoring and **gotoHuman** for human validation before continuing.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Set Up gotoHuman Connection
1. In n8n, go to **Settings → Community Nodes → Install**  
   - Package: `@gotohuman/n8n-nodes-gotohuman`  
2. Create a **gotoHuman account** and generate an **API key**  
   - Save it in n8n as **gotoHuman API credentials**  
3. In **gotoHuman**, create a **Review Template** with fields:  
   - **Resume (string)**  
   - **Summary (string)**  
   - **Rating (number)**  
4. Copy the **Template ID** into the `Send review request and wait for response` node  
5. Map fields in the node:  
   - Resume → extracted resume text  
   - Summary → OpenAI output summary  
   - Rating → OpenAI score  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)  


## 📊 Basic Information

- **Workflow ID:** 7605
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 496
- **Downloads:** 49
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7605)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **extractFromFile** 
- **@gotohuman/n8n-nodes-gotohuman.gotoHuman** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
