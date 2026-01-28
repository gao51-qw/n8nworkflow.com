# Siri AI agent: Apple Shortcuts powered voice template

> This template demonstrates how to trigger an AI Agent with Siri and Apple Shortcuts, showing a simple pattern for voice-activated workflows in n8n. It's easy to customize—add app nodes before the AI Agent step to pass additional context, or modify the Apple Shortcut to send inputs like text, geolocation, images, or files.

![Siri Template Thumbnail](https://uploads.n8n.io/devrel/siri-template-thumb.png)

### Set Up
Basic instructions in template itself.

### Requirements
- **n8n account** (cloud or self-hosted)
- **Apple Shortcuts app** on iOS or macOS. Dictation ("Siri") must be activated. Download the [Shortcuts template here](https://uploads.n8n.io/devrel/ask-agent-v1.shortcut).

### Key Features:
- **Voice-Controlled AI:** Trigger AI Agent via Siri for real-time voice replies.
- **Customizable Inputs:** Modify Apple Shortcut to send text, images, geolocation, and more.
- **Flexible Outputs:** Siri can return the AI’s response as text, files, or customize it to trigger CRUD actions in connected apps.
- **Context-Aware:** Automatically feeds the current date and time to the AI Agent, with easy options to pass in more data.


### How It Works:
1. **Activate Siri** and speak your request.  
2. Siri sends the transcribed text to the n8n workflow via Apple Shortcuts.  
3. **AI Agent** processes the request and generates a response.  
4. Siri reads the response, or the workflow can return geolocation, files, or even perform CRUD actions in apps.


### Inspiration: Custom Use Cases
Tweak this template and make it your own.
- **Capture Business Cards:** Snap a photo of a business card and record a voice note. Have the AI Agent draft a follow-up email in Gmail, ready to send.
- **Voice-to-Task Automation:** Speak a new to-do item, and the workflow will add it to a Notion task board.
- **Business English on the Fly:** Convert casual speech into polished business language, and save the refined text directly to your pasteboard, ready to be pasted into any app. "It's late because of you" -&gt; "There has been a delay, and I believe your input may have contributed to it."



## 📊 Basic Information

- **Workflow ID:** 2436
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 32576
- **Downloads:** 3257
- **Created:** 2024/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2436)

## 👤 Author

- **Name:** Max Tkacz
- **Username:** @max-n8n

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×3)
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
