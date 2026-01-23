# Audio-to-Trello task bot

> Telegram Tasker Bot — это сценарий n8n, который принимает голосовые сообщения в Telegram, автоматически превращает их в текст, извлекает из него ключевые поля задачи и создаёт карточку в нужной доске Trello. Пользователь просто говорит задачу — бот сам оформляет её и присылает ссылку на готовую карточку. 

Для использования вам потребуется telegram bot.
Его можно создать через бота [BotFather](https://web.telegram.org/k/#@BotFather)

Так же понадобится доступ к API chatgpt - он используется только для транскрибции аудио в речь. Вы можете использовать любой другой сервис, по вашему выбору.

И аккаунт в trello, с доступом к API.

**!Внимание!**
ID доски в trello можно взять из url
ID столбца на доске трелло можно взять через инструменты разработчика (по крайней мере я так получал эти данные)

## 📊 Basic Information

- **Workflow ID:** 5293
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2730
- **Downloads:** 273
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5293)

## 👤 Author

- **Name:** dirogar
- **Username:** @max

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **trello** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stopAndError** 
- **telegram** (×3)
- **if** 
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
