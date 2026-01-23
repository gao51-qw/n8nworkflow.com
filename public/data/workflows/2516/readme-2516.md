# 📈 Receive daily market news from FT.com to your Microsoft Outlook inbox

> ## 📈 Daily Financial News - Description 

This workflow automates the process of collecting, organizing, and delivering a daily summary of financial news by following these key steps:

1. **Scheduled Activation**  
   The workflow starts at 7:00 AM each day, triggered by the Schedule Trigger node.

2. **News Retrieval**  
   The **HTTP Request** node fetches the latest financial news from [FT.com](https://www.ft.com/).

3. **Content Extraction**  
   The **Extract Specific Content** node scrapes targeted sections of the HTML (headlines, editor's picks, top stories, etc.) using CSS selectors to locate and capture relevant content.

4. **News Aggregation**  
   The **Set Node** gathers and organizes the extracted news data, preparing it for summarization. Categories like "Headline #1," "Editor's Picks," and "Europe News" are all structured into a single data block.

5. **Summarization**  
   An **AI Agent** (Google Gemini) takes the aggregated news data and creates a concise, HTML-formatted summary tailored to give investors an insightful market snapshot.

6. **Email Delivery**  
   Finally, the **Microsoft Outlook** node sends the summary via email to the designated recipient with the subject "Financial news from today."

This process ensures that financial news is efficiently curated, summarized, and delivered without manual intervention.


## 📊 Basic Information

- **Workflow ID:** 2516
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 9861
- **Downloads:** 986
- **Created:** 2024/11/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2516)

## 👤 Author

- **Name:** Louis
- **Username:** @louisdl

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **html** 
- **httpRequest** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** 
- **microsoftOutlook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
