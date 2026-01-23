# Convert n8n tags into folders and move workflows

> N8n recently introduced folders and it has been a big improvement on workflow management on top of the tags.

This means the current workflows need to be moved manually to the folders. 

The simplest idea to try is to convert the current tags into folders and move all the current workflows within the respective tags into the folders

This assumes the tag name will be used as the folder name.

**To Note**

For workflows that use more than 1 tag, the workflow will be assigned the last tag that runs as the folder. 

**How does it work**
I took the liberty of simplifying the setup of this workflow that will be needed on your part and also be beginner-friendly 

1. Copy and paste this workflow into your n8n canvas. You must have existing workflows and tags before you can run this
2. Set your n8n login details on the node set Credentials with the n8n URL, username, and password.
3. Setup your n8n API credentials on the n8n node get workflows
4. Run the workflow. This opens up a form where you can select the number of tags to move and click on submit
5. The workflow responds with the successful number of workflows that were imported 


[Read more about the template](https://funautomations.io/workflows/how-to-convert-n8n-tags-into-folders/)

Built by [Zacharia Kimotho - Imperol](https://www.linkedin.com/in/zacharia-kimotho/)

## 📊 Basic Information

- **Workflow ID:** 3445
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 681
- **Downloads:** 68
- **Created:** 2025/4/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3445)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **set** (×10)
- **httpRequest** (×6)
- **splitOut** (×3)
- **filter** (×2)
- **removeDuplicates** 
- **splitInBatches** 
- **n8n** 
- **limit** 
- **formTrigger** 
- **code** 
- **if** (×2)
- **form** (×2)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
