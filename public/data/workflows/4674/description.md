This automation flow is designed to generate professional, research-backed LinkedIn posts based on a user-submitted topic and audience, enhance it with a visually aligned image prompt, and then automatically send the post and image via Gmail and/or publish it to LinkedIn.
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