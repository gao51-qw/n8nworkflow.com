# Build an IT support assistant chatbot leveraging existing support portal

> ### This n8n template demonstrates how you can leverage existing support site search to power your Support Chatbots and agents.

Building a support chatbot need not be complicated! If building and indexing vector stores or duplicating data isn't necessarily your thing, an alternative implementation of the [RAG](https://www.databricks.com/glossary/retrieval-augmented-generation-rag) approach is to leverage existing knowledge-bases such as support portals. In this way, document management and maintenance of your support agent is significantly reduced.

**Disclaimer: This template example uses AcuityScheduling's help center website but is not associated, supported nor endorsed by the company.**

### How it works
* A simple AI agent is connected with chat trigger to receive user queries.
* The AI agent is instructed to fetch information from the knowledge-base via the attached custom workflow tool (aka "knowledgebase tool").
* There is no step to replicate the entire support articles database into a vector store. You may choose not too because of time, cost and maintainence involved.
* Instead, the tool leverages the existing support portal's search API to retrieve knowledge-base articles.
* Finally, the search results are formatted before sending an aggregated response back to the agent.

### How to use?
* Customise the subworkflow to work with your own support portal API and format accordingly.
* Try the following queries
  * How do I connect my icloud to acuityScheduling?
  * How do I download past invoices for my Acuity account?

### Requirements
* OpenAI for LLM.
* If your organisation's APIs require authorisation, you may need to add custom credentials as necessary.

### Customising this workflow
* Add additional tools to reach other parts of your internal knowledgebase.
* Not using OpenAI? Feel free to swap but ensure the LLM has tools/function calling support.

## 📊 Basic Information

- **Workflow ID:** 3498
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 5992
- **Downloads:** 599
- **Created:** 2025/4/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3498)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **httpRequest** 
- **set** (×2)
- **splitOut** 
- **if** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
