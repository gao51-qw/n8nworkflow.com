# Automate email responses with GPT-4o-mini and human review in Gmail

> This n8n template demonstrates a “Human-in-the-Loop” workflow where AI automatically drafts replies to inbound emails, which are then reviewed and approved by a human before being sent. This powerful pattern ensures both the efficiency of AI and the quality assurance of human oversight.

Use cases are many: Streamline sales inquiry responses, manage first-level customer support, handle initial recruitment communications, or any business process that requires personalized yet consistent email replies.

# Good to know

- At the time of writing, the cost per execution depends on your OpenAI API usage. This workflow uses a cost-effective model like gpt-4o-mini. See [OpenAI Pricing](https://openai.com/pricing) for updated info.
- The AI’s knowledge base and persona are fully customizable within the **Basic LLM Chain** node’s prompt.

# How it works

1.  The **Gmail Trigger** node starts the workflow whenever a new email arrives in the specified inbox.
2.  The **Classify Potential Leads** node uses AI to determine if the incoming email is a potential lead. If not, the workflow stops.
3.  The **Basic LLM Chain**, powered by an OpenAI Chat Model, generates a draft reply based on a detailed system prompt and your internal knowledge base.
4.  A **Structured Output Parser** is crucially used to force the AI’s output into a reliable JSON format (`{"subject": "...", "body": "..."}`), preventing errors in subsequent steps.
5.  The **Send for Review** Gmail node sends the AI-generated draft to a human reviewer and pauses the workflow, waiting for a reply.
6.  The **IF** node checks the reviewer’s reply for approval keywords (e.g., “approve”, “承認”).
7.  If approved, the **✅ Send to Customer** Gmail node sends the final email to the original customer.
8.  If not approved, the reviewer’s feedback is treated as a revision request, and the workflow loops back to the **Basic LLM Chain** to generate a new draft incorporating the feedback.

# How to use

- **Gmail Trigger** node: Configure with your own Gmail account credentials.
- **Send for Review** node: Replace the placeholder email `reviewer@example.com` with the actual reviewer's email address.
- **IF** node: You can customize the approval keywords to match your team’s vocabulary.
- **OpenAI Nodes**: Ensure your OpenAI credentials are set up. You can select a different model if needed, but the prompt is optimized for models like GPT-4o mini.

# Requirements

- An OpenAI account for the LLM.
- A Gmail account for receiving customer emails and for the review process.

# Customising this workflow

- By modifying the prompt and knowledge base in the **Basic LLM Chain**, you can adapt this agent for various departments, such as technical support, HR, or public relations.
- The approval channel is not limited to Gmail. You can easily replace the review nodes with Slack or Microsoft Teams nodes to fit your internal communication tools.

## 📊 Basic Information

- **Workflow ID:** 9557
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 116
- **Downloads:** 11
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9557)

## 👤 Author

- **Name:** Yusuke Yamamoto
- **Username:** @yusuke-yamamoto

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **gmail** (×2)
- **if** 
- **gmailTrigger** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
