# Hacker news job listing scraper and parser

> This automated workflow scrapes and processes the monthly "Who is Hiring" thread from Hacker News, transforming raw job listings into structured data for analysis or integration with other systems. Perfect for job seekers, recruiters, or anyone looking to monitor tech job market trends.

## How it works

Automatically fetches the latest "Who is Hiring" thread from Hacker News
Extracts and cleans relevant job posting data using the HN API
Splits and processes individual job listings into structured format
Parses key information like location, role, requirements, and company details
Outputs clean, structured data ready for analysis or export

## Set up steps

1. Configure API access to [Hacker News](https://github.com/HackerNews/API
) (no authentication required)
2. Follow the steps to get your cURL command from [https://hn.algolia.com/](https://hn.algolia.com/) 
3. Set up desired output format (JSON structured data or custom format)
4. Optional: Configure additional parsing rules for specific job listing information
5. Optional: Set up integration with preferred storage or analysis tools
The workflow transforms unstructured job listings into clean, structured data following this pattern:

- Input: Raw HN thread comments
- Process: Extract, clean, and parse text
- Output: Structured job listing data

This template saves hours of manual work collecting and organizing job listings, making it easier to track and analyze tech job opportunities from Hacker News's popular monthly hiring threads.

## 📊 Basic Information

- **Workflow ID:** 2924
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 5113
- **Downloads:** 511
- **Created:** 2025/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2924)

## 👤 Author

- **Name:** Julian Kaiser
- **Username:** @jksr

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** (×3)
- **set** (×2)
- **filter** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** 
- **limit** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
