# Generate multilingual audio content with OpenAI, ElevenLabs, Google Drive and Slack

> ## How It Works
This workflow automates multilingual audio content creation for content creators, educators, and marketing teams distributing materials globally. It solves the challenge of producing high-quality, translated audio content at scale without manual intervention. Starting with source text, the system translates content into English, Spanish, French, and German using AI translation services, validates translation quality through automated scoring, generates natural-sounding audio using ElevenLabs text-to-speech technology, calculates audio metrics for quality assurance, combines all language versions into a single package, uploads to Google Drive for centralized storage, and sends Slack notifications for team collaboration. The workflow eliminates weeks of manual translation and voice recording work while maintaining consistent quality across all language variants.

## Setup Steps
1. Configure AI translation service credentials for multilingual processing 
2. Add ElevenLabs API key and select voice models for each target language 
3. Set quality threshold scores for translation validation gates 
4. Connect Google Drive with designated folder for audio storage 
5. Configure Slack webhook for team notifications with custom message

## Prerequisites
AI translation API access (OpenAI/DeepL), ElevenLabs account with sufficient character quota

## Use Cases
E-learning course localization, podcast multilingual distribution

## Customization
Add additional languages, modify quality score thresholds

## Benefits
Reduces content localization time by 95%, eliminates voice talent costs



## 📊 Basic Information

- **Workflow ID:** 12378
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 6
- **Downloads:** 0
- **Created:** 2026/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12378)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×8)
- **httpRequest** 
- **if** 
- **code** 
- **aggregate** 
- **googleDrive** 
- **slack** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
