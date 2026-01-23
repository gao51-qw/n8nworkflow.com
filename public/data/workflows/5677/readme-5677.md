# Extract & transform HackerNews data to Google Docs using Gemini 2.0 flash

> ### Description
This workflow automates the process of scraping the latest discussions from HackerNews, transforming raw threads into human readable content using Google Gemini, and exporting the final content into a well-formatted Google Doc.

### Overview
This n8n workflow is responsible for extracting trending posts from the HackerNews API. It loops through each item, performs HTTP data extraction, utilizes Google Gemini to generate human-readable insights, and then exports the enriched content into Google Docs for distribution, archiving, or content creation.

### Who this workflow is for

- **Tech Newsletter Writers**:
Automate the collection and summarization of trending HackerNews posts for inclusion in weekly or daily newsletters.

- **Content Creators & Bloggers**:
Quickly generate structured summaries and insights from HackerNews threads to use as inspiration or supporting content for blog posts, videos, or social media.

- **Startup Founders & Product Builders**:
Monitor HackerNews for discussions relevant to your niche or competitors, and keep a pulse on the community’s opinions.

- **Investors & Analysts**:
Surface early signals from the tech ecosystem by identifying what’s trending and how the community is reacting.

- **Researchers & Students**:
Analyze popular discussions and emerging trends in technology, programming, and startups—enriched with AI-generated insights.

- **Digital Agencies & Consultants**:
Offer HackerNews monitoring and insight reports as a value-added service to clients interested in the tech space.

### Tools Used
- **n8n**: The core automation engine that manages the trigger, transformation, and export.

- **HackerNews API**: Provides access to trending or new HN posts.

- **Google Gemini**: Enriches HackerNews content with structured insights and human-like summaries.

- **Google Docs**: Automatically creates and updates a document with the enriched content, ready for sharing or publishing.

### How to Install
- **Import the Workflow**: Download the .json file and import it into your n8n instance.

- **Set Up HackerNews Source**: Choose whether to use the HN API (via HTTP Request node) or RSS Feed node.

- **Configure Gemini API**: Add your Google Gemini API key and design the prompt to extract pros/cons, key themes, or insights.

- **Set Up Google Docs Integration**: Connect your Google account and configure the Google Docs node to create/update a document.

- **Test and Deploy**: Run a test job to ensure data flows correctly and outputs are formatted as expected.

### Use Cases
- **Tech Newsletter Authors**: Generate ready-to-use summaries of trending HackerNews threads.

- **Startup Founders**: Stay informed on key discussions, product launches, and community feedback.

- **Investors & Analysts**: Spot early trends, technical insights, and startup momentum directly from HN.

- **Researchers**: Track community reactions to new technologies or frameworks.

- **Content Creators**: Use the enriched data to spark blog posts, YouTube scripts, or LinkedIn updates.

### Connect with Me

**Email**: ranjancse@gmail.com

**LinkedIn**: https://www.linkedin.com/in/ranjan-dailata/

**Get Bright Data**: [Bright Data](https://get.brightdata.com/5blibaeyszij ) (Supports free workflows with a small commission)

#n8n #automation #hackernews #contentcuration #aiwriting #geminiapi #googlegemini #techtrends #newsletterautomation #googleworkspace #rssautomation #nocode #structureddata #webscraping #contentautomation #hninsights #aiworkflow #googleintegration #webmonitoring #hnnews #aiassistant #gdocs #automationtools #gptlike #geminiwriter


## 📊 Basic Information

- **Workflow ID:** 5677
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 18135
- **Downloads:** 1813
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5677)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **hackerNews** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleDocs** (×2)
- **set** (×2)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
