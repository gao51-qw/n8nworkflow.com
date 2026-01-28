# Summarize your emails with A.I. (via Openrouter) and send to Line messenger

> ## Who is this template for?
- Anyone who is drowning in emails
- Busy parents who has alot of school emails
- Busy executives with too many emails

![Cover.png](fileId:856)


## Case Study
I get too many emails from my kid's school about soccer practice, lunch orders and parent events. I use this workflow to read all the emails and tell me what is important and what requires actioning. 

[Youtube tutorial](https://www.youtube.com/watch?v=c1ZcCnca7PM)


## What this workflow does
1. It uses IMAP to read the emails from your email account (i.e. Gmail). 
2. It then passes the email to Openrouter.ai and uses a free A.I. model to read and summarize the email. 
3. It then sends the summary as a message to your messenger (i.e. Line).

## Setup
1. You need to find your email server IMAP credentials. 
2. Input your openrouter.ai API credentials or replace the HTTP request node with an A.I. node such as OpenAI. 
3. Input your messenger credentials. I use Line but you can change the node to another messenger line Telegram.
4. You need to change the message ID to your ID inside the http request. You can find your user ID inside the https://developers.line.biz/console/. Change the "to": {insert your user ID}.

## How to adjust it to your needs
- You can change the A.I. prompt to fit your needs by telling it to mark emails from a certain address as important. 
- You can change the A.I. model from the current meta-llama/llama-3.1-70b-instruct:free to a paid model or other free models. 
- You can change the messenger node to telegram or any other messenger app you like.



## 📊 Basic Information

- **Workflow ID:** 2515
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 4832
- **Downloads:** 483
- **Created:** 2024/11/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2515)

## 👤 Author

- **Name:** Keith Rumjahn
- **Username:** @rumjahn

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **emailReadImap** 
- **httpRequest** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
