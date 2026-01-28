# Sync Linear issues to Todoist tasks automatically (create, update, close)

> ## ✨ Try It Out!
Sync your **Linear issues to Todoist** automatically with this n8n workflow. When an issue is created, updated, or completed in Linear, a corresponding task is created, updated, or closed in Todoist.

---

## ⚙️ How It Works

- Triggered by issue changes via `linearTrigger`
- Routes based on action (`create`, `update`, `remove`)
- Checks if a matching Todoist task already exists (via issue ID)
- If the issue has:
  - A **due date**
  - And is assigned to **you** (`youremail@example.com`)  
  ➤ Then it creates or updates the task accordingly
- If the issue is marked **Done**, the Todoist task is closed
- If it's deleted in Linear, the Todoist task is also removed
- Sub-issues get enriched with their parent title for clarity

---

## 🛠️ Customization

- Replace `youremail@example.com` with your **Linear email** in the `IF` nodes
- Adjust which states are synced (e.g. “In Progress”, “Todo”...)
- Customize the Todoist project, labels, or title formatting

---

## ⚠️ Bi-directional Sync?

This workflow is **one-way** (Linear ➜ Todoist).  
Bi-directional syncing *might* be possible but isn’t handled here—it would be a cool upgrade!

---

## ✅ Requirements

- n8n with OAuth2 access to **Linear** and **Todoist**
- Your **Linear email** set in the workflow for filtering
- A target Todoist project (default: *Inbox*)

---

## 💬 Need Help?

Ask in the [n8n Forum](https://community.n8n.io/) or join the [Discord](https://discord.com/invite/XPKeKXeB7d).

Happy Automating! 🚀


## 📊 Basic Information

- **Workflow ID:** 5648
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 743
- **Downloads:** 74
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5648)

## 👤 Author

- **Name:** Léo Mathurin
- **Username:** @leo-mathurin

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **todoist** (×10)
- **linearTrigger** 
- **if** (×6)
- **noOp** (×2)
- **switch** (×3)
- **linear** (×2)
- **set** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
