# Convert LinkedIn videos to MP4 with RapidAPI and store in Google Drive & sheets

> ### 🚀 LinkedIn Video to MP4 Automation with Google Drive & Sheets | RapidAPI Integration

This **n8n workflow** automatically converts LinkedIn video URLs into downloadable MP4 files using the [**LinkedIn Video Downloader API**](https://rapidapi.com/skdeveloper/api/linkedin-video-downloader3), uploads them to Google Drive with public access, and logs both the original URL and Google Drive link into Google Sheets.  
It leverages the **[LinkedIn Video Downloader](https://rapidapi.com/skdeveloper/api/linkedin-video-downloader3)** service for fast and secure video extraction.

---

## 📝 **Node Explanations (Single-Line)**

1️⃣ **On form submission** → Captures LinkedIn video URL from the user via a web form.  
2️⃣ **HTTP Request** → Calls **[LinkedIn Video Downloader](https://rapidapi.com/skdeveloper/api/linkedin-video-downloader3)** to fetch downloadable MP4 links.  
3️⃣ **If** → Checks for API errors and routes workflow accordingly.  
4️⃣ **Download mp4** → Downloads the MP4 video file from the API response URL.  
5️⃣ **Upload To Google Drive** → Uploads the downloaded MP4 file to Google Drive.  
6️⃣ **Google Drive Set Permission** → Makes the uploaded file publicly accessible.  
7️⃣ **Google Sheets** → Logs successful conversions with LinkedIn URL and sharable Drive link.  
8️⃣ **Wait** → Delays execution before logging failed attempts.  
9️⃣ **Google Sheets Append Row** → Logs failed video downloads with `N/A` Drive link.  

---
## 📄 **Google Sheets Columns**

- **URL** → Original LinkedIn video URL entered in the form.  
- **Drive_URL** → Publicly sharable Google Drive link to the converted MP4 file.  
- *(For failed downloads)* → **Drive_URL** will display `N/A`.

---

## 💡 **Use Case**

- Automate LinkedIn video downloading and sharing using **[LinkedIn Video Downloader](https://rapidapi.com/skdeveloper/api/linkedin-video-downloader3)** for **social media managers, marketers, and content creators** without manual file handling.

---

## ✅ **Benefits**

- **Time-saving** (auto-download & upload), **Centralized tracking** in Sheets, **Easy sharing** via Drive links, and **Error logging** for failed downloads—all powered by **RapidAPI LinkedIn Video Downloader**.


## 📊 Basic Information

- **Workflow ID:** 6837
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 71
- **Downloads:** 7
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6837)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **if** 
- **wait** 
- **googleDrive** (×2)
- **googleSheets** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
