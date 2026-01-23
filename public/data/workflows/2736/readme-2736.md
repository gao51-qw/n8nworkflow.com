# Summarize YouTube videos from transcript

> **Who is this template for?**  
This workflow template is designed for content creators, researchers, educators, and professionals who need quick, accurate summaries of YouTube videos. It’s ideal for those looking to save time, extract key insights, or repurpose video content into concise formats for reports, studies, or social media.  

**What does it do?**  
The workflow automates the process of summarizing YouTube videos by extracting the transcript, analyzing the content, and generating a concise summary. It leverages AI tools to ensure accuracy and relevance, making it easier to digest lengthy videos in seconds.  

**Why is it useful?**  
This template saves hours of manual effort by automating video summarization, enabling users to focus on analyzing or sharing insights rather than watching entire videos. It’s particularly useful for staying updated with trends, conducting research, or creating content efficiently.  

**How does it work?**  
The workflow integrates with YouTube’s Transcript API powered by Apify Actor to fetch video transcripts, process the text using AI-powered summarization tools, and deliver a clear, concise summary.

**Setup Instructions**

You need an Apify account and an API key to connect with the Actor. Follow the steps below:

1. Create a Free Account.
2. Choose the appropriate Actor from the Apify search.  
3. Under the **Integration** tab, click on “Use API endpoints.”  
3. Select the API that best suits your needs.  


## 📊 Basic Information

- **Workflow ID:** 2736
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 72246
- **Downloads:** 7224
- **Created:** 2025/1/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2736)

## 👤 Author

- **Name:** Ahmed Alnaqa
- **Username:** @ahmedalnaqa

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **httpRequest** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
