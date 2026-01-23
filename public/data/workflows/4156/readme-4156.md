# Bulk delete all YouTube playlists from your channel

> ### 🧑‍💼 Who is this for?

This workflow is for **any YouTube user** who wants to **bulk delete all playlists** from their own channel — whether to start fresh, clean up old content, or prepare the account for a new purpose.

It’s useful for:

* Creators reorganizing their channel
* People transferring content to another account
* Anyone who wants to avoid deleting playlists manually one by one

### 🧠 What problem is this workflow solving?

YouTube does not offer a built-in way to delete multiple playlists at once. If you have dozens or hundreds of playlists, removing them manually is extremely time-consuming.

This workflow **automates the entire deletion process** in seconds, saving you hours of repetitive effort.

### ⚙️ What this workflow does

* Connects to your YouTube account
* Fetches **all playlists** you’ve created (excluding system playlists)
* **Deletes them one by one** automatically

&gt; ⚠️ This action is **irreversible**. Once a playlist is deleted, it cannot be recovered. Use with caution.

### 🛠️ Setup

1. 🔐 **Create a YouTube OAuth2 credential** in n8n for your channel.
2. 🧭 Assign the credential to both YouTube nodes.
3. ✅ Click **“Test workflow”** to execute.

&gt; 🟨 By default, this workflow deletes everything. If you want to be more selective, see the customization tips below.

### 🧩 How to customize this workflow to your needs

* ✅ **Add a confirmation flag**
  Insert a `Set` node with a custom field like `confirm_delete = true`, and follow it with an `IF` node to prevent accidental execution.

* ✂️ **Delete only some playlists**
  Add a `Filter` node after fetching playlists — you can match by title, ID, or keyword (e.g. only delete playlists containing “old”).

* 🛑 **Add a pause before deletion**
  Insert a `Wait` or `NoOp` node to give you a moment to cancel before it runs.

* 🔁 **Adapt to scheduled cleanups**
  Use a `Cron` trigger if you want to periodically clear temporary playlists.

## 📊 Basic Information

- **Workflow ID:** 4156
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 680
- **Downloads:** 68
- **Created:** 2025/5/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4156)

## 👤 Author

- **Name:** Lucía Maio Brioso
- **Username:** @luciamb

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **manualTrigger** 
- **youTube** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
