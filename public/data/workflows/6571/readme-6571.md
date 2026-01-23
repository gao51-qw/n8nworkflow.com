# Generate property investment reports with GPT-4, SerpAPI, Google Docs & Airtable

> ### How It Works ⚙️

This workflow is a comprehensive, multi-AI-agent system that acts as a virtual property analysis team. It automates the entire process from initial data research to final report delivery.

1.  **Data Research (AI Agent 1)**: The workflow is triggered by an input of a property address. The first AI agent, powered by **Google Search**, immediately scours the web to gather all relevant public data, including historical sales data, local rental prices, and nearby amenities.
2.  **Market Analysis (AI Agent 2)**: All the raw data from the first agent is consolidated. A second AI agent, powered by **OpenAI**, then performs a deep, intelligent analysis. It identifies key insights, calculates potential rental yield, and assigns a definitive "Investment Score."
3.  **Report Generation (AI Agent 3)**: A third AI agent, also using **OpenAI**, takes the structured analysis and writes a professional, persuasive report. The report is then automatically populated into a pre-designed **Google Docs** template, ensuring a polished and professional look.
4.  **Database Logging & Delivery**: The final report is automatically converted to a PDF and sent to the client via **Gmail**. Simultaneously, the key findings (address, score, key takeaways) are logged into an **Airtable** database for quick reference and tracking.

### How to Set Up 🛠️

1.  **Import the Workflow**: Copy the provided workflow JSON and import it into your n8n instance.
2.  **Configure Credentials**:
    * **Google Search**: Add your API Key.
    * **OpenAI**: Add your API Key.
    * **Google Docs**: Add your OAuth2 credential.
    * **Airtable**: Add your API Key and token.
    * **Gmail**: Add your OAuth2 credential.
3.  **Customize Workflow Nodes**:
    * **Node 6 (`Google Docs`)**: Create a new Google Doc to serve as your report template. Use placeholders like `{{ report_content }}` and `{{ property_address }}` to define where the AI-generated text will go. Then, copy the document ID from the URL and paste it into this node's parameters.
    * **Node 7 (`Airtable`)**: Replace `[YOUR AIRTABLE BASE ID]` and `Property Reports` with your specific Airtable base and table names. Ensure your table has columns that match the data you are sending (`Property Address`, `Investment Score`, etc.).
4.  **Save & Activate**: Once all settings and credentials are configured, save the workflow and click the "Inactive" toggle in the top-right corner to make it live.

## 📊 Basic Information

- **Workflow ID:** 6571
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 99
- **Downloads:** 9
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6571)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n-nodes-serpapi.serpApi** 
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **googleDocs** 
- **airtable** 
- **gmail** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
