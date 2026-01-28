# Generate AI-powered competitor analysis reports with GPT-4, Apify & Google Docs

> ### How it Works ⚙️

This workflow is your agency’s secret weapon. It’s a multi-AI-agent system that automates the entire process of competitor and market research, providing you with a complete strategic analysis in minutes.

1.  **Digital Reconnaissance (Agent 1)**: The workflow is triggered with a client's business name and industry. The first AI agent, powered by **Apify**, immediately begins a deep dive into the market to identify and scrape data on the client’s top competitors.
2.  **Strategic Analysis (Agent 2)**: All the raw data from Agent 1 is sent to the second AI agent, powered by **OpenAI (GPT-4)**. This agent performs a sophisticated analysis to summarize competitor messaging, identify their audience, and generate a full SWOT analysis for your client.
3.  **Report & Strategy Generation (Agent 3)**: A third AI agent, also using **OpenAI**, takes the strategic analysis and writes a professional, persuasive report. This report is then automatically populated into a pre-designed **Google Docs** template, ready for review.
4.  **Instant Delivery**: The final report is automatically sent to your internal team via **Slack**, allowing you to start your strategy meeting almost instantly after the workflow is triggered.

### Setup Steps 🛠️

1.  **Get Your Apify Actor**:
    * Log in to Apify and find a suitable Actor for web scraping (e.g., `Google Search Results Scraper`).
    * Copy the `Actor ID` to use in the n8n workflow.

2.  **Prepare Your Report Template**:
    * Create a new Google Doc to serve as your report template.
    * Use placeholders like `{{ client_name }}`, `{{ report_content }}`, and `{{ client_industry }}` to define where the AI-generated text will go.
    * Copy the document ID from the Google Doc URL and save it for later.

3.  **Import the Workflow**:
    * Copy the provided workflow JSON and import it into your n8n instance.

4.  **Configure Credentials**:
    * **Apify**: Add your Apify API Key.
    * **OpenAI**: Add your OpenAI API Key.
    * **Google Docs**: Add your OAuth2 credential.
    * **Slack**: Add your Bot Token credential.

5.  **Customize Workflow Nodes**:
    * **Node 2 (`Apify`)**: Paste your `Actor ID` here. You can also customize the search queries in the `Input JSON` to be more specific.
    * **Node 6 (`Google Docs`)**: Paste your template's `Document ID` here. Ensure the `Values` match the placeholders you created in your template.
    * **Node 7 (`Slack`)**: Replace `[YOUR MARKETING TEAM SLACK CHANNEL ID]` with the correct channel ID where you want the report delivered.

6.  **Activate & Test**:
    * Once all settings are configured, save the workflow.
    * Click the "Inactive" toggle to make it live.
    * Run a test by manually entering a client's name and industry to ensure the data flows correctly and the report is delivered.

## 📊 Basic Information

- **Workflow ID:** 6580
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 176
- **Downloads:** 17
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6580)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **slack** 
- **googleDocs** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
