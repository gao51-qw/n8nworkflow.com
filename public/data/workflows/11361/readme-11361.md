# Interactive structured prompt builder with GPT-4.1-mini and guided questions

> ## Who is this for?
This workflow is designed for content creators, prompt engineers, AI developers, and anyone who needs to create effective, structured prompts for AI agents. It helps transform vague ideas into detailed, well-formatted prompts by guiding users through a structured question-and-answer process that captures all necessary details.

## What this Workflow Does / Key Features
- Interactive form interface that collects initial project information from users
- AI-powered question generation that identifies information gaps and creates relevant follow-up questions
- Sequential question presentation with a clean, user-friendly interface
- Intelligent merging of all user responses into a comprehensive dataset
- Structured prompt generation with role, inputs, tools, instructions, constraints, and conclusions
- Final prompt display in a clean, ready-to-use format
- Automatic output parsing to ensure consistent formatting

## Requirements
- OpenAI API credentials (GPT-4.1-mini model)
- Basic understanding of prompt engineering concepts

## How to Use — Step-by-Step (Short Version)
1. **Credentials**
   * Add your OpenAI API credentials in n8n (e.g., “OpenAI account 2”).
   * Make sure webhook endpoints are publicly accessible.
2. **Initial Form Setup**
   * The **BaseQuestions** form collects core project details.
   * Adjust fields as needed for your use case.
   * It asks about goals, tools, inputs, and desired outputs.
3. **AI Follow-Up Questions**
   * **RelatedQuestionAI** generates 3 follow-up questions via OpenAI.
   * Edit the prompt if you want different styles of questions.
   * A **Structured Output** node formats the questions cleanly.
4. **Final Prompt Creation**
   * **PromptGenerator** builds the final structured prompt from all inputs.
   * Customize the template to change style or format.
   * The **Output Parser** ensures everything is well-structured.

## Useful Links
- **LangChain Integration**: [Docs...](https://docs.n8n.io/integrations/langchain/)
- **OpenAI API**: [Docs...](https://platform.openai.com/docs)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 📊 Basic Information

- **Workflow ID:** 11361
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 19
- **Downloads:** 1
- **Created:** 2025/11/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11361)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×7)
- **splitInBatches** 
- **form** (×3)
- **splitOut** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
