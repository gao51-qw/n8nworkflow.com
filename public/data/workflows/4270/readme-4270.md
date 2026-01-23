# WebhookDocs: generate swagger preview of your active workflows

> # How it Works

This meta-workflow is designed to intelligently scan all your active workflows in n8n, identify those that contain Webhook nodes, and automatically generate a Swagger (OpenAPI) specification based on them.

The output Swagger document reflects all accessible endpoints from your Webhook nodes, making it easier to:

- Visualize your API structure
- Share your endpoints
- Integrate with tools like Postman or Swagger UI

![image.png](fileId:1349)

## Enhanced Parameter Support

If you want the Swagger to reflect request parameters (e.g., query or body fields), you can annotate your Webhook nodes using the Note section. When configured properly, these annotations enrich your Swagger documentation with parameter names, types, and descriptions.

![image.png](fileId:1348)
![image.png](fileId:1347)
# Setup Steps

1. Add the WebhookDocs to n8n
   Import the WebhookDocs JSON file into your n8n instance.
3. Activate the WebhookDocs (you can also use the test-endpoint)
   Annotate Webhook Nodes (Optional but Recommended)
   To enable parameter documentation, open the Note section of each Webhook node and add annotations in the following format:

```
//@body field_name string description
//@query field_name string description
```

4. Open the page https://n8n.youristance.com/webhook/swagger

## 📊 Basic Information

- **Workflow ID:** 4270
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1091
- **Downloads:** 109
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4270)

## 👤 Author

- **Name:** Danger
- **Username:** @dangerblack

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **n8n** 
- **code** 
- **respondToWebhook** 
- **webhook** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
