# Schedule & auto-post videos to Instagram, LinkedIn & TikTok with Google Sheets

> # Automated Social Media Video Posting

## 👥 Who's it for
This workflow is perfect for content creators, social media managers, and businesses who want to **schedule and automatically post videos** 📹 to multiple platforms (Instagram, LinkedIn, TikTok) without manual effort. Save hours every week! ⏰

## 🤖 What it does
It automatically reads scheduled posts from Google Sheets, checks if it's the right time to post, downloads videos from Google Drive, uploads them to multiple social media platforms simultaneously, updates the posting status, and sends you a Telegram notification with the results. Complete hands-free social media management! 🚀

## ⚙️ How it works

1. **⏰ Schedule Trigger** – Runs twice daily at 9 AM and 9 PM
2. **📊 Google Sheets (Read)** – Fetches posts with status "Listo para postear" (Ready to post)
3. **⚙️ Code Node** – Converts trigger time to readable Spanish format (e.g., "16 de Octubre a las 9 am")
4. **🔍 If Condition** – Checks if current time matches the scheduled post time in the sheet
5. **📝 Format Drive Content** – Extracts and organizes post data (Title, Copy, Video URL)
6. **🆔 Social Media Account IDs** – Prepares account identifiers (can be customized for specific accounts)
7. **🎬 Upload a video** – Posts video simultaneously to Instagram, LinkedIn, and TikTok using UploadPost API
8. **📊 Google Sheets (Update)** – Changes post status to "Posteado" (Posted) to avoid duplicates
9. **📱 Telegram Notification** – Sends detailed success report with URLs for each platform

## 📋 Requirements

- **Google Sheets** with your content calendar
- **Google Drive** to store your videos
- **UploadPost API account** (supports Instagram, LinkedIn, TikTok): 
- Click aquí 👉 [UploadPost](https://www.upload-post.com)
- **Telegram Bot** for notifications
- **n8n instance** with required node packages

### Google Sheets Structure
Your spreadsheet should have these columns:
- `Title` – Post title
- `Copy` – Post caption/description
- `Video Link` – Google Drive download URL
- `Status` – Post status ("Listo para postear" or "Posteado")
- `Fecha.Hora` – Scheduled time (format: "16 de Octubre a las 9 am")
- `row_number` – Auto-generated row identifier

## 🛠️ How to set up

1. **Create your Google Sheets calendar:**
   - Set up columns as specified above
   - Use status "Listo para postear" for scheduled posts
   - Format dates as "DD de Mes a las HH am/pm" (Spanish format)

2. **Upload videos to Google Drive:**
   - Get shareable download links (format: `https://drive.google.com/uc?export=download&id=FILE_ID`)
   - Ensure videos meet platform requirements (duration, format, size)

3. **Configure UploadPost API:**
   - Create account and get API credentials
   - Connect your Instagram, LinkedIn, and TikTok accounts
   - Add credentials to the "Upload a video" node

4. **Set up Google Sheets credentials:**
   - Connect OAuth2 for both read and update operations
   - Update `documentId` with your spreadsheet ID
   - Verify sheet name matches (default: "Video")

5. **Configure Telegram notifications:**
   - Create a Telegram bot via @BotFather
   - Get your chat ID
   - Add credentials to "Send a text message" node

6. **Customize posting times:**
   - Modify Schedule Trigger hours (default: 9 AM and 9 PM)
   - Times are in Santiago, Chile timezone (America/Santiago)

7. **Test the workflow:**
   - Create a test entry with current time
   - Run manually to verify all connections work
   - Check Telegram for success notification

8. **Activate the workflow** ✅

## 🎨 How to customize

- **Change posting schedule:** Modify `triggerAtHour` values in Schedule Trigger (add more times if needed)
- **Add more platforms:** Extend the `platform` array in "Upload a video" node (supports YouTube, Facebook, Twitter)
- **Customize notification format:** Edit the Telegram message template to include/exclude information
- **Change timezone:** Modify the `timeZone` parameter in the Code node (default: "America/Santiago")
- **Filter by platform:** Add a filter node before upload to post only to specific platforms on certain days
- **Add approval workflow:** Insert an approval step before posting using Telegram or Slack
- **Multiple accounts per platform:** Modify "Social Media Account IDs" node to specify different account IDs
- **Error handling:** Add error notification paths to alert you if uploads fail
- **Batch posting:** Remove `returnFirstMatch` option to post multiple videos at once

## 💡 Pro Tips

- **Time format must match exactly** between Schedule Trigger and Google Sheets for the workflow to trigger
- Videos should be optimized for each platform before upload (aspect ratio, length, file size)
- Test with a private account first before going live
- Keep video files under 100MB for best performance across platforms
- Use the `row_number` column to track and update specific posts
- The workflow runs twice daily, so schedule posts accordingly (9 AM or 9 PM slots)

## ⚠️ Important Notes

- Posts marked as "Posteado" won't be processed again (prevents duplicates)
- Video must be publicly accessible from the Google Drive link
- UploadPost API has rate limits depending on your plan
- Telegram notifications show success status and post URLs for each platform
- The Code node converts times to Spanish format - modify if you need different language/format

## 📊 Basic Information

- **Workflow ID:** 9786
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1602
- **Downloads:** 160
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9786)

## 👤 Author

- **Name:** Jose Bossa
- **Username:** @bossa

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** (×2)
- **googleSheets** (×2)
- **if** 
- **code** 
- **scheduleTrigger** 
- **telegram** 
- **n8n-nodes-upload-post.uploadPost** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
