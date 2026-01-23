# Record transactions & generate budget reports with Gemini AI, Telegram & Firefly III

> ## Who this is for
Anybody using Firefly III, especially home/self-hosted users, who want to add some level of automation to their transaction tracking, either in addition to or because they can't or don't want to use the [dataimporter](https://github.com/firefly-iii/data-importer)

## How it works - posting transactions
1. User sends a transaction screenshot/image or statement to a Telegram bot
2. Gemini analyzes it based on the user's requirements (asset account IDs & categories)
3. The transaction information is parsed to create a suitable POST to a Firefly instance
4. The transaction(s) are posted to Firefly via its API, using an OAuth2 credential

## How it works - requesting budget reports 
1. User sends the word 'Report' via telegram
2. A 'GET' API request is sent to Firefly for all budgets between the beginning of the month and the request date, including remaining amounts for each
3. This is converted to a CSV file
4. The CSV is sent to the user via Telegram

## Prerequisites
1. Telegram, and knowledge of how to set up a bot (search for `BotFather` in Telegram)
2. An existing instance of [Firefly III](https://docs.firefly-iii.org/) with admin access for creating OAuth2 credentials

## How to set it up - Credentials
1. Open Telegram, and search for `BotFather`
2. Create a new bot by following the instructions
3. Save the API key provided
4. In n8n, create a new `Telegram` credential using the info for the new bot
5. Create an OAuth client in Firefly, using the redirect URL found in n8n's `OAuth2 API` credential creator 
6. Fill the n8n `OAuth2 API` credential form as `Authorization Code`, filling in the remaining parameters from the info created in Firefly 
7. Create a Gemini credential following the instructions in n8n

## How to set it up - the workflow
1. Set the credential in each Telegram node
2. Set the Firefly credential in each http node
3. Set the correct base URL for the Firefly instance in each http node
4. Set the desired Gemini credential and model in each AI node
5. Set the correct Bank IDs (as per Firefly) and preferred categories in the AI node system message


## Customization options
The user can specify all types of asset and expense accounts, as well as a specific list of categories and descriptions for Gemini to use. Gemini can also be swapped out for any other AI/LLM. 

Additionally, anyone can build on this by reviewing the [Firefly API documents](https://api-docs.firefly-iii.org/) to automate almost any other part of the Firefly software.



## 📊 Basic Information

- **Workflow ID:** 11339
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 116
- **Downloads:** 11
- **Created:** 2025/11/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11339)

## 👤 Author

- **Name:** PTS
- **Username:** @pts

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **telegram** (×4)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **code** (×2)
- **httpRequest** (×2)
- **switch** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×5)
- **splitInBatches** 
- **set** 
- **convertToFile** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
