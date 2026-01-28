# Transform meeting transcripts to content with Fathom, GPT-4 & DALL-E

> ## 🎥 AI Content Generator: Transcript to Video & Image

### Transform meeting transcripts into engaging multi-format content with AI-powered automation

Perfect for educators, consultants, and content creators who record sessions and want to repurpose them into social media posts, videos, and images without manual work.

### How it works
* Chat interface triggers the AI orchestrator when you request content creation
* Fetches your most recent meeting transcript from Fathom
* AI analyzes the transcript and extracts key insights and breakthrough moments
* Generates written post content and creates a Google Doc automatically
* Creates detailed video generation prompts and sends to video API (Luma/Runway)
* Generates image prompts and creates social media graphics via DALL-E
* Returns all assets: written content, video URL, and image file ready to use

### How to use
* Connect your Fathom account to retrieve meeting transcripts
* Set up the three required subworkflows: Text to Video, Text to Image, and Transcript to Content
* Configure your OpenAI credentials for AI processing
* Simply chat: "Create content from my latest session - video and image"
* Review and customize the generated content as needed

### Requirements
* Fathom account with recorded meetings or sessions
* OpenAI API account (GPT-4 recommended for best results)
* Google Docs access for content storage
* Video generation API (Luma AI or Runway ML) for video creation
* Three subworkflows must be created separately (see setup notes)

### Good to know
* Video generation typically costs $0.50-$2.00 per video depending on your provider
* The workflow processes the most recent 7 days of Fathom transcripts automatically
* AI agents use ~5,000-10,000 tokens per complete content generation
* Subworkflows need to be set up once before using this main workflow
* Videos take 2-5 minutes to generate after the prompt is created

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Creating! 🚀

## 📊 Basic Information

- **Workflow ID:** 12009
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 121
- **Downloads:** 12
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12009)

## 👤 Author

- **Name:** Anna Bui
- **Username:** @annabuiplayground

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.agentTool** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** 
- **executeWorkflowTrigger** 
- **googleDocs** (×2)
- **set** (×2)
- **httpRequest** (×3)
- **convertToFile** 
- **googleDrive** 
- **slack** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
