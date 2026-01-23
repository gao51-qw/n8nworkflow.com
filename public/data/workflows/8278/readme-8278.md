# Qualify leads with AI review analysis using Azure GPT-4o-mini and Google Sheets

> **Description:**

Turn raw customer feedback into actionable insights with this intelligent n8n workflow template! Automatically capture reviews from Google Sheets, run AI-driven sentiment and intent analysis, and enrich your dataset with structured insights—no manual review required.

This automation connects to your feedback form responses, processes reviews with an AI model, classifies intent, evaluates sentiment, assigns a score, and generates concise summaries. The results are then parsed, merged with original customer details, and stored in a structured Google Sheet for easy tracking. Perfect for sales, product, and customer success teams looking to streamline lead qualification and feedback analysis.

**What This Template Does:** 

📊 Captures new customer feedback from Google Sheets in real time
 🧠 Uses AI to classify intent (praise, complaint, suggestion, etc.)
 😊 Detects sentiment (positive, neutral, negative, or mixed)
 🔢 Assigns a review score (1–10) for quick lead qualification
 📝 Generates short, meaningful summaries of customer reviews
 📂 Saves enriched data into a structured destination sheet
 🌟 100% hands-free: just let AI process and organize your feedback

**Built-in Logic Ensures:**

 ✔️ Clean JSON-based AI output (intent, sentiment, score, summary)
 ✔️ Customer details remain tied to their feedback and insights
 ✔️ Final dataset is ready for reporting, CRM import, or dashboards

**Requirements:**

- Google Sheets with customer feedback form responses
- Google Sheets account for storing enriched data
- Azure OpenAI (or compatible) account for AI analysis
- n8n instance (self-hosted or cloud)

**Perfect For:**

- Sales teams qualifying leads based on review sentiment
- Product managers analyzing user feedback at scale
- Customer success teams identifying risks and opportunities
- Analysts turning unstructured reviews into actionable insights

## 📊 Basic Information

- **Workflow ID:** 8278
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 128
- **Downloads:** 12
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8278)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **code** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
