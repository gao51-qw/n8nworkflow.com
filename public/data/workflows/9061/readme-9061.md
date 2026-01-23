# 📁 Extract and clean PDF data from Google Drive

> ## 🎯 **What This Does**
Automatically finds PDF file in Google Drive and extracts information. Use it to pull out clean output. It then formats the output into a clean JSON object.

---
## 🔄 **How It Works**
**1. Manual Trigger** starts the process.
**2. 🔎Find File:** **"Google Drive"** node finds the PDF file/files in a specified folder and downloads it/them.
**3. 📝Extract Raw Text:** **"Extract From File"** node pulls the text content from the retrieval file/files.
**4. ✅Output Clean Data:** **"Code"** node refines the extracted content and runs custom code for cleaning and final formatting.

---
## 🚀**Setup Guidelines**
### Setup Requirements
- **Google Drive Account**: A Google Drive with an empty folder or folder that contains PDF file/files that you want to process.
- **API Keys**: Gemini, Google Drive.
### Set up steps
Setup time: &lt; 5 minutes

1. **Add Credentials** in n8n:
    - Ensure your **Google Drive OAuth2** and **Google Gemini (PaLM) API** credentials are created and connected. Go to `Credentials` &gt; `New` to add them if you haven't created yet.
        
2. **Configure the Search Node (`Get PDF Files/File`):**
    - Open the node and select your Google Drive credential.
    - In the "Resource" field, choose `File/Folder`. In "Search Method" field, select "Search File/Folder Name", In "Search Query" type in `*.pdf`.
    - Add on 2 filters, in "Folder" filter click on dropdown choose "From List" and connect to the created folder on your google drive. In "What to Search" filter, select file.
    - Add on "Options" (optional): Click on "Add option", choose ("ID" and "Name")
	
3. **Define Extraction Rules (`Extract Files/File's Data`):**
    - Select File Type: Open node and click on the dropdown below "Operation" section, choose "Extract From PDF". Next, in "Input Binary Field" section keep as default "data".
	
4. **Clean & Format Data (Optional):**
    - Adjust the `Get PDF Data Only` node to keep only the fields you need and give them friendly names.
    - Modify the `Data Parser & Cleaner` node if you need to perform custom transformation.
       
5. **Activate and Run:**
    - Save and Activate the workflow.
    - Click "Execute Workflow" to run it manually and check the output.

That’s it! Once configured, this workflow becomes your personal data assistant. Run it anytime you need to extract information quickly and accurately, saving you hours of manual work and ensuring your data is always ready to use.

## 📊 Basic Information

- **Workflow ID:** 9061
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2447
- **Downloads:** 244
- **Created:** 2025/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9061)

## 👤 Author

- **Name:** EoCi - Mr.Eo
- **Username:** @eocimreo

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **noOp** 
- **manualTrigger** 
- **set** 
- **googleDrive** (×2)
- **extractFromFile** 
- **code** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
