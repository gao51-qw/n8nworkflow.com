# Multi-agent PDF-to-blog content generation

> **Purpose of workflow:**

The purpose of this workflow is to automatically transform complex, lengthy PDFs into concise, insightful blog posts. This process aims to make dense information more accessible and understandable to a broader audience.

**How it works:**

Multi-agent team:

Working together to transform PDF to insightful blog
- Content Analyst: Extracts key information and structure from the PDF.
- Project Planner: Organizes the workflow and ensures efficient processing.
- Writers: Multiple agents that craft engaging content based on the analyzed information.
- Editor: Polishes the final output for accuracy, reliability, and readability.


**Step by step**
1. User inputs parameters via a n8n form (tone, word count, sections, PDF file).
2. System extracts text from the PDF.
3. Content Analyst AI agent analyzes the extracted text, identifying main topics and key points.
4. Project Planner AI agent organizes the workflow, creating a structure for the blog post.
5. Multiple Writer AI agents (based on the number of sections specified) each write a portion of the blog post.
6. Editor AI agent combines all sections and polishes the final draft.
7. Generates a title for the blog post.
8. Final content is uploaded to a publishing Ghost platform


## 📊 Basic Information

- **Workflow ID:** 2457
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 14305
- **Downloads:** 1430
- **Created:** 2024/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2457)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **merge** 
- **code** 
- **formTrigger** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **ghost** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
