# Create a document in outline for each new GitLab release

> Create a document in Outline for each new GitLab release.

Depends on [this PR](https://github.com/n8n-io/n8n/pull/2591) being merged.

1. Copy workflow
2. Set credentials for GitLab and Outline
3. Inside HTTP Request node, set the following:
   - `collectionId`
   - `parentDocumentId` (or remove if unwanted)

[Example result](https://onezoomin.getoutline.com/share/f4fb81fc-af09-442c-9bdd-6365aeb70058/doc/gitlab-releases-test-ffbapVHbBt)


## 📊 Basic Information

- **Workflow ID:** 1375
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 2904
- **Downloads:** 290
- **Created:** 2021/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1375)

## 👤 Author

- **Name:** Manu
- **Username:** @tennox

## 🏷️ Categories

- Internal Wiki

## 🔗 Nodes Used

- **gitlabTrigger** 
- **httpRequest** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
