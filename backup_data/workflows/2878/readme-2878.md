# Host your own AI deep research agent with n8n, Apify and OpenAI o3

> **This template attempts to replicate OpenAI's DeepResearch feature which, at time of writing, is only available to their pro subscribers.**

&gt; An agent that uses reasoning to synthesize large amount of online information and complete multi-step research tasks for you.
[Source](https://openai.com/index/introducing-deep-research/)

Though the inner workings of DeepResearch have not been made public, it is presumed the feature relies on the ability to deep search the web, scrape web content and invoking reasoning models to generate reports. All of which n8n is really good at!

Using this workflow, n8n users can enjoy a variation of the Deep Research experience for themselves and their teams at a fraction of the cost. Better yet, learn and customise this Deep Research template for their businesses and/or organisations.

**Check out the generated reports here:** [https://jimleuk.notion.site/19486dd60c0c80da9cb7eb1468ea9afd?v=19486dd60c0c805c8e0c000ce8c87acf](https://jimleuk.notion.site/19486dd60c0c80da9cb7eb1468ea9afd?v=19486dd60c0c805c8e0c000ce8c87acf)

## How it works
* A form is used to first capture the user's research query and how deep they'd like the researcher to go.
* Once submitted, a blank Notion page is created which will later hold the final report and the researcher gets to work.
* The user's query goes through a recursive series of web serches and web scraping to collect data on the research topic to generate partial learnings.
* Once complete, all learnings are combined and given to a reasoning LLM to generate the final report.
* The report is then written to the placeholder Notion page created earlier. 

## How to use
* Duplicate this [Notion database template](https://jimleuk.notion.site/19486dd60c0c80da9cb7eb1468ea9afd?v=19486dd60c0c805c8e0c000ce8c87acf) and make sure all Notion related nodes point to it.
* Sign-up for [APIFY.com](https://www.apify.com?fpr=414q6) API Key for web search and scraping services.
* Ensure you have access to OpenAI's o3-mini model. Alternatively, switch this out for o1 series.
* You must publish this workflow and ensure the form url is publically accessible.

## On depth & breadth configuration
For more detailed reports, increase depth and breadth but be warned the workflow will take exponentially longer and cost more to complete. The recommended defaults are usually good enough.

Depth=1 & Breadth=2 - will take about 5 - 10mins.
Depth=1 & Breadth=3 - will take about 15 - 20mins.
Dpeth=3 & Breadth=5 - will take about 2+ hours!

## Customising this workflow
* I deliberately chose not to use AI-powered scrapers like Firecrawl as I felt these were quite costly and quotas would be quickly exhausted. However, feel free to switch web search and scraping services which suit your environment.
* Maybe you don't decide to source the web and instead, data collection comes from internal documents instead. This template gives you freedom to change this.
* Experiment with different Reasoning/Thinking models such as Deepseek and Google's Gemini 2.0.
* Finally, the LLM prompts could definitely be improved. Refine them to fit your use-case.

### Credits
* This template is largely based off the work by David Zhang (dzhng) and his open source implementation of Deep Research: [https://github.com/dzhng/deep-research](https://github.com/dzhng/deep-research)

## 📊 Basic Information

- **Workflow ID:** 2878
- **Complexity:** advanced
- **Node Count:** 85
- **Views:** 72318
- **Downloads:** 7231
- **Created:** 2025/2/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2878)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **set** (×12)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×6)
- **splitOut** (×4)
- **noOp** 
- **splitInBatches** (×3)
- **form** (×4)
- **executeWorkflowTrigger** 
- **stickyNote** (×21)
- **executeWorkflow** (×3)
- **executionData** 
- **switch** 
- **notion** (×5)
- **if** (×3)
- **markdown** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **httpRequest** (×2)
- **filter** (×2)
- **merge** 
- **code** 
- **aggregate** 
- **stopAndError** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 85 nodes with 59 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
