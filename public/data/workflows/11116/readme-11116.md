# Generate fact-checked research reports with Llama AI and Web search

> # **Who’s it for**

This template is designed for creators, researchers, freelance writers, founders, and automation professionals who want a reliable way to generate structured, citation-backed research content without doing manual data collection. Anyone creating blog posts, reports, briefs, or research summaries will benefit from this system.

# What it does

This workflow turns a simple form submission into a complete research pipeline. It accepts a topic, determines what needs to be researched, gathers information from the web, writes content, fact-checks it against the collected sources, edits the draft for clarity, and compiles a final report.
It behaves like a small agentic research team inside n8n.

# How it works

- A form collects the research topic, depth, and desired output format.

- A research agent generates focused search queries.

- SERP API retrieves real-time results for each query.

- The workflow aggregates and structures all findings.

- A writing agent creates the first draft based on the data.

- A fact-checking agent verifies statements against the sources.
- An editor agent improves tone, flow, and structure.
- A final review agent produces the completed research document with citations.
- This workflow includes annotated sticky notes to explain each step and guide configuration.

# Requirements

- Groq API key for running the Llama 3.3 model.
- SERP API key for performing web searches.
- An n8n instance (cloud or self-hosted).
- No additional dependencies are required.

# How to set up

- Add your Groq and SERP API credentials using n8n’s credential manager.
- Update the form fields if you want custom depth or output formats.
- Follow the sticky notes for detailed configuration.
- Run the workflow and submit a topic through the form to generate your first research report.

# How to customize

- Replace the writer agent with a different model if you prefer a specific writing style.
- Adjust the number of search queries or SERP results for deeper research.
- Add additional steps such as PDF generation, sending outputs to Notion, or publishing to WordPress.
- Modify the form to suit industry-specific content needs.

## 📊 Basic Information

- **Workflow ID:** 11116
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 106
- **Downloads:** 10
- **Created:** 2025/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11116)

## 👤 Author

- **Name:** Muhammad Shaheer Awan
- **Username:** @shaheer03

## 🏷️ Categories

- Content Creation
- AI RAG

## 🔗 Nodes Used

- **formTrigger** 
- **code** (×4)
- **httpRequest** (×2)
- **merge** (×2)
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×4)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
