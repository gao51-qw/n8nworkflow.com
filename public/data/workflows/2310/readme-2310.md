# Convert web page to PDF using ConvertAPI

> ## Who is this for?
For developers and organizations that need to convert **web page** to **PDF**.

## What problem is this workflow solving?
The web page conversion to PDF problem.

## What this workflow does

1. Converts web page to PDF.
2. Stores the PDF file in the local file system.

## How to customize this workflow to your needs
1. Open the `HTTP Request` node.
2. Adjust the URL parameter (all endpoints can be found [here](https://www.convertapi.com/api)).
3. Use your `API Token` for authentication. Pass the token in the `Authorization` header as a Bearer token. You can manage your API Tokens in the [User panel → Authentication](https://www.convertapi.com/a/authentication).
4. Change the parameter `url` to the webpage you want to convert to pdf
5. Optionally, additional `Body Parameters` can be added for the converter.


## 📊 Basic Information

- **Workflow ID:** 2310
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2944
- **Downloads:** 294
- **Created:** 2024/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2310)

## 👤 Author

- **Name:** ConvertAPI
- **Username:** @convertapi

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **httpRequest** 
- **manualTrigger** 
- **readWriteFile** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
