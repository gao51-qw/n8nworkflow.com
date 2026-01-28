*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automates the distribution and scheduling of video content across **multiple social platforms** (TikTok, YouTube, Facebook, Instagram, Threads) through **[Postiz](https://postiz.com/?ref=onenode)**. Videos are collected from Google Drive, approved manually, and scheduled via the Postiz community node. 

---

## 🧾 Requirements

- **Google Drive** account with access to the folder that will watch for new items uploaded.
- videos in `mp4` format ready to be shared or, alternatively you can connect a community node from Cloud Convert to convert the format before uploading into Postiz.
- [**Postiz**](https://postiz.com/?ref=onenode) account with integrations for TikTok, YouTube, Facebook, Instagram, and Threads
---

## 🔗 Useful Links

- [Postiz Docs](https://docs.postiz.com/)
- [Postiz Community Node](https://www.npmjs.com/package/n8n-nodes-postiz)

---

## 🔄 Workflow Steps

1. **Trigger: Google Drive File Added**
   - Watches your selected Google Drive folder for new file uploads.

2. **Download File**
   - Downloads the detected video from Drive.

3. **Upload to Postiz**
   - Video is uploaded to Postiz to prepare for social scheduling.

4. **Set Fields**
   - Manual setting of social options 

5. **Extract Datetime (AI)**
   - Uses OpenAI to find/predict intended publish date & time, as the datetime format  is required to schedule on Postiz

6. **Get Social Integrations**
   - Fetches a list of user’s connected platforms from Postiz.

7. **Split and Filter Integrations**
   - Splits the process per platform (TikTok, YouTube, Facebook, Instagram, Threads).

8. **Schedule Post**
   - For each enabled platform, schedules the video with chosen options.

---

## 🙋‍♂️ Need Help?

Connect with **[1 Node](https://1node.ai)**