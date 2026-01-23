# Check for preview for a link

> This workflow allows you to check for preview for a link and return the preview if it exists.

![workflow-screenshot](fileId:411)

**Peekalink node:** This node checks if a preview is available for a URL or not. If a preivew is available the node returns `true`, otherwise `false`.

**IF node:** The IF node checks the output from the previous node. If the condition is `true` the node connected to the ***true*** branch is executed. If the condition is `false` the node connected to the ***false*** branch is executed.

**Peekalink1 node:** This node will fetch the preview of the URL. Based on your use-case, you can connect the **Slack node**, **Mattermost node** etc. to get the response on these platforms.

**NoOp node:** Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow. We've added this as it can sometimes help others with a better understanding of the workflow, visually.

## 📊 Basic Information

- **Workflow ID:** 935
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 998
- **Downloads:** 99
- **Created:** 2021/2/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/935)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **manualTrigger** 
- **peekalink** (×2)
- **if** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
