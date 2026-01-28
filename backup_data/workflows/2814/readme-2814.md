# 2-way sync Google Contacts and Notion

> Sync your Google Contacts with your Notion database.

You can filter contacts by label or sync all contacts.

All contact information is kept in sync between Google and Notion.
![Screenshot 20250128 102805.jpg](fileId:919)
![Screenshot 20250128 103041.jpg](fileId:920)

### **What happens if I delete a contact?**

It gets deleted on the other end.

- Google Contact deleted → Notion page deleted
- Notion page deleted → Google contact deleted

But you can easily change this behavior by disabling the respective deletion nodes.

### Who is this template for?

- Service providers looking to keep track of client information
- Organized individuals who like to centralize their lives in Notion
- Automation nerds who enjoy creating interesting projects

### How it works

First, you perform an initial import to bring your contacts from Google to Notion.

After that, the workflow listens for changes in both Notion and Google and keeps everything in sync.

### How to set up

Instructions are included within the workflow itself.

### Check out my other templates

👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 2814
- **Complexity:** advanced
- **Node Count:** 82
- **Views:** 1291
- **Downloads:** 129
- **Created:** 2025/1/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2814)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×22)
- **filter** (×9)
- **googleContacts** (×5)
- **set** (×8)
- **httpRequest** (×8)
- **if** (×4)
- **notion** (×15)
- **notionTrigger** (×2)
- **merge** (×2)
- **splitOut** (×4)
- **scheduleTrigger** (×2)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 82 nodes with 49 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
