# Compare local Ollama Vision models for image analysis using Google Docs

> ## Compare Local Ollama Vision Models for Image Analysis using Google Docs

Process images using locally hosted Ollama Vision Models to extract detailed descriptions, contextual insights, and structured data. Save results directly to Google Docs for efficient collaboration.

### Who is this for?
This workflow is ideal for developers, data analysts, marketers and AI enthusiasts who need to process and analyze images using locally hosted Ollama Vision Language Models. It’s particularly useful for tasks requiring detailed image descriptions, contextual analysis, and structured data extraction.

### What problem is this workflow solving? / Use Case
The workflow solves the challenge of extracting meaningful insights from images in exhaustive detail, such as identifying objects, analyzing spatial relationships, extracting textual elements, and providing contextual information. This is especially helpful for applications in real estate, marketing, engineering, and research.

### What this workflow does
This workflow:
1. Downloads an image file from Google Drive.
2. Processes the image using multiple Ollama Vision Models (e.g., Granite3.2-Vision, Gemma3, Llama3.2-Vision).
3. Generates detailed markdown-based descriptions of the image.
4. Saves the output to a Google Docs file for easy sharing and further analysis.

### Setup
1. Ensure you have access to a local instance of Ollama.  https://ollama.com/
2. Pull the Ollama vision models.
3. Configure your Google Drive and Google Docs credentials in n8n.
4. Provide the image file ID from Google Drive in the designated node.
5. Update the list of Ollama vision models
6. Test the workflow by clicking ‘Test Workflow’ to trigger the process.

### How to customize this workflow to your needs
- Replace the image source with another provider if needed (e.g., AWS S3 or Dropbox).
- Modify the prompts in the "General Image Prompt" node to suit specific analysis requirements.
- Add additional nodes for post-processing or integrating results into other platforms like Slack or HubSpot.

## Key Features:
- **Detailed Image Analysis**: Extracts comprehensive details about objects, spatial relationships, text elements, and contextual settings.
- **Multi-Model Support**: Utilizes multiple vision models dynamically for optimal performance.
- **Markdown Output**: Formats results in markdown for easy readability and documentation.
- **Google Drive Integration**: Seamlessly downloads images and saves results to Google Docs.




## 📊 Basic Information

- **Workflow ID:** 3185
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 4756
- **Downloads:** 475
- **Created:** 2025/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3185)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **manualTrigger** 
- **httpRequest** 
- **set** (×6)
- **splitInBatches** 
- **extractFromFile** 
- **googleDrive** 
- **splitOut** 
- **googleDocs** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
