# 🦅 Get a bird's-eye view of your n8n instance with the Workflow Dashboard!

> ## ⚡ UPDATE on May 2025 – added section with all n8n instance webhooks

Using n8n a lot?

Soar above the limitations of the default n8n dashboard! This template gives you an overview of your workflows, nodes, and tags – all in one place. 💪

Built using XML stylesheets and the Bootstrap 5 library, this workflow is self-contained and does not depend on any third-party software. 🙌 It generates a comprehensive overview JSON that can be easily integrated with other BI tools for further analysis and visualization. 📊

**Reach out to [Eduard](https://www.linkedin.com/in/parsadanyan/) if you need help adapting this workflow to your specific use-case!**

## 🚀 Benefits:
- **Workflow Summary** 📈: Instant overview of your workflows, active counts, and triggers.
- **Left-Side Panel** 📋: Quick access to all your workflows, nodes, and tags for seamless navigation.
- **Workflow Details** 🔬: Deep dive into each workflow's nodes, timestamps, and tags.
- **Node Analysis** 🧩: Identify the most frequently used nodes across your workflows.
- **Tag Organization** 🗂️: Workflows are grouped according to their tags.
- **Webhooks** ⚡: List of all webhook endpoints with the links to workflows.
- **Visually Stunning** 🎨: Clean, intuitive, and easy-to-navigate dashboard design.
- **XML & Bootstrap 5** 🛠️: Built using XML stylesheets and Bootstrap 5, ensuring a self-contained and responsive dashboard.
- **No Dependencies** 🔒: The workflow does not rely on any third-party software. Bootstrap 5 files are loaded via CDN but can be delivered directly from your server.

## ⚠️ Important note for cloud users
Since the cloud version doesn't support environmental variables, please make the following changes:

1. **get-nodes-via-jmespath** node. Update the `instance_url` variable: enter your n8n URL instead of `{{$env["N8N_PROTOCOL"]}}://{{$env["N8N_HOST"]}}`
2. **Create HTML** node. Please provide the n8n instance URL instead of `{{ $env.WEBHOOK_URL }}`

## 🌟Example:
![Untitled design 6_.png](fileId:795)

Follow me on [LinkedIn](https://www.linkedin.com/in/parsadanyan/) for more tips on AI automation and n8n workflows!

## 📊 Basic Information

- **Workflow ID:** 2269
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 9568
- **Downloads:** 956
- **Created:** 2024/5/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2269)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×3)
- **set** (×5)
- **stickyNote** (×5)
- **executeWorkflowTrigger** 
- **xml** 
- **html** 
- **moveBinaryData** 
- **respondToWebhook** (×2)
- **sort** (×4)
- **aggregate** (×4)
- **n8n** 
- **executeWorkflow** 
- **webhook** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
