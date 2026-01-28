# Generate complete business plans with customizable AI models and specialized agents

> 👔 Who is this for?
- Entrepreneurs and startup founders preparing for investors  
- Business consultants drafting complete client plans  
- Strategy teams building long-term business models  
- Accelerators, incubators, or pitch trainers  

❓ What problem does this workflow solve?
Writing a full business plan takes days of work, multiple tools, and often gets stuck in messy docs or slides. This template automates every major section, generating a clean, detailed, and professional business plan with AI in just minutes.

⚙️ What this workflow does
- Starts with a chat message asking for your business idea or startup concept  
- Passes the idea through **83 intelligent agents**, each handling a full business plan chapter:
  - Executive Summary  
  - Problem & Solution  
  - Product Description  
  - Market Research  
  - Competitor Analysis  
  - Business Model  
  - Marketing Strategy (includes guerrilla ideas)  
  - Operational Plan  
  - Financial Plan  
  - Team & Advisors  
  - Roadmap  
  - Conclusion & Next Steps  
- Each section uses tailored prompts and business logic  
- Combines all outputs into a structured, professional Markdown file  
- Final result: a ready-to-export business plan in seconds  

🛠️ Setup
1. Import this template into your n8n instance  
2. Replace the “LLM Chat Model” node with your preferred model (Ollama, GPT-4, etc.)  
3. Start from the chat input node — describe your startup or idea  
4. Wait for all agents to finish  
5. Download the final Business plan file 

🤖 LLM Flexibility (Choose Your Model)
- Supports:
  - OpenAI (GPT-4 / GPT-3.5)
  - Ollama (LLaMA 3.1, Mistral, DeepSeek, etc.)
  - Any compatible N8N chat model  
- To change the model, just replace the “Language Model” node — no other updates required  


📌 Notes
- All nodes are clearly named by function (e.g., “Market Research Generator”)  
- Sticky notes included for clarity  
- Generates high-quality plans suitable for VCs or accelerators  
- Modular: you can turn off or reorder any chapter  

📩 Need help?
Email: sinamirshafiee@gmail.com  
Happy to support setup, LLM switching, or custom section development.

## 📊 Basic Information

- **Workflow ID:** 4558
- **Complexity:** advanced
- **Node Count:** 121
- **Views:** 3002
- **Downloads:** 300
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4558)

## 👤 Author

- **Name:** Sina
- **Username:** @sina2266

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×83)
- **merge** (×16)
- **code** (×14)
- **stickyNote** (×5)
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 121 nodes with 115 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
