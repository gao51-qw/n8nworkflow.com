# 🛠️ Change Binary MimeType/Extension

> ## How it works

This workflow changes the file name, and therefore the extension and MIME type, of any binary file passed to it. This is perfect for converting file formats on the fly, like turning a Telegram voice message (`.oga`) into an MP3 for an AI transcription service.

1.  **Set New File Name:** The `SET OUTPUT FILE NAME` node is where you define the desired output file name and extension (e.g., `audio.mp3`). It also dynamically captures the property name of the incoming binary (e.g., `data`).
2.  **Extract Binary Data:** The workflow temporarily converts the binary file into a Base64 text string to make it accessible in the next step.
3.  **Rebuild Binary with New Name:** A Code node takes the Base64 data and reconstructs it as a binary file, but this time, it assigns the new file name you specified. n8n automatically sets the MIME type based on the new file extension.

## Set up steps

**Setup time: &lt; 1 minute**

This workflow is designed to be used as a sub-workflow.

1.  In your main workflow, add an **Execute Sub-Workflow** node where you need to change a file's type.
2.  In the **Workflow** parameter, select this "Change Binary MimeType/Extension" workflow.
3.  **Open this workflow** and go to the **`SET OUTPUT FILE NAME`** node.
4.  Modify the `output_file_name` value to your desired file name (e.g., `voice_message.mp3` or `document.pdf`).
5.  Save this workflow. Now, any binary file you send to it from your main workflow will be returned with the new fileName and mimeType.

## 📊 Basic Information

- **Workflow ID:** 5155
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1910
- **Downloads:** 191
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5155)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **extractFromFile** 
- **set** 
- **code** 
- **stickyNote** (×4)
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
