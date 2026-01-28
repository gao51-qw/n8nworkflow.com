# Automated certificate generator with Google Sheets, Slides, PDF & Gmail delivery

> ### Automated Certificate Generator with Google Sheets, Slides, and Gmail Delivery 🎓

This workflow is designed for **educators, trainers, and event organizers** who want to automatically generate and send digital certificates.

It takes participant data from **Google Sheets**, personalizes a **Google Slides certificate template**, converts it into **PDF**, saves it in **Google Drive**, and emails it directly to participants using **Gmail**.

---

#### ✅ Setup Instructions

1. **Prepare Google Sheets**
   - Create a sheet with these required columns:  
     - **Name** → Participant’s full name  
     - **Email** → Recipient email address  
     - **Score** (optional) → For filtering or record keeping  
   - Add at least one row of test data.

2. **Create Google Slides Template**
   - Design your certificate (branding, colors, etc.).  
   - Add a placeholder `[NAME]` where the participant’s name should appear.  

3. **Set up Google Drive**
   - Create a folder to store generated PDF certificates.  
   - Copy the folder URL for use in the workflow.  

4. **Connect Google Services in n8n**
   - Add credentials for **Google Sheets, Google Slides, Google Drive, and Gmail**.  
   - Replace placeholders (`Sheet ID`, `Slides template ID`, `Destination folder ID`) in the workflow.  

5. **Customize Gmail Delivery**
   - Update the subject and body of the Gmail node.  
   - The certificate PDF will be automatically attached to each email.  

---

#### 🎨 Customization Options
- **Certificate Design**: Modify your Slides template (logos, colors, extra fields).  
- **Dynamic Fields**: Add placeholders like `[COURSE]` or `[DATE]` and map them from your sheet.  
- **Email Body**: Personalize with variables such as `{{$json["Name"]}}`.  
- **File Naming**: Adjust file naming in the "Copy File" and "Download File" nodes.  

---

This template streamlines certificate distribution, making it ideal for **schools, universities, training programs, and webinars**.


## 📊 Basic Information

- **Workflow ID:** 8163
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 597
- **Downloads:** 59
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8163)

## 👤 Author

- **Name:** Muhammad Saqib
- **Username:** @saqib

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **googleDrive** (×4)
- **googleSlides** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
