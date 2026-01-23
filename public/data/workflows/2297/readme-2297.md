# Convert DOCX (from URL) to PDF using ConvertAPI

> ## Who is this for?
For developers and organizations that need to convert **DOCX** files to **PDF**.

## What problem is this workflow solving?
The file format conversion problem.

## What this workflow does

1. Downloads the DOCX file from the web.
2. Converts the DOCX file to PDF.
3. Stores the PDF file in the local file system.

## How to customize this workflow to your needs
1. Open the `HTTP Request` node.
2. Adjust the URL parameter (all endpoints can be found [here](https://www.convertapi.com/api)).
3. Use your `API Token` for authentication. Pass the token in the `Authorization` header as a Bearer token. You can manage your API Tokens in the [User panel → Authentication](https://www.convertapi.com/a/authentication).
4. Adjust `url_to_file` in the `Config` node to URL pointing to your file.
5. Optionally, additional `Body Parameters` can be added for the converter.


## 📊 Basic Information

- **Workflow ID:** 2297
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1782
- **Downloads:** 178
- **Created:** 2024/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2297)

## 👤 Author

- **Name:** ConvertAPI
- **Username:** @convertapi

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **readWriteFile** 
- **stickyNote** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
