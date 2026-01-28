# Ai-driven Instagram reels creation and publishing with GPT, Creatomate and Slack

> Automate your Instagram growth strategy by generating and posting viral Reels using AI and Creatomate. This workflow plans content topics based on trends, generates video assets, and handles the approval and posting process—all without manual video editing.

## How it works

1. **Schedule Trigger**: Runs every day at 9:00 AM.
2. **Topic Planning**: Checks past topics from Google Sheets to avoid duplicates, then uses OpenAI (GPT-4o) to generate a new quiz-style content plan.
3. **Video Generation**: Uses Creatomate to generate a video based on a template, dynamically inserting the AI-generated text and images.
4. **Approval Loop**: Sends the generated video to Slack for human review.
5. **Posting**: Once approved in Slack, the workflow automatically uploads the Reel to Instagram.
6. **Logging**: Saves the new topic to Google Sheets and notifies Slack upon successful publication.

## Setup steps

1. **Configure Credentials**:
   - **OpenAI**: For generating content plans.
   - **Creatomate**: For video rendering.
   - **Google Sheets**: For tracking past topics.
   - **Slack**: For approval notifications.
   - **Facebook Graph API**: For Instagram publishing.

2. **Google Sheets Setup**:
   - Create a Google Sheet with columns: `Question`, `Answer`, `Title`, `Date`.
   - Update the **Get Past Topics** and **Save New Topic** nodes with your Sheet ID.

3. **Creatomate Setup**:
   - Create a template in Creatomate or use an existing one.
   - Update the **Generate Video** node with your `template_id` in the JSON body.

4. **Slack Setup**:
   - Create a channel for approvals.
   - Update the **Slack Approval Request** and **Slack Notification** nodes with your Channel ID.

5. **Activate**:
   - Turn on the workflow to start automating your content pipeline!


## 📊 Basic Information

- **Workflow ID:** 11631
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 266
- **Downloads:** 26
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11631)

## 👤 Author

- **Name:** Shun Nakayama
- **Username:** @nakayama

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **slack** (×2)
- **facebookGraphApi** (×2)
- **wait** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **httpRequest** 
- **code** 
- **if** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
