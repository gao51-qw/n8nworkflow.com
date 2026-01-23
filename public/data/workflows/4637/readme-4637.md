# Automate social media content with AI for Instagram, Facebook, LinkedIn & X

> # AI Social Media Content Automation – n8n Workflow

This workflow is built for creators, solopreneurs, SaaS founders, and agencies looking to automate their social media content process from idea to publication. It combines the power of OpenAI, Google Sheets, and official APIs for Instagram, Facebook, X (Twitter), and LinkedIn to deliver fully automated, brand-consistent social media posts — including text, images, hashtags, CTAs, and scheduling.

No more switching tools, rewriting content, or forgetting to post. Just set it up once and let your brand grow automatically.

## 🔧 What the Workflow Does
- Generates platform-specific post ideas based on your brand tone.
- Selects the best idea (or lets you manually input one).
- Writes tailored posts for Instagram, Facebook, X, and LinkedIn.
- Auto-generates platform-specific visuals using OpenAI (DALL·E) and uploads to Cloudinary.
- Publishes content directly using official platform APIs.
- Logs all actions to Google Sheets and optionally sends a summary email via Gmail.

## ⚙️ How It Works
1. Trigger the workflow manually, on a schedule, or from a chatbot.
2. AI generates multiple post ideas and filters the best one.
3. Based on the selected idea, it generates full posts for each platform.
4. Custom visuals are created using OpenAI and uploaded to Cloudinary.
5. Final post content is merged and sent to Instagram, Facebook, X, and LinkedIn.
6. Logs and optional reports are created in Google Sheets and Gmail.

## 🛠️ Setup Steps
- Set up your accounts and credentials: OpenAI, Cloudinary, Gmail, Meta, LinkedIn, X, and Google Sheets.
- Import the workflow and subworkflow (Get Brand Brief) into n8n.
- Replace all placeholders (sheet IDs, access tokens, profile/page IDs, brand brief URLs).
- Optionally personalize prompts and output templates to match your brand voice.
- Setup time: ~30–45 minutes (including credentials and testing).

Detailed configuration notes are included in sticky nodes throughout the workflow.

## 📦 Included in Your Package
- JSON workflow file (main flow + brand brief subflow)
- Google Sheets templates for history logging
- Setup documentation (Markdown & PDF)
- Placeholder reference sheet


## 📊 Basic Information

- **Workflow ID:** 4637
- **Complexity:** advanced
- **Node Count:** 73
- **Views:** 14193
- **Downloads:** 1419
- **Created:** 2025/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4637)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **executeWorkflow** 
- **set** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **manualTrigger** 
- **stickyNote** (×23)
- **executeWorkflowTrigger** 
- **notion** 
- **aggregate** (×2)
- **facebookGraphApi** (×3)
- **merge** (×5)
- **twitter** 
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **googleSheetsTool** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **gmail** 
- **googleSheets** (×2)
- **googleDocs** 
- **httpRequest** (×5)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 73 nodes with 47 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
