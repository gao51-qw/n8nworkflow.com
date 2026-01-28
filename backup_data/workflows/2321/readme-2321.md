# Automate Your RFP Process with OpenAI Assistants

> This n8n workflow demonstrates how to automate oftern time-consuming form filling tasks in the early stages of the tendering process; the Request for Proposal document or "RFP".

It does this by utilising a company's knowledgebase to generating question-and-answer pairs using Large Language Models.

## How it works
* A buyer's RFP is submitted to the workflow as a digital document that can be parsed.
* Our first AI agent scans and extracts all questions from the document into list form.
* The supplier sets up an [OpenAI assistant](https://platform.openai.com/docs/assistants/overview) prior loaded with company brand, marketing and technical documents.
* The workflow loops through each of the buyer's questions and poses these to the OpenAI assistant.
* The assistant's answers are captured until all questions are satisified and are then exported into a new document for review.
* A sales team member is then able to use this document to respond quickly to the RFP before their competitors.

## Example Webhook Request

```
curl --location 'https://&lt;n8n_webhook_url&gt;' \
--form 'id="RFP001"' \
--form 'title="BlueChip Travel and StarBus Web Services"' \
--form 'reply_to="jim@example.com"' \
--form 'data=@"k9pnbALxX/RFP Questionnaire.pdf"'
```

## Requirements
* An OpenAI account to use AI services.

## Customising the workflow

OpenAI assistants is only one approach to hosting a company knowledgebase for AI to use. Exploring different solutions such as building your own RAG-powered database can sometimes yield better results in terms of control of how the data is managed and cost.

## 📊 Basic Information

- **Workflow ID:** 2321
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 10812
- **Downloads:** 1081
- **Created:** 2024/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2321)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.outputParserItemList** 
- **splitInBatches** 
- **stickyNote** (×10)
- **set** 
- **googleDocs** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **slack** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
