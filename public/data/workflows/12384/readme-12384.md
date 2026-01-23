# Convert Japanese scripts to multilingual speech with GPT-4 and ElevenLabs

> ## How It Works
This workflow provides enterprise-grade translation and text-to-speech automation for international communication teams, content publishers, and localization services. It addresses producing high-quality multilingual audio content with consistent accuracy and natural delivery at scale. An AI orchestrator analyzes source content to determine optimal translation strategy, selecting specialized agents based on content type, complexity, and target languages. The translation agent processes text with contextual awareness, generating structured output that feeds into ElevenLabs' neural text-to-speech engine. Each audio file undergoes automated quality validation checking pronunciation accuracy, natural flow, and technical specifications. High-quality outputs proceed to standardized formatting for delivery, while failures trigger dedicated error handling with diagnostic reporting, ensuring reliable production of professional multilingual audio assets.

## Setup Steps
1. Configure OpenAI API key in "Translation Orchestrator" 
2. Set up ElevenLabs credentials in "Text-to-Speech" 
3. Define source and target languages in "Workflow Configuration" 
4. Customize orchestration logic based on content types and complexity
5. Set quality thresholds in "Audio Quality Validation" matching output 

## Prerequisites
OpenAI API access with GPT-4 capabilities, active ElevenLabs subscription.
## Use Cases
Enterprise content localization, multilingual customer communications
## Customization
Add language-specific translation agents, modify orchestration routing logic
## Benefits
Delivers consistent translation quality through intelligent routing

## 📊 Basic Information

- **Workflow ID:** 12384
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 30
- **Downloads:** 3
- **Created:** 2026/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12384)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.agentTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **httpRequest** 
- **code** 
- **if** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
