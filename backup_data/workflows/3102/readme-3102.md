# Parse and Extract Data from Documents/Images with Mistral OCR

> Mistral OCR is a super convenient way to parse and extract data from multi-page PDFs or single images using AI.

What makes it special and differs it from the competition is that Mistral OCR also performs document page splitting and markdown conversion. This helps reduce dependencies required for document parsing workflows where tools like StirlingPDF.

Read the official documentation on Mistral OCR API here: [https://docs.mistral.ai/capabilities/document/#tag/ocr/operation/ocr_v1_ocr_post](https://docs.mistral.ai/capabilities/document/#tag/ocr/operation/ocr_v1_ocr_post)

## How it works
* To access Mistral-OCR, you'll need to use Mistral Cloud API via the HTTP request node
* Mistral OCR can only accept 2 file types: PDF and Image. Here, we use 2 different request to the Mistral-OCR API to parse a bank statement PDF and an screenshot of a bank statement to extract the tables.
* Next, we explore a more secure method of uploading documents to the Mistral OCR API by using Mistral's cloud storage. In example 2, we first store a copy of our documents to Mistral cloud and then generate a signed URL to retreive the file before sending it to Mistral OCR. This ensures the file is not accessible publicly and protects it from unauthorised access.
* Finally, another way to use Mistral-OCR is via document understanding. This allows you to ask questions about the document rather than extract contents from it. In example 3, I demonstrate this use-case asking Mistral-small to tell me how many deposits are shown in the bank statement.

## How to use
* Ensure your documents are either publicly accessible for Mistral-OCR or upload them to Mistral Cloud. Alternatively, signed urls from AWS S3 or Cloudflare R2 should also work.

## Requirements
* Mistral Cloud account and API  Key. You'll also need credit on your account to use Mistral-OCR.

## Customising the workflow
* Mistral-OCR also works for images such as charts and diagrams so try using it on Financial Reports.
* Mistral-OCR is even cheaper with batching enabled. This returns your results within 24hrs but is half the price per page.

## 📊 Basic Information

- **Workflow ID:** 3102
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 40421
- **Downloads:** 4042
- **Created:** 2025/3/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3102)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×10)
- **manualTrigger** 
- **googleDrive** (×2)
- **set** (×4)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
