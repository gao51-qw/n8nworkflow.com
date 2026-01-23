# Backup Clockify to Github based on monthly reports

> ## Purpose

This workflow creates a versioned backup of an entire Clockify workspace split up into monthly reports.

## How it works

- This backup routine runs daily by default
- The Clockify reports API endpoint is used to get all data from the workspace based on time entries
- A report file is being retrieved for every month starting with the current one, going back 3 month in total by default
- If changes happened during a day to any report, it is being updated in Github

## Prerequisites

- Create a **private** Github repository
- Create credentials for both Clockify and Github (make sure to give permissions for read and write operations)

## Setup

- Clone the workflow and select the belonging credentials
- Follow the instructions given in the yellow sticky notes
- Activate the workflow

## 📊 Basic Information

- **Workflow ID:** 3147
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 659
- **Downloads:** 65
- **Created:** 2025/3/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3147)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **extractFromFile** 
- **compareDatasets** 
- **stopAndError** 
- **set** (×4)
- **splitOut** 
- **filter** 
- **clockify** 
- **httpRequest** 
- **github** (×3)
- **if** 
- **scheduleTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
