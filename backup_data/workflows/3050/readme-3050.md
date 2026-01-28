# Build your first AI data analyst chatbot

> Enhance your data analysis by connecting an AI Agent to your dataset, using n8n tools.

This template teaches you how to build an AI Data Analyst Chatbot that is capable of pulling data from your sources, using tools like Google Sheets or databases. It's designed to be easy and efficient, making it a good starting point for AI-driven data analysis.

You can easily replace the current Google Sheets tools for databases like Postgres or MySQL.

![image_template_data.png](fileId:969)

### How It Works
The core of the workflow is the AI Agent. It's connected to different data retrieval tools, to get data from Google Sheets (or your preferred database) in many different ways.

Once the data is retrieved, the Calculator tool allows the AI to perform mathematical operations, making your data analysis precise.

### Who is this template for
- **Data Analysts & Researchers:** Pull data from different sources and perform quick calculations.
- **Developers & AI Enthusiasts:** Learn to build your first AI Agent with easy dataset access.
- **Business Owners:** Streamline your data analysis with AI insights and automate repetitive tasks.
- **Automation Experts:** Enhance your automation skills by integrating AI with your existing databases.

### How to Set Up
You can find detailed instructions in the workflow itself.

### Check out my other templates
👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 3050
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 161465
- **Downloads:** 16146
- **Created:** 2025/3/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3050)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **code** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **aggregate** 
- **stickyNote** (×17)
- **httpRequest** 
- **googleSheetsTool** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
