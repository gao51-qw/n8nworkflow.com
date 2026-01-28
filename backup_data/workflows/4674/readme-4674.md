# Generate AI-powered LinkedIn posts with Ollama, image creation, and Gmail delivery

> This automation flow is designed to generate professional, research-backed LinkedIn posts based on a user-submitted topic and audience, enhance it with a visually aligned image prompt, and then automatically send the post and image via Gmail and/or publish it to LinkedIn.
⚙️ How It Works (Step-by-Step):
1. 📝 Form Submission (Input Trigger)

    A user fills out a form with:

        Email

        Topic of the Post

        Target Audience

    This form submission acts as the entry point of the workflow (Form Trigger node).

2. 🤖 LinkedIn Post Generation Agent

    An AI agent is triggered that:

        Uses Tavily API to fetch real-time web search content related to the topic.

        Processes the topic and audience data using an Ollama Chat Model.

        Generates a well-structured LinkedIn post that includes:

            Hook

            Educational insight

            Professional tone

            Source citations

            Hashtags and call to action

3. 🎨 Image Prompt Agent

    The generated post is passed to a second agent that:

        Extracts the core message.

        Converts it into a graphic prompt using a different Ollama LLM.

        The prompt is written to be used by an image-generation model like DALL·E or Gemma/GPT-based image tools.

4. 🖼️ Image Generation

    The image prompt is passed to a local image generation endpoint (localhost:8098) or OpenAI (api.openai.com) to generate a visual asset.

    The base64 image is converted into a file.

5. 📩 Email Dispatch

    The post text and the generated image are then sent to the user’s email address via the Gmail node.

    The email includes:

        The full LinkedIn post

        The auto-generated image as an attachment

6. 🔗 LinkedIn Publishing (Optional)

    If OAuth is enabled, the post can also be published directly to LinkedIn using the LinkedIn node.

🛠️ Tools Used:

    n8n: Orchestration platform

    OpenRouter & Ollama: Local/hosted LLMs for post and prompt generation

    Tavily API: Real-time web search

    OpenAI or Local Endpoint: Image generation from text

    SMTP (Gmail): For sending emails

    LinkedIn API: For automated posting

📦 Key Features:

    End-to-end automation from form to email/post

    Uses real-time research for accuracy

    Creative visual generation with professional branding intent

    Works locally or with cloud APIs

    Modular: Can switch tools or endpoints (OpenAI ↔ Localhost, Ollama ↔ OpenRouter)

🚀 Ideal Use Cases:

    Marketing teams needing fast content turnaround

    Personal branding assistants

    Founders, freelancers, and executives sharing thought leadership

    University or organization-wide communication systems

## 📊 Basic Information

- **Workflow ID:** 4674
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 5530
- **Downloads:** 553
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4674)

## 👤 Author

- **Name:** Aashit Sharma
- **Username:** @aashitsharma

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×2)
- **formTrigger** 
- **stickyNote** (×8)
- **manualTrigger** 
- **convertToFile** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** (×2)
- **emailSend** 
- **linkedIn** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
