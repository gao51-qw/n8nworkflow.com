# Download Facebook videos to Google Drive with automated logging in sheets

> ### 🚀 [Facebook to MP4 Video Downloader](https://rapidapi.com/skdeveloper/api/facebook-video-downloader11) – Fully Customizable Automated Workflow  

Easily convert Facebook videos into downloadable MP4 files using **[Facebook Video Downloader API](https://rapidapi.com/skdeveloper/api/facebook-video-downloader11)**.  
This n8n workflow automates fetching videos, downloading them, uploading them to Google Drive, and logging results in Google Sheets.  
Users can **modify and extend** this flow according to their own needs (e.g., add email notifications, change storage location, or use another API).  

---

### 📝 **Node-by-Node Explanation**

1. **On form submission** → Triggers when a user submits a Facebook video URL via the form. *(You can customize this form to include email or multiple URLs.)*  
2. **Facebook RapidAPI Request** → Sends a POST request to [**Facebook Video Downloader API**](https://rapidapi.com/skdeveloper/api/facebook-video-downloader11) to fetch downloadable MP4 links. *(Easily replace or update API parameters as needed.)*  
3. **If Node** → Checks API response for errors before proceeding. *(You can add more conditions to handle custom error scenarios.)*  
4. **MP4 Downloader** → Downloads the Facebook video file from the received media URL. *(You can change download settings, add quality filters, or store multiple resolutions.)*  
5. **Upload to Google Drive** → Uploads the downloaded MP4 file to a Google Drive folder. *(Easily switch to Dropbox, S3, or any other storage service.)*  
6. **Google Drive Set Permission** → Sets the uploaded file to be publicly shareable. *(You can make it private or share only with specific users.)*  
7. **Google Sheets** → Logs successful conversions with the original URL and shareable MP4 link. *(Customizable for additional fields like video title, size, or download time.)*  
8. **Wait Node** → Delays before logging failed conversions to avoid rapid writes. *(You can adjust the wait duration or add retry attempts.)*  
9. **Google Sheets Append Row** → Records failed conversion attempts with `N/A` as the Drive URL. *(You can add notification alerts for failed downloads.)*  

---

### ✅ **Use Cases**

- Automate Facebook video downloads for social media teams  
- Instantly generate shareable MP4 links for clients or marketing campaigns  
- Maintain a centralized log of downloaded videos for reporting  
- Customizable flow for different video quality, formats, or storage needs  

### 🚀 **Benefits**

- Fast and reliable Facebook video downloading with [**Facebook Video Downloader API**](https://rapidapi.com/skdeveloper/api/facebook-video-downloader11)  
- Flexible and fully customizable – adapt nodes, storage, and notifications as required  
- Automatic error handling and logging in Google Sheets  
- Cloud-based storage with secure and shareable Google Drive links  
- Seamless integration with n8n and [**Facebook Video Downloader API**](https://rapidapi.com/skdeveloper/api/facebook-video-downloader11) for scalable automation  

---  
🔑 **Resolved:** Manual Facebook video downloads are now fully automated, customizable, and scalable using [**Facebook Video Downloader API**](https://rapidapi.com/skdeveloper/api/facebook-video-downloader11), Google Drive uploads, and detailed logging via Google Sheets.  


## 📊 Basic Information

- **Workflow ID:** 6923
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 421
- **Downloads:** 42
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6923)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **googleSheets** (×2)
- **if** 
- **wait** 
- **googleDrive** (×2)
- **stickyNote** (×10)
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
