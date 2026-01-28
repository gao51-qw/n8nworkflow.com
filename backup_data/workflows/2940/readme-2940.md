# 🔥📈🤖 AI agent for n8n creators leaderboard - find popular workflows

> # n8n Creators Leaderboard Workflow

## Why Use This Workflow?

The n8n Creators Leaderboard Workflow is a powerful tool for analyzing and presenting detailed statistics about workflow creators and their contributions within the n8n community. It provides users with actionable insights into popular workflows, community trends, and top contributors, all while automating the process of data retrieval and report generation.

### Benefits
- **Discover Popular Workflows**: Identify workflows with the most unique visitors and inserters (weekly and monthly).  
- **Understand Community Trends**: Gain insights into what workflows are resonating with the community.  
- **Recognize Top Contributors**: Highlight impactful creators to foster collaboration and inspiration.  
- **Save Time with Automation**: Automates data fetching, processing, and reporting for efficiency.

### Use Cases
- **For Workflow Creators**: Track performance metrics of your workflows to optimize them for better engagement.  
- **For Community Managers**: Identify trends and recognize top contributors to improve community resources.  
- **For New Users**: Explore popular workflows as inspiration for building your own automations.

---

## How It Works

This workflow aggregates data from GitHub repositories containing statistics about workflow creators and their templates. It processes this data, filters it based on user input, and generates a detailed Markdown report using an AI agent.

### Key Features
1. **Data Aggregation**: Fetches creator and workflow statistics from GitHub JSON files.
2. **Custom Filtering**: Focuses on specific creators based on a username provided via chat.
3. **AI-Powered Reports**: Generates comprehensive Markdown reports with summaries, tables, and insights.
4. **Output Flexibility**: Saves reports locally with timestamps for easy access.

### Data Retrieval & Processing
- **Creators Data**: Retrieved via an HTTP Request node from a JSON file containing aggregated statistics about creators.
- **Workflows Data**: Pulled from another JSON file with workflow metrics like visitor counts and inserter statistics.
- **Data Merging**: Combines creator and workflow data by matching usernames to provide enriched statistics.

### Report Generation
The AI agent generates a Markdown report that includes:
- A summary of the creator’s contributions.
- A table of workflows with key metrics (e.g., unique visitors, inserters).
- Insights into trends or community feedback.

The report is saved locally as a file with a timestamp for tracking purposes.

---

## Quick Start Guide

### Prerequisites
1. Ensure your n8n instance is running.
2. Verify that the GitHub base URL and file variables are correctly set in the Global Variables node.
3. Confirm that your OpenAI credentials are configured for the AI Agent node.

### How to Start
1. **Activate the Workflow**: Make sure the workflow is active in your n8n environment.
2. **Trigger via Chat**: Use the Chat Trigger node to initiate the workflow by sending a message like:  
   `show me stats for username [desired_username]`  
   Replace `[desired_username]` with the username you want to analyze.
3. **Processing & Report Generation**: The workflow fetches data, processes it, and generates a Markdown report.
4. **View Output**: The final report is saved locally as a file (with a timestamp), which you can review to explore leaderboard insights.


## 📊 Basic Information

- **Workflow ID:** 2940
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 7233
- **Downloads:** 723
- **Created:** 2025/2/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2940)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **httpRequest** (×2)
- **set** (×7)
- **limit** (×2)
- **aggregate** 
- **filter** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **readWriteFile** 
- **stickyNote** (×16)
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **merge** 
- **splitOut** (×2)
- **sort** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
