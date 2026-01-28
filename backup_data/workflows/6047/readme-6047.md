# AI video generator with Google Veo3 API (Veo 3 fast)

> ## Overview
This workflow leverages the KIE. AI Veo3 model to generate AI videos from simple text descriptions.  Users interact via a form interface, inputting a prompt (e.g., a scene description), and the system automatically submits the request to the KIE. AI API, monitors the generation status in real time, and retrieves the final video output.  It's ideal for content creators, marketers, or developers exploring text-to-video AI creation, supporting intelligent video generation with minimal setup.


## Prerequisites
- A KIE. AI account and API key: Sign up at [KIE.AI](https://kie.ai) to obtain your free or paid API key.
- An active n8n instance (cloud or self-hosted) with HTTP Request and form submission capabilities.
- Basic knowledge of AI prompts for video generation to achieve optimal results.

## Setup Instructions
1.  **Obtain API Key**: Register at KIE. AI and generate your API key.  Store it securely—do not share it publicly.
2.  **Configure the Form**: In the "On Form Submission" node, ensure fields like "prompt" (for video description) and "api_key" are set up.  Example prompt: `"A serene mountain landscape at sunset with birds flying." `
3.  **Test the Workflow**:
- Click "Execute Workflow" in n8n.
- Access the generated form URL, submit your prompt and API key.
- The workflow will poll the API every 10 seconds until the video is ready, then display the results.
4.  **Handle Outputs**: The final node formats and displays the video file URL for download or embedding.

## Customization Tips
- **Enhance Prompts**: Include specifics like duration, style (e.g., realistic, animated), actions, and visual elements to improve AI video quality.

- **Keywords for SEO**: This template focuses on AI video generation, text-to-video models, Veo3 API integration, and automated workflows.




## 📊 Basic Information

- **Workflow ID:** 6047
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 12975
- **Downloads:** 1297
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6047)

## 👤 Author

- **Name:** damo
- **Username:** @zengyichao

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **formTrigger** 
- **httpRequest** (×2)
- **wait** 
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
