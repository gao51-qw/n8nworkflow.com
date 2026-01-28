# Generate professional changelogs from Git commits with GPT-4 and GitHub

> ## AI-Powered Git Changelog Generator for Automated Release Notes

This workflow transforms your software release process by automatically generating clean, professional changelogs from your Git commit history. It listens for new version tags in your GitHub repository, uses AI to summarize the changes, and publishes a polished release note, saving you hours of manual work.

## Disclaimer
This template is designed for self-hosted n8n instances and requires API credentials for GitHub and an AI provider (e.g., OpenAI, Google Gemini).

## 🚀 Key Features
*   **Fully Automated Process:** Triggers automatically on a `git push --tags` event. Set it up once and forget about it.
*   **AI-Powered Summarization:** Leverages a Large Language Model (LLM) to intelligently read, categorize, and summarize your commit messages into a human-friendly format.
*   **Seamless GitHub Integration:** Fetches commit data and creates official GitHub Releases without leaving the n8n environment.
*   **Smart Categorization:** Automatically groups release notes into sections like "Features," "Fixes," and "Other Changes" for clarity.
*   **Highly Customizable:** Easily adapt the AI prompt, changelog format, and release template to match your project's style.
*   **Saves Developer Time:** Eliminates the tedious, manual task of writing release notes, freeing up developers to focus on coding.

## ⚙️ How It Works
The workflow is a linear process triggered by a webhook from GitHub.

## 1. GitHub Webhook Trigger
*   A **Webhook node** is configured to listen for `push` events from your specified GitHub repository.
*   It is filtered to only run when a new tag (e.g., `v1.2.0`) is pushed, which is the standard practice for signaling a new release.

## 2. Fetch Commit History
*   Once triggered, a **GitHub node** uses the webhook payload to identify the repository and the new tag.
*   It makes an API call to GitHub to compare the new tag with the most recent previous tag, fetching all the commit messages in between.

## 3. AI Summarization
*   The list of raw commit messages is passed to an **AI node** (e.g., OpenAI or Google Gemini).
*   A pre-defined prompt instructs the AI to process the commits. The prompt asks the model to summarize the changes and group them into logical categories.
*   The AI returns a single, well-formatted markdown text block representing the complete changelog.

## 4. GitHub Release Creation
*   The final **GitHub node** takes the AI-generated markdown.
*   It creates a new **GitHub Release**, using the tag from the webhook as the release version and the AI-generated text as the release body/description.

## 🛠️ Setup Steps & Credentials
To get this workflow running, you will need to configure the following credentials and settings:

1.  **GitHub:**
    *   You need a **GitHub Personal Access Token** with `repo` scope to allow n8n to access your repository.
    *   Create a `GitHub OAuth2 Api` or `GitHub Api` credential in n8n.
    *   Assign this credential to the `Get Commits` and `Create GitHub Release` nodes.
    *   In the **Webhook node**, copy the Test URL and add it as a new webhook in your GitHub repository's settings (`Settings &gt; Webhooks`). Set the content type to `application/json` and select "Just the push event" or "Send me everything," then filter for tag pushes in the workflow itself.
2.  **AI Provider (OpenAI / Gemini):**
    *   Obtain an API Key from your chosen AI provider (e.g., [platform.openai.com](https://platform.openai.com) or [aistudio.google.com](https://aistudio.google.com/)).
    *   Create the corresponding credential in n8n (e.g., `OpenAI API` or `Google Gemini(PaLM) Api`).
    *   Assign this credential to the `Generate Changelog with AI` node.

## 💡 Customization & Learning
This workflow is a powerful base that you can easily extend:

*   **Refine the AI Prompt:** Modify the prompt in the `Generate Changelog with AI` node to change the tone, language, or structure of your release notes. You could ask it to generate a "What's New" section in a different style, for example.
*   **Add Notifications:** Extend the workflow by adding a `Discord` or `Slack` node after the final step to notify your team or community channel that a new version has been released.
*   **Support Different Git Providers:** Swap the `GitHub` nodes for `GitLab` or other provider nodes to adapt the workflow to a different platform.
*   **Experiment with Models:** Try different AI models (e.g., GPT-4 vs. GPT-3.5-Turbo, or different Gemini versions) to see how it affects the quality and cost of your generated changelogs.

## 📊 Basic Information

- **Workflow ID:** 8137
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 96
- **Downloads:** 9
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8137)

## 👤 Author

- **Name:** Issam AGGOUR
- **Username:** @devgor

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **githubTrigger** 
- **github** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
