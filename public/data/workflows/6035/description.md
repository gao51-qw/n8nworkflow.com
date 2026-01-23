*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

This template is your personal launchpad into the world of AI-powered automation. It provides a fully functional, interactive AI chatbot that you can set up in minutes, designed specifically for those new to AI Agents.

**What is an AI Agent?**
Think of it as a smart assistant that doesn't just talk—it **acts**. You give it a set of "tools" (like other n8n tool nodes), and it intelligently decides which tool to use to answer your questions or complete your tasks.

This starter kit comes with a pre-built "toolbox" of superpowers, allowing your agent to:
*   **Get the Weather:** Ask for the forecast anywhere in the world.
*   **Get the News:** Fetch the latest headlines from n8n, CNN, and others.

The workflow is designed to be a hands-on learning experience, with detailed sticky notes explaining every component, from the chat interface to the agent's "brain" and "memory."

## Set up steps

**Setup time: ~2-3 minutes**

This workflow is designed to be incredibly easy to start. You only need one free API key to get it working.

1.  **Add Your AI Key:**
    *   The workflow uses Google's Gemini model by default. You will need a **free Gemini API key**.
    *   Find the **`Gemini`** node on the canvas. The sticky note right below it (`How to Get Google Gemini Credentials`) provides a link and simple instructions to get your key.
    *   In the `Gemini` node, click the **Credential** dropdown and select `+ Create New Credential` to add your key.

2.  **Activate the Workflow:**
    *   At the top-right of the screen, click the **"Inactive"** toggle switch. It will turn green and say **"Active"**. Your agent is now live!

3.  **Start Chatting:**
    *   Open the **`Example Chat Window`** node (it has a 💬 icon).
    *   In its parameter panel, you will see a **Chat URL**. Click the link to copy it.
    *   Paste the URL into a new browser tab and start asking your agent questions!

**Optional:** The template also includes disabled OpenAI chat model node and tools for Google Calendar, and Gmail. You can enable and configure these later to change the underlying AI model or give your agent even more superpowers!