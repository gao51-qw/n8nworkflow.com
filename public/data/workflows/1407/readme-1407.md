# Simple file based key value store (WriteKey)

> Store a key with a value in a local json file. Multiple keys could be saved in a single file.

Related workflow: [GetKey](https://n8n.io/workflows/1408)

Create a subfolder in your n8n homedir: `/home/node/.n8n/local-files`. In docker look at the data path and create a subfolder `local-files`.
Set the correct access rights `chmod 1000.1000 local-files`.

Put the workflow code in a new workflow named `WriteKey`.

Create another workflow with a `function item`:

```js
return  {
  file: '/4711.json', // 4711 should be your workflow id
  key: 'MyKey',
  value: 'MyValue'
}
```

Pipe the `function item` to an `Execution Workflow` that calls the `WriteKey` workflow.

It would be nice if we could get someday a shiny built-in n8n node that does the job. :)

## 📊 Basic Information

- **Workflow ID:** 1407
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1674
- **Downloads:** 167
- **Created:** 2022/1/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1407)

## 👤 Author

- **Name:** Peter
- **Username:** @rottmann

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **writeBinaryFile** 
- **functionItem** (×3)
- **readBinaryFiles** 
- **moveBinaryData** (×2)
- **splitInBatches** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
