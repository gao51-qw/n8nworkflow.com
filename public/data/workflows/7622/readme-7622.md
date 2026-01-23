# Send AI-summarized unread email alerts to Slack using GPT-4o and Gmail

> ### Who is this for?
If you’re overwhelmed with incoming emails but only want to be notified about the essentials, this workflow is for you. Perfect for busy professionals who want a short AI summary of new emails delivered directly to Slack.

### What does it solve?
Reading every email wastes time. This workflow filters out the noise by:
- Automatically summarizing each unread Gmail email using AI
- Sending you just the sender and a short summary to Slack
- Helping you stay focused without missing key information

### How it works
- Every minute, the workflow checks Gmail for unread emails
- When it finds one, it:
  - Extracts the email content
  - Sends it to OpenAI’s GPT model for a 250-character summary
  - Delivers the message directly to Slack

### How to setup?
1. **Connect your accounts:**
   - Gmail (OAuth2)
   - OpenAI (API key or connected account)
   - Slack (OAuth2)
2. **Edit the Slack node:**
   - Choose the Slack user/channel to send alerts to
3. **Optional:** Adjust the AI prompt in the “AI Agent” node to modify the summary style
4. **Optional:** Change polling frequency in the Gmail Trigger node

### How to customize this workflow to your needs
- Edit the AI prompt to:
  - Highlight urgency
  - Include specific keywords
  - Extend or reduce summary length
- Modify the Slack message format (add emojis, tags, or links)


## 📊 Basic Information

- **Workflow ID:** 7622
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 312
- **Downloads:** 31
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7622)

## 👤 Author

- **Name:** Matt Chong | n8n Creator
- **Username:** @mattxchong

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
