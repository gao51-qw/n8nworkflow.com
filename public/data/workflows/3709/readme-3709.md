# Create Google Drive folders by path

> This workflow creates nested Google Drive folders from a path string (like `Projects/Clients/Reports`). It automatically handles the necessary folder lookups and creation steps required by Google Drive, then outputs the final folder's ID for immediate use.

### How it works
This workflow streamlines the creation of nested folders in Google Drive:

1. **Input:** Provide a `root_folder_id` and a path (e.g., `Projects/Clients/Reports`) as input.
2. **Path Parsing:** The workflow splits the path into individual folder names (based on the `/` separator)
3. **Iterative Check & Create:** Loops through each part of your path:
    - Searches within the _current_ parent folder (starting with the `root_folder_id`) for a subfolder matching the name.
    - **If found:** Retrieves the existing folder's ID to use as the parent for the next iteration.
    - **If not found:** Creates a new folder with that name inside the current parent folder and uses the _new_ folder's ID as the parent for the next iteration.
4. **Output:** Returns the Google Drive Folder ID of the very last folder in the specified path (e.g., the ID for `Reports` in the example above). This ID can then be directly used in subsequent n8n nodes to upload files, create documents, or perform other actions within that specific folder.


### Set up steps
Setting up this workflow requires configuring the connection to Google Drive and knowing where to start creating folders:

1. **Connect Google Drive Account:** Ensure you have a Google Drive credential configured in your n8n instance. Then link your credentials in the workflow: there are 2 Google Drive nodes that will need to be updated.
2. **Identify Starting Folder ID:** Determine the Google Drive Folder ID where your nested structure should begin. You can either use the root of your Google Drive or a specific folder:
	- To use the root of Google Drive, simply set `root_folder_id` to `root` (also called "My Drive" in the UI)
	- To use a specific folder, open the folder in a webbrowser and look at the URL. The folder ID will be in the last part of the URL: `https://drive.google.com/drive/folders/THIS_IS_THE_FOLDER_ID`.
3. **Prepare Inputs for Execution:** When running the workflow (or triggering it), you will need to provide:
    - `google_drive_folder_id` -&gt; this is the root folder ID you identified in step 2.
    - `desired_path` -&gt; This is the path you want to create (e.g., `Projects/Clients/Reports`).

Here's an example of how you can call this workflow in your other workflows:

![image.png](fileId:1164)

![image.png](fileId:1165)


## 📊 Basic Information

- **Workflow ID:** 3709
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1736
- **Downloads:** 173
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3709)

## 👤 Author

- **Name:** Xavier
- **Username:** @xavier

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×3)
- **executeWorkflowTrigger** 
- **set** (×2)
- **googleDrive** (×2)
- **if** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
