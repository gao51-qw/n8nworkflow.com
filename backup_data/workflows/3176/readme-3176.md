# Generate images from text prompts with Google Imagen 3 via Replicate API

> ### Who is this for?
This n8n workflow is designed for developers, digital artists, and content creators who want to leverage the power of AI-generated images using the Replicate API.

### What problem is this workflow solving? / Use case
The workflow automates the process of generating images from textual prompts using the Replicate API. It allows users to generate, check the status of, and retrieve images with minimal manual intervention.

### What this workflow does
- **Initialize Workflow**: Triggered by a manual click, the workflow starts with a prompt for image generation.
- **Set Image Generation Parameters**: The user can define a prompt and other parameters, which will be sent to the Replicate API for processing.
- **Create Prediction**: The workflow sends a request to generate an image based on the provided input.
- **Check Prediction Status**: After a short waiting period, the workflow checks the status of the image generation process.
- **Handle Errors**: If the status indicates an error (e.g., "failed" or "canceled"), the workflow stops and reports an error.
- **Retrieve Image URL**: If the image generation is successful, it retrieves and outputs the URL of the generated image.

### Setup
1. **Replicate API Key**:
   - Go to the Replicate website and sign up for an account if you don’t have one.
   - Generate an API key from your Replicate dashboard.
2. **Configure HTTP Credentials**:
   - In n8n, navigate to the "Credentials" section and create a new HTTP Header Authentication credential.
   - Set the name to `Authorization`, and enter `Bearer YOUR_REPLICATE_API_KEY` in the value field, replacing `YOUR_REPLICATE_API_KEY` with your actual API key.

### How to customize this workflow to your needs
- **Edit the Prompt Text**: Change the text in the "Set prompt" node to customize the image you want to generate. This can be adjusted to include dynamic input from other parts of your n8n workflow.
- **Change Image Generation Settings**: In the "Create prediction" node, you may modify any parameters such as aspect ratio, safety filter level, or even the model being used by changing the URL.
- **Add More Logic**: If you want to add more complex logic or branching conditions based on the image generation results, modify the "Check for success" and "Check for errors" nodes accordingly.
- **Modify Wait Duration**: Depending on your application, you may want to adjust the waiting times in the "Wait" and "Pause" nodes to optimize processing time based on expected image generation speed.

## 📊 Basic Information

- **Workflow ID:** 3176
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1794
- **Downloads:** 179
- **Created:** 2025/3/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3176)

## 👤 Author

- **Name:** Audun
- **Username:** @xqus

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stopAndError** 
- **wait** (×2)
- **if** (×2)
- **set** (×3)
- **httpRequest** (×2)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
