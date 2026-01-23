# Move a Nextcloud folder file by file

> ## Description:
This template facilitates the transfer of a folder, along with all its files and subfolders, within a Nextcloud instance. The Nextcloud user must have access to both the source and destination folders. While Nextcloud allows folder movement, complications may arise when dealing with external storage that has rate limits. This workflow ensures the individual transfer of each file to avoid exceeding rate limits, particularly useful for setups involving external storage with rate limitations.

## How it works:

- Identify all files and subfolders within the specified source folder.
- Recursive search within subfolders for additional files.
- Replicate the folder structure in the target folder.
- Individually move each identified file to the corresponding location in the target folder.

## Set up steps:

- Set Nextcloud credentials for all Nextcloud nodes involved in the process.
-Edit the trigger settings. Detailed instructions can be found within the respective trigger configuration.
- Initiate the workflow to commence the folder transfer process.


## Help
If you need assistance with applying this template, feel free to reach out to me. You can find additional information about me and my services here. =&gt; https://nicokowalczyk.de/links

I have also produced a video where I explain the workflow and provide an example. You can find this video over here. https://youtu.be/K1kmG_Q_jRk

Cheers.
Nico Kowalczyk

## 📊 Basic Information

- **Workflow ID:** 1994
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 3352
- **Downloads:** 335
- **Created:** 2023/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1994)

## 👤 Author

- **Name:** Nico Kowalczyk
- **Username:** @nico-kow

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **if** (×4)
- **set** (×3)
- **stickyNote** (×9)
- **code** (×2)
- **webhook** 
- **executeWorkflowTrigger** 
- **nextCloud** (×6)
- **splitInBatches** (×2)
- **noOp** 
- **stopAndError** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
