# Generate & rank animal advocacy content with Claude AI, Open Paws & Hugging Face

> # Multi-Version Content Generator with AI Scoring & Advocacy Preference Ranking ✍️

## Who’s it for 🐾  
This workflow is ideal for animal advocates, campaign managers, and content creators who want to generate multiple versions of written content—such as blog posts, emails, or social media captions—and identify the most effective and persuasive options using advanced AI scoring models.

## How it works / What it does ⚙️  
The flow takes user input specifying content type, tone, style, and topic. It calls a powerful research and content generation subworkflow to produce five fully written content variations. These are split and passed to a scoring subworkflow that uses Open Paws AI models trained on real-world social media and email marketing data, combined with evaluations from animal advocacy experts. Finally, it aggregates the content with their performance and prediction scores, outputting a ranked list of content options.

## How to set up 🛠️  
Add the following subworkflows to your n8n instance before running this flow:  
- [Multi-Tool Research Agent for Animal Advocacy](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/)  
- [Evaluate Animal Advocacy Text with Hugging Face & Open Paws AI Models](https://n8n.io/workflows/5587-evaluate-animal-advocacy-text-with-hugging-face-open-paws-ai-models/)  

## Requirements 📋  
- n8n instance  
- API key for OpenRouter
- The linked research and scoring subworkflows installed and accessible

## How to customize the workflow 🎨  
Modify the user input fields to change content type, tone, style, and topic. You can extend the scoring node or integrate this flow as a subworkflow within larger automation pipelines—for example, to schedule posting or feed an AI agent for content selection.


## 📊 Basic Information

- **Workflow ID:** 6485
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 252
- **Downloads:** 25
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6485)

## 👤 Author

- **Name:** Open Paws
- **Username:** @openpaws

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **executeWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **splitOut** 
- **executeWorkflowTrigger** 
- **stickyNote** (×4)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
