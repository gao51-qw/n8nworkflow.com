# Validate newsletter quality with GPT-5 quality gate before sending

> ## Newsletter Quality Assurance with LLM Judge

This sub-workflow validates newsletter quality before sending to customers. It's triggered by the main newsletter workflow and acts as an automated quality gate to catch data issues, broken layouts, or missing content.

## Who's it for

E-commerce teams who want to automate newsletter quality checks and prevent broken or incomplete emails from reaching customers. Perfect for ensuring consistent brand quality without manual review.

## How it works

1. **Receives newsletter HTML** - Triggered by parent workflow with the generated newsletter content
2. **Sends to test inbox** - Delivers newsletter to LLM Judge's Gmail inbox to validate actual rendering
3. **Retrieves rendered email** - Fetches the email back from Gmail to analyze how it actually renders (catches Gmail-specific issues)
4. **AI-powered validation** - GPT-5 analyzes the newsletter against quality criteria:
   - Verifies all 6 product cards have images, prices, and descriptions
   - Checks layout integrity and date range formatting
   - Detects broken images or unprocessed template variables
   - Validates sale prices are lower than original prices
5. **Decision gate** - Based on Judge's verdict:
   - **PASS**: Returns approval to parent workflow → sends to customers
   - **BLOCK**: Alerts admin via email → requires human review

## Set up steps

**Setup time: ~5 minutes**

1. Connect your **Gmail account** for sending test emails
2. Update the **Judge's email address** in "Send newsletter to LLM Judge" node
3. Update the **admin alert email** in error handling nodes
4. Connect your **OpenAI API** credentials (GPT-5 recommended for heavy HTML processing)
5. (Optional) Adjust quality thresholds in the Judge's system prompt

## Requirements

- Gmail account for test sends and retrieving rendered emails
- OpenAI API key (GPT-5 recommended)
- Parent workflow that passes newsletter HTML content

## How to customize

- **Adjust validation strictness**: Modify the Judge's system prompt to change what triggers BLOCK vs PASS
- **Change product count**: Update prompt if your newsletters have different numbers of products
- **Add custom checks**: Extend the system prompt with brand-specific validation rules
- **Modify alert recipients**: Update email addresses in error handling nodes

💡 **Pro tip**: The workflow validates the actual Gmail-rendered version to catch image loading issues and ensure consistent customer experience.

## 📊 Basic Information

- **Workflow ID:** 10734
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 56
- **Downloads:** 5
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10734)

## 👤 Author

- **Name:** Emir Belkahia
- **Username:** @emirbelkahia

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×10)
- **gmail** (×4)
- **wait** 
- **set** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
