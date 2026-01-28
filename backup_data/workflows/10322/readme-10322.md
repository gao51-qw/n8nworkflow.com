# Twitter content automation with Gemini AI for tweets, images, and engagement

> ### ## | N8N Workflow | AI-Powered Twitter Automation with Content Generation and Engagement 🚀

*This n8n template automates Twitter (X) activity — from generating tweet content with AI to engaging with posts and even sending DMs — all powered by Google Gemini or OpenRouter AI.*

*It’s designed for creators, marketers, brands, and agencies who want to automate social media presence with authentic, on-brand AI content and engagement.*

## How It Works

- The workflow begins with a form trigger, where users input their topic, tone, and action type (Tweet, Engage, or DM).
- Those inputs are passed into Workflow Configuration, which sets key parameters like max tweet length and model URLs.
Depending on your chosen action:
- Post Tweet: AI generates a tweet under 280 characters and can attach an image.
- Engage with Posts: AI can like, retweet, or reply to niche-relevant content.
- Send Direct Message: AI drafts a personalized DM for outreach or networking.
- If your workflow includes visuals, the AI Agent - Create Image From Prompt node builds a detailed image prompt (based on your topic and instructions) and sends it to Google Gemini or other image APIs.
- The HTTP Request - Create Image node generates a custom image via an external model (default: Pollinations.ai).
- Finally, all tweet text and image data merge together in Merge Tweet Text and Image, before being posted directly via the Create Tweet node.
## How To Use

- Download and Import the JSON workflow into your n8n interface.
- Set up the following credentials:
- OpenRouter API for text generation.
- Google Gemini (PaLM) for chat and image prompt creation.
- Twitter OAuth2 API for posting and engagement actions.
- Configure your form input fields (Topic, Tone, Action, Instructions).

Enable or disable the nodes you want:

- Create Tweet → To post automatically.
- Twitter Engagement Tool → For likes/retweets/replies.
- Twitter DM Tool → For automated DMs.
- Trigger the Twitter Content Form via n8n’s web interface.
- Enter your content preferences and submit.
- The workflow generates your tweet text, optionally creates a matching image, and posts or saves it automatically.

## Requirements

A Twitter Developer Account (with OAuth2 credentials).
A Google Gemini or OpenRouter account with text and image model access.
(Optional) Connection to Pollinations or another AI image generation API.

## How To Customize

- Update “Fields – Set Values” node to change:
- Default image size (1080 × 1920 px).
- Model name (e.g., “flux”, “turbo”, “kontext”).
- Modify Workflow Configuration to tweak AI parameters like:
- imageGenerationChance (default: 0.3).
- maxTweetLength (default: 280).
- Replace Google Gemini Chat Model with any supported model such as OpenAI GPT-4 or Mistral.
- Adjust AI Agent - Create Image From Prompt system message for your preferred image style or guidelines.
- Toggle which Twitter actions are active — Post, Engage, or DM — to tailor automation to your goals.

## 📊 Basic Information

- **Workflow ID:** 10322
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 553
- **Downloads:** 55
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10322)

## 👤 Author

- **Name:** Kamran habib
- **Username:** @virtualdepth

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×2)
- **twitterTool** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **code** (×4)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **twitter** 
- **merge** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
