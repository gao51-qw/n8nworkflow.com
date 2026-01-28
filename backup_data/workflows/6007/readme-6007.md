# Auto-convert OneDrive Word documents to PDF with Foxit and send via Gmail

> ## This n8n template demonstrates how to add a document conversion process to incoming Word documents in a OneDrive folder. Documents are converted to PDF and emailed to a reviewer.

Use cases would be environments where incoming documents are dropped into cloud storage and a human needs to review them. By converting to PDF, it becomes easier to read in a consistent format in the browser.

## How it works

* Listen for new files added in a OneDrive folder, identified by an ID
* Download the bits of the new document if the file was a Micrsoft Word document (the API I'm using can convert any Office document, but wanted to start simple)
* Upload to Foxit's API service, convert to PDF, and download when done
* Use GMail to mail the PDF to a human reviewer.

## How to use

* You'll need to determine a OneDrive folder ID to monitor, or select an entire account instead, just be careful when testing. 
* When the workflow is done, it emails to myself, so please connect your own GMail and set a preferred email address for testing. 

## Requirements

* A Microsoft OneDrive account
* Foxit developer account (https://developer-api.foxit.com)
* A Gmail account
* At least one Word document - we all have that, right?

## Next Steps

This workflow could be modified to work with any Office style document, and could also upload the PDF version back to OneDrive. 

## 📊 Basic Information

- **Workflow ID:** 6007
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1122
- **Downloads:** 112
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6007)

## 👤 Author

- **Name:** Raymond Camden
- **Username:** @raymondcamden

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **microsoftOneDriveTrigger** 
- **microsoftOneDrive** 
- **set** 
- **httpRequest** (×4)
- **filter** 
- **wait** 
- **if** 
- **gmail** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
