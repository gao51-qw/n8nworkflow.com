# Get bibliographic data from your Zotero library

> ## What this template does
This workflow will read your Zotero Library and extract Meta Data from the articles of one collection in your bibliography. You can personalize the output for optimized results.

## How it works

Mainly, follow the instructions in the Post it notes:

1. Go to [https://www.zotero.org/settings/security](https://www.zotero.org/settings/security) and find your USER ID (It's right under the APPLICATIONS Section.
2. On the same website, create a New Private Key.
3. In the "Collections" Node, select Generic Credential Type &gt; Header Auth &gt; Create New Credential using:
- NAME: Zotero-API-Key
- VALUE: [Your Private Key] 
4. Run your Flow to check if it works and open the "Select Collection" node.
5. See the Results of the previous node as TABLE and copy the "KEY" of the collection you want to use.

After that you should have a working flow that reads your bibliography.

You can edit or delete the last 2 nodes to personalize your results (Filter and Edit Fields)


## 📊 Basic Information

- **Workflow ID:** 2444
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1450
- **Downloads:** 145
- **Created:** 2024/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2444)

## 👤 Author

- **Name:** Diego
- **Username:** @villalon

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×4)
- **if** 
- **httpRequest** (×2)
- **filter** (×2)
- **stickyNote** (×5)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
