# Monitor Dropbox folders for new files with DB comparison

> Here's the corrected English text:

# Dropbox Folder Monitoring Workflow

As we don't have (yet?) a Dropbox node "Watching new files" or "Watching folder", I created this central workflow to do it.

## How it works
- Triggered by Dropbox webhook
- I respond immediately to Dropbox to avoid webhook disabling
- Then I add/duplicate one branch per monitored folder, according to my needs

In my case, I need to monitor several folders, like "vocal notes to process", "transcriptions to LinkedIn posts" or "quotes to add".

### This workflow shows 2 types of folder monitoring:
1. **Way #1:** Each file in the monitored folder calls a sub-workflow
2. **Way #2:** We get all files from the monitored folder and compare them to a database. If the file is not listed in DB, i supposed it's new one.

### Way #1 - We get all files from the monitored folder
1. I set a variable `folder_to_watch` to indicate which folder to monitor. This step is here just to be homogeneous and allow setting the folder path only once in this branch.
2. I list the folder files
3. We keep only files (exclude folders)
4. Then I call the specialized sub-workflow

### Way #2 - We want only new files from the monitored folder
1. I set a variable `folder_to_watch` to indicate which folder to monitor 
2. I list the folder files and keep only files
3. Meanwhile, I query my DB to get known files about this folder (I send the query to NocoDB `(folder_to_watch,eq,{{ $json.folder_to_watch }})`)
4. Now I can exclude old files and keep only new ones by merging (I compare from Dropbox file `id` - as the file could be renamed by the user)
5. I add the new file in DB to be sure to recognize it next time - I save the JSON Dropbox data:
```
{
"id":"{{ $json.id }}",
"name":"{{ $json.name }}",
"lastModifiedClient": "{{ $json.lastModifiedClient }}",
"lastModifiedServer": "{{ $json.lastModifiedServer }}",
"rev": "{{ $json.rev }}",
"contentSize": {{ $json.contentSize }},
"type": "{{ $json.type }}",
"contentHash": "{{ $json.contentHash }}",
"pathLower": "{{ $json.pathLower }}",
"pathDisplay": "{{ $json.pathDisplay }}",
"isDownloadable": {{ $json.isDownloadable }}
}
```
6. And now I can call my sub-workflow :)

### My DB
Columns details:
- `folder_to_watch`
- `data` (json/text)
- `timestamp`
- `file_id` (Dropbox file ID, to ease future searches)

## My vision:
- I have only one workflow in my n8n that monitors Dropbox folders/files
- This workflow calls the required sub-workflow specialized for the tasks required
- I will have as many branches as I have folders to monitor (if I have 5 different folders to watch, I will get 5 branches and 5 sub-workflows)

## 📊 Basic Information

- **Workflow ID:** 3297
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1490
- **Downloads:** 149
- **Created:** 2025/3/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3297)

## 👤 Author

- **Name:** David Levesque
- **Username:** @davidlevesque

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×6)
- **dropbox** (×2)
- **switch** (×2)
- **nocoDb** (×2)
- **merge** 
- **respondToWebhook** (×2)
- **set** (×2)
- **executeWorkflow** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
