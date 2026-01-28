# Split in batches node noItemsLeft example

> This workflow demonstrates how to use `noItemsLeft` to check if there are items left to be processed by the SplitInBatches node.

![workflow-screenshot](fileId:453)

**Function node:** This node generates mock data for the workflow. Replace it with the node whose data you want to split into batches.

**SplitInBatches node:** This node splits the data with the batch size equal to `1`. Based on your use-case, set the value of the ***Batch Size***.

**IF node:** This node check if all the data by the SplitInBatches are not processed or not. It uses the expression `{{$node["SplitInBatches"].context["noItemsLeft"]}}` which returns a boolean value.
If there is data yet to be processed, the expression will return `false`, otherwise `true`.

**Set node:** This node prints a message `No Items Left`. Based on your use-case, connect the false output of the *IF* node to the input of the node you want to execute, after the data is processed by the *SplitInBatches* node.

## 📊 Basic Information

- **Workflow ID:** 995
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 6503
- **Downloads:** 650
- **Created:** 2021/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/995)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

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
