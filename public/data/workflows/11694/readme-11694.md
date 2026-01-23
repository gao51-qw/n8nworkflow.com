# Create & publish Instagram carousels with AI research, Nano Banana Pro & Slack

> This workflow allows you to complete the entire process of creating and publishing detailed Instagram Carousels—from research to posting—without ever leaving Slack. It leverages **Nano Banana Pro**, a state-of-the-art image generation model capable of rendering perfect text, to create professional "consultant-style" slides that AI previously struggled with.

## How it works
1.  **Start in Slack**: You trigger the workflow by entering a topic ensuring the entire process starts in Slack.
2.  **Research (AI Agent)**: An AI agent searches the web for deep insights on the topic.
3.  **Drafting (AI Agent)**: Structures research into a carousel format designed for engagement.
4.  **Review in Slack**: The draft is sent to Slack as a formatted message. You approve it with a single click.
5.  **Image Generation**: Upon approval, **Nano Banana Pro** generates professional infographic-style images with legible, high-density text.
6.  **Final Review in Slack**: The created images and caption are sent back to Slack.
7.  **Publish from Slack**: One final approval in Slack automatically publishes the Carousel to Instagram.

## Setup steps
1.  **Configure Credentials**:
    *   **OpenAI API**: Required for the Research and Drafting agents (GPT-4o/GPT-5 recommended).
    *   **Slack API**: Required for notifications and approval buttons.
    *   **Kie.ai (Nano Banana Pro)**: Required for high-quality text-in-image generation.
    *   **Facebook Graph API**: Required for publishing to Instagram.
2.  **Set IDs**:
    *   Open the "Slack Approval" nodes and set your `Channel ID`.
    *   Open the "Instagram" nodes and set your `Instagram Business Account ID`.
3.  **Customize Prompts (Optional)**: Adjust the system prompts in the AI nodes to match your brand's tone of voice.

## Requirements
*   **n8n version**: 1.0+ (AI nodes required)
*   **Kie.ai Account**: For using the Nano Banana Pro model (excellent at rendering text).
*   **Slack Workspace**: For the Human-in-the-loop approval process.


## 📊 Basic Information

- **Workflow ID:** 11694
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 358
- **Downloads:** 35
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11694)

## 👤 Author

- **Name:** Shun Nakayama
- **Username:** @nakayama

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **slack** (×3)
- **if** 
- **itemLists** 
- **facebookGraphApi** (×2)
- **wait** (×2)
- **httpRequest** (×2)
- **code** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
