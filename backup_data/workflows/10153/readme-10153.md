# Download Threads videos & log results in Google Sheets

> ## Threads Video Downloader & Google Drive Logger

Automate downloading **Threads videos** from URLs, upload them to **Google Drive**, and log results in **Google Sheets** using n8n.

**API Source:** [Threads Downloader on RapidAPI](https://rapidapi.com/skdeveloper/api/threads-downloader1)

---

## Workflow Explanation 

| Node                                     | Explanation                                                                                                                      |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **On form submission**                   | Trigger workflow when a user submits a Threads URL via a form.                                                                   |
| **Fetch Threads Video Data**             | Sends the submitted URL to [Threads Downloader API](https://rapidapi.com/skdeveloper/api/threads-downloader1) to get video info. |
| **Check If Video Exists**                | Checks if the API returned a valid downloadable video URL.                                                                       |
| **Download Threads Video File**          | Downloads the video from the API-provided URL.                                                                                   |
| **Upload Video to Google Drive**         | Uploads the downloaded video to a designated Google Drive folder.                                                                |
| **Set Google Drive Sharing Permissions** | Sets sharing permissions so the uploaded video is accessible via a link.                                                         |
| **Log Success to Google Sheets**         | Records the original URL and Google Drive link in Google Sheets for successful downloads.                                        |
| **Wait Before Logging Failure**          | Adds a pause before logging failed downloads to avoid timing issues.                                                             |
| **Log Failed Download to Google Sheets** | Logs URLs with “N/A” for videos that failed to download.                                                                         |

---

## How to Obtain a RapidAPI Key 

1. Go to [Threads Downloader API on RapidAPI](https://rapidapi.com/skdeveloper/api/threads-downloader1).
2. Sign up or log in to RapidAPI.
3. Subscribe to the API (free or paid plan).
4. Copy the **X-RapidAPI-Key** from your dashboard and paste it into the n8n HTTP Request node.

 ✅ Note: Keep your API key private.

---

## How to Configure Google Drive & Google Sheets

### Google Drive

1. Go to Google Drive and create a folder for videos.
2. In n8n, create Google Drive OAuth2 credentials and connect your account.
3. Configure the **Upload Video** node to target your folder.

### Google Sheets

1. Create a spreadsheet with columns: `URL` | `Drive_URL`.
2. Create Google API credentials in n8n (service account or OAuth2).
3. Map the nodes to log successful or failed downloads.

---

## Google Sheet Column Table Example

| URL                                                                  | Drive_URL                                                                            |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [https://www.threads.net/p/abc123](https://www.threads.net/p/abc123) | [https://drive.google.com/file/d/xyz/view](https://drive.google.com/file/d/xyz/view) |
| [https://www.threads.net/p/def456](https://www.threads.net/p/def456) | N/A                                                                                  |

---

## Use Case & Benefits

* **Use Case:** Automate downloading Threads videos for marketing, content archiving, or research.
* **Benefits:**

  * Saves time with automated downloads.
  * Centralized storage in Google Drive.
  * Keeps a clear log in Google Sheets.
  * Works with multiple Threads URLs without manual effort.




## 📊 Basic Information

- **Workflow ID:** 10153
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 273
- **Downloads:** 27
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10153)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **if** 
- **googleDrive** (×2)
- **googleSheets** (×2)
- **wait** 
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
