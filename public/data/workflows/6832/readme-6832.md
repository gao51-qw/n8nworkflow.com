# Convert natural language to video JSON prompts with GPT and Gemini for Veo 3

> The Prompt converter workflow tackles the challenge of turning your natural language video ideas into perfectly formatted JSON prompts tailored for Veo 3 video generation. 

By leveraging Langchain AI nodes and Google Gemini, this workflow automates and refines your input to help you create high-quality videos faster and with more precision—think of it as your personal video prompt translator that speaks fluent cinematic!

## 💡 Why Use Prompt Converter?

**Save time:** Automate converting complex video prompts into structured JSON, cutting manual formatting headaches and boosting productivity.

**Avoid guesswork:** Eliminate unclear video prompt details by generating detailed, cinematic descriptions that align perfectly with Veo 3 specs.

**Improve output quality:** Optimize every parameter for Veo 3's video generation model to get realistic and stunning results every time.

**Gain a creative edge:** Turn vague ideas into vivid video concepts with AI-powered enhancement—your video project's secret weapon.

## ⚡ Perfect For

**Video creators:** Content developers wanting quick, precise video prompt formatting without coding hassles.

**AI enthusiasts:** Developers and hobbyists exploring Langchain and Google Gemini for media generation.

**Marketing teams:** Professionals creating video ads or visuals who need consistent prompt structuring that saves time.

## 🔧 How It Works

**⏱ Trigger:** User submits a free text prompt via message or webhook.

**📎 Process:** The text goes through an AI model that understands and reworks it into detailed JSON parameters tailored for Veo 3.

**🤖 Smart Logic:** Langchain nodes parse and optimize the prompt with cinematic details, set reasonable defaults, and structure the data precisely.

**💌 Output:** The refined JSON prompt is sent to Google Gemini for video generation with optimized settings.

## 🔐 Quick Setup

1. Import the JSON file to your [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
2. **Add credentials:** Azure OpenAI, Gemini API, OpenRouter API
3. **Customize:** Adjust prompt templates or default parameters in the Prompt converter node
4. **Test:** Run your workflow with sample text prompts to see videos come to life

## 🧩 You'll Need

- Active [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
- Azure OpenAI API
- Gemini API Key
- OpenRouter API (alternative AI option)

## 🛠️ Level Up Ideas

- Add integration with video hosting platforms to auto-upload generated videos


## 🧠 Nodes Used

- **Prompt Input** (Chat Trigger)
- **OpenAI** (Azure OpenAI GPT model)
- **Alternative** (OpenRouter API)
- **Prompt converter** (Langchain chain LLM for JSON conversion)
- **JSON parser** (structured output extraction)
- **Generate a video** (Google Gemini video generation)

---

**Made by:** [Khaisa Studio](https://khaisa.studio)  
**Tags:** video generation, AI, Langchain, automation, Google Gemini  
**Category:** Video Production  
**Need custom work?** [Contact me](https://khaisa.studio/pages/contact)

## 📊 Basic Information

- **Workflow ID:** 6832
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2225
- **Downloads:** 222
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6832)

## 👤 Author

- **Name:** Khairul Muhtadin
- **Username:** @khmuhtadin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
