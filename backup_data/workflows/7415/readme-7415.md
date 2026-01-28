# Smart nested folder creation in OneDrive with existence checking

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

- It creates a nested folder in your OneDrive's My Files
- You could be creating folders like:

```
Foobar
Foobar/Barfur
Foobar/Barfur/Furbar
```

Workflow checks if any of the folders in the path exists and created only the ones that don't exist.

The usual case it to use it in your other workflows and execute it as Sub-workflow.

## Requirements

- `n8n-nodes-datastore` Community node
- Microsoft Drive account credential

## 📊 Basic Information

- **Workflow ID:** 7415
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 491
- **Downloads:** 49
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7415)

## 👤 Author

- **Name:** Marko Korhonen
- **Username:** @back295

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **splitOut** 
- **code** 
- **microsoftOneDrive** (×2)
- **splitInBatches** 
- **if** 
- **n8n-nodes-datastore.datastore** (×4)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
