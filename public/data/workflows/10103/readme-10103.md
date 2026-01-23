# Generate horror faceless shorts with OpenAI TTS, Replicate Video, and YouTube upload

> **Who’s it for**
Creators who want to create faceless videos automatically, while keeping human oversight and quality control.

**How it works / What it does**

- AI generates 8 story beats, which can be reviewed, edited, or re-ordered by a human.
- Each beat is converted into narration (audio), imagery, and short clips.
- Final video is assembled and stored in Google Drive, ready for review and regeneration if needed.
- Chat commands trigger each step, giving full human control.

**How to set up**

- Set up Google Drive and Google Sheets
- Get necessary credentials

Requirements

- Google Drive account for storing videos.
- Access to AI tools for text, voice, and visuals.
- Basic familiarity with triggering chat commands or automation steps.

**How to customize the workflow**

- Adjust the number of story beats or narration style
- Use models of your choice
- Use for any theme by updating Story prompt


## 📊 Basic Information

- **Workflow ID:** 10103
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 2776
- **Downloads:** 277
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10103)

## 👤 Author

- **Name:** Deb Mukherjee
- **Username:** @deb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **readWriteFile** (×6)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **googleSheets** (×5)
- **httpRequest** (×5)
- **code** (×3)
- **executeCommand** (×5)
- **wait** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **switch** 
- **googleDrive** (×7)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
