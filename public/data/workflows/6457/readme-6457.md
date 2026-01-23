# Remove image backgrounds with APImage AI: Airtable to Google Drive

> # AI Background Removal Workflow

This workflow **automatically removes backgrounds** from images stored in **Airtable** using the **[APImage API 🡥](https://apimage.org)**, then downloads and saves the processed images to **Google Drive**. Perfect for batch processing product photos, portraits, or any images that need clean, transparent backgrounds. The source (Airtable) and the storage (Google Drive) can be **changed to any service** or database you want/use.

![Remove Background Images Automated AI n8n workflow.jpg](fileId:1864)

## 🧩 Nodes Overview

### 1. **Remove Background** (Manual Trigger)
This manual trigger starts the background removal process when clicked. 

**Customization Options:**
- Replace with **Schedule Trigger** for automatic daily/weekly processing
- Replace with **Webhook Trigger** to start via API calls  
- Replace with **File Trigger** to process when new files are added

---

### 2. **Get a Record** (Airtable)
Retrieves media files from your Airtable "Creatives Library" database.
- Connects to the "Media Files" table in your Airtable base
- Fetches records containing image thumbnails for processing
- Returns all matching records with their thumbnail URLs and metadata

**Required Airtable Structure:**
- Table with image/attachment field (currently expects "Thumbnail" field)
- Optional fields: File Name, Media Type, Upload Date, File Size

**Customization Options:**
- Replace with **Google Sheets**, **Notion**, or any database node
- Add filters to process only specific records
- Change to different tables with image URLs

---

### 3. **Code** (JavaScript Processing)
Processes Airtable records and prepares thumbnail data for background removal.
- Extracts thumbnail URLs from each record
- Chooses best quality thumbnail (large &gt; full &gt; original)  
- Creates clean filenames by removing special characters
- Adds processing metadata and timestamps

**Key Features:**
```javascript
// Selects best thumbnail quality
if (thumbnail.thumbnails?.large?.url) {
  thumbnailUrl = thumbnail.thumbnails.large.url;
}

// Creates clean filename
cleanFileName: (record.fields['File Name'] || 'unknown')
  .replace(/[^a-zA-Z0-9]/g, '_')
  .toLowerCase()
```

**Easy Customization for Different Databases:**
- **Product Database**: Change field mappings to 'Product Name', 'SKU', 'Category'
- **Portfolio Database**: Use 'Project Name', 'Client', 'Tags'  
- **Employee Database**: Use 'Full Name', 'Department', 'Position'

---

### 4. **Split Out**
Converts the array of thumbnails into individual items for parallel processing.
- Enables processing multiple images simultaneously
- Each item contains all thumbnail metadata for downstream nodes

---

### 5. **APImage API** (HTTP Request)
Calls the APImage service to remove backgrounds from images.

**API Endpoint:**
```
POST https://apimage.org/api/ai-remove-background
```

**Request Configuration:**
- **Header**: `Authorization: Bearer YOUR_API_KEY`
- **Body**: `image_url: {{ $json.originalThumbnailUrl }}`

✅ **Setup Required:**
1. Replace `YOUR_API_KEY` with your actual API key
2. Get your key from [APImage Dashboard 🡥](https://apimage.org/dashboard)

---

### 6. **Download** (HTTP Request)
Downloads the processed image from APImage's servers using the returned URL.
- Fetches the background-removed image file
- Prepares image data for upload to storage

---

### 7. **Upload File** (Google Drive)
Saves processed images to your Google Drive in a "bg_removal" folder.

**Customization Options:**
- Replace with **Dropbox**, **OneDrive**, **AWS S3**, or **FTP** upload
- Create date-based folder structures
- Use dynamic filenames with metadata
- Upload to multiple destinations simultaneously

---

## ✨ How To Get Started

1. **Set up APImage API:**
   - Double-click the **APImage API** node
   - Replace `YOUR_API_KEY` with your actual API key
   - Keep the `Bearer` prefix

2. **Configure Airtable:**
   - Ensure your Airtable has a table with image attachments
   - Update field names in the **Code** node if different from defaults

3. **Test the workflow:**
   - Click the **Remove Background** trigger node
   - Verify images are processed and uploaded successfully

🔗 [Get your API Key 🡥](https://apimage.org/dashboard)

---

## 🔧 How to Customize

### **Input Customization** (Left Section)
Replace the Airtable integration with any data source containing image URLs:
- **Google Sheets** with product catalogs
- **Notion** databases with image galleries  
- **Webhooks** from external systems
- **File system** monitoring for new uploads
- **Database** queries for image records

### **Output Customization** (Right Section)  
Modify where processed images are stored:
- **Multiple Storage**: Upload to Google Drive + Dropbox simultaneously
- **Database Updates**: Update original records with processed image URLs
- **Email/Slack**: Send processed images via communication tools
- **Website Integration**: Upload directly to WordPress, Shopify, etc.

### **Processing Customization**
- **Batch Processing**: Limit concurrent API calls
- **Quality Control**: Add image validation before/after processing
- **Format Conversion**: Use Sharp node for resizing or format changes
- **Metadata Preservation**: Extract and maintain EXIF data

---

## 📋 Workflow Connections
```text
Remove Background → Get a Record → Code → Split Out → APImage API → Download → Upload File
```

---

## 🎯 Perfect For

- **E-commerce**: Batch process product photos for clean, professional listings
- **Marketing Teams**: Remove backgrounds from brand assets and imagery  
- **Photographers**: Automate background removal for portrait sessions
- **Content Creators**: Prepare images for presentations and social media
- **Design Agencies**: Streamline asset preparation workflows

---

## 📚 Resources

- [APImage API Documentation 🡥](https://apimage.org/docs)
- [Airtable API Reference 🡥](https://airtable.com/developers/web/api/introduction)
- [n8n Documentation 🡥](https://docs.n8n.io)

---

**⚡ Processing Speed**: Handles multiple images in parallel for fast batch processing  
**🔒 Secure**: API keys stored safely in n8n credentials  
**🔄 Reliable**: Built-in error handling and retry mechanisms

## 📊 Basic Information

- **Workflow ID:** 6457
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 278
- **Downloads:** 27
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6457)

## 👤 Author

- **Name:** Gegenfeld
- **Username:** @gegenfeld

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×7)
- **airtable** 
- **code** 
- **splitOut** 
- **httpRequest** (×2)
- **googleDrive** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
