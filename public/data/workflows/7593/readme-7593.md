# Auto-translate blog content to multiple languages with GPT-4o and Markdown

> This workflow takes a blog post (title + content) and automatically translates it into multiple languages of your choice using **OpenAI** inside **n8n**. The translated output is formatted in Markdown, making it ready for publishing or direct use in content management systems.  

It’s ideal for content creators, marketers, and businesses who want to **instantly localize blogs** into different languages without manual effort.  

### 🔑 Key Features
- **Multi-language support**: Translate your content into as many languages as you configure.  
- **Clean Markdown output**: Ensures translated blogs are properly formatted.  
- **Flexible input**: Works with any blog content passed into the workflow.  
- **Scalable**: Add or remove target languages with a single change in the Set node.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Choose Your Target Languages
1. Open the **Set Node** called `Set Languages`  
2. Edit the array of languages to include the ones you want to translate into, e.g.:  

```json
[
  "spanish",
  "french",
  "german"
]


## 📊 Basic Information

- **Workflow ID:** 7593
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 487
- **Downloads:** 48
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7593)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **splitOut** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×4)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
