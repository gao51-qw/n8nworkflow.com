# Download Instagram & Facebook Videos/Reels with Telegram Bot

> ## Instagram & Facebook Video/Reels Downloader Bot (Telegram bot)
![image.png](fileId:2783)
Once set up, simply send any **Instagram Reel or Facebook video link** to your Telegram bot, and it will automatically:  
1. **Check** if the shared link is valid.  
2. **Detect** whether it’s an Instagram or Facebook link.  
3. **Fetch** the video using API and scraping methods.  
4. **Download** the video directly from the source.  
5. **Send** the downloaded video (or a message if it’s invalid) right back to your Telegram chat — instantly!  

---

## **How It Works (Node Flow)**
- **Telegram Trigger:** Listens for new messages (video/reel links) from users.  
- **Regex Node:** Extracts and validates the Instagram/Facebook link format.  
- **Conditional Node (If):** Determines whether the link is for Facebook or Instagram.  
- **Link Validation Node:** Ensures the provided link is valid and reachable.  
- **Instagram Node:**  
  - Fetches video metadata via API.  
  - Decodes and downloads the Reel.  
  - Sends the downloaded video and confirmation message via Telegram.  
- **Facebook Node:**  
  - Uses scraping/API to get the video source.  
  - Generates the downloadable link.  
  - Downloads and sends the Facebook video back to Telegram.  
- **Error Handling Node:** Sends a custom error message if the link is invalid.  

---

## **Features**
✅ Works with both Instagram and Facebook links  
✅ Automatically detects the platform and processes accordingly  
✅ Delivers the downloaded video directly to your Telegram chat  
✅ Handles invalid or broken links gracefully  
✅ Clean and modular structure — easy to extend or customize  

---

## **Use Case**
Perfect for **social media managers**, **content creators**, and **automation enthusiasts** who want a **simple Telegram bot** to fetch and download Reels or videos without using third-party apps or websites.  

## 📊 Basic Information

- **Workflow ID:** 9352
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 3044
- **Downloads:** 304
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9352)

## 👤 Author

- **Name:** Joy Sutradhar
- **Username:** @joy-sutradhar

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** 
- **code** (×4)
- **telegramTrigger** 
- **if** (×2)
- **httpRequest** (×4)
- **telegram** (×5)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
