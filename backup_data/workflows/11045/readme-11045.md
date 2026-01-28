# Batch process data with Redis-powered debouncing system

> ## How it works
This implementation aggregates incoming data into a Redis list from potentially concurrent workflow executions. It buffers the data for a set period before a single execution retrieves and processes the entire batch.

## Step-by-step Flow:
1. Trigger: Data is received from a trigger (e.g., an external workflow execution).

2. Lock Check: The system verifies that the queue is not currently locked; if it is, the process waits.

3. Append: The received data is appended to a Redis list.

4. Tagging: A unique execution identifier is generated and written to a specific Redis key (acting as a "last writer" marker).

5. Wait: The execution pauses for a configured duration.

6. Verification: After the wait, the execution checks if the Redis key still contains its specific identifier.

7. Exit Condition: If the identifier has changed, it indicates a newer execution has arrived. The current execution terminates.

8. Processing: If the identifier matches, this execution assumes responsibility for the batch. It locks the queue, retrieves all data, clears the Redis list, releases the lock, and forwards the aggregated data further.

## Setup
1. Add your Redis instance credentials
2. Configure the debounce period (2 seconds by default)
3. Adjust this workflow's trigger and what it calls in the end


## 📊 Basic Information

- **Workflow ID:** 11045
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 59
- **Downloads:** 5
- **Created:** 2025/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11045)

## 👤 Author

- **Name:** Gregory
- **Username:** @gregory

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **crypto** 
- **redis** (×8)
- **if** (×2)
- **wait** (×2)
- **splitOut** 
- **executeWorkflowTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
