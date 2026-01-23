# GitHub fork status monitor

> This workflow helps you keep an eye on your GitHub forks, notifying you when they fall behind or pull ahead of their upstream repositories.

**How It Works**
- Fetches All Your Repos: The workflow starts by grabbing a list of all repositories owned by your GitHub account.
- Filters for Forks: It then intelligently filters this list to identify only your forked repositories.
- Compares Branches: For each identified fork, it compares its default branch against the upstream repository's default branch to find out how many commits it's ahead or behind.
- Filters for Changes: Only forks that are either ahead or behind their upstream (i.e., not perfectly in sync) are processed further.
- Generates Report: A concise, well-formatted report is compiled, highlighting the status and commit differences for each relevant fork.
- Sends Telegram Notification: Finally, this report is sent directly to your Telegram chat, keeping you informed in real-time.

**Setup Steps**
- Copy the template 
- Update triggers ( optional ) 
- Update the credentials 

**Prerequisites**
- **GitHub Credentials**: You'll need to provide your GitHub personal access token for the "Get All Repositories" and "Compare Branches API Call" nodes.
- **Telegram Bot Setup**: Configure a Telegram Bot and obtain its API token and your chat ID for the "Send Report" node.
- **Github Owner Username**: Update the "Get All Repositories" node with the GitHub username of the repository owner whose forks you want to monitor.


*Explore & Fine-Tune: All detailed instructions and explanations, including how to adjust the filtering logic or output formatting, are provided in sticky notes directly within the workflow canvas.*

## 📊 Basic Information

- **Workflow ID:** 4878
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 189
- **Downloads:** 18
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4878)

## 👤 Author

- **Name:** Manish
- **Username:** @manish

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **github** (×2)
- **telegram** 
- **telegramTrigger** 
- **code** (×4)
- **httpRequest** 
- **merge** 
- **if** 
- **stickyNote** (×5)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
