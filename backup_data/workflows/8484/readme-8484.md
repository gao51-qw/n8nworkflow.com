# Generate product creative images with Google Nano-Banana model via Defapi

> ## Overview
This workflow utilizes the Defapi API with Google's Nano-Banana model to generate AI-powered product creative images from text prompts and product images. Users can interact through a simple form, providing a text prompt describing the desired creative scene, a product image URL, and their API key. The system automatically submits the request to the Defapi API, monitors the generation status in real time, and retrieves the final creative image output. This solution is ideal for marketers, product designers, e-commerce businesses, and content creators who want to quickly generate compelling product advertisements and creative visuals with minimal setup.


## Prerequisites
- A Defapi account and API key: Sign up at [Defapi.org](https://defapi.org) to obtain your API key.
- An active n8n instance (cloud or self-hosted) with HTTP Request and form submission capabilities.
- Basic knowledge of AI prompts for product creative generation to achieve optimal results.
- A product image URL for creative generation.

## Setup Instructions
1.  **Obtain API Key**: Register at Defapi.org and generate your API key. Store it securely—do not share it publicly.
2.  **Configure the Form**: In the "Submit Image for Creative Generation" node, ensure the following fields are set up: prompt (creative scene description), img_url (product image URL), api_key.
3.  **Test the Workflow**:
    - Click "Execute Workflow" in n8n.
    - Access the generated form URL, submit your prompt, image URL, and API key.
    - The workflow will wait 10 seconds and then poll the API status until the image generation is complete.
4.  **Handle Outputs**: The final node formats and displays the generated creative image URL for download or embedding.

## Customization Tips
- **Enhance Prompts**: Include specifics like scene setting, lighting, style (e.g., realistic, artistic, cinematic), product placement, and visual elements to improve AI creative image quality.


## 📊 Basic Information

- **Workflow ID:** 8484
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1766
- **Downloads:** 176
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8484)

## 👤 Author

- **Name:** panyanyany
- **Username:** @panyanyany

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **httpRequest** (×3)
- **formTrigger** 
- **wait** 
- **if** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
