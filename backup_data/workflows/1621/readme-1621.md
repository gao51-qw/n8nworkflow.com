# Split out binary data

> This workflows helps with processing binary data.

You'll often have binary objects with keys such as `attachment_0`, `attachment_1`, `attachment_2`, etc. attached to your items, for example when reading an incoming email.

This binary data is hard to process because it's not an array you can simply loop through.

This workflow solves this problem by providing a Function node that takes all incoming items and all their binary data and then returning a single item for each file with a `data` key containing your binary file.

Incoming binary data:
![image.png](fileId:635)

Processed binary data:
![image.png](fileId:636)

## 📊 Basic Information

- **Workflow ID:** 1621
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 7666
- **Downloads:** 766
- **Created:** 2022/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1621)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **function** 
- **httpRequest** 
- **compression** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
