# Generating image embeddings via textual summarisation

> This n8n template demonstrates an approach to image embeddings for purpose of building a quick image contextual search. Use-cases could for a personal photo library, product recommendations or searching through video footage.

## How it works
* A photo is imported into the workflow via Google Drive.
* The photo is processed by the edit image node to extract colour information. This information forms part of our semantic metadata used to identify the image.
* The photo is also processed by a vision-capable model which analyses the image and returns a short description with semantic keywords.
* Both pieces of information about the image are combined with the metadata of the image to form a document describing the image.
* This document is then inserted into our vector store as a text embedding which is associated with our image.
* From here, the user can query the vector store as they would any document and the relevant image references and/or links should be returned.

## Requirements
* Google account to download image files from Google Drive.
* OpenAI account for the Vision-capable AI and Embedding models.

## Customise this workflow

Text summarisation is just one of many techniques to generate image embeddings. If the results are unsatisfactory, there are dedicated image embedding models such as [Google's vertex AI multimodal embeddings](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings).

## 📊 Basic Information

- **Workflow ID:** 2344
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 9227
- **Downloads:** 922
- **Created:** 2024/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2344)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **googleDrive** 
- **editImage** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×9)
- **merge** 
- **set** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
