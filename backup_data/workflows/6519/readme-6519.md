# Create content strategies with dual AI research agents using SerpApi, GPT-4 & Sheets

> ### How It Works ⚙️

This workflow is a comprehensive, two-AI-agent system that acts as a virtual research and content team. It automates the entire process of turning a single topic into an actionable content strategy.

1.  **AI Agent 1 (The Researcher)**: The workflow starts with a manual trigger where you input a research topic. An **HTTP Request** node then acts as the first agent, performing a web search (e.g., using a Google Search API) to gather the most relevant articles and data.
2.  **Data Aggregation**: The raw data from the web search is then consolidated into a single, clean text block using a **Function** node. This makes the information digestible for the second AI agent.
3.  **AI Agent 2 (The Strategist)**: A second **OpenAI** node takes the aggregated data and acts as the strategist. It analyzes the content and uses a sophisticated prompt to generate a list of 5 specific and actionable content ideas.
4.  **Distribution & Notification**: The generated ideas are then automatically sent to two separate destinations. Each idea is logged into a **Google Sheets** database, which serves as your content calendar. A **Slack** notification is also sent to your marketing team, immediately alerting them to the new ideas.

### How to Set Up 🛠️

1.  **Import the Workflow**: Copy the provided workflow JSON and import it into your n8n instance.
2.  **Configure Credentials**:
    * **Google Search**: Add your API Key.
    * **OpenAI**: Add your API Key.
    * **Google Sheets**: Add your OAuth2 credential.
    * **Slack**: Add your Bot Token credential.
3.  **Customize Workflow Nodes**:
    * **Node 1 (`Manual Trigger`)**: You will input your research topic here to start the workflow.
    * **Node 7 (`Google Sheets`)**: Replace `[YOUR SPREADSHEET ID]` and `[YOUR SHEET NAME]` with your own content calendar details.
    * **Node 8 (`Slack`)**: Replace `[YOUR SLACK CHANNEL ID]` with the channel where your team receives marketing updates.
4.  **Save & Activate**: Once all settings and credentials are configured, save the workflow and click the "Inactive" toggle in the top-right corner to make it live.

## 📊 Basic Information

- **Workflow ID:** 6519
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 88
- **Downloads:** 8
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6519)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **slack** 
- **googleSheets** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **n8n-nodes-serpapi.serpApi** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
