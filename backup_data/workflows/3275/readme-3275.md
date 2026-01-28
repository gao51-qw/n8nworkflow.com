# Convert PDF to HTML using PDF.co and Google Drive

> This n8n workflow automates the process of converting a newly stored PDF file from Google Drive into an HTML file and saving it back to Google Drive. The workflow is triggered whenever a new PDF is uploaded to a specific folder, ensuring seamless conversion and storage without any manual intervention.

This workflow provides an efficient, automated solution for converting PDFs to HTML, eliminating the need for manual file handling and ensuring a smooth document transformation process. It is particularly useful for scenarios where PDFs need to be dynamically converted and stored in an organised manner for web usage, archiving, or further processing.
 
## Prerequisites :

Before setting up this workflow, ensure the following:
- PDF.co API Key: Sign up at PDF.co and obtain an API key for PDF to HTML conversion.
- Proper Authentication: Ensure authentication is configured for Google Drive in n8n.

## Customisation Options : 
- Modify the API request to convert PDFs to other formats like Text, CSV, or XML.
- Extend the IF Node to reject files based on size or other properties.
- Send a notification once the conversion is complete using an Email or Telegram Node.

## Steps :

### Step 1: Google Drive Trigger Node (Watch for New Files)

- Click "Add Node" and search for Google Drive.
- Select "Google Drive Trigger" and add it to the workflow.
- Authenticate with your Google Account.
- Select the folder to monitor.
- Set the trigger to activate whenever a new file is added.
- Click "Execute Node" to test.
- Click "Save".

### Step 2: IF Node (Check if File is a PDF)

- Click "Add Node" and search for IF.
- Add a condition to check if the file extension is  .pdf
- If true → Send the file to the next step.
- If false → Stop the workflow.
- Click "Execute Node" to test.
- Click "Save".

### Step 3: HTTP Request Node (Convert PDF to HTML)

- Click "Add Node" and search for HTTP Request.
- Set the Method to POST.
- Enter the PDF.co API endpoint for PDF to HTML conversion.
- In the Headers, add API key which we have get from pdf.co
- Send the binary PDF data as the request body.
- Click "Execute Node" to test.
- Click "Save".

### Step 4: Function Node (Convert Response to Binary)

- Click "Add Node" and search for Function.
- Write a JavaScript function to transform the API response into a binary file.
- Click "Execute Node" to test.
- Click "Save".

### Step 5: Google Drive Node (Save Converted HTML File)

- Click "Add Node" and search for Google Drive.
- Select "Upload File" as the action.
- Authenticate with your Google Account.
- Set the destination folder for storing the HTML file.
- Map the binary data from the Function Node.
- Click "Execute Node" to test.
- Click "Save".

### Step 6: Connect & Test the Workflow

- Link the nodes in this  order (Google Drive Trigger → IF Node → HTTP Request → Function Node → Google Drive Upload)
- Run the workflow manually.
- Upload a test PDF to Google Drive.
- Check Google Drive for the converted HTML file.


## Who’s behind this?

WeblineIndia’s [AI development team](https://www.weblineindia.com/ai-development.html). 

We've delivered 3500+ software projects across 25+ countries since 1999. From no-code automations to complex AI systems — our AI team builds tools that drive results. 

Looking to [hire AI developers](https://www.weblineindia.com/hire-ai-developers.html)? Start with us.

## 📊 Basic Information

- **Workflow ID:** 3275
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 2877
- **Downloads:** 287
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3275)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **if** 
- **httpRequest** 
- **googleDrive** 
- **code** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
