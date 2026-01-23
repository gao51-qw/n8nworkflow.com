# AI agent that can scrape webpages

> ![n8nReAct.webp](fileId:720)

⚙️🛠️🚀🤖🦾

This template is a PoC of a ReAct AI Agent capable of fetching random pages (not only Wikipedia or Google search results).

On the top part there's a manual chat node connected to a LangChain ReAct Agent. The agent has access to a workflow tool for getting page content.

The page content extraction starts with converting query parameters into a JSON object. There are 3 pre-defined parameters:
- **url** – an address of the page to fetch
- **method** = full / simplified
- **maxlimit** - maximum length for the final page. For longer pages an error message is returned back to the agent

Page content fetching is a multistep process:
1. An HTTP Request mode tries to get the page content.

If the page content was successfuly retrieved, a series of post-processing begin:

2. Extract HTML BODY; content
3. Remove all unnecessary tags to recuce the page size
4. Further eliminate external URLs and IMG scr values (based on the method query parameter)
5. Remaining HTML is converted to Markdown, thus recuding the page lengh even more while preserving the basic page structure
6. The remaining content is sent back to an Agent if it's not too long (maxlimit = 70000 by default, see CONFIG node).

*NB:*
- You can isolate the HTTP Request part into a separate workflow.
- Check the Workflow Tool description, it guides the agent to provide a query string with several parameters instead of a JSON object.

Please reach out to [Eduard](https://www.linkedin.com/in/parsadanyan/) is you need further assistance with you n8n workflows and automations!

Note that to use this template, you need to be on n8n version 1.19.4 or later.


## 📊 Basic Information

- **Workflow ID:** 2006
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 268473
- **Downloads:** 26847
- **Created:** 2023/12/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2006)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **executeWorkflowTrigger** 
- **set** (×7)
- **httpRequest** 
- **if** (×2)
- **markdown** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
