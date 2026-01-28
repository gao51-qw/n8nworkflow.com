# Generate AI images with Telegram bot & auto-publish to social media using Nano Banana PRO

> This n8n workflow allows you to generate AI images using **Nano Banana PRO** through a **Telegram bot** interface, with optional automatic publishing to social media platforms.

Users interact with the workflow entirely via Telegram commands and forms. The workflow supports multiple image generation modes and can automatically enhance prompts, compress images, generate captions, and publish content to Facebook, Instagram, and X.

This template is especially useful for product visuals, lifestyle scenes, and content creation workflows where manual image generation and posting would otherwise be repetitive.

How it works
------------

1.  A user sends a command to the Telegram bot (text-to-image, image-to-image, or multi-image fusion).
2.  The workflow collects the required inputs (text prompt, uploaded images, aspect ratio, quality).
3.  If enabled, an AI Agent enhances the user prompt before image generation.
4.  The workflow sends the request to [Kie.ai](https://kie.ai), which runs the Nano Banana PRO image model.
5.  The workflow waits for the image generation task to complete and retrieves the result.
6.  The generated image is downloaded and sent back to the user via Telegram.
7.  Optionally, the image is compressed using [TinyPNG](https://tinypng.com/developers).
8.  If social sharing is enabled:
    *   An AI Agent generates platform-optimized captions.
    *   The image and captions are published automatically to selected platforms (Facebook, Instagram, X) via [Blotato](https://blotato.com/?ref=nocodehack).

How to use
----------

1.  Create a Telegram bot using **@BotFather** and add the bot token to the Telegram Trigger credentials.
2.  Configure the required API credentials (see Requirements).
3.  Activate the workflow in n8n.
4.  Send a command to your Telegram bot:
    *   `/text_to_image`
    *   `/image_to_image`
    *   `/multi_image`
5.  Follow the Telegram form prompts to generate and optionally publish images.

Requirements
------------

The following services are required for the workflow to function:

*   **Telegram Bot** – user interaction
*   **Kie.ai API** – Nano Banana PRO image generation ([Get access](https://kie.ai))
*   **Cloudinary** – image hosting for uploaded files ([Create an account](https://cloudinary.com))
*   **OpenAI API** – prompt enhancement and caption generation

Optional services:

*   **TinyPNG** – image compression ([Get an API key](https://tinypng.com/developers))
*   **Blotato** – social media publishing ([Connect accounts](https://blotato.com/?ref=nocodehack))

Customising the workflow
------------------------

*   You can disable image compression by removing the TinyPNG nodes.
*   Social media auto-publishing can be disabled by removing the Blotato nodes.
*   Prompt enhancement behavior can be adjusted in the AI Agent system prompt.
*   Additional platforms or posting logic can be added after the caption generation step.
*   The workflow can be adapted to other AI image models by replacing the Kie.ai API calls.

Notes
-----

*   This is a self-hosted n8n workflow.
*   All API keys and credentials must be provided by the user.
*   The workflow is modular and can be partially enabled depending on your use case.

## 📊 Basic Information

- **Workflow ID:** 11765
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 470
- **Downloads:** 47
- **Created:** 2025/12/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11765)

## 👤 Author

- **Name:** ing.Seif
- **Username:** @nocodehack

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **httpRequest** (×5)
- **telegramTrigger** 
- **switch** (×2)
- **telegram** (×10)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **if** (×3)
- **wait** 
- **n8n-nodes-cloudinary.cloudinary** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@blotato/n8n-nodes-blotato.blotato** (×3)
- **stickyNote** (×10)
- **code** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
