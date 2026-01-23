# Capture URL screenshots from Google Sheets with ScreenshotOne & save to Drive with Gmail alerts

> # Capture URL Screenshots Automatically from Google Sheets & Drive with ScreenshotOne & Gmail Alerts

## Summary
This automation template streamlines the process of capturing screenshots for multiple URLs. Instead of manually visiting each URL, taking a screenshot, and organizing the results, this workflow automates everything. When a spreadsheet is added to a designated Google Drive folder, the template extracts URLs from the column named "Url." These URLs are then processed through ScreenshotOne to capture screenshots, which are saved back to the same folder. Finally, an email notification is sent via Gmail with a link to the folder containing the screenshots.

## Problem Solved
This template addresses the challenge of manual screenshot capture for multiple URLs. Without this automation, a user would need to:

- Open each URL from a spreadsheet.
- Take a screenshot manually.
- Save each screenshot with an appropriate name.
- Organize the screenshots in a folder.
- Notify stakeholders when the process is complete.

These steps are not only time-consuming but also repetitive, especially when handling a large number of URLs.

### Who Can Benefit:
- **Digital Marketers:** Monitor website appearances for competitive analysis or to track campaign landing pages.
- **Web Developers/Designers:** Capture screenshots of multiple websites for inspiration or reference.
- **QA Teams:** Document the visual state of web pages during various stages of development.
- **SEO Specialists:** Track visual changes to websites they are optimizing.
- **Content Managers:** Monitor how content appears across various web properties.

## Prerequisites
- **Google Drive Node:** Must have appropriate permissions to create and access folders.
- **Connected Google Sheets Node:** To extract URLs from the spreadsheet.
- **Authenticated Gmail Node:** For sending notifications.
- **ScreenshotOne Account:** Either a free or paid plan depending on volume needs, along with an **[Access key](https://dash.screenshotone.com/access)**.  
  *Ensure you replace the placeholder `--YOUR ACCESS KEY--` with your generated access key in the "Get Screenshots" node.*

## Workflow Details
### Step 1: Google Drive Integration
- **Trigger Node:**  
  Monitors a specific folder in Google Drive. When a spreadsheet is added, the workflow is initiated.  

### Step 2: Google Sheets Processing
- **Google Sheets Node:**  
  Extracts URLs from the column named "Url."

### Step 3: Screenshot Capture
- **Get Screenshots Node:**  
  Sends each extracted URL to ScreenshotOne to capture screenshots.

### Step 4: Saving Screenshots and Notifications
- **Google Drive Node:**  
  Saves the captured screenshots back into the same folder.
- **Gmail Node:**  
  Sends an email notification with a link to the folder, alerting stakeholders that the screenshots are ready.

## Customization Guidance
- ### Folder Monitoring:
	The workflow is set to monitor a specific Google Drive folder. It can be customized by selecting a different folder in the node settings.

- ### Spreadsheet Structure:
	While the template expects a spreadsheet with a column named "Url." for extracting URLs, users can add additional columns (e.g., titles, categories, or tags) and modify the workflow to utilize them as needed.

- ### Email Settings:
	Customize the recipient, subject, and body of the notification email to suit your needs. If required, enable optional notifications for different stakeholders.

- ### ScreenshotOne Access Key & Configurations:
	A valid ScreenshotOne **[Access key](https://dash.screenshotone.com/access)** is required to capture screenshots. Users can further refine screenshot settings (e.g., viewport size, device emulation, or delay timing) by exploring the available options in the **[ScreenshotOne API documentation](https://dash.screenshotone.com/playground)**.

## 📊 Basic Information

- **Workflow ID:** 3321
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1745
- **Downloads:** 174
- **Created:** 2025/3/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3321)

## 👤 Author

- **Name:** Niko
- **Username:** @niko

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **httpRequest** 
- **googleSheets** 
- **googleDrive** 
- **googleDriveTrigger** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
