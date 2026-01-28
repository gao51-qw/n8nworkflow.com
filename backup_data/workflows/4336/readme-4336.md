# Webhook-enabled AI PDF analyzer

> ## Who this template is for

This template is for researchers, students, professionals, or content creators who need to quickly extract and summarize key insights from PDF documents using AI-powered analysis.

## Use case

Converting lengthy PDF documents into structured, digestible summaries organized by topic with key insights. This is particularly useful for processing research papers, reports, whitepapers, or any document where you need to quickly understand the main topics and extract actionable insights without reading the entire document.

## How this workflow works

1. **Document Upload**: Receives PDF files through a POST endpoint at `/ai_pdf_summariser`
2. **File Validation**: Checks that the PDF is under 10MB and has fewer than 20 pages to meet API limits
3. **Content Extraction**: Extracts text content from the PDF file
4. **AI Analysis**: Uses OpenAI's GPT-4o-mini to analyze the document and break it down into distinct topics
5. **Insight Generation**: For each topic, generates 3 key insights with titles and detailed explanations
6. **Format Response**: Converts the structured data into markdown format for easy reading
7. **Return Results**: Provides the formatted summary along with document metadata (file hash)

## Set up steps

1. **Configure OpenAI API**: Set up your OpenAI credentials for the GPT-4o-mini model
2. **Deploy Webhook**: The workflow automatically creates a POST endpoint at `/ai_pdf_summariser`
3. **Test Upload**: Send a PDF file to the endpoint using a multipart/form-data request
4. **Adjust Limits**: Modify the file size (10MB) and page count (20) validation limits if needed based on your requirements
5. **Customize Prompts**: Update the system prompt in the Information Extractor node to change how topics and insights are generated

The workflow includes comprehensive error handling for file validation failures (400 error) and processing errors (500 error), ensuring reliable operation even with problematic documents.

## 📊 Basic Information

- **Workflow ID:** 4336
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 9087
- **Downloads:** 908
- **Created:** 2025/5/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4336)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **noOp** 
- **respondToWebhook** (×3)
- **if** 
- **code** 
- **extractFromFile** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **set** 
- **crypto** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
