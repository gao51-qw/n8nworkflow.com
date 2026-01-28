# Generate & email custom NDA documents from web form submissions

> &gt; ⚠️ **Notice:**  
&gt; This workflow uses the **HTML to Docx node** from [customjs.space](https://www.customjs.space), which requires a self-hosted n8n instance and a CustomJS API key.

---

# Landingpage → NDA Word Document (Docx) → Email Workflow

This workflow demonstrates how to:

1. Serve a **landing page** for requesting an NDA.  
2. Receive form submissions from users.  
3. Generate a **Word Document (Docx)** version of the NDA populated with the submitted data.  
4. Send the completed NDA via **email** to a recipient.

---

## Workflow Overview

### 1. Landingpage Endpoint
- **Node:** `Landingpage Endpoint` (Webhook)  
- Hosts the landing page and passes the URL dynamically to the HTML node.

### 2. Set Form Endpoint
- **Node:** `Set Form Endpoint`  
- Stores the landing page webhook URL into a variable `FormEndpoint` for the HTML form to submit to.

### 3. HTML for Landingpage
- **Node:** `HTML for Landingpage`  
- Renders a user-friendly landing page with a form for users to fill in their personal details:

  - First Name  
  - Last Name  
  - Address  
  - House No.  
  - Postal Code  
  - City  
  - Country  

- Includes **success** and **error messages** after submission.
- Submits data as JSON to the `FormData Endpoint`.

### 4. Respond to Webhook
- **Node:** `Respond to Webhook`  
- Returns the landing page HTML to the visitor when accessing the landing page URL.

### 5. FormData Endpoint
- **Node:** `FormData Endpoint` (Webhook)  
- Receives the submitted form data from the landing page.  
- Passes data to the `NDA (HTML Version)` node.

### 6. NDA (HTML Version)
- **Node:** `NDA (HTML Version)`  
- Generates a **personalized NDA document** in HTML using the submitted form data:

  - Populates recipient details (name, address, city, country, etc.)  
  - NDA clauses include:  
    1. Definition of Confidential Information  
    2. Obligations of the Recipient  
    3. Exclusions  
    4. Duration  
    5. Return or Destruction of information  
    6. Governing Law (England & Wales)

### 7. HTML to Docx
- **Node:** `HTML to Docx`  
- Converts the HTML NDA to a **Word Document (Docx)** using the CustomJS PDF/Docx Toolkit.  
- Requires a CustomJS API key (`Coding Service` credential).

### 8. Send Email
- **Node:** `Send email`  
- Sends the generated NDA Docx as an **email attachment**.  
- Email configuration:

  - From: `test@test.de`  
  - To: `test@testmail.com`  
  - Subject: `NDA`  
  - Body Text:  

    ```
    Hello,

    Here is the requested NDA form.

    Best
    Henrik
    ```

- Uses SMTP credentials for sending emails.

---

## Notes

- **Sticky Notes** provide internal documentation and guidance for the workflow:
  - `Sticky Note1` – Landingpage server info  
  - `Sticky Note` – FormData endpoint info  

- **Dynamic Form Submission**: The form posts JSON to the `FormData Endpoint`.  
- **Automation Flow**: Landingpage → Form Submission → NDA HTML → Docx → Email  

---

## Requirements

- Self-hosted n8n instance  
- CustomJS API key  
- SMTP credentials  
- Optional: Tailwind CSS CDN for landing page styling  

---

## Customization Tips

- **Landing Page Styling**: Adjust the `HTML for Landingpage` node for branding, colors, or additional fields.  
- **NDA Content**: Edit the `NDA (HTML Version)` node to change NDA clauses or layout.  
- **Email Settings**: Change `Send email` node to modify sender, recipient, or message content.  
- **Field Mapping**: Ensure all form input names match the NDA template placeholders.  


## 📊 Basic Information

- **Workflow ID:** 9406
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 141
- **Downloads:** 14
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9406)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **emailSend** 
- **webhook** (×2)
- **html** (×2)
- **respondToWebhook** 
- **stickyNote** (×2)
- **set** 
- **@custom-js/n8n-nodes-pdf-toolkit.Html2Docx** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
