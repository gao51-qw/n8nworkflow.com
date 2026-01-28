# Generate guerrilla marketing campaign plans with AI swarm intelligence

> 🧠 Who is this for?
- Startup founders designing creative growth strategies  
- Marketing teams seeking low-cost, high-impact campaigns  
- Consultants and agencies needing fast guerrilla plans  
- Creators exploring AI-powered content and campaigns  

❓ What problem does this workflow solve?
Building a full guerrilla marketing strategy usually takes hours of brainstorming, validation, and formatting. This template does all of that in minutes using a swarm of AI agents, from idea generation to KPIs, and even kills bad ideas before you waste time on them.

⚙️ What this workflow does
- Starts with a chat input where you describe your business or idea  
- A “Swarm Intelligence” loop:  
  - One AI agent **generates** guerrilla ideas  
  - Another agent **critically validates** the idea and gives honest feedback  
  - If the idea is weak, it asks for a new one  
- If accepted, the swarm continues with 16 AI specialists generating:  
  - 🎯 Objectives  
  - 🧍‍♂️ Personas  
  - 🎤 Messaging  
  - 🧨 Tactics  
  - 📢 Channels  
  - 🧮 Budget  
  - 📊 KPIs  
  - 📋 Risk plan and more  
- Merges all chapters into a final **Markdown file**  
- Lets you download the campaign in seconds  

🛠️ Setup
1. Import the workflow to your n8n instance  
2. (Optional) Configure your LLM (OpenAI or Ollama) in the “OpenAI Chat Model” node   
3. Type your business idea (e.g., “Luxury dog collar brand for Instagram dads”)  
5. Wait for flow completion
6. Download the final marketing plan file  

🤖 LLM Flexibility (Choose Your Model)
- Supports any LLM via LangChain:  
  - Ollama (LLaMA 3.1, Mistral, DeepSeek)  
  - OpenAI (GPT-4, GPT-3.5)  
- To switch models, just replace the “Language Model” node, no other logic needs updating  



📌 Notes
- Output is professional and ready-to-pitch  
- Built-in pessimistic validator filters out bad ideas before wasting time  

📩 Need help?
Email: sinamirshafiee@gmail.com  
Happy to support setup or customization!

## 📊 Basic Information

- **Workflow ID:** 4553
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 4133
- **Downloads:** 413
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4553)

## 👤 Author

- **Name:** Sina
- **Username:** @sina2266

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×18)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×4)
- **merge** (×5)
- **stickyNote** (×6)
- **if** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
