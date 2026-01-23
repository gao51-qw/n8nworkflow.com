# Image-based data extraction API using Gemini AI

> This n8n workflow provides a ready-to-use API endpoint for extracting structured data from images. It processes an image URL using an AI-powered OCR model and returns the extracted details in a structured JSON format.  

### **Use Cases**  
- **Document OCR** – Extract details from ID cards, invoices, receipts, etc.  
- **Text Extraction from Images** – Process screenshots, scanned documents, and photos.  
- **Automated Form Processing** – Digitize and capture information from paper forms.  
- **Business Card Data Extraction** – Extract names, emails, and phone numbers from business cards.  

## How It Works  
1. Send a GET request with an image URL and define the required extraction parameters.  
2. The image is converted to base64 for processing.  
3. The AI model (Gemini API - Flash Lite) extracts relevant text.  
4. The response returns structured JSON data containing only the requested fields.  

## Features  
✔️ **No-Code API Setup** – Easily integrate into any application.  
✔️ **Customizable Extraction** – Modify the request parameters to fit your needs.  
✔️ **AI-Powered OCR** – Uses advanced models for accurate text recognition.  
✔️ **Automated Processing** – Ideal for document processing and digitization.  

## Integration  
- Works with any frontend/backend system that supports API calls.  
- Can be used for workflow automation in CRM, ERP, and document management solutions.  
- Supports further customization based on specific OCR requirements.  

## 📊 Basic Information

- **Workflow ID:** 3149
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 5632
- **Downloads:** 563
- **Created:** 2025/3/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3149)

## 👤 Author

- **Name:** Srinivasan KB
- **Username:** @srinivasankb

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **httpRequest** (×2)
- **set** 
- **stickyNote** (×3)
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
