# AI research agents to automate PDF analysis with Mistral’s best-in-class OCR

> 
##  Overview

Mistral OCR is a cutting-edge document understanding API that improves how businesses extract and process information from complex documents. With top scores in benchmarks for accuracy and comprehension capabilities, Mistral OCR handles multi-column text, charts, diagrams, and multiple languages.

This workflow uses Mistral's Document understanding OCR API to automatically turns dense PDFs (such as financial reports) into either deep research reports or concise newsletters 

[![Multi-Agent Research team ](https://img.youtube.com/vi/Z9Lym6AZdVM/sddefault.jpg)](https://youtu.be/Z9Lym6AZdVM)



## Key Features

* **Superior Document Understanding**: Processes complex documents with high-fidelity rendering
* **Multi-Format Support**: Handles PDFs containing text, images, charts, and diagrams
* **Multilingual Capabilities**: Accurately processes documents in various languages
* **Seamless API Integration**: Easy implementation through cloud-based API
* **Customizable Research Depth**: Generate comprehensive 8-page reports or concise 1,750-word newsletters

## How It Works

1. Document Upload: Submit your PDF through an n8n form interface.

2. Output Format Selection: Choose between comprehensive deep research (3,500 words) or Concise newsletter (1,750 words)

3. Custom Instructions: Tailor the analysis by adding specific focus areas (e.g., quantitative data, growth catalysts).

4. AI Processing: The document undergoes multi-stage AI analysis: OCR and text extraction using Mistral AI and Content structuring and summarization using GPT models

Agents:
- Research Leader: Plans and conducts initial research, creating a table of contents.
- Project Planner: Breaks down the table of contents into manageable sections.
- Research Assistants: Multiple agents that conduct in-depth research on assigned sections.
- Editor: Compiles and refines the final article, ensuring coherence and proper citations.


## Setup
1. API Key Acquisition:
- Obtain an API key from OpenRouter.ai
- Get an API key from Mistral.ai

2. n8n Configuration:
- In your n8n instance, navigate to the credentials section.
- Create new credentials for OpenRouter and Mistral, inputting the respective API keys.

3. Form Configuration:
- Customize the input form fields if needed (e.g., adding company-specific options).

- Output Customization: Adjust the word count parameters in the Project Planner node to change output length.

## 📊 Basic Information

- **Workflow ID:** 3223
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 4385
- **Downloads:** 438
- **Created:** 2025/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3223)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **merge** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **gmail** 
- **executeWorkflowTrigger** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×4)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
