# Autonomous AI crawler

> This workflow with AI agent is designed to navigate through the page to retrieve specific type of information (in this example: social media profile links). 

The agent is equipped with 2 tools:
- **text tool:** to retrieve all the text from the page, 
- **URLs tool:** to extract all possible links from the page.

💡 You can edit prompt and JSON schema connected to the agent in order to return other data then social media profile links. 

👉 This workflow uses Supabase as storage (input/output). Feel free to change it to any other database of your choice.  

🎬 See this workflow in action [in my YouTube video](https://youtu.be/2W09puFZwtY). 

## How it works?

The workflow uses the input URL (website) as a starting point to retrieve the data (e.g. example.com). Using the "URLs tool", the agent is able to retrieve all links from the page and navigate to them. 

For example, if you want to retrieve contact information, agent will try to find a subpage that might contain this information (e.g. example.com/contact) and extract the information using the text tool.  

## Set up steps

1. Connect database with input data (website addresses) or pin sample data to trigger node. 
2. Configure the crawling agent to retrieve the desired data (e.g. modify prompt and/or parsing schema).
3. Set credentials for OpenAI.
4. Optionally: split agent tools to separate workflows. 

If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows/) and/or [my newsletter](https://workfloows.com/).

## 📊 Basic Information

- **Workflow ID:** 2315
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 72203
- **Downloads:** 7220
- **Created:** 2024/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2315)

## 👤 Author

- **Name:** Oskar
- **Username:** @workfloows

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×10)
- **manualTrigger** 
- **supabase** (×2)
- **merge** 
- **markdown** 
- **stickyNote** (×10)
- **html** 
- **splitOut** 
- **removeDuplicates** 
- **filter** (×2)
- **aggregate** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
