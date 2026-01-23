**Description:**

Easily extract, download, and organize multiple JSON files from Google Drive using this no-code automation template for n8n. Ideal for operations, analysts, or data engineers managing bulk document processing, this workflow reads a Google Sheet containing file names and Google Drive URLs, converts those links into downloadable JSONs, and automatically writes each file to a local disk folder—sorted by name.

No more manual downloading or copy-pasting. Everything is processed in a structured loop, ensuring reliable and scalable folder-based separation of your JSON data files.

**What This Template Does (Step-by-Step)**

🟢 Trigger: Manual Execution: Initiates the flow when you click “Execute Workflow” in n8n.

📄 Google Sheet Reader: Connects to your Google Sheet to fetch rows with columns like Name and Google Drive URL.

🧹 Clean & Filter Data (Python Code Node): Filters out rows missing name or URL. Keeps only valid entries to prevent failure in downstream steps.

🔗 Convert Drive URL to Download Link (JavaScript Code): Extracts the Google Drive File ID and transforms it into a direct download link for each JSON file.

🔁 Batch Looping for Controlled Processing: Uses SplitInBatches to handle each file sequentially to avoid system overload.

📥 Download JSON File via HTTP Request: Makes a GET request to each file’s download URL and loads it as binary data into memory.

🗂️ Generate Local Path for Each File: Prepares the path C:/Users/YourName/Desktop/Healthcare/{filename}.json using the name from the sheet.

💾 Write File to Disk:Saves each JSON file to the local disk at the generated path, effectively separating each entry into its own file.

**Required Integrations**

✅ Google Sheets OAuth2 API (for reading file metadata)
✅ Local write permissions (for saving files to disk)

**Perfect For**

📦 Bulk JSON Extraction Pipelines
🏥 Healthcare or Data Ops Teams managing case records or medical file links
🧾 Invoice or Document Download Automations
📁 Content Management or Archival Processes

**Why Use This Template?**

- No manual downloads or folder sorting
- Safe and batch-based processing prevents overload
- Easily customizable folder paths and formats
- Great for non-technical users managing large file repositories