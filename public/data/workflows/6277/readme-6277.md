# Organize Gmail attachments in Google Drive folders based on sender’s email

> 📩🤖 This workflow automatically processes emails received in Gmail, **extracts their attachments**, and **organizes them into specific folders in Google Drive based on the sender's email address**.

**Note**: The workflow avoids duplicates by checking folder existence before creation.


---

### **Benefits:**

* ✅ **Automated Organization:** No need to manually sort or download email attachments.
* 📁 **Sender-based Categorization:** Files are stored in clearly labeled folders per sender, improving traceability and reducing clutter.
* ⏱ **Time-saving:** Reduces repetitive administrative tasks by automating the workflow end-to-end.
* 🔁 **Modular and Scalable:** Can be easily extended or reused with other services (e.g., Dropbox, S3) or integrated into larger document workflows.
* 🔐 **Secure Cloud Storage:** Attachments are safely backed up in Google Drive, minimizing the risk of data loss from email.

---  

### **How It Works**  
1. **Trigger**:  
   - The workflow can be triggered **manually** (*"When clicking ‘Execute workflow’*) or **automatically** (via *Gmail Trigger* polling emails every minute).  
2. **Email Processing**:  
   - Fetches emails (with attachments) from Gmail within a date range (default: July 6–9, 2025).  
   - For each email, checks if it **contains attachments** (via *IF* node).  
3. **Folder Management**:  
   - Searches Google Drive for a folder named after the **sender’s email address** (under parent folder *"Email Attachments"*).  
   - Creates the folder if it doesn’t exist.  
4. **Attachment Handling**:  
   - Splits out binary attachments, extracts filenames, and uploads each file to the sender’s dedicated folder in Google Drive.  
5. **Sub-Workflow Execution**:  
   - Uses *Execute Workflow* to modularize the upload process (reusable for other workflows).  

---  

### **Set Up Steps**  
1. **Google Services**:  
   - Connect **Gmail** and **Google Drive** nodes to your accounts via OAuth2.  
   - Ensure the parent folder *"Email Attachments"* (ID: `1EitwWVd5rKZTlvOreB4R-6xxxxxx`) exists in Google Drive.  
2. **Adjust Date Range**:  
   - Modify `receivedAfter`/`receivedBefore` in the *Get emails* node to target specific emails.  
3. **Test**:  
   - Run manually to verify folder creation and attachment uploads.  
4. **Activate Automation**:  
   - Enable the *Gmail Trigger* for real-time processing (currently `active: false`).  



----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 


## 📊 Basic Information

- **Workflow ID:** 6277
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1057
- **Downloads:** 105
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6277)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **gmailTrigger** 
- **manualTrigger** 
- **splitInBatches** 
- **splitOut** 
- **merge** 
- **googleDrive** (×3)
- **executeWorkflowTrigger** 
- **executeWorkflow** 
- **gmail** (×2)
- **if** (×2)
- **set** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
