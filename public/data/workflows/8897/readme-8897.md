# Detect keyword cannibalization with GPT-4o and Google Search Console

> **AI-Powered Keyword Cannibalization Detection Workflow**

**Overview**

This is an advanced n8n automation workflow designed to detect and analyze keyword cannibalization issues across multiple client websites using Google Search Console data and artificial intelligence. The system provides real-time monitoring and comprehensive reporting to help SEO professionals identify and resolve internal competition between pages ranking for the same keywords.

**Core Components**

**1. Automated Monitoring System**
- **Real-time trigger:** Monitors Google Sheets for keyword changes every minute
- **Multi-client support:** Handles up to 4 different client websites simultaneously
- **Intelligent routing:** Automatically directs each client's data through dedicated processing paths

**2. Data Collection & Processing**

- **GSC Integration:** Fetches 30 days of search performance data from Google Search Console API
- **Comprehensive metrics:** Collects keyword rankings, page URLs, positions, clicks, impressions, and CTR 
- **Data transformation:** Groups raw API responses by keywords for structured analysis
- **Cross-referencing:** Matches target keywords from Google Sheets with actual GSC performance data

**3. AI Analysis Engine**

- **GPT-4o powered:** Uses advanced AI to analyze keyword competition patterns
- **Risk categorization:** Automatically classifies cannibalization risk as:

 	- **High Risk:** 5+ pages competing for the same keyword
	- **Moderate Risk:** 3+ pages ranking in top 10 positions
	- **Low Risk:** 2 pages with one clearly dominating
	- **No Risk:** Single page ranking for the keyword
- **Intelligent reasoning:** Provides detailed explanations for each risk assessment

**4. Comprehensive Reporting**
- **Automated output:** Saves analysis results back to Google Sheets
- **Detailed insights:** Includes risk levels, reasoning, observations, and actionable remediation steps
- **Performance tracking:** Complete keyword performance metrics for client reporting
- **Status tracking:** Identifies which keywords are ranking vs. missing from search results

## 📊 Basic Information

- **Workflow ID:** 8897
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 423
- **Downloads:** 42
- **Created:** 2025/9/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8897)

## 👤 Author

- **Name:** Incrementors
- **Username:** @incrementors

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **code** (×5)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheetsTrigger** 
- **googleSheets** (×3)
- **if** (×5)
- **httpRequest** (×4)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
