# Retrieve NASA space weather & asteroid data with GPT-4o-mini and Telegram

> ## Who is this for?

This workflow is intended for researchers, educators, developers, media publications, scientists, engineers, science teachers, researchers & scientists in the fields of astronomy, astrophysics, and space weather, science journalists & content creators, educators & education platform managers, data analysts & data engineers in the space research sector, museum managers or public science institutions and professions that use space data who want and need to automate workflows involving NASA space data, facilitate access to NASA science data without manual coding, increase the efficiency of research/education teams until they can be combined with other tools. In reality, data if processed and work on data one by one is very time-consuming and tiring, especially if we have to compile it first and send it. This is also a form of devotion to the community at n8n and the n8n company, as well as devotion to scientists, teachers, developers, education and media publications so that the reality is no longer tiring and is able to answer the problems of existing reality.

## How it works?

Easy explanation:
1) The First Nodes Telegram Trigger is used to receive data that is delivered to the next Nodes. It is like inputting information or instructions to the AI ​​Agent and the AI ​​Agent will process it.

2) After that, the AI ​​Agent will accept to work together with the AI ​​Model, in this case I chose OpenAI because of its capabilities.
3) After that, the AI ​​Agent will carry out its task, namely taking data from each NASA Node that I have set up.
4) Then, after the NASA Nodes send and are received and then processed by the AI ​​Agent, the AI ​​Agent will send it to the last node, namely Telegram, which receives and sends the results of the AI ​​Agent's task.
5) You can immediately see the data in a mature manner, because the data has been processed. If you want to process it again, just direct this AI System to process it again.
6) And all tasks and responsibilities are completed

It is very practical and easy, plus its automated nature. I'm sure you can understand it wisely.

## Set up instructions

Complete what is in the nodes as stated in the notes column. 

1) First you have to connect Telegram "Credential Account" to the nodes.
2) Second, Next I set up using "Define below" it's like customization, because the output that is issued later will be in accordance with the existing trigger. Here I have set it up so just use it.
3) Then, the AI ​​Model that fits the purpose and has the capability is the OpenAI Model. Here you need to create or connect a "Credential Account" and just choose the model. Here I have set up with a wise and capable choice.
4) Next, for each NASA Nodes, you must create or connect a "Credential Account" (Using only one Credential Account). Here, just follow the instructions of the module that has been given n8n, it makes it very easy.
5) Finally, for the Telegram node action, you only need to connect the "Credential Account" that you have created on the first Telegram node.

Everything has been set up wisely, so you just have to follow the notes or setup instructions given, or you can add other things according to your specific purpose and congratulations you are ready to use it.

## Requirements

As a reminder:

It must be set in each node, such as what your goals are, also according to the conditions of your goals.
There must be (If not, make sure it is registered) in each "Credential Account" by following the guide on how to do it n8n the guide is very complete
Don't forget to save, and make sure the workflow is active.

## How to customize this workflow to your needs 

You can directly add nodes to store them again in the 2nd data layer. Prepare a knowledge base for your purposes in additional nodes, so that the accuracy is also high when performing tasks and answering them, and in accordance with the objectives of the task and responsibilities.

## 📊 Basic Information

- **Workflow ID:** 3834
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 280
- **Downloads:** 28
- **Created:** 2025/5/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3834)

## 👤 Author

- **Name:** Ghufran Ridhawi
- **Username:** @ghufran-ridhawi

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **nasaTool** (×9)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegramTrigger** 
- **telegram** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
