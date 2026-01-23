# Automate time tracking enforcement & cleanup for Awork tasks

> This workflow offers several additional features for time tracking with **Awork**:

* Check whether time has been tracked when closing a task. If not, the task is reopened and the user is notified. This can be restricted to specific tasks using tags.
* Enforce a minimum time entry for tasks to comply with "at least 15-minute intervals are billed" policies. This can also be limited to specific tasks by using tags.
* Clean up time entries to match billing intervals.
* Add a start time to time entries if it is missing.

This workflow does not use the Awork community nodes package, as the package does not support all required API calls and is therefore not used here. If you prefer to use that package, you can find more information at [awork integration guide](https://support.awork.com/en/articles/9826591-n8n-integration) and replace the HTTP nodes with the corresponding community nodes where applicable.

**How it works**
* Triggered via Awork Webhook call on status change of tasks and new time entries

**Set up steps**
* Add webhook call to Awork (please see in-workflow notes regarding webhook configuration)
* Configure Awork API credentials
* Set up workflow configuration via setup node, e.g. user notification text, tags, enabled features etc.

## 📊 Basic Information

- **Workflow ID:** 4805
- **Complexity:** advanced
- **Node Count:** 58
- **Views:** 192
- **Downloads:** 19
- **Created:** 2025/6/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4805)

## 👤 Author

- **Name:** Gregor
- **Username:** @gregorg

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **set** (×2)
- **splitOut** 
- **filter** 
- **if** (×12)
- **stickyNote** (×27)
- **webhook** 
- **code** (×4)
- **httpRequest** (×9)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 58 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
