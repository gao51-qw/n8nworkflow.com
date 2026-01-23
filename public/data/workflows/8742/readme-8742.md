# Automated upload & send a large file with TransferNow

> This workflow creates a user-friendly web form to upload a file, which allows users to upload a **single large file** (*up to 5Gb*) through a custom web form and automatically send it via **TransferNow**, handling the complex multi-part upload process required for **large files**.

---

### **Advantages**

* ✅ **No manual steps**: The entire process from file upload to email delivery is fully automated.
* ✅**User-friendly**: Anyone can upload files via a simple web form, without needing to access TransferNow directly.
* ✅**Supports large files**: TransferNow’s API handles large files that are not suitable for email attachments.
* ✅ **Secure file delivery**: The workflow uses TransferNow’s secure, expiring download links.
* ✅**Customizable**: You can easily adjust the workflow to support multiple file types, multiple recipients, or different validity rules.
* ✅**Scalable**: Works for individuals, teams, or businesses that frequently need to share large documents.


---

### **How It Works**

The workflow is triggered when a user submits the embedded web form. Here is the process:

1.  **Form Trigger:** A user accesses the form, fills in the required details (Title, Message, Recipient Email), and uploads a single PDF file. Submitting the form starts the workflow.
2.  **File Processing:** The workflow calculates the size of the uploaded file, which is a necessary parameter for the TransferNow API.
3.  **Transfer Creation:** It sends a request to the TransferNow API to create a new file transfer. The API responds with details needed for the upload, including a unique `transferId` and `uploadId`.
4.  **Upload URL Retrieval:** The workflow requests a pre-signed upload URL from TransferNow for the specific part of the file.
5.  **File Upload:** The binary file data from the form and the upload URL from the previous step are merged. The workflow then performs a direct `PUT` request to the secured TransferNow URL to upload the file's binary content.
6.  **Upload Confirmation:** After the upload, the workflow informs the TransferNow API that the file part upload is complete.
7.  **Finalization:** Once the entire upload is confirmed, the workflow finalizes the transfer on TransferNow's side.
8.  **Data Retrieval & Response:** The workflow fetches the final transfer data, constructs a public download URL, and sends a success message back to the user's browser, displaying the recipient's email and the download link.

---

### **Set Up Steps**

To use this workflow, you need to configure the connection to the TransferNow API.

1.  **Get TransferNow API Credentials:**
    *   Create a free account on TransferNow developer portal to get your API key (a 14-day free trial is available).

2.  **Configure Credentials in n8n:**
    *   In the n8n editor, locate the HTTP Request nodes named "Set Transfer", "Get Upload Url", etc.
    *   These nodes use a credential called "Header Auth TransferNow". You need to create this credential.
    *   Go to **Credentials &gt; Add Credential** and select "HTTP Header Auth".
    *   Give it a name (e.g., "TransferNow API Key").
    *   In the **Name** field, enter `x-api-key`.
    *   In the **Value** field, paste your personal TransferNow API key.
    *   Save the credential. The existing nodes will automatically use it, or you can select it from the dropdown in each node's credentials section.

3.  **Activate the Workflow:**
    *   Save the workflow and click the **Activate** toggle to make it live.
    *   Once activated, the **On form submission** node will provide a unique public URL for your form. Share this URL with users to start uploading and sending files.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).


## 📊 Basic Information

- **Workflow ID:** 8742
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 337
- **Downloads:** 33
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8742)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- File Management

## 🔗 Nodes Used

- **stickyNote** (×6)
- **formTrigger** 
- **code** 
- **set** (×2)
- **httpRequest** (×6)
- **form** 
- **if** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
