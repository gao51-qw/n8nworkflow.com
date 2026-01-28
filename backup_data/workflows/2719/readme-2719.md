# Retry on fail except for known error

> ## Purpose

This workflow snippet allows for advanced error catching during retry attempts.

There are cases, where you want to check if an item exists first, so you can determine the following actions. Some API’s do not support an endpoint (e.g. Todoist: completed tasks) to do so, which is why you would work with the error branch, only that this does not work well in combination with the retry functionality.

## How it works

- Instead of the builtin retry function of a Node a custom loop is used, to get more granular control in between the iterations
- If the main executed node fails, the error can be filtered for an expected error, which can trigger a separate action
- The retries only happen, if an unexpected error happened
- The workflow only stops, if the defined amount of retries exceeded

## Setup

- Copy the nodes into your existing workflow
- Replace the “Replace me” placeholder with the Node you want to apply the retry logic on
- Follow the sticky notes for more instructions and optional settings

## 📊 Basic Information

- **Workflow ID:** 2719
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1196
- **Downloads:** 119
- **Created:** 2025/1/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2719)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stopAndError** 
- **set** (×2)
- **wait** 
- **if** (×2)
- **noOp** (×3)
- **stickyNote** (×9)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
