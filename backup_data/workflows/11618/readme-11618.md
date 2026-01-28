# Compare GPT-4, Claude & Gemini Responses with Contextual AI's LMUnit Evaluation

> ## PROBLEM  
Evaluating and comparing responses from multiple LLMs (OpenAI, Claude, Gemini) can be challenging when done manually.  
- Each model produces outputs that differ in clarity, tone, and reasoning structure.  
- Traditional evaluation metrics like ROUGE or BLEU fail to capture nuanced quality differences.  
- Human evaluations are inconsistent, slow, and difficult to scale.  

### This workflow automates **LLM response quality evaluation** using **Contextual AI’s LMUnit**, a natural language unit testing framework that provides systematic, fine-grained feedback on response clarity and conciseness.  
&gt; **Note:** LMUnit offers natural language-based evaluation with a 1–5 scoring scale, enabling consistent and interpretable results across different model outputs.

## How it works  
- A **chat trigger node** collects responses from multiple LLMs such as **OpenAI GPT-4.1, **Claude 4.5 Sonnet**, and **Gemini 2.5 Flash**.  
- Each model receives the same input prompt to ensure fair comparison, which is then aggregated and associated with each test cases
- We use Contextual AI's LMUnit node to evaluate each response using predefined quality criteria:  
  - “Is the response clear and easy to understand?” - Clarity 
  - “Is the response concise and free from redundancy?”  - Conciseness 
- **LMUnit** then produces evaluation scores (1–5) for each test 
- Results are aggregated and formatted into a structured summary showing model-wise performance and overall averages.

## How to set up  
- Create a free [Contextual AI account](https://app.contextual.ai/) and obtain your `CONTEXTUALAI_API_KEY`.  
- In your **n8n** instance, add this key as a credential under “Contextual AI.”  
- Obtain and add credentials for each model provider you wish to test:  
  - **OpenAI API Key:** [platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)  
  - **Anthropic API Key:** [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)  
  - **Gemini API Key:** [ai.google.dev/gemini-api/docs/api-key](https://ai.google.dev/gemini-api/docs/api-key)  
- Start sending prompts using chat interface to automatically generate model outputs and evaluations.

## How to customize the workflow  
- Add more **evaluation criteria** (e.g., factual accuracy, tone, completeness) in the LMUnit test configuration.  
- Include additional **LLM providers** by duplicating the response generation nodes.  
- Adjust **thresholds and aggregation logic** to suit your evaluation goals.  
- Enhance the final summary formatting for dashboards, tables, or JSON exports.  
- For detailed API parameters, refer to the [LMUnit API reference](https://docs.contextual.ai/api-reference/lmunit/lmunit).  
- If you have feedback or need support, please email **feedback@contextual.ai**.

## 📊 Basic Information

- **Workflow ID:** 11618
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 868
- **Downloads:** 86
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11618)

## 👤 Author

- **Name:** Jinash Rouniyar
- **Username:** @jinash

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **n8n-nodes-contextualai.contextualAi** 
- **set** (×4)
- **merge** 
- **code** (×3)
- **splitInBatches** 
- **wait** 
- **@n8n/n8n-nodes-langchain.chat** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.anthropic** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
