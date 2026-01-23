# Qr code generator via webhook

> This n8n template allows you to instantly generate QR codes from any text or URL by simply sending a webhook request. It's a versatile tool for creating dynamic QR codes for various purposes, from marketing campaigns to event registrations, directly integrated into your automated workflows.

---

# 🔧 How it works
- Receive Data Webhook: This node acts as the entry point for the workflow. It listens for incoming POST requests and expects a JSON body with a data property containing the text or URL you want to encode into the QR code.
- Generate QR Code: This node makes an HTTP GET request to the QR Server API (api.qrserver.com) to generate the QR code image. The content from your webhook is passed as the data parameter to the API.
- Respond with QR Code: This node sends the response from the QR Server API back to the service that initiated the webhook. The QR Server API directly returns the image data, so your webhook response will be the QR code image itself.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Marketers: Generate QR codes for product links, event registrations, or promotional materials on the fly.
- Developers: Integrate QR code generation into applications, websites, or internal tools.
- Event Organizers: Create dynamic QR codes for ticketing, information access, or check-ins.
- Businesses: Streamline processes requiring physical-to-digital transitions, like menu access or contact sharing.
- Automation Enthusiasts: Add QR code generation capabilities to any workflow.

---

# 📑 Data Structure
When you trigger the webhook, send a POST request with a JSON body structured as follows:

```
{
  "data": "https://www.yourwebsite.com/your-specific-page-or-text-to-encode"
}
```

The workflow will return the QR code image directly in the response.

---

# ⚙️ Setup Instructions
- Import Workflow: In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.
- Configure Webhook Path:
  - Double-click the Receive Data Webhook node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /generate-qr).
- Customize QR Code (Optional):
  - Double-click the Generate QR Code node.
  - You can adjust the size parameter in the URL (e.g., size=200x200 for a larger QR code) or add other parameters supported by the QR Server API (e.g., bgcolor, color, qzone).
- Activate Workflow: Save and activate the workflow.

---

# 📝 Tips
- Handling the Image Output: Since the QR Server API directly returns the image, the webhook response will be the image data. Depending on your use case, you might want to:
  - Save to File/Cloud: Insert a node (e.g., Write Binary File, Amazon S3, Google Drive) after Generate QR Code to save the image to a file system or cloud storage.
  - Embed in HTML/Email: If you're building an HTML response or sending an email, you might need to convert the image data to a Base64 string or provide a URL to a saved image.
- Error Handling: Enhance workflow robustness by adding an Error Trigger node. This allows you to catch any issues during QR code generation and set up notifications or logging.
- Dynamic Size/Color: You can extend the Receive Data Webhook to accept parameters for size, color, or bgcolor in the incoming JSON. Then, dynamically pass these to the url of the Generate QR Code node to create highly customizable QR codes.
- Input Validation: For more advanced use cases, you could add a Function node after the webhook to validate the incoming data to ensure it's in a valid format (e.g., a URL).

## 📊 Basic Information

- **Workflow ID:** 4596
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 4977
- **Downloads:** 497
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4596)

## 👤 Author

- **Name:** ist00dent
- **Username:** @ist00dent

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **stickyNote** (×3)
- **httpRequest** 
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
