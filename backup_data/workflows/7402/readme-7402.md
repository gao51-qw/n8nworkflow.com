# Recursive Google Drive folder duplicator with permission preservation

> # Google Drive Folder Duplicator

**This n8n workflow creates a complete recursive copy of any Google Drive folder, preserving the entire folder structure, all files, and sharing permissions.**

## What It Does

- Duplicates folders with unlimited nested subfolders
- Copies all files maintaining original names and metadata
- Preserves sharing permissions (users, groups, domains)
- Creates identical folder hierarchy in target location

## How It Works

1. Initialize: Sets source/target folders and creates main destination folder
2. Recursive Processing: Scans each folder level, splits files from subfolders
3. File Handling: Copies files and applies original permissions
4. Folder Handling: Creates subfolders and applies original permissions
5. Self-Recursion: Calls itself for each subfolder to process unlimited nested levels

## Key Features

- Unlimited Depth: Handles any number of nested folder levels
- Permission Preservation: Maintains exact sharing settings

## Requirements

Google Drive OAuth2 credentials with drive access

## 📊 Basic Information

- **Workflow ID:** 7402
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 414
- **Downloads:** 41
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7402)

## 👤 Author

- **Name:** Annie To
- **Username:** @annieth

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **set** (×5)
- **googleDrive** (×6)
- **executeWorkflow** (×2)
- **filter** (×2)
- **if** (×2)
- **code** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
