# Nested PDF analysis with Mistral AI & OneDrive for document summarization

> # Description
Automate the discovery and analysis of PDF files across a deeply nested OneDrive folder structure. This workflow recursively searches folders, filters for new or updated PDFs, extracts text, and uses a Mistral AI agent to generate a concise Executive Summary, Key Findings, and Structured Metadata (Date, Location, etc.), storing all insights into a n8n Data Table for easy access and further automation.

# Key Features & How It Works
#### Scheduled Trigger & Recursive Folder Search:

- The workflow runs automatically (scheduled for 8 PM in this template) to monitor a specified main folder on OneDrive.

- It performs a deep, multi-level search (up to 8 layers) across subfolders to ensure no documents are missed.

#### Smart Deduplication & Filtering:

- It checks new files against an internal n8n Data Table using the Compare Datasets node, ensuring only new or unique PDF files are processed, saving AI credits and processing time.

- A size check is also included, preventing attempts to process excessively large files.

- AI-Powered Document Intelligence (Mistral LLM):

#### For each new PDF, the workflow extracts the text and passes it to a Mistral AI model for dual-stream analysis:

- Overview Agent: Generates an impartial, professional Executive Summary, a list of Key Findings & Data Points, and the document's Scope/Context.

- Document Information Agent: Extracts crucial metadata, including the single most relevant date, location (City/State/Country), and professional information (Name, Title, Organization).

#### Structured Output and Archiving:

- AI outputs are meticulously validated and reformatted into a clean JSON object using Structured Output Parsers.

- The complete analysis, along with the original file name and path, is then logged as a new row in an n8n Data Table.

# Setup Notes
OneDrive Folder: You must specify the exact name of your main folder in the 'Search for Main Folder' node.

Data Table: Ensure your n8n Data Table exists with the required columns: Summary, Key_Findings, Scope, Date, Location, File_Name, and Path.

Deep Folder Structure: The current configuration supports up to 8 levels of subfolders. If your files go deeper, you may need to add more "Get items in a folder" and "If" nodes.

AI Customization: Review the AI agent prompts and the structured output schemas to customize the fields you want to extract or the summary style you require.

# Extend This Workflow
#### The final output is organized data. You can easily extend this workflow to:

- Send daily/weekly digest emails with new summaries.

- Sync the extracted data to a Google Sheet, Airtable, or other database.

- Add a secondary AI agent to perform follow-up actions based on the "Key Findings."

















## 📊 Basic Information

- **Workflow ID:** 10132
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 628
- **Downloads:** 62
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10132)

## 👤 Author

- **Name:** Jordan Hoyle
- **Username:** @jordanhoyle

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **microsoftOneDrive** (×10)
- **merge** (×2)
- **splitInBatches** (×4)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **dataTable** (×2)
- **if** (×9)
- **set** (×3)
- **compareDatasets** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 41 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
