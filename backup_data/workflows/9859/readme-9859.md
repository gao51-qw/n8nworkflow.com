# Monitor AI research papers with Gemini-powered filtering and email summaries

> #### This n8n workflow template implements an intelligent research paper monitoring system that automatically tracks new publications in ArXiv's Artificial Intelligence category, filters them for relevance using LLM-based analysis, generates structured summaries, and delivers a formatted email digest.

The system uses a three-stage pipeline architecture:
1. automated paper retrieval from ArXiv's API
2. AI-powered relevance filtering and analysis via Google Gemini
3. Intelligent summarization with HTML formatting for clean email delivery

This eliminates the need to manually browse ArXiv daily while ensuring you only receive summaries of papers genuinely relevant to your research interests.

## What This Template Does (Step-by-Step)

1. Runs on a configurable schedule (Tuesday-Friday) to fetch new papers from ArXiv's cs.AI category via their API.
2. Uses Google Gemini with structured output parsing to analyze each paper's relevance based on your defined criteria for "applicable AI research."
3. Generates concise, structured summaries for the three selected papers using a separate LLM call
4. Aggregates three relevant paper's data and summaries into a single, readable digest

## Important Notes
- The workflow only runs Tuesday through Friday, as ArXiv typically doesn't publish new papers on weekends
- Customize the "Paper Relevance Analyzer" criteria to match your specific research interests
- Adjust the similarity threshold and selection logic to control how many papers are included in each digest

## Required Integrations:
- ArXiv API (no authentication required)
- Google Gemini API (for relevance analysis and summarization)
- Email service (SMTP or email provider like Gmail, SendGrid, etc.)

## Best For:
🎓 Academic researchers tracking AI developments in their field
💼 ML practitioners and data scientists staying current with new techniques
🧠 AI enthusiasts who want curated, digestible research updates
🏢 Technical teams needing regular competitive intelligence on emerging approaches

## Key Benefits:
✅ Automates daily ArXiv monitoring, saving 60+ minutes of manual research time
✅ Uses AI to pre-filter papers, reducing information overload by 80-90%
✅ Delivers structured, readable summaries instead of raw abstracts
✅ Fully customizable relevance criteria to match your specific interests
✅ Professional HTML formatting makes digests easy to scan and share
✅ Eliminates the risk of missing important papers in your field

## 📊 Basic Information

- **Workflow ID:** 9859
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 590
- **Downloads:** 59
- **Created:** 2025/10/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9859)

## 👤 Author

- **Name:** Maxim Osipovs
- **Username:** @maximosipovs

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **emailSend** 
- **stopAndError** 
- **scheduleTrigger** 
- **code** (×3)
- **httpRequest** 
- **xml** 
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **merge** 
- **aggregate** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
