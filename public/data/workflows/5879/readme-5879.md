# Automated new hire appointment letters with Google Docs, HR approval & Gmail

> This n8n template demonstrates automating an appointment letter creation process using a template and then having the HR approve before emailing the appointment letter to the candidate.


**How it works**
1. Create an appointment letter template. e.g "Appointment Letter.doc" on Google Drive
2. Form Submission node - Create a form trigger with the required fields that need to be capture as part of the appointment letter. Eg. Candidate Name, Position offered, Salary, Date of Joining, Candidate email, etc.
3. Google Drive Copy node - Once the form is filled, it creates a candidate copy of the appointment letter by appending the candidate name to appointment letter. e.g. "Appointment Letter - &lt;candidate name&gt;.doc". This will be stored on the Google Drive
4. Google Doc Update node - Fill the placeholders in the appointment letter with the candidate specific details such as Candidate Name, Position offered, Salary, Date of Joining, etc.
5. Google Drive Download node - Create a PDF version of the candidate's appointment letter. e.g. "Appointment Letter - &lt;Candidate Name&gt;.pdf" and download it to Google Drive
6. Google Drive Upload node - Upload the PDF to Google Drive
7. Gmail Send Message node - Send an email to the HR requesting to review the candidate's appointment letter and 'Approve' or 'Reject' the appointment letter. This is the Human-In-The-Loop step
8. If Node (for routing) - will return "true" if HR approves and "false" if HR rejects
If HR approves, go to Step 9 and Step 10
9. Google Drive Download node - Get the PDF file
10. Gmail Send Message node - Send an email to the candidate with the appointment letter (PDF) as the attachment


**How to use**
1. The Form trigger node is used as an example but feel free to replace this with other triggers such as Google Sheet
2. Create an Appointment Letter Google document with the follwing fields - Date, Candidate Name, Position Name, Fixed CTC, Joining Date and To be signed by Date. See sample letter format below:

**&lt;Appointment Letter.doc&gt; (Google Document)**

Appointment Letter

[Date]

Dear [Candidate Name],

Congratulations! We are pleased to offer you the [Position Name] at ABC Company.

Fixed CTC - [Fixed CTC]
Joining Date - [Joining Date]

Requirements
Google drive for upload and downloading the file
Gmail for sending emails

Sign the letter by - [To be signed by Date]

Signature





## 📊 Basic Information

- **Workflow ID:** 5879
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 2108
- **Downloads:** 210
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5879)

## 👤 Author

- **Name:** Satish
- **Username:** @processautomate

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×4)
- **googleDrive** (×4)
- **googleDocs** 
- **gmail** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
