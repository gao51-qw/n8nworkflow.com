# Create product satisfaction surveys with Telegram, Google Sheets and AI

> This n8n template uses a Telegram chatbot to conduct a Product Satisfaction Survey and fetches questions and stores answers in a Google sheet. It augments an AI Agent to ask follow-up questions to engage the user and uncover more insights in their responses.

This template is intended to demonstrate how you'd realistically approach a workflow where there is structured conversation (static questions) but you still want to include an free-form element (follow-up questions) which can only be accomplished via AI.

**Check out an example Survey results**: [https://docs.google.com/spreadsheets/d/e/2PACX-1vQWcREg75CzbZd8loVI12s-DzSTj3NE_02cOCpAh7umj0urazzYCfzPpYvvh7jqICWZteDTALzBO46i/pubhtml?gid=0&single=true](https://docs.google.com/spreadsheets/d/e/2PACX-1vQWcREg75CzbZd8loVI12s-DzSTj3NE_02cOCpAh7umj0urazzYCfzPpYvvh7jqICWZteDTALzBO46i/pubhtml?gid=0&single=true)

## How it works
* A chat session is started with the user who needs to enter the bot command "/next" to start the survey.
* Once started, the template pulls in questions from a google sheet to ask the user. Questions are asked in sequence from left column to right column.
* When the user answers the question, a text classifier node is used to determine 
if a follow-up question could be asked.
* If so, a mini conversation is initiated by the AI agent to get more details.
* If not, the survey proceeds to the next question.
* All answers and mini-conversations are recorded in the Google Sheet under the respective question.
* When all questions are answered, the template will stop the survey and give the user a chance to restart.

## How to use
* You'll need to setup a Telegram bot ([see docs](https://docs.n8n.io/integrations/builtin/credentials/telegram/))
* Create a google sheet with an ID column. Populate the rest of the columns with your survey questions ([see sample](https://docs.google.com/spreadsheets/d/e/2PACX-1vQWcREg75CzbZd8loVI12s-DzSTj3NE_02cOCpAh7umj0urazzYCfzPpYvvh7jqICWZteDTALzBO46i/pubhtml?gid=0&single=true))
* Ensure you have a Redis instance to capture state. Either self-host or sign-up to [Upstash](https://upstash.com?ref=jimleuk) for a free account.
* Update the "Set Variable" node with your google sheet ID and survey title.
* Share your bot to allow others to participate in your survey.

## Requirements
* Telegram for Chatbot
* Google Sheets for Survey questions and answers
* Redis for State Management and Chat Memory
* Community+ license and above for Execution data node - you can remove this node if you don't have this licence.

## Customising this workflow
* Not using Telegram? This template technically works with other chat apps such as Whatsapp, wechat and even n8n's hosted chat!
* This state management pattern can also be applied to other use-cases and scenarios. Try it for other types of surveys!

## 📊 Basic Information

- **Workflow ID:** 3115
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 6404
- **Downloads:** 640
- **Created:** 2025/3/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3115)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **telegram** (×5)
- **if** (×2)
- **redis** (×5)
- **googleSheets** (×4)
- **set** (×4)
- **switch** (×2)
- **@n8n/n8n-nodes-langchain.memoryRedisChat** (×2)
- **@n8n/n8n-nodes-langchain.memoryManager** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **executionData** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
