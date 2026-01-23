# Streamline data from an n8n form into Google Sheet, Airtable and Email Sending

> ### Streamline data from an n8n form into Google Sheet Airtable and and Email Sending
[Video for workflow process](https://www.canva.com/design/DAF8PpnKJ0Q/2egm6F7B9H0Vm_8KFrghPw/watch?utm_content=DAF8PpnKJ0Q&utm_campaign=designshare&utm_medium=link&utm_source=editor)

This workflow facilitates efficient data collection and management by leveraging the capabilities of various nodes within the n8n platform. It commences with the n8n Form Trigger node, where users provide their name, location, and email address. Subsequently, the data seamlessly flows through nodes like Google Sheets, Code, Set, Airtable, Gmail, and Gmail1 for processing and storage.

- **n8n Form Trigger:** Gathers user input data, including Name, City, and Email.
- **Google Sheets:** Manages data operations related to Google Sheets.
- **Code:** Executes JavaScript code to manipulate data fields.
- **Set:** Formats and sets data values for further processing.
- **Airtable:** Facilitates data operations specific to Airtable.
- **Gmail:** Sends custom emails to the provided Email address.
- **Gmail:** Sends additional emails using different templates.

Each node within the workflow performs specialized tasks such as extracting date and time fields, formatting data, appending it to Google Sheets and Airtable, and sending personalized emails to the submitter. This streamlined process ensures effective handling of collected information and enhances overall data management efficiency.

### Workflow Description:

1. **n8n Form Trigger:**
   - A trigger node that initiates the workflow upon form submission.
   - Captures essential user details like Name, City, and Email.

2. **Extracting Date and Time Fields from 'submittedAt' Field:**
   - Utilizes a code node to extract Date and Time information from the submitted data.

3. **Format the Fields:**
   - Standardizes the format of extracted fields (Name, City, Date, Time, Email) for consistency.

4. **Airtable:**
   - Creates a new record in Airtable with the formatted data.
   - Includes columns for Name, City, Email, Time, and Date.

5. **Google Sheets:**
   - Appends the formatted data to a designated Google Sheet.
   - Includes columns for Name, City, Email, Date, and Time.

6. **Gmail:**
   - Sends an email to the provided Email address with a customized message.
   - Subject: "Testing Text Message Delivery"
   - Message: Personalized content with a Name placeholder.

7. **Gmail1:**
   - Sends another email using a different template.
   - Subject incorporates the Date field for variation.
   - Message content tailored to the subject line.

### Workflow Connections:
- n8n Form Trigger -&gt; Extracting Date and Time Fields -&gt; Format the Fields -&gt; Google Sheets & Airtable -&gt; Gmail
- Google Sheets -&gt; Gmail1

This comprehensive workflow efficiently collects user data, processes it to extract Date and Time fields, stores the formatted information in Google Sheets and Airtable, and delivers tailored emails to the recipients.

### Copy these templates to get started :
- [Google Sheet](https://docs.google.com/spreadsheets/d/1Ss6AEwaXpAl54YQAQDf1z6SRyh6pj719-A9eOzf2Dv4/edit?usp=sharing)
- [Airtable](https://airtable.com/appIIeJ18fnPkNyNS/shrhlIxwdsDF6Fy0S/tblZvKuOMmtHnv5TH/viwgKQKnV5gosIcCe)

### Links to Node Documentation:
1. [n8n Form Trigger Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.formTrigger)
2. [Code Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.code)
3. [Set Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.set)
4. [Airtable Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.airtable)
5. [Google Sheets Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.googleSheets)
6. [Gmail Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.gmail)


## 📊 Basic Information

- **Workflow ID:** 2087
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 5920
- **Downloads:** 592
- **Created:** 2024/2/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2087)

## 👤 Author

- **Name:** AlQaisi
- **Username:** @omar

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **code** 
- **set** 
- **airtable** 
- **stickyNote** (×3)
- **googleSheets** 
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
