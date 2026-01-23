# AI news research team: 24/7 newsletter automation with citations with Perplexity

> [![Building an AI Personal Assistant](https://img.youtube.com/vi/sKJAypXDTLA/sddefault.jpg)](https://youtu.be/sKJAypXDTLA)

**Purpose of workflow:**

This AI-powered workflow automatically generates detailed, well-researched newsletters by monitoring and analyzing specified news topics (like Bitcoin, Nvidia, etc.). It uses a team of AI research agents to gather, analyze, and compile information with automatic citations, saving significant time in newsletter creation.

**How it works:**

Multi-agent system:
- Research Leader: Analyzes topics and creates content outline
- Project Planner: Breaks down research into specific tasks
- Research Assistants: Conduct detailed research on assigned subtopics
- Editor: Combines research and polishes final output

**Key features:**
- Automated daily monitoring of specified news topics
- Real-time information gathering using Perplexity AI
- Auto-citation functionality for source verification
- Flexible time window filtering (day/week/month)
- Options for detailed or simple reports
- Direct email delivery of completed newsletters

**Step-by-step setup:**
1. Perplexity API Setup:
   - Create account at perplexity.ai
   - Navigate to API tab
   - Generate API key
   - Set up credentials with 'Bearer' authentication

2. Workflow Configuration:
   - Connect Google Sheets containing news monitoring topics
   - Configure schedule trigger for daily execution
   - Set up email delivery settings
   - Define report type preferences (detailed/simple)
   - Specify time window for news gathering

3. Integration:
   - Connect with newsletter tools like Kit
   - Import generated content as starting point
   - Edit and customize as needed before publishing

## 📊 Basic Information

- **Workflow ID:** 2778
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 5798
- **Downloads:** 579
- **Created:** 2025/1/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2778)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **executeWorkflowTrigger** 
- **set** (×2)
- **httpRequest** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×6)
- **merge** 
- **code** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **gmail** (×2)
- **switch** 
- **googleSheets** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
