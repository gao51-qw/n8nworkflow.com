# Convert YouTube videos to MP3 with RapidAPI, Google Drive storage & sheets logging

> ### Automated [YouTube to MP3 Conversion](https://rapidapi.com/PrineshPatel/api/youtube-to-mp3-downloader1) and Storage with Google Sheets

This automated workflow allows seamless conversion of YouTube videos to MP3, using the **[YouTube to MP3 Downloader API](https://rapidapi.com/PrineshPatel/api/youtube-to-mp3-downloader1)**. The converted MP3 files are uploaded to Google Drive, and all relevant conversion data like download links and file sizes are logged in Google Sheets. Ideal for content creators and download enthusiasts, it enhances efficiency and accuracy in handling YouTube-to-MP3 conversions.
## Node-by-Node Explanation:

1. **On form submission**  
   - Triggers the workflow when a user submits a YouTube video URL for conversion.

2. **HTTP Request**  
   - Sends a POST request to the **[YouTube to MP3 Downloader API](https://rapidapi.com/PrineshPatel/api/youtube-to-mp3-downloader1)** to initiate the conversion of the YouTube URL to MP3 format.

3. **Google Drive**  
   - Uploads the converted MP3 file to Google Drive for cloud storage.

4. **Google Sheets (Initial Log)**  
   - Logs initial details such as URL and status in Google Sheets before the conversion is complete.

5. **Google Sheets (Final Log)**  
   - After successful conversion, logs the download link, file size, and other relevant data in Google Sheets.

6. **If Condition**  
   - Filters the process to only proceed if the conversion status is "done."

7. **Wait**  
   - Pauses the workflow until the conversion process is completed.

8. **Code**  
   - Converts file size from bytes to megabytes (MB) for easier reference in Google Sheets.

9. **Download MP3**  
   - Triggers the MP3 file download once the conversion is finished.

## Problem Solved:
Converting YouTube videos to MP3 manually is time-consuming and tedious. The process involves multiple steps, such as downloading the video, extracting audio, and organizing the files, which can be a hassle, especially if you need to do it frequently. Additionally, managing and tracking these files and their statuses can be chaotic, leading to disorganization.

This workflow automates the entire process:
- **Conversion automation**: No need for third-party apps or websites to handle YouTube-to-MP3 conversion.
- **Efficient tracking**: All conversion details (file size, download link, etc.) are logged in Google Sheets, keeping everything organized.
- **Cloud storage**: Directly stores converted MP3s in Google Drive, ensuring files are secure, easy to access, and well-managed.

By leveraging the **[YouTube to MP3 Downloader API](https://rapidapi.com/PrineshPatel/api/youtube-to-mp3-downloader1)**, this workflow removes all the manual steps, allowing you to save time and effort while keeping everything organized.

## Benefits of the Flow:
- **Time-Saving Automation**: Automatically converts YouTube videos to MP3 using the **[YouTube to MP3 Downloader API](https://rapidapi.com/PrineshPatel/api/youtube-to-mp3-downloader1)**, eliminating the need for manual conversion.
- **Data Logging**: Automatically logs essential conversion details (like file size, download link, etc.) in Google Sheets for easy reference.
- **Cloud Storage Integration**: Converted MP3 files are directly uploaded to Google Drive for secure, cloud-based storage.
- **No Hassle**: Eliminates the need for third-party tools or manual tracking of conversions.

## Use Cases:
1. **Content Creators**  
   If you’re a YouTuber or a podcast creator, you might need to convert and store multiple audio files for your content. This workflow can help by automatically converting YouTube videos or podcasts to MP3 and saving them to Google Drive, all while keeping a detailed log in Google Sheets.

2. **Educators and Trainers**  
   Teachers or trainers often use YouTube videos for educational purposes and might want to extract the audio (e.g., for podcasts or lectures). With this automation, they can easily convert YouTube content into MP3 format for use in offline teaching or sharing with students.

3. **Social Media Managers**  
   Social media managers working with audio content can use this workflow to quickly convert YouTube videos to MP3 files and upload them to Google Drive for easy sharing with their team or posting on social platforms.

4. **Music Enthusiasts**  
   Music lovers who want to save YouTube music videos or tracks into MP3 format for personal use or offline listening can benefit from this automated conversion process. The workflow makes it fast and easy to convert, store, and track MP3 files.

5. **Content Archivists**  
   If you’re working on archiving online media or curating content libraries, this system allows for quick and efficient conversion, storing, and cataloging of YouTube videos in MP3 format with all relevant metadata stored in Google Sheets for easy management.
---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!


## 📊 Basic Information

- **Workflow ID:** 6722
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 667
- **Downloads:** 66
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6722)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **googleDrive** 
- **googleSheets** (×2)
- **if** 
- **wait** 
- **code** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
