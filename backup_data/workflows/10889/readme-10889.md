# Auto Generate Descriptive Node Names with AI for Workflow Readability

> ## ⚡Auto Rename n8n Workflow Nodes with AI✨
This workflow uses AI to automatically generate clear and descriptive names for every node in your n8n workflows.
It analyzes each node's type, parameters, and connections to create meaningful names, making your workflows instantly readable.

### Who is it for?
This workflow is for n8n users who manage complex workflows with dozens of nodes. If you've ever:
- Built workflows full of generic names like `HTTP Request 2` or `Edit Fields 1`
- Struggled to understand your own work after a few weeks
- Copied workflows from others with unclear node names
- Spent hours manually renaming nodes one by one

...then this workflow will save you significant time and effort.

### Requirements
- **n8n API Credentials**: Must be configured to allow listing and updating workflows
- **AI Provider Credentials**: An API key for your preferred AI provider (OpenRouter is used currently)

### How it works
1. **Trigger**: Launch via form (select from dropdown) or manual trigger (quick testing with pre-selected workflow)
2. **Fetch**: Retrieve the target workflow's JSON and extract nodes and connections
3. **Generate**: Send the workflow JSON to the AI, which creates a unique, descriptive name for every node
4. **Validate**: Verify the AI mapping covers all original node names
5. **Apply**: If valid, update all node names, parameter references, and connections throughout the workflow
6. **Save**: Save/Update the workflow with renamed nodes and provide links to both new and previous versions


If validation fails (e.g., AI missed nodes), the workflow stops with an error. You can modify the error handling to retry or loop back to the AI node.

###  Setup
1. **Connect n8n API credentials**
   - Open any n8n node in the workflow and make sure your n8n API credentials is connected

2. **Configure AI provider credentials**
   - Open the "OpenRouter" node (or replace with your preferred AI)
   - Add your API credentials
   - Adjust the model if needed (current: `openai/gpt-5.1-codex-mini`)

3. **Test the workflow**
   - Use Manual Trigger for quick testing with a pre-selected workflow
   - Use Form Trigger for a user-friendly interface with workflow selection

###  Important notice
**If you're renaming a currently opened workflow**, you must **reload the page** after execution to see the latest version, n8n doesn't automatically refresh the canvas when workflow versions are updated via API.

### Need help?
If you're facing any issues using this workflow, [join the community discussion on the n8n forum.](https://community.n8n.io/t/auto-rename-n8n-workflow-nodes-with-ai)


## 📊 Basic Information

- **Workflow ID:** 10889
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 2289
- **Downloads:** 228
- **Created:** 2025/11/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10889)

## 👤 Author

- **Name:** Anan
- **Username:** @mohamed3nan

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **n8n** (×4)
- **set** (×8)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×2)
- **form** (×2)
- **stickyNote** (×10)
- **stopAndError** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **formTrigger** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
