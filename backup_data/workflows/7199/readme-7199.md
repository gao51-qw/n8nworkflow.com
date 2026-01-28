# Generate language learning flashcards with GPT-4, Telegram and Google Sheets for Anki

> ## How it works
- Use Telegram to send in new phrases (`flashcard front`)
- You can also manually input phrase in the workflow itself
- ChatGPT generates provided phrase description (in English but you can change it) including multiple meanings & generates  examples of using the phrase in a sample sentence (`flashcard back`)

## Steps to setup
- Provide your Telegram bot API key (optional)
- Provide your OpenAI key
- Provide Google Sheets credentials

## How to import flashcards from Google Sheets into Anki
- Use Google Sheets to Anki add-on: [1871608121](https://ankiweb.net/shared/info/1871608121)
- In Anki simply click `Sync Decks` and you're done :)

Enjoy
 


## 📊 Basic Information

- **Workflow ID:** 7199
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 674
- **Downloads:** 67
- **Created:** 2025/8/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7199)

## 👤 Author

- **Name:** Tomek
- **Username:** @zewlak

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **telegramTrigger** 
- **telegram** 
- **stickyNote** (×4)
- **manualTrigger** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
