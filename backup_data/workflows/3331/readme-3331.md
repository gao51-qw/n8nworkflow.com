# Convert HTML to PDF and return via webhook using CustomJS API

> ![workflow.png](fileId:1048)!
# n8n Workflow: HTML to PDF Generator

This n8n workflow converts HTML content into a styled PDF and returns it as a response via a webhook. The workflow receives HTML input, processes it using CustomJS's PDF toolkit, and sends back the resulting PDF to the original webhook requester.

[@custom-js/n8n-nodes-pdf-toolkit](@custom-js/n8n-nodes-pdf-toolkit)

## Features:

- **Webhook Trigger**: Accepts incoming requests with HTML content.
- **HTML to PDF Conversion**: Uses CustomJS to transform HTML into a PDF.
- **Response**: Sends the generated PDF back to the webhook response.

## Requirements:

- **Self-hosted** n8n instance
- A **CustomJS API key** for HTML to PDF conversion
- **HTML content** to be converted into a PDF

## Workflow Steps:

1. **Webhook Trigger**:

   - Accepts incoming HTTP requests with HTML content.
   - This data is passed to the next node for processing.

2. **HTML to PDF Conversion**:

   - Uses the **CustomJS** node to convert the incoming HTML into a PDF document.
   - You can customize the HTML content to match the design requirements.

3. **Respond to Webhook**:

   - Sends the generated PDF as a binary response to the original webhook request.

---

## Setup Guide:

### 1. Configure CustomJS API
- Sign up at [CustomJS](https://www.customjs.space).
- Retrieve your API key from the profile page.
![image.png](fileId:1051)
- Add your API key as n8n credentials.
![image.png](fileId:1049)

### 2. Design Workflow

1. **Create a Webhook**:

   - Set up a webhook to trigger the workflow when HTML content is received.

2. **Prepare HTML Content**:

   - The incoming request should include the HTML content you wish to convert into a PDF.

3. **Configure HTML to PDF Node**:

   - Use the **HTML to PDF** node to convert the provided HTML into a PDF.
   - The node uses the HTML input to generate a PDF using the CustomJS API.

4. **Respond with the PDF**:

   - The **Respond to Webhook** node will send the generated PDF back to the original requester as a binary response.

---

## Example HTML Input:

```html
<h1>Hello CustomJS!</h1>
<h2>CustomJS provides the missing toolset for your no-code projects</h2>
```

## Result PDF
![image.png](fileId:1050)

## 📊 Basic Information

- **Workflow ID:** 3331
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 3718
- **Downloads:** 371
- **Created:** 2025/3/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3331)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **@custom-js/n8n-nodes-pdf-toolkit.html2Pdf** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
