# Create a context-aware Slack assistant with Google Sheets, Pinecone & GPT-4o

> This advanced n8n automation template empowers your Slack bot to act as an intelligent assistant: when a user asks a question or requests a suggestion (by mentioning the bot), it automatically retrieves the user’s historical data and previous interactions from both Google Sheets and Pinecone. Using GPT-4o, the bot analyzes past updates, status reports, and context to generate a personalized, context-aware response—directly in Slack.
Perfect for teams seeking instant, data-driven support, this workflow transforms your Slack bot into a smart knowledge assistant that references your own organizational history to provide relevant answers and suggestions.

**What This Template Does (Step-by-Step)**

**Slack Bot Mention Trigger**
- Listens for message or app_mention events where a user asks a question or requests a suggestion.
- Captures the message body and user ID.

**User Profile & Data Fetch**

- Uses the Slack API to retrieve the user’s profile.
- Queries Google Sheets and Pinecone to collect the user’s historical updates and interactions.

**Contextual AI Lookup**
- GPT-4o reviews the user’s past status reports, messages, and activity.
- Synthesizes a contextually relevant answer or suggestion based on prior data.

**Personalized Response Generation**

- The bot replies in Slack with a tailored answer, referencing the user’s previous updates and current context.

**Auto-Fix & Schema Validation**
- Ensures the generated response is well-structured and matches your organization’s data schema.

**Document Update (Optional)**
- Optionally logs the new interaction or suggestion back to Pinecone for future reference.

**Required Integrations**
- Slack Bot with channels:history, app_mentions:read, and users.profile:read
- Google Sheets OAuth2 (for lead or user status records)
- Pinecone Vector Store (for storing user status documents)
- Azure OpenAI or OpenAI GPT-4o (for document generation and merging)
- Cohere API (optional) for reranking relevance in vector search

**Ideal For**
- Remote teams running async daily standups
- People ops tracking onboarding or churn signals
- Founders building internal GPT-powered tools
- Managers consolidating Slack-based updates across teams
- Teams wanting a Slack bot that provides personalized answers and suggestions based on past activity
- Managers and team members seeking quick, AI-powered support and insights from their own work history
- Organizations aiming to leverage internal data for smarter, context-aware assistance in Slack


## 📊 Basic Information

- **Workflow ID:** 6020
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 281
- **Downloads:** 28
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6020)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **slackTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **slack** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi** (×3)
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.rerankerCohere** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **set** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
