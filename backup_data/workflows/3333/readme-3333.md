# Generate PDF invoices with CustomJS API

> 
![workflow.png](fileId:1056)
# n8n Workflow: Invoice PDF Generator

This n8n workflow captures invoice data and generates a PDF invoice, ready to be sent or saved. It uses a webhook to trigger the process, preprocesses the invoice data, and converts it to a PDF using HTML and custom styling.

[@custom-js/n8n-nodes-pdf-toolkit](@custom-js/n8n-nodes-pdf-toolkit)

## Features:

- **Webhook Trigger**: Receives incoming data, including invoice details.
- **Preprocessing**: Transforms the invoice data into HTML format.
- **HTML to PDF Conversion**: Converts the preprocessed HTML into a styled PDF document.
- **Response**: Sends the generated PDF back to the webhook response.

# Notice

Community nodes can only be installed on self-hosted instances of n8n.

## Requirements

- **Self-hosted** n8n instance
- A **CustomJS API key** for website screenshots.
- **Invoice data** for PDF generation

## Workflow Steps:

1. **Webhook Trigger**:

   - Accepts incoming data (e.g., invoice number, recipient details, itemized list).
   - This data is passed to the next node for processing.

2. **Set Data Node**:

   - Configures initial values for the invoice, including the recipient, sender, invoice number, and the items on the invoice.
   - The invoice details include information like description, unit price, and quantity.

3. **Preprocess Node**:

   - Processes the raw data to format it correctly for HTML. This includes splitting addresses and converting the items into an HTML table format.

4. **HTML to PDF Conversion**:

   - Converts the generated HTML into a PDF document. The HTML includes a header, a detailed invoice table, and a footer with contact information.

5. **Respond to Webhook**:
   - Returns the generated PDF as a response to the initial webhook request.

---

## Setup Guide:

### 1. Configure CustomJS API

- Sign up at [CustomJS](https://www.customjs.space).
- Retrieve your API key from the profile page.
![1.png](fileId:1057)
- Add your API key as n8n credentials.
![2.png](fileId:1055)

### 2. Design Workflow

1. **Create a Webhook**:

   - Set up a webhook to trigger the workflow when invoice data is received.

2. **Prepare Data**:

   - Ensure the incoming request contains fields like "Invoice No", "Bill To", "From", and "Details" (list of items with price and quantity).

3. **Customize the HTML**:

   - The HTML template for the invoice includes custom styling to give the invoice a professional look.

4. **Convert to PDF**:
   - The **HTML to PDF** node is configured with the data generated from the preprocessing step to convert the invoice HTML to a PDF format.

---

## Example Invoice Data:

```json
{
  "Invoice No": "1",
  "Bill To": "John Doe\n1234 Elm St, Apt 567\nCity, Country, 12345",
  "From": "ABC Corporation\n789 Business Ave\nCity, Country, 67890",
  "Details": [
    {
      "description": "Web Hosting",
      "price": 150,
      "qty": 2
    },
    {
      "description": "Domain",
      "price": 15,
      "qty": 5
    }
  ],
  "Email": "support@mycompany.com"
}
```

## Result PDF File
![3.png](fileId:1058)


## 📊 Basic Information

- **Workflow ID:** 3333
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 7511
- **Downloads:** 751
- **Created:** 2025/3/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3333)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **@custom-js/n8n-nodes-pdf-toolkit.html2Pdf** 
- **code** 
- **set** 
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
