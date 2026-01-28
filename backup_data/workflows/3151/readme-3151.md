# Build an AI-powered tech radar advisor with SQL DB, RAG, and routing agents

> # AI-Powered Tech Radar Advisor

This project is built on top of the famous open source [ThoughtWorks Tech Radar](https://radar.thoughtworks.com/).  

You can use this template to build your own AI-Powered Tech Radar Advisor for your company or group of companies.

![Tech Constellation](https://raw.githubusercontent.com/dragonjump/techconstellation/refs/heads/gh-pages/build-your-own-radar-master/src/images/image.png)

![Tech Radar Constellation](https://raw.githubusercontent.com/dragonjump/techconstellation/refs/heads/gh-pages/build-your-own-radar-master/src/images/demo.png)

## Target Audience

This template is perfect for:
- **Tech Audit & Governance Leaders:** Those seeking to build a tech landscape AI platform portal.
- **Tech Leaders & Architects:** Those aiming to provide modern AI platforms that help others understand the rationale behind strategic technology adoption.
- **Product Managers:** Professionals looking to align product innovation with the company's current tech trends.
- **IT & Engineering Teams:** Teams that need to aggregate, analyze, and visualize technology data from multiple sources efficiently.
- **Digital Transformation Experts:** Innovators aiming to leverage AI for actionable insights and strategic recommendations.
- **Data Analysts & Scientists:** Individuals who want to combine structured SQL analysis with advanced semantic search using vector databases.
- **Developers:** Those interested in integrating RAG chatbot functionality with conversation storage.

---

# 1. Description

**Tech Constellation** is an AI-powered Tech Radar solution designed to help organizations visualize and steer their technology adoption strategy.  
It seamlessly ingests data from a Tech Radar Google Sheet—converting it into both a MySQL database and a vector index—to consolidate your tech landscape in one place.

The platform integrates an interactive AI chat interface powered by four specialized agents:
- **AI Agent Router:** Analyzes and routes user queries to the most suitable processing agent.
- **SQL Agent:** Executes precise SQL queries on structured data.
- **RAG Agent:** Leverages semantic, vector-based search for in-depth insights.
- **Output Guardrail Agent:** Validates responses to ensure they remain on-topic and accurate.

This powerful template is perfect for technology leaders, product managers, engineering teams, and digital transformation experts looking to make data-driven decisions aligned with strategic initiatives across groups of parent-child companies.

---

# 2. Features
 
### Data Ingestion
- A Google Sheet containing tech radar data is used as the primary source.
  - The data is ingested and converted into a MySQL database.
  - Simultaneously, the data is indexed into a vector database for semantic (vector-based) search.
  
### Interactive AI Chat
- **Chat Integration:** An AI-powered chat interface allows users to ask questions about the tech radar.
- **Customizable AI Agents:**
  1. **AI Agent Router:** Determines the query type and routes it to the appropriate agent.
  2. **SQL Agent:** Processes queries using SQL on structured data.
  3. **RAG Agent:** Performs vector-based searches on document-like data.
  4. **Output Guardrail Agent:** Validates queries and ensures that the responses remain on-topic and accurate.

---

## Usage Examples
1. Tell me, is TechnologyABC adopted or on hold, and why?
2. List all the tools that are considered part of the strategic direction for company3 but are not adopted.

---

## Project Links & Additional Details

- **GitHub Repository (Frontend Interface Source Code):** [github.com/dragonjump/techconstellation](https://github.com/dragonjump/techconstellation)
- **Try It:** [https://scaler.my](https://scaler.my)


## 📊 Basic Information

- **Workflow ID:** 3151
- **Complexity:** advanced
- **Node Count:** 53
- **Views:** 14647
- **Downloads:** 1464
- **Created:** 2025/3/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3151)

## 👤 Author

- **Name:** Sean Lon
- **Username:** @seanlon

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **stickyNote** (×16)
- **cron** 
- **mySql** (×2)
- **googleSheets** (×2)
- **code** (×3)
- **googleDocs** 
- **googleDriveTrigger** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **executeWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **executeWorkflowTrigger** 
- **mySqlTool** (×3)
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** (×3)
- **respondToWebhook** 
- **webhook** 
- **if** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 53 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
