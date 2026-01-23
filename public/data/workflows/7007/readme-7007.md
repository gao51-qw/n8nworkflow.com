# Ai-powered LinkedIn content generator with OpenAI GPT-4 and DALL-E

> 
## This n8n template helps you build a full AI-powered LinkedIn content generator with just a few clicks. 

Paired with the [free WeWeb UI template](https://go.weweb.io/zoYeg5g), it becomes a ready-to-use web app where users can:
- Add their own OpenAI API key  
- Customize the prompt and define 6 content topics  
- Edit the AI-generated topics  
- Choose when to generate LinkedIn posts, complete with hashtags and an optional image

## Who This Is For
Perfect for marketers, indie hackers, and solopreneurs who want to build their personal brand on LinkedIn while staying in control of what gets posted.

---

## 🧠 What Makes This Different

Unlike most AI agents, **you stay fully in control**:
- You define the tone and focus via the prompt.
- You choose which topics to keep or modify.
- You decide when to generate a post.
- You can build on top of this and create your own SaaS product.

It’s also **modular and extendable**—hook it up to your backend, add user login, or feed AI improvements based on user input.

---

## ⚙️ How It Works
1. **Triggering Events**: The app includes 3 pre-configured triggers, ready to be hooked into your WeWeb frontend. Just update the webhook URLs after duplicating the n8n workflow.
2. **Topic Generation**: A call is made to OpenAI (GPT-4) to generate topic ideas based on your prompt.
3. **Post Creation**: Once topics are approved or edited, GPT-4 writes full posts with suggested hashtags.
4. **Image Generation** *(Optional)*: If enabled, a DALL·E call generates a relevant image.
5. **Everything Stays Local**: All data and images are handled locally, no cloud storage setup needed.

---

## 🧪 Requirements & Setup
No fancy infrastructure required. Here’s what helps you get started:
- **Free WeWeb account** (recommended) to use the frontend UI template  
- **OpenAI account** with API access (for GPT-4 and DALL·E)  
- **n8n account** (self-hosted or cloud) to run the backend workflow  

The template is **completely free** to use. Since each user adds their own OpenAI API key, you don't need to worry about usage costs or rate limits on your end.

---

## 🔧 Want to Go Further?
This setup is beginner-friendly, but developers can:
- Add user accounts  
- Save post history  
- Feed user feedback back into the prompt logic  
- Launch their own branded version as a SaaS

## 📊 Basic Information

- **Workflow ID:** 7007
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1069
- **Downloads:** 106
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7007)

## 👤 Author

- **Name:** WeWeb
- **Username:** @weweb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **respondToWebhook** (×3)
- **httpRequest** 
- **webhook** (×3)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
