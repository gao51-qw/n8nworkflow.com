# Optimize Instagram hashtags with GPT-4o & real engagement data via Graph API

> # Instagram Hashtag Generator Workflow

This workflow automatically generates optimal hashtags for your Instagram posts by analyzing captions and fetching real-time engagement data.

## Key Features
*   **100% Official API & Free**: Uses ONLY the official Instagram Graph API. No expensive third-party tools or risky scraping methods are required.
*   **Safe & Reliable**: Relying on the official API ensures compliance and long-term stability.
*   **Smart Caching**: Includes a Google Sheets caching mechanism to maximize the value of the official API's rate limits (30 searches/7 days).

## Workflow Overview 

1.  **Caption Input**: Set your caption manually or via a workflow trigger.
2.  **AI Suggestions**: GPT-4o-mini analyzes the caption and suggests 10 relevant hashtags, balancing popular (big words) and niche keywords.
3.  **Official API Search (Instagram Graph API)**:
    -   Fetches Hashtag IDs using the `ig_hashtag_search` endpoint.
    -   Retrieves engagement metrics (Average Likes, Average Comments) using the ID.
4.  **Selection & Sorting**:
    -   Sorts candidates by engagement metrics.
    -   Selects the top 5 most effective hashtags that balance relevance and engagement.
5.  **Output**: Returns the final list of hashtags as text.

## Setup Steps

1.  **Import to n8n**:
    -   Copy the content of `workflow_hashtag_generator.json` and paste it into your n8n canvas, or import the file directly.

2.  **Credentials**:
    -   **OpenAI account**: Connect your OpenAI credentials.
    -   **Facebook Graph account**: Connect your Facebook Graph API credentials.

3.  **Configuration**:
    -   **Instagram Business ID**: Update the `YOUR_INSTAGRAM_BUSINESS_ACCOUNT_ID` placeholder in the **Get Hashtag Info** and **Get Hashtag Metrics** nodes with your actual Business Account ID.
    -   **Google Spreadsheet ID**: Update the `YOUR_SPREADSHEET_ID` placeholder in the **Fetch Cached Hashtags** and **Save to Cache** nodes.

4.  **Adjustments**:
    -   **Filter Logic**: You can adjust the sorting or filtering logic in the `Aggregate & Rank Candidates` node's JavaScript code (e.g., exclude tags with fewer than 1000 posts) if needed.

## Important Notes on API Limits
The official **Instagram Hashtag Search API** (`ig_hashtag_search`) allows for **30 unique hashtag queries per rolling 7-day period**.
*   **Why this is fine**: This workflow caches results in Google Sheets. Once a tag is fetched, it doesn't need to be queried again for a while, allowing you to build up a large database of tags over time without hitting the limit.
*   **Recommendation**: Use mock data during initial testing to save your API quota.


## 📊 Basic Information

- **Workflow ID:** 11994
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 120
- **Downloads:** 12
- **Created:** 2025/12/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11994)

## 👤 Author

- **Name:** Shun Nakayama
- **Username:** @nakayama

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **code** (×4)
- **googleSheets** (×2)
- **splitInBatches** 
- **if** (×2)
- **wait** 
- **merge** (×2)
- **facebookGraphApi** (×2)
- **executeWorkflowTrigger** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
