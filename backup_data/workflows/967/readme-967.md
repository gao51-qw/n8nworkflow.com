# Monitor a file for changes and send an alert

> This flow monitors a file for changes of its content. If changed, an alert is sent out and you receive it as push, SMS or voice call on [SIGNL4](https://www.signl4.com).

User cases:
- Log-file monitoring
- Monitoring of production data
- Integration with third-party systems via file interface
- Etc.

Sample file "alert-data.json":
```
{
    "Body": "Alert in building A2.",
    "Done": false,
    "eventId": "2518088743722201372_4ee5617b-2731-4d38-8e16-e4148b8fb8a0"
}
```

Body: The alert text to be sent.
Done: If false this is a new alert. If true this indicated the alert has been closed.
eventId: Last SIGNL4 event ID written by SIGNL4.

This flow can be easily adapted for database monitoring as well.


## 📊 Basic Information

- **Workflow ID:** 967
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 3417
- **Downloads:** 341
- **Created:** 2021/3/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/967)

## 👤 Author

- **Name:** Ron
- **Username:** @rons4

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **cron** 
- **writeBinaryFile** 
- **readBinaryFile** 
- **moveBinaryData** (×2)
- **function** 
- **if** 
- **signl4** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
