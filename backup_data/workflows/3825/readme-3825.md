# 🧹 Archive (delete) duplicate items from a Notion database

> ### 🧑‍💼 Who is this for?

If you’re using **Notion** to manage a database (like saving links, tasks, notes, or anything really), and it’s starting to get messy with duplicate entries, this workflow is for you.

It’s especially useful if you want to keep things tidy *without* doing any manual cleanup.

### 🧠 What problem is this workflow solving?

Notion doesn’t have a built-in way to find or remove duplicates, so you either clean them up manually 😩 or just let them pile up.

This workflow automatically finds entries that share the same property (like a URL or title) and archives the extra copies, keeping just one.

### ⚙️ What this workflow does

- Pulls all pages from a Notion database.
- Identifies duplicates based on a property you choose.
- Archives the duplicate pages (which is like soft-deleting them).
- Keeps one version of each duplicate group.

It includes **two optional triggers**:

- Run it every day ⏰
- Or trigger it automatically when a new page is added to the database ⚡

### 🛠️ Setup

1. Connect your Notion account in n8n.
2. Select your database in the Notion nodes.
3. In the **“Format items properly”** node, replace `"SET YOUR PROPERTY HERE"` with a reference to the property you want to use for detecting duplicates. I recommend using the n8n property drag-and-drop feature.
4. Enable whichever trigger you prefer — or both.

And that’s it. It runs on its own after that.

### 🧩 How to customize this workflow to your needs

- Use a different property for detecting duplicates by updating the `Set` node.
- Want to tag duplicates instead of archiving them? Just replace the last Notion node with an update operation.
- Adjust the schedule to run it hourly, weekly, or whenever suits your setup.

## 📊 Basic Information

- **Workflow ID:** 3825
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1030
- **Downloads:** 103
- **Created:** 2025/5/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3825)

## 👤 Author

- **Name:** Lucía Maio Brioso
- **Username:** @luciamb

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **notion** (×2)
- **aggregate** 
- **set** 
- **code** 
- **notionTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
