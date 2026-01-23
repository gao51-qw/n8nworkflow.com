# Extract license plate number from image uploaded via an n8n form

> ## What it does

This is a simplistic demo workflow showing how to extract a license plate number from an image of a car submitted via a form – or in more general terms showcasing how you can:

* use a form trigger to upload files and feed it into an LLM
* use a changeable LLM model for image-to-text analysis


## Set up steps

* Import the workflow
* Ensure you have registered and account, purchased some credits and created and API key for [OpenRouter.ai](https://openrouter.ai)
* Create/adapt the OpenRouter credential with your indivial API key for OpenRouter
* "Test workflow" and submit an image of a car with license plate to extract its number


## How to adapt

By changing the "prompt" in th "Settings" node you can quickly adapt this exemplatory workflow to other image-to-text use cases, such as:

* summarization: "summarize what's seen in the image"
* location finding: "identify the location where the image was taken"
* text extraction: "extract all text from the image and return it as markdown"

Thanks to using OpenRouter, you also can quickly experiment with finding good model choices by simply changing the "model" in the "Settings" node. The following models gave good results for this demo use-case:

* google/gemini-2.0-flash-001
* meta-llama/llama-3.2-90b-vision-instruct
* openai/gpt-4o

The llama-3.2-11b and even claude-3.5-sonnet didn't recognize all characters in all test images.

Using a generic LLM-model offers a quick way of prototyping an image-to-text application. For specific use cases in serious and scalable production deployments, consider using an API based service specifically made to that purpose, such as:

* Google Cloud Vision API
* Microsoft Azure Computer Vision
* Azure AI Document Intelligence
* Amazon Textract



## 📊 Basic Information

- **Workflow ID:** 2911
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2637
- **Downloads:** 263
- **Created:** 2025/2/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2911)

## 👤 Author

- **Name:** Daniel Nolde
- **Username:** @dnolde

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** 
- **form** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **set** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
