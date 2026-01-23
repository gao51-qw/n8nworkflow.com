# Analyze & publish GCE O-Level Math predictions with Perplexity AI to WordPress & Slack

> ## **Introduction**
Exams create significant stress for students. This workflow automates syllabus analysis and predicts exam trends using AI, helping educators and students better prepare for GCE 'O' Level Mathematics in Singapore.

## **How It Works**
Trigger → Fetch Syllabus → Extract & Prepare Data → Load History → AI Analyze → Parse → Format → Convert → Publish → Notify

## **Workflow Template**
Manual Trigger → Fetch O-Level Math Syllabus → Extract Syllabus Text → Prepare Analysis Data → Load Historical Context → AI Analysis Agent → Parse AI Output → Format Report → Convert to HTML → Publish to WordPress → Send Slack Summary

## **Data Collection & AI Processing**
HTTP retrieves O-Level Math syllabus from SEAB and extracts text. Loads 3-5 years exam history. OpenRouter compares syllabus vs trends, predicts topics with confidence scores.

## **Report Generation & Publishing**
Formats AI insights to Markdown (topics, trends, recommendations), converts to HTML. Auto-publishes to WordPress and sends Slack summary with report link.

## **Workflow Steps**
1. Fetch & extract syllabus from SEAB site
2. Load historical exam content
3. AI analyzes syllabus + trends via OpenRouter model
4. Parse and format AI output to Markdown/HTML
5. Auto-publish report to WordPress and Slack

## **Setup Instructions**
1. Connect HTTP node to SEAB syllabus URL
2. Configure OpenRouter AI model with API key
3. Set WordPress and Slack credentials for publishing

## **Prerequisites**
OpenRouter account, WordPress API access, Slack webhook, SEAB syllabus link.

## **Use Cases**
Predict 2025 GCE Math topics, generate AI insights, publish summaries for educators.

## **Customization**
Adapt for other subjects or boards by changing syllabus source and analysis prompt.

## **Benefits**
Enables fast, data-driven exam forecasting and automated report publication.


## 📊 Basic Information

- **Workflow ID:** 10396
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 64
- **Downloads:** 6
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10396)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **extractFromFile** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **markdown** 
- **html** 
- **wordpress** 
- **slack** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
