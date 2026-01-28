# Automated PDF form processing with web forms and email delivery

> &gt; ⚠️ **Notice:**  
&gt; Community nodes like **@custom-js/n8n-nodes-pdf-toolkit** can only be installed on self-hosted instances of n8n.  

---

This n8n workflow demonstrates how to **collect form submissions from a landing page, fill a PDF form automatically, and send it via email**. It uses the **PDF Form Fill node from [customjs.space](https://www.customjs.space)** to populate PDF fields with the submitted data.  

---

## What this workflow does

- Serves a **landing page** with a user-friendly form.  
- Receives form submissions via a **Webhook**.  
- Uses the **HTTP Request node** to fetch a PDF template.  
- Fills the PDF form fields with the submitted data using the **PDF Form Fill node**.  
- Optionally reads PDF form field names using **Get PDF Form Fields**.  
- Sends the completed PDF as an **email attachment**.  

---

## Requirements

- Self-hosted n8n instance.  
- CustomJS API key for the PDF Toolkit nodes.  
- SMTP account for sending emails.  
- Optional: Access to the PDF template online.  

---

## Workflow Steps

1. **Landingpage Endpoint (Webhook)**  
   Serves the landing page HTML to visitors.  

2. **Set Form Endpoint**  
   Dynamically injects the endpoint URL into the HTML form.  

3. **HTML for Landingpage**  
   Provides the form where users enter personal information (name, address, city, country, etc.).  

4. **Respond to Webhook**  
   Returns the landing page HTML to the visitor.  

5. **FormData Endpoint (Webhook)**  
   Receives the submitted form data as JSON.  

6. **HTTP Request – Get PDF Template**  
   Fetches the PDF form template from a URL.  

7. **PDF Form Fill (Fill PDF Fields)**  
   Populates the PDF with the submitted form data.  

8. **Get PDF Form Fields (Optional)**  
   Reads and lists the names of the form fields in the PDF.  

9. **Send Email**  
   Sends the completed PDF as an attachment to a configured recipient.  

10. **Sticky Notes**  
    Provide documentation within the workflow for easier understanding and maintenance.  

---

## Usage

1. **Get API key from CustomJS**  
   - Sign up on the [CustomJS platform](https://www.customjs.space).  
   - Navigate to your profile page and copy your API key.  

2. **Set Credentials for CustomJS API in n8n**  
   - Create a new credential in n8n with your API key.  

3. **Prepare SMTP Credentials**  
   - Add your SMTP server credentials to n8n for sending emails.  

4. **Run or schedule the workflow**  
   - The workflow will serve the landing page, fill the PDF form with submissions, and send it via email.  

---

## Customization Tips

- **Modify the landing page form** in the HTML node to add or remove fields.  
- **Change PDF template URL** in the HTTP Request node.  
- **Add more recipients** or dynamic email addresses in the Send Email node.  
- **Track submitted form data** in Google Sheets or a database for long-term storage.  
- **Extend workflow logic** with validation or notifications using additional nodes.


## 📊 Basic Information

- **Workflow ID:** 9404
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 244
- **Downloads:** 24
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9404)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **httpRequest** 
- **@custom-js/n8n-nodes-pdf-toolkit.PdfFormFill** 
- **@custom-js/n8n-nodes-pdf-toolkit.GetFormFieldNames** 
- **stickyNote** (×3)
- **emailSend** 
- **webhook** (×2)
- **html** 
- **respondToWebhook** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
