# 🔍 Visualize your n8n workflows with Mermaid.js!

> ## Are you a visual thinker working with n8n?

🎨 View and understand workflow structures at a glance with this template!

Built with mermaid.js, Bootstrap 5 and AXAJ to create an interactive web page displaying n8n workflows as flowcharts.

🌟 Perfect for documentation, presentations, or just getting a clearer picture of your automation processes.

Need customization help? Reach out to [Eduard](https://www.linkedin.com/in/parsadanyan/)!

### Benefits
* 📊 Instant workflow visualization
* 📱 Responsive design
* 🔗 Direct links to n8n workflows
* 🧩 Special shapes for different node types
* 🚫 Disabled node indication
* 🔒 No external dependencies – just paste the workflow and call the webhook
* 🛠️ Easily customizable – enhance the JS script or add custom styling

### ⚠️ Important note for cloud users ⚠️
Since the cloud version doesn't support environmental variables, please make the following changes in the CONFIG node:
* Update the `instance_url` variable: Enter your n8n URL instead of `{{$env["N8N_PROTOCOL"]}}://{{$env["N8N_HOST"]}}`
* Change the `webhook_path` to simply "webhook" instead of `{{$env["N8N_ENDPOINT_WEBHOOK"] || "webhook"}}`

### 🌟 Examples
1. Multiple flowcharts on a single page:
![image.png](fileId:830)

2. Several shapes for different nodes:
![image.png](fileId:826)

3. Langchain nodes with special connections styling:
![image.png](fileId:829)

## 📊 Basic Information

- **Workflow ID:** 2378
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 7197
- **Downloads:** 719
- **Created:** 2024/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2378)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **respondToWebhook** (×2)
- **n8n** (×2)
- **aggregate** 
- **switch** 
- **set** (×2)
- **code** 
- **stickyNote** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
