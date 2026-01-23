# 🤖🧑‍💻 AI agent for top n8n creators leaderboard reporting

> This n8n workflow is designed to automate the aggregation, processing, and reporting of community statistics related to n8n creators and workflows. Its primary purpose is to generate insightful reports that highlight top contributors, popular workflows, and key trends within the n8n ecosystem. Here's how it works and why it's important:

### **How It Works**
1. **Data Retrieval**: 
   - The workflow fetches JSON data files from a GitHub repository containing statistics about creators and workflows.
   - It uses HTTP requests to access these files dynamically based on pre-defined global variables.

2. **Data Processing**:
   - The data is parsed into separate streams for creators and workflows.
   - It processes the data to identify key metrics such as unique weekly and monthly inserters/visitors.

3. **Ranking and Filtering**:
   - The workflow sorts creators by their weekly inserts and workflows by their popularity.
   - It selects the top 10 creators and top 50 workflows for detailed analysis.

4. **Report Generation**:
   - Using AI tools like GPT-4 or Google Gemini, the workflow generates a Markdown report summarizing trends, contributors, and workflow statistics.
   - The report includes tables with detailed metrics (e.g., unique visitors, inserters) and insights into why certain workflows are popular.

5. **Distribution**:
   - The report is saved locally or uploaded to Google Drive.
   - It can also be shared via email or Telegram for broader accessibility.

6. **Automation**:
   - A schedule trigger ensures the workflow runs daily or as needed, keeping the reports up-to-date.

### **Why It's Important**
- **Community Insights**: This workflow provides actionable insights into the n8n community by identifying impactful contributors and popular workflows. This fosters collaboration and innovation within the ecosystem.
- **Time Efficiency**: By automating data collection, processing, and reporting, it saves significant time and effort for community managers or administrators.
- **Recognition of Contributors**: Highlighting top creators encourages engagement and recognizes individuals driving value in the community.
- **Trend Analysis**: The workflow helps uncover patterns in usage, enabling better decision-making for platform improvements or feature prioritization.
- **Scalability**: With its modular design, this workflow can be easily adapted to include additional metrics or integrate with other tools.


## 📊 Basic Information

- **Workflow ID:** 2942
- **Complexity:** advanced
- **Node Count:** 49
- **Views:** 4699
- **Downloads:** 469
- **Created:** 2025/2/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2942)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **set** (×6)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **convertToFile** 
- **readWriteFile** 
- **stickyNote** (×18)
- **merge** 
- **splitOut** (×2)
- **sort** (×2)
- **scheduleTrigger** 
- **limit** (×2)
- **googleDrive** 
- **markdown** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **gmail** (×2)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 49 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
