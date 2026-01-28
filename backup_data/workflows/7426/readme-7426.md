# Auto-respond to Slack messages as yourself using GPT and Google Docs RAG

> 💬 GPT-5 Slack Impersonation Agent with RAG – Auto-Respond to Messages Using Live Project Docs

Let AI handle your Slack conversations — and always have the right answer.
This n8n workflow transforms GPT-5 into your on-brand Slack assistant, capable of responding as you in real-time while referencing a Google Docs RAG (Retrieval-Augmented Generation) document for accurate project updates.

Watch step-by-step build like these on:
https://www.youtube.com/@automatewithmarc

Here’s how it works:

Listens for Slack mentions or messages — triggered instantly when someone talks to you.

Understands the conversation context using GPT-5 and conversation memory.

Retrieves the latest project updates from your linked Google Doc via RAG.

Responds in Slack as you — maintaining your tone, style, and workplace personality.

Key Features & Benefits:

🧠 RAG-powered accuracy – Always pulls the latest info from your project docs.

🤖 GPT-5 natural conversation – Replies feel human, friendly, and context-aware.

⚡ Instant responses – No more message backlog or missed updates.

🎯 Impersonation mode – Sends replies under your Slack name for seamless collaboration.

🔄 Continuous conversation memory – Keeps track of what was said before.

Ideal Use Cases:

Acting as a stand-in during busy periods so no message goes unanswered.

Project managers who want instant, document-backed answers.

Customer support or client-facing roles needing quick, accurate replies.

Included Integrations:

Slack Trigger & Send Message – Listen and reply in real-time.

GPT-5 Agent – Craft context-aware, on-brand responses.

Google Docs Tool – Pull live data from your RAG document.

Conversation Memory – Maintain context across messages.

💡 Pro Tip: Customize the system prompt to mimic your exact tone and integrate with multiple docs for broader knowledge coverage.

## 📊 Basic Information

- **Workflow ID:** 7426
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 514
- **Downloads:** 51
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7426)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Internal Wiki
- Multimodal AI

## 🔗 Nodes Used

- **slackTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **slack** 
- **googleDocsTool** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
