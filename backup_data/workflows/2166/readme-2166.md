# Watchdog: Auto Resume Workflows

> If you have multiple users managing workflows, there may come a time where a user “accidentally” turns off a workflow. Or, if you have workflows that automatically turn off other workflows, that code might “accidentally” turn off the wrong one.

In either case, here’s a workflow that can attempt to “auto-start” accidentally disabled workflows:
![image.png](fileId:776)

How it works:

When activated, then every 4 hours, the workflow will search all other workflows that have the `auto_resume:true` tag present.
If any other workflow has `auto_resume:true` set but is currently turned off, then this workflow will turn it back on.

Of course, this watchdog won’t work if the watchdog workflow is turned off. That said, we’ve found this useful in recovering from accidental actions that cause production workflows to be turned off.

## 📊 Basic Information

- **Workflow ID:** 2166
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1036
- **Downloads:** 103
- **Created:** 2024/3/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2166)

## 👤 Author

- **Name:** Darien Kindlund
- **Username:** @dkindlund

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n** (×2)
- **filter** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
