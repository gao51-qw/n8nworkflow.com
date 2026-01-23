## 📥 TikTok to MP4 Converter with Google Drive & Sheets

**Convert TikTok videos to MP4 , MP3 (without watermark), upload to Google Drive, and log conversion attempts into Google Sheets automatically — powered by [TikTok Download Audio Video API](https://rapidapi.com/PrineshPatel/api/tiktok-download-audio-video).**

---

## 📝 Description

This **n8n automation** accepts a TikTok video URL via a form, sends it to the [TikTok Download Audio Video API](https://rapidapi.com/PrineshPatel/api/tiktok-download-audio-video), downloads the watermark-free MP4, uploads it to Google Drive, and logs the result (success/failure) into Google Sheets.

---

## 🧩 Node-by-Node Overview

| # | Node                          | Functionality                                                                 |
|---|-------------------------------|-------------------------------------------------------------------------------|
| 1 | 🟢 **Form Trigger**            | Displays a form for user input of TikTok video URL.                          |
| 2 | 🌐 **TikTok RapidAPI Request** | Calls the [TikTok Downloader API](https://rapidapi.com/PrineshPatel/api/tiktok-download-audio-video) to get the MP4 link. |
| 3 | 🔍 **If Condition**            | Checks if the API response status is "success".                              |
| 4 | ⬇️ **MP4 Downloader**          | Downloads the video file using the returned "no watermark" MP4 URL.          |
| 5 | ☁️ **Upload to Google Drive**  | Uploads the video file to Google Drive root folder.                          |
| 6 | 🔑 **Set Google Drive Permission** | Makes the file publicly shareable via link.                                  |
| 7 | 📄 **Google Sheets (Success)** | Logs TikTok URL + public Drive link into a Google Sheet.                     |
| 8 | ⏱️ **Wait Node**               | Delays to prevent rapid write operations on error.                           |
| 9 | 📑 **Google Sheets (Failure)** | Logs failed attempts with `Drive_URL = N/A`.                                 |

---

## ✅ Use Cases

- 📲 Social media managers downloading user-generated content  
- 🧠 Educators saving TikTok content for offline lessons  
- 💼 Agencies automating short-form video curation  
- 🤖 Workflow automation demonstrations with n8n  

---

## 🎯 Key Benefits

- ✔️ **MP4 without watermark** via [TikTok Download Audio Video API](https://rapidapi.com/PrineshPatel/api/tiktok-download-audio-video)  
- ✔️ **Automated Google Drive upload & shareable links**  
- ✔️ **Centralized logging** in Google Sheets  
- ✔️ **Error handling and retry-safe structure**  
- ✔️ Fully customizable and extendable within **n8n**  

---

💡 *Ideal for anyone looking to automate TikTok video archiving with full control over file storage and access.*

## 🔐 How to Get Your API Key for the TikTok Download Audio Video API

1. Go to 👉  [TikTok Download Audio Video API - RapidAPI](https://rapidapi.com/PrineshPatel/api/tiktok-download-audio-video) 
2. Click **"Subscribe to Test"** (you may need to sign up or log in).
3. Choose a pricing plan (there’s a free tier for testing).
4. After subscribing, click on the **"Endpoints"** tab.
5. Your **API Key** will be visible in the **"x-rapidapi-key"** header.

🔑 Copy and paste this key into the `httpRequest` node in your workflow.

---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)
