# Dynamically switch between LLMs for AI agents using LangChain code

> # Dynamically switch between LLMs for AI Agents using LangChain Code

## Purpose

This example workflow demonstrates a way to connect multiple LLMs to a single AI Agent/LangChain Node and programmatically use one – or in this case loop through them.

## What it does

This AI workflow takes in customer complaints and generates a response that is being validated before returned. If the answer was not satisfactory, the response will be generated again with a more capable model.

## How it works

- A LangChain Code Node allows multiple LLMs to be connected to a single Basic LLM Chain. On every call only one LLM is actually being connected to the Basic LLM Chain, which is determined by the index defined in a previous Node.
- The AI output is later validated by a Sentiment Analysis Node
- If the result was not satisfactory, it loops back to the beginning and executes the same query with the next available LLM
- The loop ends either when the result passed the requirements or when all LLMs have been used before.

## Setup
- Clone the workflow and select the belonging credentials. You'll need an OpenAI Account, alternatively you can swap the LLM nodes with ones from a different provider like Anthropic after the import.

## How to use

*Beware that the order of the used LLMs is determined by the order they have been added to the workflow, not by the position on the canvas.*

After cloning this workflow into your environment, open the chat and send this example message:

&gt; I really *love* waiting two weeks just to get a keyboard that doesn’t even work. Great job. Any chance I could actually use the thing I paid for sometime this month?

Most likely you will see that the first validation fails, causing it to loop back to the generation node and try again with the next available LLM.

*Since AI responses are unpredictable, the results and number of tries will differ for each run.*

## Disclaimer
Please note, that this workflow can only run on self-hosted n8n instances, since it requires the LangChain Code Node.

## 📊 Basic Information

- **Workflow ID:** 3820
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 5269
- **Downloads:** 526
- **Created:** 2025/5/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3820)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.code** 
- **set** (×5)
- **noOp** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
