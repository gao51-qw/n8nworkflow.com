# Automate sleep meditation content creation with ElevenLabs V3 & DeepSeek AI

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Automate the production of ad-friendly meditation content—from trend research to AI voiceover generation.
🌟 Key Features

    Style-Specific Content Generation

        Input a meditation style (e.g., "calming," "motivational") and generate tailored scripts.

        Customize voice profiles using ElevenLabs.

    Trend-Based Title Research

        Scrape YouTube/Brave Search for popular video titles in your niche.

        Remove duplicates, filter explicit content, and aggregate results.

    AI-Powered Content Creation

        Generate fresh video titles using aggregated trends.

        Create 2500-character voiceover scripts with pacing cues (e.g., [sighs], ... pauses).

    Structured Output Validation

        Auto-fix malformed AI outputs with recursive parsing.

        Enforce script constraints (no line breaks/comments).

    Audio Production & Storage

        Convert scripts to lifelike speech via ElevenLabs.

        Auto-save audio to Google Drive with timestamps.

🛠️ Nodes Used

    Data Prep: Brave Search → SplitOut → Remove Duplicates → Text Classifier (explicit filter)

    AI Models: DeepSeek (title/script generation), Output Parsers (schema validation)

    TTS: ElevenLabs (voice synthesis) → Google Drive (storage)

    Utilities: Webhook trigger, Code node (input validation), Sticky Notes (instructions)

💡 Use Cases

    Create ASMR/sleep meditation content at scale.

    Repurpose trending topics into new videos.

    Generate voiceovers for faceless YouTube channels.

🔗 Setup Notes

    Required APIs:

        ElevenLabs (voice synthesis)

        Brave Search (video trends)

        Google Drive (storage)

    Input: Send style (e.g., "sleep meditation") and voice_id to the webhook.

    Output: MP3 audio + metadata saved to Google Drive.

📌 Pro Tips

    Use output parsers to enforce JSON schemas and avoid malformed AI responses.

    Attach royalty-free visuals using the included background video.

Extend with [video composition](https://n8n.io/creators/cfomodz/) or[thumbnail generation](https://n8n.io/creators/cfomodz/) workflows.

    ✅ Ad-Friendly: Filters explicit titles and enforces YouTube-safe content guidelines.

[![n8n_ Try this workflow.svg](fileId:1452)](https://cfomodz.gumroad.com/l/omgna)

## 📊 Basic Information

- **Workflow ID:** 4762
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 368
- **Downloads:** 36
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4762)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **splitOut** 
- **aggregate** 
- **removeDuplicates** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@brave/n8n-nodes-brave-search.braveSearch** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **webhook** 
- **@elevenlabs/n8n-nodes-elevenlabs.elevenLabs** 
- **code** 
- **googleDrive** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
