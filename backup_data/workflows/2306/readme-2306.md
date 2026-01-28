# Protect PDF with the password using ConvertAPI

> ## Who is this for?
For developers and organizations that need to protect **PDF** files with the password.

## What problem is this workflow solving?
PDF file protection problem.

## What this workflow does

1. Downloads the PDF file from the web.
2. Protects PDF file with the password.
3. Stores the PDF file in the local file system.

## How to customize this workflow to your needs
1. Open the `HTTP Request` node.
2. Adjust the URL parameter (all endpoints can be found [here](https://www.convertapi.com/api)).
3. Use your `API Token` for authentication. Pass the token in the `Authorization` header as a Bearer token. You can manage your API Tokens in the [User panel → Authentication](https://www.convertapi.com/a/authentication).
4. Change the password in the parameter `UserPassword`
5. Optionally, additional `Body Parameters` can be added for the converter.


## 📊 Basic Information

- **Workflow ID:** 2306
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 838
- **Downloads:** 83
- **Created:** 2024/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2306)

## 👤 Author

- **Name:** ConvertAPI
- **Username:** @convertapi

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **readWriteFile** 
- **stickyNote** (×2)
- **httpRequest** (×2)
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
