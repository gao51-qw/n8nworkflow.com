# Daily Email Digest with AI Summarization using Gmail, OpenRouter and LangChain

> # 📧 Morning Mail Summary Ai Agent

Simplify your mornings with this automated email summary workflow in n8n, designed for teams and individuals who want a quick, actionable snapshot of their inbox—every day, at a glance.

## 📌 Features
- **Fully Automated**: Triggers daily at 8 AM IST  
- **Targeted Extraction**: Fetches messages from specific senders with dynamic date filtering  
- **Structured Data Aggregation**: Pulls key fields (sender, recipients, snippet)  
- **AI-Powered Summarization**: Uses LangChain + OpenRouter to generate:  
  - Insightful summaries  
  - Highlighted issues  
  - Assigned action items  
- **Memory-Enhanced Context**: Maintains continuity across days  
- **Stylish HTML Email Output**: Responsive design with:  
  - Summary section  
  - Action items  
  - Branded footer  
- **Team-Ready Sharing**: Auto-distributes to team with CC support  

## 🛠️ How It Works
1. **Trigger**: Daily schedule in n8n  
2. **Fetch**: Retrieves last 24h emails from target sender  
3. **Organize**: Aggregates email metadata  
4. **Summarize**: AI agent produces structured report:  
   - Key updates  
   - Critical issues  
   - Actionable tasks  
5. **Send**: Emails digest to team  

## 🎯 Ideal For
- Project managers needing stakeholder briefings  
- Customer success teams tracking communications  
- Leadership staying informed efficiently  
- Anyone streamlining email review  

## 📦 Included Resources
- Complete n8n workflow JSON (6 nodes)  
- Prompt template for structured summarization (Summary, Issues, Actions, Follow‑Ups).
-Styled HTML email template, with responsive design and branding sections.



## 🆓 Get Started

1. **Import JSON into n8n**  
2. **Configure:**  
   - Gmail / OpenRouter credentials  
   - Recipient lists  
   - Custom prompts  
3. **Modify freely** for your use case  

---

## ⭐ Benefits

- ⏳ **Time saved:** Skip inbox digging  
- 🔍 **Focus:** See only what matters  
- ✨ **Clarity:** Structured tasks & deadlines  
- 🔄 **Consistency:** Daily alignment for teams  


## 📊 Basic Information

- **Workflow ID:** 5003
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1430
- **Downloads:** 143
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5003)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmail** (×2)
- **aggregate** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
