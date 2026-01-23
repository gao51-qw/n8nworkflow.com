# Automate content analysis & multi-platform distribution with GPT-4

> ### How It Works ⚙️

This workflow is a comprehensive, AI-powered system that acts as a virtual content manager for creators and marketing teams. It automates the entire content lifecycle, from ingestion and analysis to multi-channel distribution and performance logging.

1.  **Multi-Source Ingestion**: The workflow starts by ingesting new content from a trigger, such as a **WordPress** blog post or an **RSS Feed** from a YouTube channel.
2.  **AI-Powered Analysis**: The new content is sent to an **OpenAI (GPT-4)** node, which performs a series of high-value tasks. It instantly creates a summary, extracts keywords, analyzes the sentiment, and generates tailored post drafts for different social media platforms.
3.  **Smart Distribution**: A **Buffer** node then takes these AI-generated, platform-specific posts and schedules them for optimal times across your social media channels like **Twitter**, **LinkedIn**, and **Facebook**.
4.  **Centralized Archiving**: All of the content data, including the AI-generated summaries and insights, are automatically logged into a **Google Sheets** database. This creates a powerful, searchable archive and an analytics dashboard for tracking content performance.

### How to Set Up 🛠️

1.  **Import the Workflow**: Copy the provided workflow JSON and import it into your n8n instance.
2.  **Configure Credentials**:
    * **OpenAI**: Add your API Key.
    * **WordPress**: Add your API credentials.
    * **Buffer**: Add your API credentials.
    * **Google Sheets**: Add your OAuth2 credentials.
3.  **Customize Workflow Nodes**:
    * **Node 1 (`WordPress Trigger`)**: Select your WordPress credential. You can also add other trigger nodes like `RSS Feed Read Trigger` if needed.
    * **Node 2 (`OpenAI`)**: You can customize the prompt to get different kinds of output or translate into more languages.
    * **Node 4 (`Buffer`)**: Select the social media profiles you want to post to.
    * **Node 5 (`Google Sheets`)**: Replace the placeholder `[YOUR SPREADSHEET ID]` and `[YOUR CONTENT LOG SHEET NAME]` with your own details and map the data columns.
4.  **Save & Activate**: Once all settings and credentials are configured, save the workflow and click the "Inactive" toggle in the top-right corner to make it live.

## 📊 Basic Information

- **Workflow ID:** 6514
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 129
- **Downloads:** 12
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6514)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **rssFeedReadTrigger** 
- **code** 
- **twitter** 
- **linkedIn** 
- **facebookGraphApi** 
- **merge** (×2)
- **googleSheets** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
