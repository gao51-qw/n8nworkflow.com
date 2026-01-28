# Automated Slack IT helpdesk with GPT, Supabase vector search, and JIRA ticketing

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who is this for?
IT teams and support organizations looking to automate Level 1 support with AI-powered assistance while maintaining proper ticket management workflows.

## What problem does this solve?
Eliminates repetitive manual support tasks by providing instant, context-aware assistance that references organizational knowledge and creates structured tickets when needed.

## What this workflow does
- **RAG Pipeline**: Processes PDF/CSV documents into searchable vector database
- **Intelligent Slack Bot**: This AI-helpdesk assistant handles support requests with thread-aware conversations
- **Vector Knowledge Search**: Searches embedded knowledge base articles and historical case data
- **JIRA Integration**: Creates, searches, and manages support tickets automatically  
- **Emoji Reactions**: Users can trigger actions (create tickets, escalate) via emoji reactions


## Requirements
**Required Accounts:**
- n8n Cloud or self-hosted instance
- Slack workspace with admin access
- Supabase account (vector database)
- JIRA Cloud instance  
- OpenAI API key

**Technical Prerequisites:**
- Basic n8n workflow knowledge
- Slack app creation experience
- Understanding of vector databases

## Setup Steps

### 1. Slack App Configuration
- Create new Slack app with Bot Token Scopes: `app_mentions:read`, `channels:history`, `channels:read`, `groups:history`, `groups:read`, `im:history`, `im:read`, `mpim:history`, `mpim:read`, `users:read`
- Configure Event Subscriptions: `app_mention`, `message.channels`, `message.groups`, `reaction_added`
- Set Request URL to your n8n Slack Trigger webhook

### 2. Supabase Vector Database Setup  
- Create new Supabase project
- Enable pgvector extension
- Create `documents` table with vector column (1536 dimensions for OpenAI embeddings)
- Configure RLS policies for secure access

### 3. JIRA Configuration
- Generate API token from JIRA Cloud
- Create helpdesk project with appropriate issue types
- Note project ID and issue type IDs for workflow configuration

### 4. n8n Workflow Configuration
- Import workflow and configure credentials
- Update Slack channel IDs in trigger nodes
- Set OpenAI API key in all OpenAI nodes
- Configure Supabase connection in vector store nodes
- Update JIRA project settings in MCP server nodes

### 5. Knowledge Base Data Format
**Supported file formats:** PDF, CSV
**CSV Structure:** Structure your data with columns, but not limited to,  Ticket#, Issue Description, Issue Summary, Resolution Provided, Case Status, Contact User
**PDF Content:** Technical documentation, troubleshooting guides, policy documents

Upload documents via the form trigger to automatically embed in vector database.

## Customization Options

### AI Agent Behavior
- Modify system prompt in AIHelpdesk Agent node
- Adjust conversation memory window (default: 20 messages)
- Change AI model (GPT-4o, GPT-3.5-turbo, etc.)

### Reaction Mappings
- Customize emoji-to-action mappings in Reaction Handler code
- Add new reaction types for department-specific workflows
- Configure escalation rules and priority levels

### JIRA Integration
- Customize ticket templates and fields
- Add auto-assignment rules based on issue type
- Configure SLA and priority mappings

### Vector Search
- Adjust similarity thresholds for knowledge retrieval
- Modify search result limits and relevance scoring
- Add metadata filtering for departmental knowledge bases

## Advanced Features
- Thread-aware conversation memory
- Automatic bot loop prevention
- Context-preserving ticket creation
- Multi-modal file processing (PDF + CSV)
- Scalable MCP architecture for tool integration

## Use Cases
- **Level 1 IT Support**: Automate common troubleshooting workflows
- **Employee Onboarding**: Answer policy and procedure questions
- **Internal Help Desk**: Route and track internal service requests  
- **Knowledge Management**: Make organizational knowledge searchable and actionable

## Template includes
- Complete Slack integration with thread support
- RAG pipeline for document processing
- Vector similarity search implementation
- JIRA ticket lifecycle management
- Emoji reaction-based user interactions
- Comprehensive error handling and validation

## 📊 Basic Information

- **Workflow ID:** 6549
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 825
- **Downloads:** 82
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6549)

## 👤 Author

- **Name:** inderjeet Bhambra
- **Username:** @idsinghbhambra

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **slackTrigger** 
- **slack** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **stickyNote** (×4)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **jiraTool** (×5)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
