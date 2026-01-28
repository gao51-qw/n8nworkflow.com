# Automated credentials backup to Google Drive via SSH and Docker

> This workflow automates the backup of decrypted n8n credentials from a self-hosted Docker instance to Google Drive. It allows you to export credentials on n8n versions 2.x.x (where old CLI commands may not work) without accessing the server terminal manually.

## How it works
* **Configuration**: Defines the Docker container name and file paths using a centralized variables node.
* **SSH Execution**: Connects to the host machine via SSH and executes the `n8n export:credentials` command inside the specified Docker container.
* **File Retrieval**: Reads the newly created decrypted JSON file from the host filesystem.
* **Cloud Upload**: Uploads the JSON file to a specified folder in Google Drive with a timestamped filename.

## Set up steps
* **Configure Variables**: Open the "Variables" node and enter your `Docker Container name` (usually `n8n` or an ID).
* **SSH Connection**: Configure the "Execute a command" (SSH) node with your host machine's IP, username, and SSH key/password.
* **Google Drive Auth**: Authenticate the "Google Drive Upload File" node with your Google credentials.
* **Select Folder**: In the "Google Drive Upload File" node, select the specific folder on your Drive where you want the backups to be saved.
* **Schedule**: (Optional) Adjust the "Schedule Trigger" to your preferred backup frequency (default is set to run periodically).

## 📊 Basic Information

- **Workflow ID:** 11842
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 113
- **Downloads:** 11
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11842)

## 👤 Author

- **Name:** Alexandru Florea
- **Username:** @elitiv

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **stickyNote** (×3)
- **ssh** 
- **set** 
- **manualTrigger** 
- **scheduleTrigger** 
- **readWriteFile** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
