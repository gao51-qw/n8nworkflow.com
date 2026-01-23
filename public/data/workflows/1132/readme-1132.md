# Trigger a build in Travis CI when code changes are push to a GitHub repo

> This workflow allows you to trigger a build in Travis CI when code changes are pushed to a GitHub repo or a pull request gets opened.

![workflow-screenshot](fileId:514)

**GitHub Trigger node:** This node will trigger the workflow when changes are pushed or when a pull request is created, updated, or deleted.

**IF node:** This node checks for the action type. We want to trigger a build when code changes are pushed or when a pull request is opened. We don't want to build the project when a PR is closed or updated.

**TravisCI node:** This node will trigger the build in Travis CI. If you're using CircleCI in your pipeline, replace the node with the CircleCI node.

**NoOp node:** Adding this node is optional.

## 📊 Basic Information

- **Workflow ID:** 1132
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1579
- **Downloads:** 157
- **Created:** 2021/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1132)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **githubTrigger** 
- **if** 
- **travisCi** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
