# Create professional proposals using Dual AI and Google Docs templates

> 
# How it works

1. **Input your proposal basics** - Manually enter the core details and key points for your proposal
2. **Dual AI processing** - OpenAI expands your inputs into a comprehensive draft, then Claude refines it for clarity and readability
3. **Automated document output** - The workflow copies your Google Doc template, replaces all variables with the AI-generated content, and delivers your finished proposal

# Set up steps

**Estimated time: 10-15 minutes**

1. **Create an OpenRouter account** - Sign up at OpenRouter to get API access for Claude
2. **Set up your Google Doc template** - Create a template document with placeholder variables (variable names are listed in the 'Update proposal' node)
3. **Configure API credentials** - Add your OpenAI and OpenRouter API keys to the workflow
4. **Connect Google Drive** - Authenticate your Google account to enable document creation

💡 Detailed configuration instructions and variable naming conventions can be found in the sticky notes within the workflow.
```

## 📊 Basic Information

- **Workflow ID:** 10856
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 85
- **Downloads:** 8
- **Created:** 2025/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10856)

## 👤 Author

- **Name:** Kean
- **Username:** @kean

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **googleDrive** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleDocs** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
