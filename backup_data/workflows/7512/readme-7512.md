# Automated workflow backup to Google Drive with smart cleanup

> **How it works**

This workflow provides a complete, automated backup solution for your n8n instance, running on a daily schedule to ensure your automations are always safe.

* **Automatic cleanup:** It first connects to your Google Drive to find and delete old backup folders, keeping your storage clean and organized based on a retention number you set.
* **Daily folder creation:** It then creates a new, neatly dated folder to store the current day's backup.
* **Fetches & saves workflows:** Finally, it uses the n8n API to get a list of all your workflows, converts each one to a `.json` file, and uploads them to the newly created folder in Google Drive.

**Set up steps**

**Setup time: ~3 minutes**

This template is designed to be as plug-and-play as possible. All configurations are grouped in a single node for quick setup.

* **Connect your accounts:** Authenticate the `Google Drive` and `n8n API` nodes with your credentials.
* **Configure main settings:** Open the `Set` node named **"CONFIG - Set your variables here"** and:
    * Paste the ID of your main Google Drive folder where backups will be stored.
    * Adjust the number of recent backups you want to keep.
* **Activate workflow:** Turn on the workflow. Your automated backup system is now active.

For more detailed instructions, including how to find your Google Drive folder ID, please refer to the sticky notes inside the workflow.

## 📊 Basic Information

- **Workflow ID:** 7512
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2286
- **Downloads:** 228
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7512)

## 👤 Author

- **Name:** Luca Olovrap
- **Username:** @lucaolovrap

## 🏷️ Categories

- DevOps
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **manualTrigger** 
- **googleDrive** (×4)
- **set** (×2)
- **code** 
- **splitInBatches** (×2)
- **n8n** 
- **convertToFile** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
