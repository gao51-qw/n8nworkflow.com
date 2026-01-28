# Smart RSS feed monitoring with AI filtering, Baserow storage, and Slack alerts

> ![n8n  RSS feed to Slack workflow.png](fileId:1858)

This workflow automates the process of monitoring multiple RSS feeds, intelligently identifying new articles, maintaining a record of processed content, and delivering timely notifications to a designated Slack channel. It leverages AI to ensure only truly new and relevant articles are dispatched, preventing duplicate alerts and information overload. 🚀

## Main Use Cases

*   **Automated News Aggregation:** Continuously monitor industry news, competitor updates, or specific topics from various RSS feeds. 📈
*   **Content Curation:** Filter and deliver only new, unprocessed articles to a team or personal Slack channel. 🎯
*   **Duplicate Prevention:** Maintain a persistent record of seen articles to avoid redundant notifications. 🛡️
*   **Enhanced Information Delivery:** Provide a streamlined and intelligent way to stay updated without manual checking. 📧

## How it works

The workflow operates in distinct, interconnected phases to ensure efficient and intelligent article delivery:

### 1. RSS Feed Data Acquisition 📥

*   **Initiation:** The workflow is manually triggered to begin the process. 🖱️
*   **RSS Link Retrieval:** It connects to a Baserow database to fetch a list of configured RSS feed URLs. 🔗
*   **Individual Feed Processing:** Each RSS feed URL is then processed independently. 🔄
*   **Content Fetching & Parsing:** An HTTP Request node downloads the raw XML content of each RSS feed, which is then parsed into a structured JSON format for easy manipulation. 📄➡️🌳

### 2. Historical Data Management 📚

*   **Seen Articles Retrieval:** Concurrently, the workflow queries another Baserow table to retrieve a comprehensive list of article GUIDs or links that have been previously processed and notified. This forms the basis for duplicate detection. 🔍

### 3. Intelligent Article Filtering with AI 🧠

*   **Data Structuring for AI:** A Code node prepares the newly fetched articles and the list of already-seen articles into a specific JSON structure required by the AI Agent. 🏗️
*   **AI-Powered Filtering:** An AI Agent, powered by an OpenAI Chat Model and supported by a Simple Memory component, receives this structured data. It is precisely prompted to compare the new articles against the historical "seen" list and return only those articles that are genuinely new and unprocessed. 🤖
*   **Output Validation:** A Structured Output Parser ensures that the AI Agent's response adheres to a predefined JSON schema, guaranteeing data integrity for subsequent steps. ✅
*   **JSON Cleaning:** A final Code node takes the AI's raw JSON string output, parses it, and formats it into individual n8n items, ready for notification and storage. 🧹

### 4. Notification & Record Keeping 🔔

*   **Persistent Record:** For each newly identified article, its link is saved to the Baserow "seen products" table, marking it as processed and preventing future duplicate notifications. 💾
*   **Slack Notification:** The details of the new article (title, content, link) are then formatted and sent as a rich message to a specified Slack channel, providing real-time updates. 💬

## Summary Flow:

Manual Trigger → RSS Link Retrieval (Baserow) → HTTP Request → XML Parsing | Seen Articles Retrieval (Baserow) → Data Structuring (Code) → AI-Powered Filtering (AI Agent, OpenAI, Memory, Parser) → JSON Cleaning (Code) → Save Seen Articles (Baserow) → Slack Notification 🎉

## Benefits:

*   **Fully Automated:** Eliminates manual checking of RSS feeds and Slack notifications. ⏱️
*   **Intelligent Filtering:** Leverages AI to accurately identify and deliver only new content, avoiding duplicates. 💡
*   **Centralized Data Management:** Utilizes Baserow for robust storage of RSS feed configurations and processed article history. 🗄️
*   **Real-time Alerts:** Delivers timely updates directly to your team or personal Slack channel. ⚡
*   **Scalable & Customizable:** Easily adaptable to monitor various RSS feeds and integrate with different Baserow tables and Slack channels. ⚙️

## Setup Requirements:

*   **Baserow API Key:** Required for accessing and updating your Baserow databases. 🔑
*   **OpenAI API Key:** Necessary for the AI Agent to function. 🤖
*   **Slack Credentials:** Either a Slack OAuth token (recommended for full features) or a Webhook URL for sending messages. 🗣️
*   **Baserow Table Configuration:**
    *   A table with an `rssLink` column to store your RSS feed URLs.
    *   A table with a `Nom` column to store the links of processed articles.

---

For any questions or further assistance, feel free to connect with me on LinkedIn: [https://www.linkedin.com/in/daniel-shashko/](https://www.linkedin.com/in/daniel-shashko/)


## 📊 Basic Information

- **Workflow ID:** 6389
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 814
- **Downloads:** 81
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6389)

## 👤 Author

- **Name:** Daniel Shashko
- **Username:** @tomax

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **slack** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **baserow** (×3)
- **code** (×2)
- **stickyNote** (×14)
- **httpRequest** 
- **xml** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
