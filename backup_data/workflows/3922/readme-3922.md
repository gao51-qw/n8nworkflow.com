# Upload large files to Kommo/AmoCRM with automatic file chunking

> Upload files from any source to your account Kommo or AmoCRM with a simple and reusable workflow.
## Advantages of workflow
- It can split a large file into small ones and upload chunks.
- Works for Kommo and amoCRM
- There are 3 required parameters in total (drive_url, file_name and file_base64)
## Where it can be useful
- To send files in a message to clients chat in Kommo or amoCRM
- To upload the generated files to the transaction or contact fields
- To upload files to notes
## How it works
1. Checking the file availability
2. Opening the session to download the file
3. Split the file into chunks, if necessary.
4. Send parts of the file to CRM one at a time.
## Installation Steps
1. Import workflow
2. Configuring Oauth2 credentials in Kommo or amoCRM
3. Applying credentials for specific workflow steps
4. Specifying the link to the file and the disk_url address
5. Launching a workflow to upload a file to a Kommo or amoCRM account

## 📊 Basic Information

- **Workflow ID:** 3922
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 635
- **Downloads:** 63
- **Created:** 2025/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3922)

## 👤 Author

- **Name:** yatolstoy
- **Username:** @yatolstoy

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **httpRequest** (×4)
- **set** 
- **executeWorkflowTrigger** 
- **code** (×2)
- **merge** 
- **if** (×2)
- **stopAndError** (×2)
- **limit** 
- **stickyNote** (×16)
- **splitInBatches** 
- **convertToFile** (×2)
- **manualTrigger** 
- **extractFromFile** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
