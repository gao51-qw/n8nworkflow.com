# Split in batches node currentRunIndex example

> This workflow demonstrates how to use `currentRunIndex` to get the running index.

![workflow-screenshot](fileId:454)

**Function node:** This node generates mock data for the workflow. Replace it with the node whose data you want to split into batches.

**SplitInBatches node:** This node splits the data with the batch size equal to `1`. Based on your use-case, set the value of the Batch Size.

**IF node:** This node checks the running index. If the running index equals `5` the node returns `true` and breaks the loop.
The node uses the expression `{{$node["SplitInBatches"].context["currentRunIndex"];}}`, which returns the running index.

**Set node:** This node prints a message `Loop Ended`. Based on your use-case, connect the false output of the *IF* node to the input of the node you want to execute if the condition is `false`.


## 📊 Basic Information

- **Workflow ID:** 996
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 3097
- **Downloads:** 309
- **Created:** 2021/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/996)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **manualTrigger** 
- **function** 
- **splitInBatches** 
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
