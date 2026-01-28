# Generate and auto-publish LinkedIn posts with GPT-4 text and AI images

> ## How it works
This workflow automates LinkedIn posting for businesses and personal brands.  
It starts with a form where you submit your post idea. Then:
1. **Message Model (OpenAI)** generates the LinkedIn post text in a professional and engaging style.  
2. **Image Generation (OpenAI)** creates a custom visual to match the post idea and brand style.  
3. **LinkedIn Node** publishes the text + image directly to your LinkedIn account.  

This way, you can go from idea → AI-written post → branded visual → live LinkedIn content, all in one automated flow.  

## Setup steps
- Connect your **Form Trigger** (or replace with Google Forms/Typeform/Notion etc. if you prefer).  
- Configure **OpenAI credentials** for text and image generation.  
- Adjust the AI prompts with your own details: `[business name]`, `[founder name]`, `[brand colors]`, `[tone of voice]`.  
- Connect your **LinkedIn account** in the final node.  

## Requirements
- OpenAI API key (for text + image generation)  
- LinkedIn account with API access  
- n8n instance (self-hosted or cloud)  


## 📊 Basic Information

- **Workflow ID:** 8007
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 685
- **Downloads:** 68
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8007)

## 👤 Author

- **Name:** Rodrigo
- **Username:** @rodrigonzalezsyncra

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **linkedIn** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
