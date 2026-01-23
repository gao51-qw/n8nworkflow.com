# Visualize your SQL Agent queries with OpenAI and Quickchart.io

> ### Overview  
- This workflow aims to provide data visualization capabilities to a native SQL Agent.  
- Together, they can help foster data analysis and data visualization within a team.  
- It uses the native SQL Agent that works well and adds visualization capabilities thanks to OpenAI’s Structured Output and Quickchart.io.  

### How it works  
1. Information Extraction:  
   - The Information Extractor identifies and extracts the user's question.  
   - If the question includes a visualization aspect, the SQL Agent alone may not respond accurately.  

2. SQL Querying:  
   - It leverages a regular SQL Agent: it connects to a database, queries it, and translates the response into a human-readable format.  

3. Chart Decision:  
   - The Text Classifier determines whether the user would benefit from a chart to support the SQL Agent's response.  

4. Chart Generation:  
   - If a chart is needed, the sub-workflow dynamically generates a chart and appends it to the SQL Agent’s response.  
   - If not, the SQL Agent’s response is output as is.  

5. Calling OpenAI for Chart Definition:  
   - The sub-workflow calls OpenAI via the HTTP Request node to retrieve a chart definition.  

6. Building and Returning the Chart:  
   - In the "Set Response" node, the chart definition is appended to a Quickchart.io URL, generating the final chart image.  
   - The AI Agent returns the response along with the chart.  

### How to use it  
- Use an existing database or create a new one.  
- For example, I've used [this Kaggle dataset](https://www.kaggle.com/datasets/ihelon/coffee-sales/versions/15?resource=download) and uploaded it to a Supabase DB.  
- Add the PostgreSQL or MySQL credentials.  
- Alternatively, you can use SQLite binary files (check [this template](https://n8n.io/workflows/2292-talk-to-your-sqlite-database-with-a-langchain-ai-agent/)).  
- Activate the workflow.  
- Start chatting with the AI SQL Agent.  
- If the Text Classifier determines a chart would be useful, it will generate one in addition to the SQL Agent's response.  

### Notes  
- The full Quickchart.io specifications have not been fully integrated, so there may be some glitches (e.g., radar graphs may not display properly due to size limitations).  

## 📊 Basic Information

- **Workflow ID:** 2559
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 16231
- **Downloads:** 1623
- **Created:** 2024/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2559)

## 👤 Author

- **Name:** Agent Studio
- **Username:** @agentstudio

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **httpRequest** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
