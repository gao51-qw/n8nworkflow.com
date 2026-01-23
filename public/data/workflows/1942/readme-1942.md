# Push and update files in GitHub

> This workflow performs various Git operations. It starts with a manual trigger, sets the local repository path, decodes a file and then updates a file's content, adds, commits, and pushes changes to a GitHub repository, and finally pulls changes.

The upper branch of the workflow retrieves a specific file ("README.md") from a GitHub repository ("git_push_article") owned by "teds-tech-talks." It then decodes the file's binary data into readable text using a code node. The decoded content is used to update the file by adding a timestamp and data. Finally, the modified file is pushed back to the repository using a GitHub node, completing the process of editing and updating the file directly via the workflow.

This bottom branch of the workflow makes changes to a local Git repository. It starts by updating the "README.md" file with a timestamp and some content. Then, it adds the modified files, commits the changes with a message, and pushes them to a remote GitHub repository owned by "teds-tech-talks." Additionally, the workflow allows pulling changes from the remote repository into the local repository. The goal is to demonstrate how to perform various Git operations using n8n nodes, including adding, committing, pushing, and pulling changes.

## 📊 Basic Information

- **Workflow ID:** 1942
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 6666
- **Downloads:** 666
- **Created:** 2023/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1942)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×3)
- **github** (×2)
- **executeCommand** 
- **git** (×4)
- **set** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
