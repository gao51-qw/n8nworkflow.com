# Automate VIRAL Youtube titles & thumbnails creation (FLUX.1 + Apify)

> ## For Who?

- Content Creators
- Youtube Automation
- Marketing Team

---

## How it works?

**1 -** Enter your content idea in the Edit Fields node in a "raw" format. Ex : Boil Eggs Perfectly
**2 -** LLM create 3 keywords request based on the idea and Apify scrape the YTB Search
**3 -** Wait until the dataset is completed in Apify
**4 -** Retrieve Dataset from Apify, calculate approximation of CTR and filter top performing videos
**5 -** LLM analyze patterns of best performing titles and create a prompt based on it. Another LLM create 5 titles based on these criteria
**6 -** LLM analyze patterns of best performing thumbnails and create a prompt based on it. Another LLM create 1 thumbnail based on these criteria
**7 -** Return titles and thumbnail in a HTML Page

**📺 YouTube Video Tutorial:**
[![Watch on YouTube](https://img.youtube.com/vi/Upuj9Pi94g0/maxresdefault.jpg)](https://www.youtube.com/watch?v=Upuj9Pi94g0)

---

## SETUP

**Setup Input Content Idea :** Enter Keyword Related to the niche you want. Trigger can be replaced with anything as long as you retrieve a content idea. For example : Form submission, Database entry, etc ...

If you want to change the number of keywords, update the data accordingly in the "Create Keywords" LLM Chain node ➡️ Structured Output Parser AND in the "YTB Search Scrape" HTTP Request Node in Body ➡️ JSON ➡️ searchQueries.
If you want to change the number of scraped videos for each keyword, update the data accordingly in the "Create Videos Dataset" HTTP Request Node in Body ➡️ JSON ➡️ maxResults.
If you want to adjust the CTR Calculation feel free to update it in the Code Node ➡️ Follow the Comments (after "//") to find what you're looking for.
If you want to adjust the level of virality of the videos kept for analaysis go to Filter Node ➡️ Value.

**Setup Output HTML Page :** You can also replace this part with any type of storage. For example : Airtable Database, Google Drive/Google Sheet, Send to an email, etc ...

**APIs :** For the following third-party integrations, replace ==[YOUR_API_TOKEN]== with your API Token or connect your account via Client ID / Secret to your n8n instance :
- Apify : [https://docs.apify.com/api/v2/getting-started ](https://docs.apify.com/api/v2/getting-started )
- OpenAI : [https://platform.openai.com/docs/overview](https://platform.openai.com/docs/overview) (base URL : https://api.openai.com/v1) OR OpenRouter : [https://openrouter.ai/docs/quickstart](https://openrouter.ai/docs/quickstart) (base URL : https://openrouter.ai/api/v1)
- HuggingFace (FLUX.1) : [https://huggingface.co/docs](https://huggingface.co/docs)

---

👨‍💻 **More Workflows :** [https://n8n.io/creators/nasser/](https://n8n.io/creators/nasser/)

## 📊 Basic Information

- **Workflow ID:** 4504
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 2296
- **Downloads:** 229
- **Created:** 2025/5/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4504)

## 👤 Author

- **Name:** Nasser
- **Username:** @nasser

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **wait** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×4)
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×4)
- **if** 
- **code** (×3)
- **merge** (×2)
- **stickyNote** (×9)
- **set** 
- **html** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **extractFromFile** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
