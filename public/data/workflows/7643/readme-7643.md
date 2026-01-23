# Auto-categorize Gmail emails with AI and send prioritized Slack alerts

> ### Who is this for?
- Teams using Gmail and Slack who want to streamline email handling.
- Customer support, sales, and operations teams that want emails sorted by topic and priority automatically.
- Anyone tired of manually triaging customer emails.

### What does it solve?
- Stops important messages from slipping through the cracks.
- Automatically identifies the nature and urgency of incoming emails.
- Routes emails to the right Slack channel with a clear, AI-generated summary.

### How it works
- The workflow watches for unread emails in your Gmail inbox.
- It fetches the full email content and passes it to OpenAI for classification.
- The AI returns structured JSON with the email’s category, priority, summary, and sender.
- Based on the AI result, it assigns a label and Slack channel.
- A message is sent to the right Slack channel with the details.

### How to setup?
1. **Connect credentials:**
   - Gmail (OAuth2)
   - Slack (OAuth2)
   - OpenAI (API Key)

2. **Adjust email polling:**
   - Open the Gmail Trigger node and set how frequently it should check for new emails.

3. **Verify routing settings:**
   - In the “Routing Map” node, update Slack channel IDs for each category if needed.

4. **Customize AI behavior (optional):**
   - Tweak the AI Agent prompt to better match your internal categorization rules.

### How to customize this workflow to your needs
- **Add more categories:** Update the AI prompt and the schema in the “Structured Output Parser.”
- **Change Slack formatting:** Modify the message text in the Slack node to include links, emojis, or mentions.
- **Use different routing logic:** Expand the Routing Map to assign based on keywords, domains, or even sentiment.
- **Add escalation workflows:** Trigger follow-up actions for high-priority or complaint emails.


## 📊 Basic Information

- **Workflow ID:** 7643
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 412
- **Downloads:** 41
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7643)

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
- **set** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
