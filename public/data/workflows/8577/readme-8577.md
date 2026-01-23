# Auto-edit images from Google Drive with Nano Banana and send via Gmail

> Auto-Edit Images from Google Drive with (Wavespeed) Nano Banana and Send via Gmail

When a new image is uploaded to a specific Google Drive folder, this workflow sends it to Wavespeed’s Google Nano Banana image editing API, waits for the edited version, and then emails the result automatically. Perfect for creators, marketers, and ops teams who want hands-off, consistent image edits with instant delivery to a stakeholder inbox.

👉 Watch step-by-step video tutorials of workflows like these on: www.youtube.com/@automatewithmarc

Highlights

Google Drive trigger detects new image uploads

Wavespeed API (Google Nano Banana) performs automated image editing

Polling loop checks job status until complete

Gmail auto-sends the edited image to your chosen recipient

Great for social media pipelines, product photo retouching, or team approvals


Apps & Nodes Used

Trigger: Google Drive Trigger (fileCreated in folder)

HTTP Request: POST to Wavespeed (submit edit job)

Wait: Delay before first status check (15s)

HTTP Request: GET result (poll prediction status)

IF: Status == completed → proceed, else wait & recheck

Gmail: Send edited image output to recipient

Prerequisites

n8n account (Cloud or Self-hosted)

Google Drive folder for uploads

Wavespeed API key (HTTP Header Auth)

Gmail account with OAuth2 connected to n8n

Configuration (5 Steps)

Google Drive Trigger – set to your image upload folder.

POST Image Edit Request – sends file URL + prompt (default: “Change the lighting to night scene”).

Wait 15s – lets the job start.

GET Image Edit Request – checks prediction status/result.

IF → Gmail – once status = completed, send edited image to your chosen email.

Customization

Change the prompt (e.g., “remove background”, “enhance product lighting”).

Set Gmail recipient dynamically or statically.

Adjust polling wait times based on job length.

Save results to Drive/S3 instead of email if needed.

Error Handling

Add IF nodes to catch API errors.
Set a retry limit to avoid infinite loops.
Use Drive “Share File” if API can’t access the uploaded file link.

## 📊 Basic Information

- **Workflow ID:** 8577
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1171
- **Downloads:** 117
- **Created:** 2025/9/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8577)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **httpRequest** (×2)
- **wait** (×2)
- **if** 
- **gmail** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
