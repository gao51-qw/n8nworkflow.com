# Ai research paper analysis & documentation with Decodo, GPT & Google

> 
*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Accelerate your research analysis with this Automated Research Intelligence System!  
This workflow uses AI and web scraping to analyze research papers and articles, extracting key insights, validating content quality, and generating comprehensive research documents. Perfect for research teams, academics, and AI enthusiasts staying current with the latest developments in artificial intelligence and machine learning.

## What This Template Does
1. Triggers via form submission for on-demand research URL analysis.  
2. Validates URL accessibility and prepares for processing.  
3. Uses Decodo scraper to extract research content from target URLs.  
4. Analyzes research papers with AI for comprehensive understanding.  
5. Validates summaries for accuracy, completeness, and relevance.  
6. Generates key insights and actionable takeaways from research.  
7. Creates professional Google Docs with formatted research summaries.  
8. Evaluates research quality with AI-powered rating system.  
9. Saves all research to Google Sheets for historical tracking.  
10. Sends Slack alerts for high-quality research findings (9+ rating).  

## Key Benefits
- Automated research analysis saves hours of manual reading time  
- AI-powered insights extraction from complex research papers  
- Quality validation ensures accurate and relevant summaries  
- Centralized research database for team collaboration  
- Real-time alerts for breakthrough research findings  
- Professional documentation automatically generated  

## Features
- Form-based trigger for easy research submission  
- URL validation and accessibility checking  
- AI-powered research analysis and summarization  
- Decodo web scraping for reliable content extraction  
- Multi-stage validation for accuracy and relevance  
- Automated Google Docs report generation  
- Quality assessment with structured rating system  
- Google Sheets integration for research tracking  
- Slack notifications for premium research findings  
- Quality threshold filtering for optimal results  

## Requirements
- Decodo API credentials for research scraping  
- OpenAI API credentials for AI analysis  
- Google Docs OAuth2 credentials for document creation  
- Google Sheets OAuth2 credentials with edit access  
- Slack Bot Token with chat:write permission  
- Environment variables for configuration settings  

## Target Audience
- AI research teams and data scientists  
- Academic researchers and university labs  
- Machine learning engineers and developers  
- Technology innovation teams  
- Research and development departments  
- Content creators in AI/ML space  

## Step-by-Step Setup Instructions
1. Connect Decodo API credentials for research scraping functionality  
2. Set up OpenAI credentials for AI analysis and quality assessment  
3. Configure Google Docs for automated research document generation  
4. Add Google Sheets credentials for research tracking and history  
5. Set up Slack credentials for high-quality research alerts  
6. Customize quality thresholds for research rating (default: 6+ for processing, 9+ for alerts)  
7. Test with sample research URLs to verify analysis and formatting  
8. Deploy the form for team access to research analysis requests  
9. Monitor research database for trends and insights  

**Pro Tip:** Pro Tip: Use coupon code "YARON" to get 23K requests for testing

This workflow transforms complex research into actionable intelligence with automated analysis, quality validation, and professional documentation!


## 📊 Basic Information

- **Workflow ID:** 10415
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 131
- **Downloads:** 13
- **Created:** 2025/11/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10415)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×3)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@decodo/n8n-nodes-decodo.decodoTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **googleDocs** (×2)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×2)
- **noOp** 
- **slack** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
