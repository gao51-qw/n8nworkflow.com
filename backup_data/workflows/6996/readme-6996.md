# Automate student admission process with Excel, validation & email notifications

> This automated n8n workflow processes student applications on a scheduled basis, validates data, updates databases, and sends welcome communications to students and guardians.

**Main Components**
* **Trigger at Every Day 7 am** - Scheduled trigger that runs the workflow daily
* **Read Student Data** - Reads pending applications from Excel/database
* **Validate Application Data** - Checks data completeness and format
* **Process Application Data** - Processes validated applications
* **Update Student Database** - Updates records in the student database
* **Prepare Welcome Email** - Creates personalized welcome messages
* **Send Email** - Sends welcome emails to students/guardians
* **Success Response** - Confirms successful processing
* **Error Response** - Handles any processing errors

**Essential Prerequisites**
* Excel file with student applications (student_applications.xlsx)
* Database access for student records
* SMTP server credentials for sending emails
* File storage access for reading application data

**Required Excel File Structure (student_applications.xlsx):**
* Application ID | First Name | Last Name | Email | Phone
* Program Interest | Grade Level | School | Guardian Name | Guardian Phone
* Application Date | Status | Notes

**Expected Input Data Format:**
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "program": "Computer Science",
  "gradeLevel": "10th Grade",
  "school": "City High School",
  "guardianName": "Jane Doe",
  "guardianPhone": "+1234567891"
}
```

**Key Features**
* **⏰ Scheduled Processing:** Runs daily at 7 AM automatically
* **📊 Data Validation:** Ensures application completeness
* **💾 Database Updates:** Maintains student records
* **📧 Auto Emails:** Sends welcome messages
* **❌ Error Handling:** Manages processing failures

**Quick Setup**
1. Import workflow JSON into n8n
2. Configure schedule trigger (default: 7 AM daily)
3. Set Excel file path in "Read Student Data" node
4. Configure database connection in "Update Student Database" node  
5. Add SMTP settings in "Send Email" node
6. Test with sample data
7. Activate workflow

**Parameters to Configure**
* `excel_file_path`: Path to student applications file
* `database_connection`: Student database credentials
* `smtp_host`: Email server address
* `smtp_user`: Email username
* `smtp_password`: Email password
* `admin_email`: Administrator notification email


## 📊 Basic Information

- **Workflow ID:** 6996
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 519
- **Downloads:** 51
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6996)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **if** 
- **code** (×2)
- **microsoftExcel** (×2)
- **respondToWebhook** (×2)
- **emailSend** 
- **scheduleTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
