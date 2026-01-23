# Copy folder structure without files in Google Drive

> # Why?

Google Drive desktop lets you copy full folders—contents and all. But what if you only want to copy the folder names (not the files) from one drive location to another? Maybe you're reusing a folder structure or duplicating a template structure, but without this workflow each copy will hold different content. This n8n workflow helps you clone just the structure—no clutter, no file duplicates.

# How it works

1. Load this workflow into your n8n instance
2. Setup GDRIVE credentials if you have not already (see video below)
3. Double-click "edit this node"
4. Enter the **SOURCE** folder ID (into "EDIT_THIS_NODE") - see image on where to get folder ID
5. Enter the **DESTINATION** folder ID
6. Run the workflow

# What it does

- Creates all new folders in destination that were in the source folder
- Skips folders in destination that already exist

# What it doesn't do (yet)

- Does not copy over any nested folders
- Does not copy over any files

# Requirements
- n8n
- Google drive API must be setup in your n8n ([https://www.youtube.com/watch?v=3Ai1EPznlAc](5min vid how to do that))
- 
# Future Updates

If I get requests for these features I would build them:

- Copy nested folder structure within the destination drive.
- Flag (on/off) - to copy nested folder structure
- Better error handling
- Some kind of feedback output log on what was created

## 📊 Basic Information

- **Workflow ID:** 4240
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 186
- **Downloads:** 18
- **Created:** 2025/5/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4240)

## 👤 Author

- **Name:** Builds.Cool
- **Username:** @buildscool

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **googleDrive** (×3)
- **stickyNote** (×2)
- **splitInBatches** 
- **set** (×2)
- **code** 
- **if** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
