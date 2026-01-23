# Notify a team channel about new software releases via Slack and GitHub

> This workflow automatically notifies the team in a Slack channel when code in a GitHub repository gets a new release.

## Prerequisites

- A GitHub account and [credentials](https://docs.n8n.io/integrations/credentials/github/)
- A Slack account and [credentials](https://docs.n8n.io/integrations/credentials/slack/)

## Nodes

- [GitHub Trigger node](https://docs.n8n.io/integrations/trigger-nodes/n8n-nodes-base.githubtrigger/) triggers the workflow when a release event takes place in the specified repository.
- [Slack node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.slack/) posts a message in a specified channel with the text "New release is available in {repository name}", along with further details and a link to the release.

## 📊 Basic Information

- **Workflow ID:** 371
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 3900
- **Downloads:** 390
- **Created:** 2020/5/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/371)

## 👤 Author

- **Name:** q
- **Username:** @qlaffont-md

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **slack** 
- **githubTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 2 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
