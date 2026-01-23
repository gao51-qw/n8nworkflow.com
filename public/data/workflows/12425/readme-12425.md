# Generate highly expressive audio 🎙️ using ElevenLabs v3 TTS Audio Tags

> This workflow is an **AI-powered text-to-speech production pipeline** designed to generate highly expressive audio using **ElevenLabs v3**.
It automates the entire process from raw text input to final audio distribution and upload the mp3 file to Google Drive and an FTP space.

---


### Key Advantages

#### 1. ✅ Cinematic-quality audio output

By combining AI-driven emotional tagging with ElevenLabs v3, the workflow produces audio that feels **acted**, not simply read.

#### 2. ✅ Fully automated pipeline

From raw text to hosted audio file, everything is handled automatically:

* No manual tagging
* No manual uploads
* No post-processing

#### 3. ✅ Multi-input flexibility

The workflow supports:

* Manual testing
* Chat-based usage
* API/Webhook integrations
  This makes it ideal for **apps, CMSs, games, and content platforms**.

#### 4. ✅ Language-agnostic

The agent preserves the **original language** of the input text and applies tags accordingly, making it suitable for **international projects**.

#### 5.✅  Consistent and correct tagging

The use of **Context7** ensures that all audio tags follow the **official ElevenLabs v3 specifications**, reducing errors and incompatibilities.

#### 6. ✅ Scalable and production-ready

Automatic uploads to Drive and FTP make this workflow ready for:

* Large content volumes
* CDN delivery
* Team collaboration

#### 7.✅  Perfect for storytelling and media

The workflow is especially effective for:

* Horror and cinematic storytelling
* Audiobooks and podcasts
* Games and immersive narratives
* Voiceovers with emotional depth

---



### How it Works

1. **Text Input & Processing**: The workflow accepts text input through multiple triggers - manual execution via "Set text" node, webhook POST requests, or chat message inputs. This text is passed to the Audio Tagger Agent.

2. **AI-Powered Audio Tagging**: The Audio Tagger Agent uses Claude Sonnet 4.5 to analyze the input text and intelligently insert ElevenLabs v3 audio tags. The agent follows strict rules: maintaining original meaning, adding tags for pauses, rhythm, emphasis, emotional tones, breathing, laughter, and delivery variations while keeping the output in the original language.

3. **Reference Validation**: During tagging, the agent consults the Context7 MCP tool, which provides access to the official ElevenLabs v3 audio tags guide to ensure correct and consistent tag usage.

4. **Text-to-Speech Conversion**: The tagged text is sent to ElevenLabs' v3 (alpha) model, which converts it into speech using a specific voice with customized voice settings including stability, similarity boost, style, speaker boost, and speed controls.

5. **Dual Output Distribution**: The generated audio file is simultaneously uploaded to two destinations: Google Drive (in a specified "Elevenlabs" folder) and an FTP server (BunnyCDN), ensuring the file is stored in both cloud storage platforms.
---


### Set Up Steps

1. **Prerequisite Configuration**:
   - Configure Anthropic API credentials for Claude Sonnet access
   - Set up [ElevenLabs API](https://try.elevenlabs.io/ahkbf00hocnu) credentials with access to v3 (alpha) models
   - Configure Google Drive OAuth2 credentials with access to the target folder
   - Set up FTP credentials for BunnyCDN or alternative storage
   - Configure Context7 MCP tool with appropriate authentication headers

2. **Workflow-Specific Setup**:
   - In the "Set text" node, replace "YOUR TEXT" with the default text you want to process (for manual execution)
   - In the "Upload to FTP" node, update the path from "/YOUR_PATH/" to your actual FTP directory structure
   - Verify the Google Drive folder ID points to your intended destination folder
   - Ensure the webhook path is correctly configured for external integrations
   - Adjust voice parameters in the ElevenLabs node if different voice characteristics are desired

3. **Execution Options**:
   - For one-time processing: Use the manual trigger and set text in the "Set text" node
   - For API integration: Use the webhook endpoint to receive text via POST requests
   - For chat-based interaction: Use the chat trigger for conversational text input

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 


## 📊 Basic Information

- **Workflow ID:** 12425
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 29
- **Downloads:** 2
- **Created:** 2026/1/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12425)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@elevenlabs/n8n-nodes-elevenlabs.elevenLabs** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **webhook** 
- **ftp** 
- **set** 
- **googleDrive** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
