# AI-powered X (Twitter) content generator and scheduler with LangChain and Blotato

> This n8n template demonstrates how to use AI to fully automate the generation and scheduling of X (formerly Twitter) content based on a specific, predefined persona.

Use cases are many: It's perfect for social media marketers looking to streamline content creation, individual experts building a consistent brand voice, or businesses aiming to drive traffic to specific services with a steady stream of relevant content.

#### Good to know

*   The AI model used in this workflow (via OpenRouter) requires an API key and will incur costs based on usage (typically a few cents per generation).
*   The Blotato node used for posting is a third-party community node and requires a separate Blotato account.

#### How it works

This workflow is divided into two main processes: **Content Generation** and **Content Posting**.

1.  **Content Generation Process:**
    *   A Schedule Trigger kicks off the workflow every 4 hours.
    *   An AI Agent (LangChain) generates a post based on a detailed prompt defining a persona, purpose, and rules.
    *   A Code node refines the AI's output, ensuring the text ends naturally.
    *   The generated post is then saved to a Google Sheet with a "Not Posted" status, creating a content queue.

2.  **Content Posting Process:**
    *   The workflow retrieves one "Not Posted" item from the Google Sheet.
    *   An IF node checks the post's category to determine if an image is required.
    *   If an image is needed, it searches for and retrieves a matching image file from a specified Google Drive folder.
    *   The Blotato node posts the text (and image, if applicable) to the designated X (Twitter) account.
    *   A confirmation email is sent via Gmail to notify stakeholders of the successful post.
    *   Finally, the Google Sheet status is updated to "Completed" to prevent duplicate posts.

#### How to use

*   You can test the workflow anytime using the manual trigger. For production, adjust the posting frequency in the "Trigger: Every 4 Hours" node.
*   The quality of the generated content is determined by the prompt. Edit the system message within the "AI: Generate X Post Content" node to customize the persona, purpose, tone of voice, etc.
*   To generate posts with images, you must upload image files to the specified Google Drive folder. The filename must exactly match the post's category name (e.g., `Evidence-based_Graph.png`).

#### Requirements

*   An OpenRouter account (or another AI service account) for the LLM.
*   A Blotato account for social media posting.
*   A Google account for content management, image storage, and notifications (Sheets, Drive, Gmail).

#### Customising this workflow

*   Expand the workflow to post to other social media platforms supported by Blotato, such as Facebook or LinkedIn.
*   Instead of posting immediately, add a human-in-the-loop approval step by sending the AI-generated draft to Slack or email for review before publishing.
*   Replace the Schedule Trigger with a Webhook Trigger to generate and post relevant content based on external events, such as "when a new blog post is published."

## 📊 Basic Information

- **Workflow ID:** 9562
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 174
- **Downloads:** 17
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9562)

## 👤 Author

- **Name:** Yusuke Yamamoto
- **Username:** @yusuke-yamamoto

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×3)
- **@blotato/n8n-nodes-blotato.blotato** (×3)
- **gmail** 
- **if** 
- **googleDrive** (×2)
- **code** 
- **scheduleTrigger** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
