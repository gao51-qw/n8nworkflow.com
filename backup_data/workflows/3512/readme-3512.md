# Google Drive duplicate file manager

> # Google Drive Duplicate File Manager 🧹📁

**Purpose:** Automate the process of finding and managing duplicate files in your Google Drive.

**Who's it for?**

* Individuals and teams aiming to streamline their Google Drive.
* Anyone tired of manual duplicate file cleanup.

**What it Solves:**

* Saves storage space 💾.
* Reduces file confusion 😕➡️🙂.
* Automates tedious cleanup tasks 🤖.

**How it works:**

1.  **Trigger:** Monitors a Google Drive folder for new files.
2.  **Configuration:** Sets rules for keeping and handling duplicates.
3.  **Find Duplicates:** Identifies duplicate files based on their content (MD5Checksum).
4.  **Action:** Either moves duplicates to trash or renames them.

**Setup Guide:**

1.  **Google Drive Trigger ⏰:**
    * Set up the trigger to watch a specific folder or your entire drive (use caution with the root folder! ⚠️).
    * Configure the polling interval (default: every 15 minutes).
2.  **Config Node ⚙️:**
    * **keep:** Choose whether to keep the "first" or "last" uploaded file (default: "last").
    * **action:** Select "trash" to delete duplicates or "flag" to rename them with "DUPLICATE-" (default: "flag").
    * **owner & folder:** Taken from the trigger. Only change if needed.

**Key Considerations:**

* **Google Drive API limits:** Be mindful of API usage.
* **Folder Scope:** The workflow handles one folder depth by default. (WARNING: If configured to work with the Root folder / all files in all sub-directories are processed so **USE THIS OPTION WITH CAUTION** since the workflow might trash/rename important files)
* **Google Apps:** Google docs are ignored since they are not actual binary-files and their content can't be compared.


**Enjoy your clean Google Drive! ✨**

## 📊 Basic Information

- **Workflow ID:** 3512
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1158
- **Downloads:** 115
- **Created:** 2025/4/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3512)

## 👤 Author

- **Name:** Ventsislav Minev
- **Username:** @vminev

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **set** (×2)
- **filter** (×2)
- **code** (×2)
- **stickyNote** (×6)
- **googleDrive** (×3)
- **noOp** 
- **if** 
- **googleDriveTrigger** 
- **switch** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
