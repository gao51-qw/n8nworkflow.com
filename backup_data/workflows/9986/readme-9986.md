# AI-powered product video generator (Foreplay + Gemini + Sora 2)

> ## AI-Powered Product Video Generator (Foreplay + Gemini + Sora 2)

Sign Up For Foreplay [HERE](https://foreplay.co/?via=urpwUS)

Automatically generate personalized, cinematic-quality product videos using Foreplay’s ad data, Google Gemini AI for creative prompts, and Sora 2 for text-to-video generation.

## Who’s it for?
Perfect for marketers, brand managers, or creators who want to produce quick, high-quality video ads without manual scripting or editing.

## How it works
1. Fetch product data and related competitor videos from Foreplay.
2. Use Gemini AI to generate creative text-to-video prompts.
3. Send the prompt and image to Kie.ai to generate a short, cinematic product video.
4. Save the finished video automatically to Google Drive.

## How to set up
- Connect your [Foreplay](https://foreplay.co/?via=urpwUS), Google Drive, Gemini, and Kie.ai credentials.  
- Set your product image folder's permission (Google Drive) as public.  
- Add your API keys inside the _**Set Workflow Credentials**_ node.  
- Then run the workflow manually to generate your first video ad!

## 📊 Basic Information

- **Workflow ID:** 9986
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 4522
- **Downloads:** 452
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9986)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **manualTrigger** 
- **set** (×3)
- **googleDrive** (×2)
- **httpRequest** (×4)
- **splitOut** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **wait** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
