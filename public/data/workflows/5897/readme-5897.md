# Generate comprehensive research reports with Gemini AI and Tavily Search for Japanese users

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Automated Research Reports with AI and Tavily Search

An intelligent research automation workflow designed for Japanese users that transforms user queries into comprehensive HTML reports via email. Using Google Gemini AI and Tavily search, this workflow generates optimized search queries, conducts multi-perspective research, and delivers structured analysis reports in Japanese.

## Who's it for

Content creators, researchers, analysts, and businesses in Japan who need comprehensive research reports on various topics without manual information gathering. Particularly valuable for Japanese professionals conducting competitive analysis, market research, and technical comparisons who prefer reports in their native language.

## How it works

The workflow follows a strategic four-step process:

1. **Query Optimization**: Google Gemini AI analyzes user input and generates three optimized search queries for comprehensive coverage
2. **Multi-Query Research**: Tavily's advanced search executes all queries with deep search parameters and AI-generated answers
3. **Report Synthesis**: Another Gemini AI model consolidates findings, eliminates duplicates, and structures information into readable HTML format
4. **Email Delivery**: Gmail automatically sends the final HTML report to specified recipients

## Requirements

- Google Gemini API credentials (for three separate AI nodes)
- Tavily API credentials for advanced search functionality
- Gmail authentication for email delivery
- Basic n8n workflow execution permissions

## How to set up

1. **Configure API credentials** in all Google Gemini and Tavily nodes
2. **Update email settings** in the "Send a message" node with your recipient address
3. **Customize your query** in the "Edit Fields" node (default: "n8nとdifyの違い")
4. **Test the workflow** to ensure all connections work properly

## How to customize the workflow

**Research depth**: Increase `max_results` in Tavily search for more comprehensive data gathering. **Query optimization**: Modify system prompts in the Query Generator for domain-specific searches. **Report format**: Adjust the Report Agent's system message to change output structure, language, or focus areas. **Multi-recipient delivery**: Duplicate the Gmail node for multiple email destinations.

The workflow processes Japanese and English queries effectively, with built-in support for Japanese language output, making it ideal for Japanese professionals who need multilingual research capabilities. Advanced search parameters ensure high-quality, relevant results for professional research applications.

## 📊 Basic Information

- **Workflow ID:** 5897
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1148
- **Downloads:** 114
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5897)

## 👤 Author

- **Name:** Shun Fukuchi
- **Username:** @shunfkc

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@tavily/n8n-nodes-tavily.tavilyTool** 
- **gmail** 
- **stickyNote** (×7)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
