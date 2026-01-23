# Convert Spotify tracks to MP3 and share via Google Drive forms

> # 🎵 Spotify to MP3 → Upload to Google Drive

Automate the process of converting Spotify track URLs into MP3 files, uploading them to Google Drive, and instantly generating shareable links — all triggered by a simple form.

---

## ✅ What This Workflow Does

1. Accepts a Spotify URL from a form.
2. Sends the URL to [Spotify Downloader MP3 API](https://rapidapi.com/skdeveloper/api/spotify-downloader-mp3) on RapidAPI.
3. Waits briefly for conversion.
4. Downloads the resulting MP3 file.
5. Uploads it to Google Drive.
6. Sets public sharing permissions for easy access.

---

## 🧩 Workflow Structure

| Step | Node Name                      | Description                                                                 |
|------|--------------------------------|-----------------------------------------------------------------------------|
| 1    | **On form submission**         | Collects Spotify track URL via an n8n Form Trigger node.                   |
| 2    | **Spotify Rapid API**          | Calls [Spotify Downloader MP3 API](https://rapidapi.com/skdeveloper/api/spotify-downloader-mp3) to generate the MP3 download link. |
| 3    | **Wait**                       | Ensures download link is processed before proceeding.                      |
| 4    | **Downloader**                 | Downloads the MP3 using the generated link.                                |
| 5    | **Upload MP3 to Google Drive** | Uploads the file using Google Drive credentials.                           |
| 6    | **Update Permission**          | Makes the uploaded file publicly accessible via a shareable link.          |

---

## 🔧 Requirements

- [n8n](https://n8n.io/) instance (self-hosted or cloud)
- RapidAPI account & subscription to [Spotify Downloader MP3 API](https://rapidapi.com/skdeveloper/api/spotify-downloader-mp3)
- Google Cloud service account with Drive API access
- Active Google Drive (root or specified folder)

---

## 🚀 How to Use

1. Set up **Google API credentials** in n8n.
2. Subscribe to the [Spotify Downloader MP3 API](https://rapidapi.com/skdeveloper/api/spotify-downloader-mp3) on RapidAPI.
3. Insert your **RapidAPI key** into the HTTP Request node.
4. Deploy the workflow and access the webhook form URL.
5. Submit a Spotify URL — the MP3 gets downloaded, uploaded, and shared.

---

## 🎯 Use Cases

- 🎧 Music collectors automating downloads
- 🧑‍🏫 Teachers creating music-based lessons
- 🎙 Podcasters pulling music samples
- 📥 Anyone who needs quick Spotify → MP3 conversion

---

## 🛠 Tech Stack

- **n8n**: Visual workflow automation
- **RapidAPI**: [Spotify Downloader MP3 API](https://rapidapi.com/skdeveloper/api/spotify-downloader-mp3)
- **Google Drive**: File storage and sharing
- **Form Trigger**: Input collection interface
- **HTTP Request Node**: Handles API communication

---

## 🔐 Notes on Security

- Do **not** expose your `x-rapidapi-key` publicly.
- Use environment variables or n8n credentials for secure storage.
- Adjust sharing permissions (`reader`, `writer`, or restricted) per your needs.

---

## 🔗 API Reference

- 🎵 [Spotify Downloader MP3 API – skdeveloper](https://rapidapi.com/skdeveloper/api/spotify-downloader-mp3)

---

## 📦 Tags

`spotify` `mp3` `google-drive` `automation` `rapidapi` `n8n` `music`

---



## 📊 Basic Information

- **Workflow ID:** 6218
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 327
- **Downloads:** 32
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6218)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **wait** 
- **httpRequest** (×2)
- **googleDrive** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
