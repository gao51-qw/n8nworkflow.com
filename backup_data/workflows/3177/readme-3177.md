# Sync Notion to Clockify including clients projects and tasks

> ## Purpose

This workflow synchronizes three entities from Notion to Clockify, allowing tracked time to be linked to client-related projects or tasks.

## Demo & Explanation

[![demo video](https://img.youtube.com/vi/qr0cvtAAMrc/0.jpg)](https://youtu.be/qr0cvtAAMrc)

## How it works

- On every run active Clients, Projects and Tasks are retrieved from both Notion and Clockify before being compared by the Clockify ID, which is again stored in Notion for reference
- Potential differences are then applied to Clockify
- If an item has been archived or closed in Notion, it is also marked as archived in Clockify
- All entities are processed sequentially, since they are related hierarchically to each other
- By default this workflow runs once per day or when called via webhook (e.g. embedded into a Notion Button)

## Prerequisites

- A set of Notion databases with a specific structure is required to use this workflow
- You can either start with [this Notion Template](https://steadfast-banjo-d1f.notion.site/1ae82b476c84808e9409c08baf382c45) or adapt your system based on the requirements described in the big yellow sticky note of this workflow template

## Setup

- Clone the workflow and select the belonging credentials
- Follow the instructions given in the yellow sticky notes
- Activate the workflow

## Related workflows:

- [Backup Clockify to Github based on monthly reports](https://n8n.io/workflows/3147-backup-clockify-to-github-based-on-monthly-reports/)
- [Prevent simultaneous workflow executions with Redis](https://n8n.io/workflows/2270-prevent-simultaneous-workflow-executions-with-redis/)


## 📊 Basic Information

- **Workflow ID:** 3177
- **Complexity:** advanced
- **Node Count:** 68
- **Views:** 1175
- **Downloads:** 117
- **Created:** 2025/3/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3177)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **webhook** 
- **set** (×10)
- **scheduleTrigger** 
- **clockify** (×12)
- **compareDatasets** (×3)
- **stopAndError** (×3)
- **noOp** (×8)
- **notion** (×9)
- **if** (×3)
- **merge** (×2)
- **httpRequest** (×2)
- **limit** (×2)
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 68 nodes with 51 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
