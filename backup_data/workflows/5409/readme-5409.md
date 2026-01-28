# Transform images with AI image editor using FLUX.1 Kontext

> ## For Who?

- Content Creators
- Youtube Automation
- Marketing Team

---

## How it works?

**1 -** Retrieve Base Image, Image Description and Situation from Airtable
**2 -** Generate Image Prompt
**3 -** Generate Image via Fal AI
**4 -** Verify if Image is generated
**5 -** Upload Image on Airtable

📺 **YouTube Video Tutorial:** 
[![Watch on YouTube](https://img.youtube.com/vi/0SVj70-dA0Q/maxresdefault.jpg)](https://www.youtube.com/watch?v=0SVj70-dA0Q)

---

## SETUP

**Setup Input :** The first part of the workflow can be replaced with anything else. You need as input a Prompt and the Base Image URL (publicly available).

**Setup Output :** In this Workflow, the output is storing the image on Airtable but you can replace that with anything else but basically you have two options : 
- Store the Generated Image somewhere : Keep everything like this and replace the last Airtable node with the Third Party you want to use.
- Use the Image directly in n8n : In HTTP Request "Generate Image" switch sync_mode to "true", remove all the following nodes and add "Extract form File" node (convert to Base64 String)


**APIs :** For the following third-party integrations, replace ==[YOUR_API_TOKEN]== with your API Token or connect your account via Client ID / Secret to your n8n instance:
- Fal AI (FLUX KONTEXT MAX) : https://fal.ai/models/fal-ai/flux-pro/kontext/max/api#schema-input
- Airtable : https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.airtable




## 📊 Basic Information

- **Workflow ID:** 5409
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 885
- **Downloads:** 88
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5409)

## 👤 Author

- **Name:** Nasser
- **Username:** @nasser

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **airtable** (×2)
- **httpRequest** (×2)
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×6)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
