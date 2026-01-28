# Create stylized product photography with Airtable & Gemini Nano Banana

> This workflow automates the process of generating stylized product photos for e-commerce by combining real product shots with creative templates. It enables the creation of a complete set of images for an SKU from a single product photo and a set of reusable templates. The workflow uses Google Gemini (Nano Banana) for image editing and Airtable as the data source.

**Example use case.** An apparel brand can use this workflow to turn plain product photos (e.g., socks on a white background) into lifestyle images that match their brand aesthetic. By combining each product photo with predefined templates and reference images, the workflow generates a variety of stylized results automatically - ready for marketing or online stores.

## How it works

This workflow expects the following Airtable table setup:
- **"Product Images"** - contains original product photos, one per record.
- **"Reference Images"** - contains reference images for templates, one per record.
- **"Templates"** - contains reusable generation templates. Each template includes a text prompt and up to three reference images.
- **"Jobs"** - contains batch generation jobs. Each job references multiple product images and multiple templates.
- **"Results"** - contains the generated outputs. Each result includes a generated image, references to the job, product image, and template, and a status field (pending, approved, rejected).


The workflow is triggered by a webhook that receives a job ID from Airtable. It then:
1. Fetches the job record.
2. Retrieves the associated product images and templates (each with its text prompt and reference images).
3. Downloads all required product and reference images.
4. For each product-template combination, sends these images and the prompt to Google Gemini to generate new AI-edited images.
5. Saves the generated images back into Airtable.

**NOTE**: A separate workflow should handle the human-in-the-loop approval process and any regeneration of rejected results.

## Requirements
1. Airtable Personal Access Token
2. Google Gemini API key

## Setup
1. Ensure all required Airtable tables exist.
2. Configure parameters in the **parameters** node:
    - Set Airtable Base ID
    - Set ID of the attachment field in the "Results" table (where the generated images will be uploaded) 
4. Configure credentials for all Airtable nodes.
5. Set Google Gemini API key for the "Generate..." nodes.

## 📊 Basic Information

- **Workflow ID:** 10250
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 633
- **Downloads:** 63
- **Created:** 2025/10/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10250)

## 👤 Author

- **Name:** Vadim
- **Username:** @coderik

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **airtable** (×7)
- **set** (×6)
- **splitOut** (×3)
- **splitInBatches** 
- **aggregate** 
- **merge** (×3)
- **httpRequest** (×3)
- **switch** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×3)
- **extractFromFile** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
