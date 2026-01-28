# Translate Telegram audio messages with AI (55 supported languages)

> ### Use case

This workflow enables a Telegram bot that can:

- Accept speech input in one of 55 supported languages
- Automatically detect the language spoken and translate the speech to another language 
- Responds back with the translated speech output.

This allows users to communicate across language barriers by simply speaking to the bot, which will handle the translation seamlessly.

### How does it work?

#### Translation
In the translation step the workflow converts the user's speech input to text and detects the language of the input text. 

If it's English, it will translate to French. If it's French, it will translate to English.

To change the default translation languages, you can update the prompt in the AI node.

#### Output
In the output step, we provide the translated text output back to the user and speech output is generated in the translated language.

### Setup steps
1. Obtain Telegram API Token
- Start a chat with the BotFather.
- Enter /newbot and reply with your new bot's display name and username.
- Copy the bot token and use it in the Telegram node credentials in n8n.

2. Update the Settings node to customize the desired languages

3.  Activate the flow 

### Full list of supported languages
All supported [languages](languages): 



## 📊 Basic Information

- **Workflow ID:** 2206
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 13438
- **Downloads:** 1343
- **Created:** 2024/3/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2206)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **stickyNote** (×3)
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
