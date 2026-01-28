# Free AI image generator - n8n automation workflow with Gemini/ChatGPT

> ### This n8n template demonstrates how to use AI to generate custom images from scratch - fully automated, prompt-driven, and ready to deploy at scale.

Use cases are many: You can use it for marketing visuals, character art, digital posters, storyboards, or even daily image generation for your personal purposes.

## How It Works
- The flow is triggered by a chat message in N8N or via Telegram. The default image size is 1080 x 1920 pixels. To use a different size, update the values in the **“Fields - Set Values”** node before triggering the workflow.
- The input is parsed into a clean, structured prompt using a multi-step transformation process.
- Our AI Agent sends the final prompt to Google Gemini’s image model for generation (you can also integrate with OpenAI or other chat models).
- The raw image data created by the AI Agent will be run through a number of codes to make sure it's feasible for your preview if needed and downloading.
- Then, we use an HTTP node to fetch the result so you can preview the image.
- You can send it back to the chat message in N8N or Telegram, or save it locally to your disk.

## How To Use
- Download the workflow package.
- Import the package into your N8N interface.
- Set up the credentials in the following nodes for tool access and usability: **"Telegram Trigger"**; **"AI Agent - Create Image From Prompt"**; **"Telegram Response"** or **"Save Image To Disk"** (based on your wish).
- Activate the **"Telegram Response"** OR **"Save Image To Disk"** node to specify where you want to save your image later.
- Open the chat interface (via N8N or Telegram).
- Type your image prompt or detailed descriptions and send.
- Wait for the process to run and finish in a few seconds.
- Check the result in your desired saving location.

## Requirements
- Google Gemini account with image generation access.
- Telegram bot access and chat setup (optional).
- Connection to local storage (optional).

## How To Customize
- We’re setting the default image size to 1080 x 1920 pixels and the default image model to "flux". You can customize both of these values in the **“Fields – Set Values”** node. Supported image model options include: "flux", "kontext", "turbo", and "gptimage".
- In the **“AI Agent – Create Image From Prompt”** node, you can also change the AI chat model. By default, it uses Google Gemini, but you can easily replace it with OpenAI ChatGPT, Microsoft AI Copilot, or any other compatible provider.

## Need Help?
Join our community on different platforms for support, inspiration and tips from others.

Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle

## 📊 Basic Information

- **Workflow ID:** 5626
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 77061
- **Downloads:** 7706
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5626)

## 👤 Author

- **Name:** Agent Circle
- **Username:** @agentcircle

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **code** (×3)
- **httpRequest** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **readWriteFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
