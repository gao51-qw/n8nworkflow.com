# Auto-Translate YouTube Video Content with Google Gemini AI

> If you want to reach a wider audience, having your video titles and descriptions in multiple languages can help you connect with more viewers. This template provides the configuration needed to generate translations and update them directly on YouTube.


### How it works

- **Defines Video ID and Languages** You can get the ID from the video URL. If you’re unsure, click the Share button, it will provide the ID at between the "/" and the "?si="
- **Fetches video information** As long as the workflow has the video ID, it can retrieve the video information, whether the video is published or not.
- **Check languages to translate** If no default language is set in the video details, the workflow will assume "en" (English) as the default. To overwrite the default language, replace 'en' in line 2 of the code.
- **AI Agent Translator**: You can improve results by refining the prompt. Feel free to experiment, just don’t change the formatting structure.
- **Updates Video Localization** The API requires to send current default version again along with the translations in the Body.
- **Output URL** returns the URL for the video’s localization. It may take a few seconds to appear—refresh and try again if needed.

⚠ The translation will overwrite any existing translations for the same language.


### How to Use

- (First time only) Set up credentials for your user.
- Edit the node "Defines Video ID and Languages".
- Click the Execute Workflow button.
- Enjoy your translated video titles and descriptions!


More details can be found in the sticky notes under each node.

### Requirements

To implement this workflow, you will need to configure credentials for the following nodes:

- **Fetch Video Information**: YouTube Auth
  - This of course, assumes that you have a YouTube account.
  - The account creation and setup takes time, but luckily it's the only slow part, once done, you are good to go.
- **AI Agent Translator**: Google Gemini (PaLM) API


Both credentials can be created directly inside the node by clicking it, then selecting “Create Credential to Connect With” and following the instructions provided by the n8n Assistant.

If you already have the credentials, simply select them!

No paid plan is required, free tiers are sufficient. Keep in mind the request limits if you extend or modify this workflow to do multiple videos at once.

## 📊 Basic Information

- **Workflow ID:** 9543
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 861
- **Downloads:** 86
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9543)

## 👤 Author

- **Name:** Lucio
- **Username:** @misterfunable

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×4)
- **set** (×2)
- **youTube** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
