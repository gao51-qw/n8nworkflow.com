# Save email attachments to Nextcloud

> This workflow will take all emails you put into a certain folder, upload any attachements to Nextcloud, and mark the emails as read (configurable).

Attachements will be saved with automatically generated filenames:
`2021-01-01_From-Sender-Name_Filename-of-attachement.pdf`

Instructions:
1. **Allow lodash to be used in n8n** (or rewrite the code...)
  `NODE_FUNCTION_ALLOW_EXTERNAL=lodash` (environment variable)
2. Import workflow
3. Set credentials for Email & Nextcloud nodes
4. Configure to use correct folder / custom filters
5. Activate

Custom filter examples:
- Only unread emails:
  `Custom Email Config` = `["UNSEEN"]`
- Filter emails by 'to' address:
  `Custom Email Config` = `[["TO", "example+invoices@posteo.de"]]`

## 📊 Basic Information

- **Workflow ID:** 1344
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 9567
- **Downloads:** 956
- **Created:** 2021/11/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1344)

## 👤 Author

- **Name:** Manu
- **Username:** @tennox

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **emailReadImap** 
- **nextCloud** 
- **function** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
