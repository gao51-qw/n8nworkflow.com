# Upload leads from a CSV file to Pipedrive CRM

> This workflow gets leads' contacts from a CSV file and adds it to the Pipedrive CRM by creating an organization and a person. The CSV file in this workflow serves as a universal connector allowing you to export contacts from any platform like LinkedIn, Facebook, etc.

## Prerequisites
- Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/)
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)

## How it works
1. The Google Drive Trigger node starts the workflow when a new CSV file is uploaded to a specific folder in Google Drive.
2. Google Drive node downloads the CSV file.
3. Spreadsheet File node reads data from the CSV file and sends the output to the Merge node. This Spreadsheet File's output becomes the input 1 for the Merge node.
4. Meanwhile, the Pipedrive node gets the same list of contacts from the CSV file.
5. IF node checks if Pipedrive has these contacts already created previously and sends the checked results to the Merge node. These results arrive at the Merge node as input 2.
6. Merge node compares two inputs via email and removes the matches. 
7. Pipedrive node creates new contacts based on the data provided by the Merge node with necessary details such as organization and notes.


## 📊 Basic Information

- **Workflow ID:** 1787
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2992
- **Downloads:** 299
- **Created:** 2022/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1787)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **spreadsheetFile** 
- **pipedrive** (×6)
- **if** 
- **merge** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
