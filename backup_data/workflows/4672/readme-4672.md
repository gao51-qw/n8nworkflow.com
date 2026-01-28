# Voice Creation, TTS, Sound Effects, Voicechanger & more! 🎧 Elevenlabs MCP Server

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

This workflow provides a complete set of tools for interacting with the ElevenLabs voice API, enabling AI-powered text-to-speech, voice management, and audio processing capabilities.

## Features 🚀

### Text-to-Speech Operations
- Convert text to speech with customizable voice settings
- Generate speech with timestamps for precise audio control
- Stream text-to-speech in real-time
- Stream text-to-speech with timestamps for live applications

### Voice Management 🗣️
- List all available voices
- Get detailed information about specific voices
- Delete custom voices
- Edit voice properties (name and description)
- Find similar voices based on voice ID

### Audio Processing 🎧
- Create transcripts from audio
- Apply voice changing effects
- Generate sound effects
- Isolate audio components
- Design and preview new voices
- Save voice previews as new voices

## Requirements ⚙️
- An ElevenLabs API key
- n8n instance with HTTP Request Tool node
- MCP Server Trigger node for AI integration

## Setup 🔧
1. Import the workflow into your n8n instance
2. Configure your ElevenLabs API key in the workflow settings
3. The workflow uses AI expressions for voice IDs with a fallback value of `Z9hrfEHGU3dykHntWvIY`

## Usage 📝
All nodes are connected to the MCP Server Trigger for AI-powered interactions

### Example Use Cases 💡
- Generate natural-sounding speech from text
- Create and manage custom voices
- Process and transform audio files
- Build voice-based applications
- Integrate ElevenLabs capabilities into existing workflows

## Technical Details 🔍
- All endpoints use proper error handling
- Voice ID parameters use AI expressions with fallback values
- Nodes are organized in logical groups for better workflow management
- Includes comprehensive parameter validation
- Supports streaming and real-time processing

## Support 🤝
For issues or questions, please refer to:
- [ElevenLabs API Documentation](https://docs.elevenlabs.io)
- [n8n Documentation](https://docs.n8n.io)
- [n8n Community](https://community.n8n.io) 

## 📊 Basic Information

- **Workflow ID:** 4672
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 1274
- **Downloads:** 127
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4672)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **httpRequestTool** (×15)
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
