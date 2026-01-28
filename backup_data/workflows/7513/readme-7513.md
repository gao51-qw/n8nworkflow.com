# Gmail auto-reply generator with ChatGPT

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Gmail Auto-Reply with AI

Automatically draft smart email replies using ChatGPT. Reclaim your time typing the same responses again and again.

---

### Who is this for?

If you're overwhelmed with emails and constantly repeating yourself in replies, this workflow is for you.

Whether you're a freelancer, business owner, or team lead, it saves you time by handling email triage and drafting replies for you.

---

### What does it solve?

This workflow reads your unread Gmail messages and uses AI to:

- Decide whether the email needs a response
- Automatically draft a short, polite reply when appropriate
- Skip spam, newsletters, or irrelevant emails
- Save the AI-generated reply as a Gmail draft (you can edit it before sending)

It takes email fatigue off your plate and keeps your inbox moving.

---

### How it works

1. **Trigger on New Email**: Watches your Gmail inbox for unread messages.
2. **AI Agent Review**: Analyzes the content to decide if a reply is needed.
3. **OpenAI ChatGPT**: Drafts a short, polite reply (under 120 words).
4. **Create Gmail Draft**: Saves the response as a draft for you to review.
5. **Label It**: Applies a custom label like `Action` so you can easily find AI-handled emails.

---

### How to set up?

1. **Connect credentials**:
   - Gmail (OAuth2)
   - OpenAI (API key)

2. **Create the Gmail label**:
   - In your Gmail, create a label named `Action` (case-sensitive).

---

### How to customize this workflow to your needs

- **Change the AI prompt**: Add company tone, extra context, or different reply rules.
- **Label more intelligently**: Add conditions or labels for “Newsletter,” “Meeting,” etc.
- **Adjust frequency**: Change how often the Gmail Trigger polls your inbox.
- **Add manual review**: Route drafts to a team member before sending.




## 📊 Basic Information

- **Workflow ID:** 7513
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1305
- **Downloads:** 130
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7513)

## 👤 Author

- **Name:** Matt Chong | n8n Creator
- **Username:** @mattxchong

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **gmail** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
