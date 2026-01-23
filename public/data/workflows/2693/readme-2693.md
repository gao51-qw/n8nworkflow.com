# Make OpenAI citation for file retrieval RAG

> ## Make OpenAI Citation for File Retrieval RAG

## Use case

In this example, we will ensure that all texts from the OpenAI assistant search for citations and sources in the vector store files. We can also format the output for Markdown or HTML tags.

This is necessary because the assistant sometimes generates strange characters, and we can also use dynamic references such as citations 1, 2, 3, for example.

## What this workflow does

In this workflow, we will use an OpenAI assistant created within their interface, equipped with a vector store containing some files for file retrieval.

The assistant will perform the file search within the OpenAI infrastructure and will return the content with citations.

- We will make an HTTP request to retrieve all the details we need to format the text output.

## Setup

Insert an OpenAI Key

## How to adjust it to your needs

At the end of the workflow, we have a block of code that will format the output, and there we can add Markdown tags to create links. Optionally, we can transform the Markdown formatting into HTML.


## 📊 Basic Information

- **Workflow ID:** 2693
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 3922
- **Downloads:** 392
- **Created:** 2025/1/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2693)

## 👤 Author

- **Name:** Davi Saranszky Mesquita
- **Username:** @frkr

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **aggregate** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** (×2)
- **splitOut** (×3)
- **set** 
- **markdown** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
