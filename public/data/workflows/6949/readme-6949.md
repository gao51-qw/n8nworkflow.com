# Capture and store website screenshots from Google Sheets to Drive using Dumpling AI

> ## 📄 What this workflow does

This workflow captures a full-page screenshot of any website added to a Google Sheet and automatically uploads the screenshot to a designated Google Drive folder. It uses Dumpling AI’s screenshot API to generate the image and manages file storage through Google Drive.

---

## 👤 Who is this for

This is ideal for:
- Marketers and outreach teams capturing snapshots of client or lead websites
- Lead generation specialists tracking landing page visuals
- Researchers or analysts who need to archive website visuals from URLs
- Anyone looking to automate website screenshot collection at scale

---

## ✅ Requirements

- A **Google Sheet** with a column labeled `Website` where URLs will be added
- **Dumpling AI** API access for screenshot capture
- A connected **Google Drive** account with an accessible folder to store screenshots

---

## ⚙️ How to set up

1. Replace the Google Sheet and folder IDs in the workflow with your own.
2. Connect your Dumpling AI and Google credentials in n8n.
3. Make sure your sheet contains a `Website` column with valid URLs.
4. Activate the workflow to begin watching for new entries.

---

## 🔁 How it works (Workflow Steps)

1. **Watch New Row in Google Sheets**: Triggers when a new row is added to the sheet.
2. **Request Screenshot from Dumpling AI**: Sends the website URL to Dumpling AI and gets a screenshot URL.
3. **Download Screenshot**: Fetches the image file from the returned URL.
4. **Upload Screenshot to Google Drive**: Uploads the file to a selected folder in Google Drive.

---

## 🛠️ Customization Ideas

- Add timestamped filenames using the current date or domain name
- Append the Google Drive URL back to the same row in the sheet for easy access
- Extend the workflow to send Slack or email notifications when screenshots are saved
- Add filters to validate URLs before sending them to Dumpling AI


## 📊 Basic Information

- **Workflow ID:** 6949
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 256
- **Downloads:** 25
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6949)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** (×2)
- **googleDrive** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
