# YouTube to MP3 converter with RapidAPI - upload to drive & email link

> ### 📥 YouTube to MP3 Converter Workflow – Auto Upload to Google Drive & Email Link with RapidAPI

This n8n workflow allows users to convert any YouTube video to MP3 using the [YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast). It handles the entire process end-to-end — from form input to automatic delivery via email with cloud storage.

---

## 🔁 How It Works

1. **📝 User Form Input**  
   Users submit a YouTube URL and their email through a simple form.

2. **🎬 MP3 Conversion**  
   The video URL is sent to the [YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast) to process and convert into MP3 format.

3. **⏳ Wait for Processing**  
   Introduces a short delay to ensure the file is ready for download.

4. **📥 File Download**  
   The converted MP3 file is downloaded securely.

5. **☁️ Google Drive Upload**  
   The MP3 is uploaded to Google Drive for cloud-based access and storage.

6. **🔗 Share Permissions**  
   Permissions are updated to allow anyone with the link to access the MP3.

7. **📧 Email Notification**  
   The final download link is emailed to the user.

---

## ✅ Benefits

- **Completely Automated** – From input to email, everything runs without manual effort.
- **Cloud Storage Integration** – Files are saved to your Google Drive for easy management.
- **User-Friendly** – Simple interface for users to get their MP3 in just a few clicks.
- **Fast & Reliable Conversion** – Leveraging the [YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast) ensures quick and accurate results.
- **Time-Saving** – No need for manual downloads, converters, or email composition.

---

## ❌ Problems This Workflow Solves

- ⛔ **Manual Download Hassles** – No need to use third-party websites or shady downloaders.
- ⛔ **Slow or Unreliable Conversions** – The workflow uses the robust [YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast) for reliable performance.
- ⛔ **Missing Files or Lost Links** – Files are securely stored on Google Drive with shareable links.
- ⛔ **User Follow-up** – Automatically sends download links via email, saving you support effort.

---

## 🔧 Tech Stack

- 🧠 **n8n** – No-code automation engine
- 🌐 **[YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast)** – Fast MP3 conversion service
- ☁️ **Google Drive** – Cloud storage and file sharing
- 📤 **SMTP** – Email delivery system

---

&gt; 🔗 **Built for creators, educators, and automation fans who need fast YouTube-to-MP3 conversion with effortless delivery.**


## 📊 Basic Information

- **Workflow ID:** 6318
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 3706
- **Downloads:** 370
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6318)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **wait** 
- **googleDrive** (×2)
- **emailSend** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
