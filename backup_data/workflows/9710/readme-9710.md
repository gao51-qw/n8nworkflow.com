# Podcast to X (Twitter) pipeline with OpenAI Whisper, GPT-4o & Slack approval

> Turn your favorite podcast episodes into engaging social media content automatically. This workflow fetches new episodes from an RSS feed, transcribes the audio using OpenAI Whisper, generates a concise summary using GPT-4o, and drafts a tweet. It then sends the draft to Slack for your review before posting it to X (Twitter).

## Who is this for
Content creators, social media managers, and podcast enthusiasts who want to share insights without manually listening to and typing out every episode.

## Key Features
- **Large File Support:** Includes a custom logic to download audio in chunks, ensuring stability even with long episodes (preventing timeouts).
- **Human-in-the-Loop:** Nothing gets posted without your approval. You can review the AI-generated draft in Slack before it goes live.
- **High-Quality AI:** Uses OpenAI's Whisper for accurate transcription and GPT-4o for intelligent summarization.

## How it works
1. **Monitor:** Checks the Podcast RSS feed daily for new episodes.
2. **Process:** Downloads the audio (handling large files via chunking) and transcribes it.
3. **Draft:** AI summarizes the transcript into bullet points and formats it for X (Twitter).
4. **Approve:** Sends the draft to a Slack channel.
5. **Publish:** Once approved by you, it posts the tweet to your X account.

## Requirements
- OpenAI API Key
- Slack Account & App (Bot Token)
- X (Twitter) Developer Account (OAuth2)

## Setup instructions
1. **RSS Feed:** The template defaults to "TED Talks Daily" for demonstration. Open the `[Step 1] RSS` node and replace the URL with your target podcast.
2. **Connect Credentials:** Set up your credentials for OpenAI, Slack, and X (Twitter) in the respective nodes.
3. **Slack Channel:** In the `[Step 12] Slack` node, select the Channel ID where you want to receive the approval request.

## 📊 Basic Information

- **Workflow ID:** 9710
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 134
- **Downloads:** 13
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9710)

## 👤 Author

- **Name:** Shun Nakayama
- **Username:** @nakayama

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **slack** 
- **twitter** 
- **code** (×3)
- **set** (×2)
- **httpRequest** (×2)
- **limit** 
- **rssFeedRead** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
