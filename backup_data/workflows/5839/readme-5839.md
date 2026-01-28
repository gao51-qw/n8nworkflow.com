# Create AI-summarized email digests from Gmail labels with OpenAI O4-Mini

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Transform email overload into actionable insights with this automated daily digest workflow that intelligently summarizes categorized emails using AI.

## Who's it for

This workflow is perfect for busy professionals, content creators, and newsletter subscribers who need to stay informed without spending hours reading through multiple emails. Whether you're tracking industry news, monitoring competitor updates, or managing content subscriptions, this automation helps you extract key insights efficiently.

## How it works

The workflow runs automatically each morning at 9 AM, fetching emails from a specific Gmail label received in the last 24 hours. Each email is processed through OpenAI's language model using LangChain to create concise, readable summaries that preserve important links and formatting. All summaries are then combined into a single, well-formatted digest email and sent to your inbox, replacing dozens of individual emails with one comprehensive overview.

## How to set up

1. **Create a Gmail label** for emails you want summarized (e.g., "Tech News", "Industry Updates")
2. **Configure credentials** for both Gmail OAuth2 and OpenAI API in their respective nodes
3. **Update the Gmail label ID** in the "Get mails (last 24h)" node with your specific label
4. **Set your email address** in the "Send Digested mail" node
5. **Adjust the schedule** in the Schedule Trigger if you prefer a different time than 9 AM
6. **Test the workflow** with a few labeled emails to ensure proper formatting

## Requirements

- Gmail account with OAuth2 authentication configured
- OpenAI API account and valid API key
- At least one Gmail label set up for email categorization
- Basic understanding of n8n workflow execution

## How to customize the workflow

**Change summarization style**: Modify the prompt in the "Summarization Mails" node to adjust tone, length, or format of summaries. You can make summaries more technical, casual, or focus on specific aspects like action items.

**Adjust time range**: Change the `receivedAfter` parameter in the Gmail node to fetch emails from different time periods (last 2 days, last week, etc.).

**Multiple labels**: Duplicate the Gmail retrieval section to process multiple labels and combine them into categories within your digest.

**Add filtering**: Insert additional conditions to filter emails by sender, subject keywords, or other criteria before summarization.

**Custom formatting**: Modify the "Combine Subject and Body" code node to change the HTML structure, add styling, or include additional metadata like email timestamps or priority indicators.

## 📊 Basic Information

- **Workflow ID:** 5839
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 2034
- **Downloads:** 203
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5839)

## 👤 Author

- **Name:** German Velibekov
- **Username:** @germanv

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **noOp** 
- **set** 
- **code** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **gmail** (×2)
- **scheduleTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
