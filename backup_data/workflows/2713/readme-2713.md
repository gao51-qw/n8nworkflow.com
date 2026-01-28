# Using external workflows as tools in n8n

> This guide will show you how to use a workflow as a reusable tool in n8n, such as integrating an AI Agent or other specialized processes into your workflows.

By the end of this example, you'll have a simple, reusable workflow that can be easily plugged into larger projects, making your automations more efficient and scalable.

![url_to_crawl.png](fileId:894)

With this approach, you can create reusable workflows like "Scrape a Page," "Search Brave," or "Generate an Image," which you can then call whenever needed.

While n8n makes it easy to build these workflows from scratch, setting them up as reusable components saves time as your automations grow in complexity.

Setup

Add the "Execute Workflow Trigger" node

Add the node(s) to perform the desired tasks in the workflow

Add a final "Set" or "Edit Fields" node at the end to ensure all external workflows return a consistent output format

Details

In this example, the "Execute Workflow Trigger" expects input in the following JSON format:

```json
[
  {
    "query": {
      "url": "https://en.wikipedia.org/wiki/some_info"
    }
  }
]
```

Once your external workflow is ready, you can instruct the AI Agent to use this tool by connecting it to the external workflow. Set up the schema type to "Generate from JSON Example" using this structure:

```json
{
  "url": "URL_TO_GET"
}
```
![generate_json.png](fileId:896)

Finally, ensure your external workflow includes a "Set" or "Edit Fields" node at the end to define the response format. This helps keep the outputs of your reusable workflows consistent and predictable.

![response.png](fileId:895)

## 📊 Basic Information

- **Workflow ID:** 2713
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 3893
- **Downloads:** 389
- **Created:** 2025/1/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2713)

## 👤 Author

- **Name:** Alfred Nutile
- **Username:** @dailyaistudio

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **httpRequest** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
