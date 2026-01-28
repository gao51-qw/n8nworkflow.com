# 📚 Auto-generate documentation for n8n workflows with GPT and Docsify

> This workflow creates a documentation system for n8n instances using Docsify.js. It serves a dynamic documentation website that allows users to:

- View an overview of all workflows in a tabular format
- Filter workflows by tags
- Access automatically generated documentation for each workflow
- Edit documentation with a live Markdown preview
- Visualize workflow structures using Mermaid.js diagrams

&gt; 📺 Check out the [short 2-min demonstration](https://www.linkedin.com/feed/update/urn:li:activity:7276671057992847361/) on LinkedIn. Don't forget to connect!


## 🔧 Key Components

1. **Main Documentation Portal**
- Serves a Docsify-powered website
- Provides a navigation sidebar with workflow tags
- Displays workflow status, creation date, and documentation links

2. **Documentation Generator**
- Uses GPT model to auto-generate workflow descriptions
- Creates Mermaid.js diagrams of workflow structures
- Maintains consistent documentation format

3. **Live Editor**
- Split-screen Markdown editor with preview
- Real-time Mermaid diagram rendering
- Save/Cancel functionality

## ⚙️ Technical Details

### Environment Setup
- Requires write access to the specified project directory
- Uses environment variables for n8n instance URL configuration
- Implements webhook endpoints for serving documentation

### ⚠️ Security Considerations
&gt; Note: The current implementation doesn't include authentication for editing. Consider adding authentication for production use.

### Dependencies
- Docsify.js for documentation rendering
- Mermaid.js for workflow visualization
- OpenAI GPT for documentation generation

## 🔍 Part of the n8n Observability Series

This workflow is part of a broader series focused on n8n instance observability. Check out these related workflows:

1. [Workflow Dashboard](https://n8n.io/workflows/2269) - Get comprehensive analytics of your n8n instance
2. [Visualize Your n8n Workflows with Mermaid.js](https://n8n.io/workflows/2378) - Create beautiful workflow visualizations

Each workflow in this series helps you better understand and manage your n8n automation ecosystem!

## 📊 Basic Information

- **Workflow ID:** 2669
- **Complexity:** advanced
- **Node Count:** 60
- **Views:** 11434
- **Downloads:** 1143
- **Created:** 2024/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2669)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Internal Wiki
- Multimodal AI

## 🔗 Nodes Used

- **set** (×6)
- **convertToFile** 
- **if** (×4)
- **extractFromFile** 
- **html** (×6)
- **sort** 
- **switch** (×3)
- **readWriteFile** (×2)
- **respondToWebhook** (×4)
- **n8n** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **noOp** (×2)
- **merge** (×7)
- **executeCommand** 
- **code** 
- **webhook** (×2)
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 60 nodes with 44 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
