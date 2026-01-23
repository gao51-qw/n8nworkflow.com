# Auto-generate & polish professional bios with GPT-5 and Google Docs

> ![Screenshot 20251024 210852.png](fileId:3106)

Automatically create, evaluate, and optimize professional biographies with the Bio-Graphy Agent.  
This workflow uses a multi-agent system powered by GPT-5 to write, review, and enhance bios — then saves the final version directly to Google Docs.

---

## Who’s it for
For professionals, creators, and marketers who want high-quality biographies for their profiles, portfolios, or LinkedIn — without spending hours writing or editing.

---

## How it works
1. The user sends a chat message with details like **name**, **age**, and **location**.  
2. The **Biography Agent** generates a complete biography using the GPT-5 Chat Model.  
3. The **Evaluator Agent** reviews the bio and provides structured feedback.  
4. The **Optimizer Agent** refines tone, structure, and clarity based on that feedback.  
5. The final biography is saved automatically to **Google Docs** for easy access or publishing.

---

## How to set up
1. Connect your **Google account** in n8n to enable document saving.  
2. Add your **OpenAI (GPT-5 or compatible)** credentials to the agent nodes.  
3. Customize prompts in the Biography, Evaluator, and Optimizer agents for your preferred writing style.  
4. Test the workflow by sending a chat message with basic personal details.  
5. Your completed bio will be generated, improved, and saved to your connected Google Docs.

---

## Requirements
- n8n Cloud or Self-hosted instance  
- Google Docs integration  
- OpenAI (GPT-compatible) credentials  

---

## How to customize
- 🎯 **Add personality:** Adjust the prompts to make bios sound more friendly, formal, or humorous.  
- 🌐 **Change output:** Send the result to Notion, Airtable, or Gmail instead of Google Docs.  
- 🪄 **Add another agent:** Include a Grammar or Tone Correction agent for extra polish.  
- 🧩 **Extend use:** Adapt it for “About Us” pages, resumes, or brand storytelling.

---

**Use this workflow to instantly generate professional, polished bios — powered by GPT-5 and automated through n8n.**

## 📊 Basic Information

- **Workflow ID:** 9930
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9930)

## 👤 Author

- **Name:** Asfandyar Malik
- **Username:** @asfandyar-malik

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **if** 
- **googleDocs** 
- **set** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
