# Monitor competitors' websites for changes with OpenAI and Firecrawl

> ## Who is this template for?
This workflow template is designed for people seeking alerts when certain specific changes are made to any web page. Leveraging agentic AI, it analyzes the page every day and autonomously decides whether to send you an e-mail notification.

## Example use cases
- Track price changes on [competitor's website]. Notify me when the price drops below €50.
- Monitor new blog posts on [industry leader's website] and summarize key insights.
- Check [competitor's job page] for new job postings related to software development.
- Watch for new product launches on [e-commerce site] and send me a summary.
- Detect any changes in the terms and conditions of [specific website].
- Track customer reviews for [specific product] on [review site] and extract key themes.

## How it works
- When clicking 'test workflow' in the editor, a new browser tab will open where you can fill in the details of your espionage assignment
- Make sure you be as concise as possible when instructing AI. Instruct specific and to the point (see examples at the bottom).
- After submission, the flow will start off by extracting both the relevant website url and an optimized prompt. OpenAI's structured outputs is utilized, followed by a code node to parse the results for further use.
- From here on, the endless loop of daily checks will begin:
1. Initial scrape 
2. 1 day delay
3. Second scrape
4. AI agent decides whether or not to notify you 
5. Back to step 1
- You can cancel an espionage assignment at any time in the executions tab

## Set up steps
- Insert your OpenAI API key in the structured outputs node (second one)
- Create a Firecrawl account and connect your Firecrawl API key in both 'Scrape page'-nodes
- Connect your OpenAI account in the AI agents' model node
- Connect your Gmail account in the AI agents' Gmail tool node


## 📊 Basic Information

- **Workflow ID:** 3101
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 12419
- **Downloads:** 1241
- **Created:** 2025/3/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3101)

## 👤 Author

- **Name:** Sleak
- **Username:** @sleak

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmailTool** 
- **code** 
- **stickyNote** (×5)
- **httpRequest** (×3)
- **formTrigger** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
