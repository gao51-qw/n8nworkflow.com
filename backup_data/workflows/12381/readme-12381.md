# Translate Chinese audio into multilingual voiceovers with GPT-4o and ElevenLabs

> ## How It Works
This workflow automates end-to-end audio translation with quality assurance for content creators, educators, and international teams managing multilingual content. It solves the challenge of translating audio into multiple languages while ensuring accuracy and maintaining organized delivery. The system receives audio files via webhook, splits them into target languages (Arabic, French, Spanish, Chinese, Hindi), and processes each through NVIDIA's Parakeet TDT translation model. OpenAI validates translation quality, and results are enhanced with comprehensive metadata. Successfully translated files are uploaded to Google Drive with organized naming, combined into a summary spreadsheet, and delivered via email notification. Failed translations trigger quality alerts, ensuring reliable output while minimizing manual oversight and reducing translation turnaround time from hours to minutes.

## Setup Steps
1. Configure NVIDIA API credentials in the "Generate Audio with ElevenLabs" 
2. Add OpenAI API key for quality evaluation in the "OpenAI Chat Model" node
3. Set up Google Drive OAuth connection and specify target folder ID for uploads
4. Configure Gmail SMTP credentials for notification delivery
5. Update webhook URL in source applications to trigger workflow
6. Customize target languages in "Split Languages" node if needed

## Prerequisites
Active accounts: NVIDIA (build.nvidia.com), OpenAI, Google Drive, Gmail. API credentials for all services. 

## Use Cases
International podcast distribution, e-learning course localization

## Customization
Modify target languages in Split node, adjust quality thresholds in OpenAI evaluation

## Benefits
Reduces translation time by 90%, eliminates manual quality checks through automated validation


Here are **clear, professional subheadings** for each *What / Why* pair. They’re concise, action-oriented, and fit well in technical workflow documentation.

 


## 📊 Basic Information

- **Workflow ID:** 12381
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 4
- **Downloads:** 0
- **Created:** 2026/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12381)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** (×3)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** 
- **aggregate** 
- **if** 
- **code** (×2)
- **googleDrive** 
- **gmail** 
- **summarize** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
