# Slack slash commands AI chat bot

> This is a response chatbot in public channels through slash commands. I explain more in detail through the [YouTube video](https://www.youtube.com/watch?v=UpudYFCWaIM), but it's only available in Korean.

## How it works?

When you request the created slash command in Slack, the request comes to the webhook. Then, the Switch Node branches appropriately according to each slash command request. Here, a slash command called `/ask` is connected to the chatbot, and the chatbot generates answers to the questions asked. The final node responds to the channel.

## Set up steps

1. Create a Slack app.
2. Add `chat:write` permission in Slack OAuth&Permissions&gt;Scopes.
3. Create a Command in Slack Slash Commands menu and enter the n8n Webhook node's URL.
4. Complete creating the Slash Commands.
5. Enter the created command in the Switch node.

<br />

---

<br />

슬래시 커맨드를 통한 공개 채널에서의 응답 챗봇 입니다. [유튜브 영상](https://www.youtube.com/watch?v=UpudYFCWaIM)에 더 자세하게 설명 드립니다.

## 설명

슬랙에 생성한 슬래시 커맨드를 슬랙에서 요청하면 웹훅에 요청이 들어옵니다. 이후 Switch Node에서 각 슬래시 커맨드의 요청에 따라 알맞게 분기합니다. 여기에서는 `/ask`​라는 슬래시 커맨드가 챗봇으로 연결되어 있고, 챗봇에서 질문한 내용의 답변을 생성합니다. 마지막 노드에서 채널로 응답을 합니다. 

## 설정 방법

1. Slack 앱을 만드세요.
2. Slack OAuth&Permissions&gt;Scopes 에서 `chat:write` 권한을 추가하세요.
3. Slack Slash Commands 메뉴에서 Command를 생성하고, n8n Webhook 노드의 url을 입력하세요.
4. Slash Slash Commands 생성을 완료하세요.
5. Switch 노드에 생성한 커맨드를 입력하세요.


## 📊 Basic Information

- **Workflow ID:** 2905
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3699
- **Downloads:** 369
- **Created:** 2025/2/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2905)

## 👤 Author

- **Name:** InfoGrab
- **Username:** @infograb

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×6)
- **webhook** 
- **switch** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
