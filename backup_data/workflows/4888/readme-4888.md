# Voice-powered marketing assistant with ElevenLabs, OpenAI & content generation

> 🧠 Gwen – The AI Voice Marketing Agent
Gwen is your intelligent voice-powered marketing assistant built in n8n. She combines the power of OpenAI, ElevenLabs, and automation workflows to handle content creation, image generation, and voice delivery — all from a single agent interface.

This template shows a graphical illustration of how Gwen will work with subworkflows. These subworkflows are modular placeholders and need to be linked into Gwen for full deployment.

✨ What Gwen Can Do
📝 Generate Voice-Optimized Blog Posts
Tailored for your target audience with engaging intros, real-time research, and polished structure.
🖼️ Create AI-Generated Visuals
From simple concepts to detailed image prompts and Google Drive uploads.
🧑‍🎨 Edit Images On Demand
Modify past images with a few words — powered by OpenAI's image editing API.
🔍 Search Image Database
Quickly find past content using title or intent.
🧠 Think Tool
Gwen uses this to clarify uncertain tasks or analyze complex requests.
🔊 Deliver Results in Natural Voice
With ElevenLabs, Gwen transforms all responses into human-like audio, perfect for marketing, social content, or voice interfaces.
🛠️ Setup Instructions
Estimated Time: 15–30 mins

✅ Step 1: Subworkflows

Import These Workflows
Blog Post, Create Image, Edit Image, Search Images
Connect Them to Gwen
Assign as tools inside the Gwen agent node (Langchain AI Agent in n8n).
🎙️ Step 2: Enable ElevenLabs Voice Agent

Sign up or log in: https://try.elevenlabs.io
Copy your API key
In the ElevenLabs interface, create a new tool:
Method: POST
URL: https://your-n8n-domain/webhook/042cc868-28b7-42a2-ab65-bc2944fc5a54
Under Body Parameters, add:
prompt → value type: LLM Prompt
sessionId → value type: Dynamic variable, name: system__conversation_id
Save and connect this tool to your ElevenLabs agent
Run a test and check n8n execution logs to confirm Gwen’s voice integration is active
🔐 Step 3: Credentials to Set

OpenAI – For text and image generation
ElevenLabs – For voice output
Tavily – For real-time research in blog generation
Telegram – For sending content to users
Google Sheets – To log all outputs like blogs and images


## 📊 Basic Information

- **Workflow ID:** 4888
- **Complexity:** advanced
- **Node Count:** 56
- **Views:** 3578
- **Downloads:** 357
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4888)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **respondToWebhook** 
- **convertToFile** (×3)
- **httpRequest** (×3)
- **googleDrive** (×5)
- **googleSheets** (×3)
- **telegram** (×5)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **googleSheetsTool** 
- **set** (×2)
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 56 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
