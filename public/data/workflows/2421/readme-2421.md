# Transcribing bank statements to markdown using Gemini Vision AI

> This n8n workflow demonstrates an approach to parsing bank statement PDFs with multimodal LLMs as an alternative to traditional OCR. This allows for much more accurate data extraction from the document especially when it comes to tables and complex layouts.

Multimodal Parsing is better than traditiona OCR because:
* It reduces complexity and overhead by avoiding the need to preprocess the document into text format such as markdown before passing to the LLM.
* It handles non-standard PDF formats which may produce garbled output via traditional OCR text conversion.
* It's orders of magnitude cheaper than premium OCR models that still require post-processing cleanup and formatting. LLMs can format to any schema or language you desire!

## How it works

You can use the example bank statement created specifically for this workflow here: [https://drive.google.com/file/d/1wS9U7MQDthj57CvEcqG_Llkr-ek6RqGA/view?usp=sharing](https://drive.google.com/file/d/1wS9U7MQDthj57CvEcqG_Llkr-ek6RqGA/view?usp=sharing)

* A PDF bank statement is imported via Google Drive. For this demo, I've created a mock bank statement which includes complex table layouts of 5 columns. Typically, OCR will be unable to align the columns correctly and mistake some deposits for withdrawals.
* Because multimodal LLMs do not accept PDFs directly, well have to convert the PDF to a series of images. We can achieve this by using a tool such as [Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF/). Stirling PDF is self-hostable which is handy for sensitive data such as bank statements.
* Stirling PDF will return our PDF as a series of JPGs (one for each page) in a zipped file. We can use n8n's decompress node to extract the images and ensure they are ordered by using the Sort node.
* Next, we'll resize each page using the Edit Image node to ensure the right balance between resolution limits and processing speed.
* Each resized page image is then passed into the Basic LLM node which will use our multimodal LLM of choice - Gemini 1.5 Pro. In the LLM node's options, we'll add a "user message" of type binary (data) which is how we add our image data as an input.
* Our prompt will instruct the multimodal LLM to transcribe each page to markdown. Note, you do not need to do this - you can just ask for data points to extract directly! Our goal for this template is to demonstrate the LLMs ability to accurately read the page.
* Finally, with our markdown version of all pages, we can pass this to another LLM node to extract required data such as deposit line items.

## Requirements

* Google Gemini API for Multimodal LLM.
* Google Drive access for document storage.
* [Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF) instance for PDF to Image conversion

## Customising the workflow

* At time of writing, Gemini 1.5 Pro is the most accurate in text document parsing with a relatively low cost. If you are not using Google Gemini however you can switch to other multimodal LLMs such as OpenAI GPT or Antrophic Claude. 

* If you don't need the markdown, simply asking what to extract directly in the LLM's prompt is also acceptable and would save a few extra steps.

* Not parsing any bank statements any time soon? This template also works for Invoices, inventory lists, contracts, legal documents etc.

## 📊 Basic Information

- **Workflow ID:** 2421
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 16729
- **Downloads:** 1672
- **Created:** 2024/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2421)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **sort** 
- **stickyNote** (×8)
- **googleDrive** 
- **httpRequest** 
- **compression** 
- **code** 
- **editImage** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
