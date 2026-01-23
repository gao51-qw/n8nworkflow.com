# Download Instagram videos to Google Drive with auto-email delivery

> # 🚀 **Download Instagram Videos to Google Drive with Auto-Email Delivery**

Effortlessly convert Instagram videos to MP4 and automatically store them on Google Drive with a shareable download link sent to the user via email. This **n8n** workflow uses the **[Instagram Video Downloader](https://rapidapi.com/skdeveloper/api/instagram-video-downloader13)** API to automate the process of downloading Instagram videos, uploading them to Google Drive, and sending the download link directly to users.

With this workflow, you can automate Instagram video downloads without manual effort.

---

## 📝 **Node-by-Node Explanation**

1. **n8n Form Trigger**  
   Captures the Instagram video URL and the user's email address from a web form. This initiates the workflow process.
   
2. **API Request (Instagram Video Downloader)**  
   Sends the Instagram video URL to the **[Instagram Video Downloader API](https://rapidapi.com/skdeveloper/api/instagram-video-downloader13)** for processing and fetching the MP4 video data.

3. **Check API Response (If Node)**  
   Validates the API response to ensure no errors were returned. If the response is valid, the workflow continues; otherwise, it halts the process.

4. **Download Instagram Video (HTTP Request)**  
   Downloads the MP4 video from the API response to proceed with the next steps.

5. **Upload to Google Drive**  
   Saves the downloaded MP4 video file to **Google Drive** for secure storage.

6. **Set Permissions (Google Drive)**  
   Adjusts the file’s permissions to make it publicly accessible, allowing anyone with the link to view or download the MP4.

7. **Send Email with Download Link**  
   Sends an automated email to the user with a link to download their converted MP4 file, completing the process.

---

## ✅ **Use Cases**

- **Marketing Campaigns:** Save Instagram videos for use in marketing and promotional campaigns.
- **Social Media Teams:** Automate the process of downloading Instagram content for team collaboration.
- **Client Deliverables:** Automatically deliver Instagram MP4 links to clients without manual work.

---

## 🚀 **Benefits**

- **Fast & Reliable:** Integration with the [**Instagram Video Downloader API**](https://rapidapi.com/skdeveloper/api/instagram-video-downloader13) guarantees quick video downloads.
- **Fully Automated:** The entire process is automated from start to finish, eliminating manual steps.
- **Cloud Storage:** Securely store MP4 files on Google Drive with easy sharing options.
- **Instant Delivery:** Users receive their MP4 download link immediately via email.
- **No Manual Effort:** Automates the download and sharing process without any need for manual interaction.

---

🔑 **Resolved:** The process of downloading Instagram videos and sharing them is now fully automated using the [**Instagram Video Downloader API**](https://rapidapi.com/skdeveloper/api/instagram-video-downloader13), Google Drive storage, and instant email delivery.


## 📊 Basic Information

- **Workflow ID:** 6921
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1436
- **Downloads:** 143
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6921)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×8)
- **googleDrive** (×2)
- **httpRequest** (×2)
- **if** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
