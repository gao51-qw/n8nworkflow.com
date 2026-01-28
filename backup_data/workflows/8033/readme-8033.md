# Automate YouTube video notifications to Slack

> # 🎬 YouTube New Video → Auto-Post Link to Slack

This workflow automatically checks your **YouTube channel’s RSS feed** every 30 minutes and posts a message to Slack when a new video is published. It includes the title, description snippet, publish date, and a direct “Watch Now” button.  

---

## ⚙️ How It Works

1. **Check Every 30 Minutes**  
   - A **Cron node** runs on a 30-minute interval.  
   - Keeps monitoring the channel RSS feed for updates.  

2. **Fetch YouTube RSS**  
   - The **HTTP Request node** retrieves the channel’s RSS feed.  
   - Uses the format:  
     ```
     https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID
     ```  

3. **Parse RSS & Check for New Video**  
   - A **Code node** extracts video info:  
     - Title  
     - Link  
     - Description  
     - Published date  
   - Sorts by most recent publish date.  
   - Ensures only **new videos within last 2 hours** are processed (avoids duplicate posts).  

4. **Format Slack Message**  
   - Builds a **rich Slack message** with:  
     - Video title  
     - Description preview  
     - Published date  
     - Button: “🎥 Watch Now”  

5. **Post to Slack**  
   - Sends the formatted message to your chosen Slack channel (default: `#general`).  
   - Includes custom username/icon for branding.  

---

## 🛠️ Setup Steps

### 1. Get YouTube Channel RSS
- Go to your channel page → **View Page Source**.  
- Find: `channel/UCxxxxxxxxxx` (your channel ID).  
- Construct RSS feed:  
https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID
- Replace `YOUR_CHANNEL_ID_HERE` in the HTTP Request node.  

### 2. Connect Slack
- Create a Slack app at [api.slack.com](https://api.slack.com).  
- Add OAuth scopes: `chat:write`, `channels:read`.  
- Install to your workspace.  
- In n8n, connect your Slack OAuth credentials.  

### 3. Adjust Timing (Optional)
- Default = runs every 30 minutes.  
- Modify the **Cron node** if you want faster or slower checks.  

---

## 📺 Example Slack Output

🎬 New Video Published!
How to Automate Your Business with n8n
📅 Published: Aug 29, 2025
Learn how to connect your apps and automate repetitive tasks using n8n…

With a clickable **🎥 Watch Now** button linking directly to the video.

---

⚡ With this workflow, your Slack team is always up to date on new YouTube uploads — no manual link sharing needed.


## 📊 Basic Information

- **Workflow ID:** 8033
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 200
- **Downloads:** 20
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8033)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** 
- **cron** 
- **httpRequest** 
- **code** (×2)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
