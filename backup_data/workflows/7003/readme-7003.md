# AI model GPT-4.1-mini and hosting on AWS S3

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Overview
This workflow is designed for inspiring teams or individuals who need to quickly and efficiently serve files, content, or documents via the web. It offers a straightforward approach while still being flexible and adaptable for different branding needs. 

The HTML branding can be easily updated through an external LLM, making it possible to fully customize the look and feel without complex coding. You simply prompt the AI (using the JSON as a guide) to output your desired design.

*This template makes use of a powerful community node, which brings in the benefits of shared knowledge and collective improvement.*

## Setup Instructions
Copy the JSON Preset into your AI model or use your own, along with your custom branding requirements. Ask the model for an HTML response, then paste the output into the HTML Preset. 

Next, connect the JSON inputs into the relevant locations from the structured output parser.
Once complete, the static HTML can be served via AWS or another web server using HTTPS, ensuring secure and reliable delivery.

## Workflow Explanation
This AI Agent takes a simple user input and transforms it into dynamic HTML. The structured JSON output forces consistent formatting, while giving you the creative flexibility to adjust visuals on demand.

Since the output is relatively consistent the workflow can produce repitive business documents with consistency and accuracy.

## Requirements
- LLM account access
- AWS Account (S3) or HTTPs equivalent
- Basic HTML/JSON knowledge
- PDF.co Account

## 📊 Basic Information

- **Workflow ID:** 7003
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 166
- **Downloads:** 16
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7003)

## 👤 Author

- **Name:** Thomas Heal
- **Username:** @chopgod

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **html** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×6)
- **n8n-nodes-pdfco.PDFco Api** 
- **awsS3** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
