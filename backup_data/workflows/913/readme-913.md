# Execute multiple command lines based on text file inputs

> This workflow takes a text file as input. It pulls the information from the text file and used it as a parameter to execute a command for each text line.

This workflow references a file */home/n8n/filelist.txt* in the *Read Binary File* node which will need to be changed to work properly. You can also edit the *Execute Command* node to modify what happens for each of these lines of text.

![workflow-screenshot](fileId:394)

**Note:** This workflow requires the Execute Command node which is only available on the on-premise version of n8n.

## 📊 Basic Information

- **Workflow ID:** 913
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 3699
- **Downloads:** 369
- **Created:** 2021/2/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/913)

## 👤 Author

- **Name:** jason
- **Username:** @tephlon

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **readBinaryFile** 
- **moveBinaryData** 
- **function** 
- **executeCommand** 
- **if** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
