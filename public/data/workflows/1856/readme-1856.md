# Turn on a light to a specific color on any update in GitHub repository

> This workflow turns a light red when an update is made to a GitHub repository. By default, updates include pull requests, issues, pushes just to name a few.

## Prerequisites

- [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/).
- [Home Assistant credentials](https://docs.n8n.io/integrations/builtin/credentials/homeassistant/).

## How it works

1. Triggers off on the `On any update in repository` node.
2. Uses Home Assistant to turn on a light and then configure the light to turn red.

## 📊 Basic Information

- **Workflow ID:** 1856
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 9956
- **Downloads:** 995
- **Created:** 2023/1/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1856)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **githubTrigger** 
- **homeAssistant** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
