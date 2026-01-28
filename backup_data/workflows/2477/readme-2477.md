# Mark outdated workflow nodes on canvas and send a summary with Gmail (add-on)

> This is an **add-on** for the template [Check if workflows contain build-in nodes that are not of the latest version](https://n8n.io/workflows/2301-check-if-workflows-contain-build-in-nodes-that-are-not-of-the-latest-version/)

## Purpose

This workflow highlights outdated nodes within all workflows of a single n8n instance and places an updated preconfigured node right next to it, so it can be swapped easily.

![Image](https://i.imgur.com/yRI0adF.png)

## How it works

- The parent workflow checks the entire n8n instance for outdated nodes within all workflows and passes a list of those alongside some metadata to this workflow
- This workflow then processes that data and updates the affected workflows
- Outdated nodes are renamed by prepending an emoji (default: ⚠️) - this is also used for future checks to prevent from double-processing
- The latest version of each outdated node is added to the workflow canvas (not wired up) behind the old one, slightly shifted in position
- An Email is sent with a list of modified workflows

In the settings it is possible to define:

- which symbol/emoji should be prepended to outdated notes
- whether to include only major node updates or all of them
- whether to add the new nodes to the canvas or not

## Setup

- Clone this template to your n8n instance
- Update the Settings node by setting at least the base URL of your n8n instance
- Set a recipient in the Gmail node
- Clone the [parent template](https://n8n.io/workflows/2301-check-if-workflows-contain-build-in-nodes-that-are-not-of-the-latest-version/) to your n8n instance and configure it as described in it’s description
- Add an “Execute Workflow” node to the end of the parent workflow and configure it, so it calls this workflow

## How to use

Execute the parent workflow and check your Email Inbox.

All linked workflows should contain one or more updated nodes with an emoji prepended to their names.

## Disclaimer

- Beware, that major updates can cause migrations of nodes to fail, since their structure can differ. So always compare the old nodes with the newly created, if all parameters still meet the requirements.

- Be careful when executing this workflow on a production environment, since it directly modifies your workflows. It is advisable to run this on your testing environment and migrate successfully tested workflows to your production environment using git or manually.

## 📊 Basic Information

- **Workflow ID:** 2477
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 2203
- **Downloads:** 220
- **Created:** 2024/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2477)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **stickyNote** (×8)
- **set** (×2)
- **gmail** 
- **n8n** (×2)
- **code** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
