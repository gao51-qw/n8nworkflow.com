# Generate custom cake images with OpenAI GPT & Replicate Flux Schnell

> ## Who’s it for
This template is designed for bakeries, event planners, and e-commerce platforms that want to automatically generate **custom cake designs**. It’s also ideal for marketers or digital creators who need personalized celebratory visuals for social media or email campaigns.

## How it works
This workflow converts simple user input (e.g., “Sarah’s Birthday”) into a creative cake design:
1. **Webhook:** Captures user input from the Bolt frontend form.
2. **OpenAI GPT:** Generates a detailed and creative cake design prompt.
3. **Replicate Flux Schnell:** Produces a unique cake image using the AI-generated prompt.
4. **HTTP Response:** Sends the final cake image back to the frontend.

## How to set up
1. Import this template into n8n.
2. Add your **OpenAI API Key** under n8n **Credentials** for the OpenAI Chat Model node.
3. Add your **Replicate API Token** as an **HTTP Header Auth credential** (do not hardcode it).
4. Update the **Webhook node** URL in the Bolt frontend form to send a `POST` request to n8n.
5. (Optional) Customize the OpenAI prompt in the Prompt Generator node to adjust cake style, colors, or decorations.

## Requirements
- n8n account (cloud or self-hosted).
- **OpenAI API Key** for prompt generation.
- **Replicate API Token** for AI image generation.
- A Bolt frontend or any form that can call the webhook endpoint.

## How to customize the workflow
- Replace "cake" with any product type (e.g., mugs, greeting cards, or T-shirts).
- Add a database node (Google Sheets or Supabase) to log user requests and images.
- Implement input moderation by adding an OpenAI moderation node before the prompt generation.
![Screenshot 20250723 at 09.53.44.png](fileId:1833)  [Frontend](https://calm-cendol-1a3ff2.netlify.app)

## 📊 Basic Information

- **Workflow ID:** 6161
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 567
- **Downloads:** 56
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6161)

## 👤 Author

- **Name:** Nabin Bhandari
- **Username:** @knabinbhandari

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **webhook** 
- **respondToWebhook** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
