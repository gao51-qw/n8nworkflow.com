# Auto-reply & create Linear tickets from Gmail with GPT-5, gotoHuman & human review

> ![wflowscreenshot.jpg](fileId:3046)
This workflow automatically classifies every new email from your linked mailbox, drafts a personalized reply, and creates Linear tickets for bugs or feature requests. It uses a human-in-the-loop with gotoHuman and continuously improves itself by learning from approved examples.

## How it works
1. The workflow triggers on every new email from your linked mailbox.
2. Self-learning Email Classifier: an AI model categorizes the email into defined categories (e.g., Bug Report, Feature Request, Sales Opportunity, etc.). It fetches previously approved classification examples from gotoHuman to refine decisions.
3. Self-learning Email Writer: the AI drafts a reply to the email. It learns over time by using previously approved replies from gotoHuman, with per-classification context to tailor tone and style (e.g., different style for sales vs. bug reports).
4. Human Review in gotoHuman: review the classification and the drafted reply. Drafts can be edited or retried. Approved values are used to train the self-learning agents.
5. Send approved Reply: the approved response is sent as a reply to the email thread.
6. Create ticket: if the classification is Bug or Feature Request, a ticket is created by another AI agent in Linear.

###### Human Review in gotoHuman:
![gthreviewscreen.jpg](fileId:3047)

## How to set up

1. **Most importantly, install the gotoHuman node before importing this template!** (Just add the node to a blank canvas before importing)
2. Set up credentials for gotoHuman, OpenAI, your email provider (e.g. Gmail), and Linear.
3. In gotoHuman, select and create the pre-built review template "Support email agent" or import the ID: `6fzuCJlFYJtlu9mGYcVT`.
4. Select this template in the gotoHuman node.
5. In the "gotoHuman: Fetch approved examples" http nodes you need to add your `formId`. It is the ID of the review template that you just created/imported in gotoHuman.

## Requirements

- gotoHuman (human supervision, memory for self-learning)
- OpenAI (classification, drafting)
- Gmail or your preferred email provider (for email trigger+replies)
- Linear (ticketing)

## How to customize

- Expand or refine the categories used by the classifier. Update the prompt to reflect your own taxonomy.
- Filter fetched training data from gotoHuman by reviewer so the writer adapts to their personalized tone and preferences.
- Add more context to the AI email writer (calendar events, FAQs, product docs) to improve reply quality.

## 📊 Basic Information

- **Workflow ID:** 10065
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 343
- **Downloads:** 34
- **Created:** 2025/10/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10065)

## 👤 Author

- **Name:** gotoHuman
- **Username:** @gotohuman

## 🏷️ Categories

- Ticket Management
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **switch** (×2)
- **gmail** 
- **stickyNote** (×11)
- **manualTrigger** 
- **noOp** (×2)
- **linear** 
- **filter** 
- **splitInBatches** 
- **code** (×2)
- **httpRequest** (×2)
- **@gotohuman/n8n-nodes-gotohuman.gotoHuman** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
