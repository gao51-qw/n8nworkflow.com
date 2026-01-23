# Analyze YouTube videos for viral content with engagement scoring and Google Sheets

> 🚀 **Discover trending and viral YouTube videos easily with this powerful n8n automation!** This workflow helps you perform bulk research on YouTube videos related to any search term, analyzing engagement data like views, likes, comments, and channel statistics — all in one streamlined process.

✨ **Perfect for:**  
- Content creators wanting to find viral video ideas  
- Marketers analyzing competitor content  
- YouTubers optimizing their content strategy

### How It Works 🎯

1️⃣ **Input Your Search Term** — Simply enter any keyword or topic you want to research.  
2️⃣ **Select Video Format** — Choose between `short`, `medium`, or `long` videos.  
3️⃣ **Choose Number of Videos** — Define how many videos to analyze in bulk.  
4️⃣ **Automatic Data Fetch** — The workflow grabs video IDs, then fetches detailed video data and channel statistics from the YouTube API.  
5️⃣ **Performance Scoring** — Videos are scored based on engagement rates with easy-to-understand labels like 🚀 *HOLY HELL* (viral) or 💀 *Dead*.  
6️⃣ **Export to Google Sheets** — All data, including thumbnails and video URLs, is appended to your Google Sheet for comprehensive review and easy sharing.

### Setup Instructions 🛠️

1. **Google API Key**  
   - Get your YouTube Data API key from [Google Developers Console](https://console.developers.google.com/).  
   - Add it securely in the n8n credentials manager (do **not** hardcode).

2. **Google Sheets Setup**  
   - Create a Google Sheet to store your results (template link is provided).  
   - Share the sheet with your Google account used in n8n.  
   - Update the workflow with your sheet's Document ID and Sheet Name if needed.

3. **Run the Workflow**  
   - Trigger the form webhook via browser or POST call.  
   - Enter search term, format, and number of videos.  
   - Let it process and check your Google Sheet for insights!

### Features ✨

- Bulk fetches the latest and top-viewed YouTube videos.  
- Intelligent video performance scoring with emojis for quick insights 🔥🎬.  
- Organizes data into Google Sheets with thumbnail previews 🖼️.  
- Easy to customize search parameters via an intuitive form.  
- Fully automated, no manual API calls needed.

### Get Started Today! 🌟

Boost your YouTube content strategy and stay ahead with this powerful viral video research automation! Try it now on your n8n instance and tap into the world of viral content like a pro 🎥💡


## 📊 Basic Information

- **Workflow ID:** 6427
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 878
- **Downloads:** 87
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6427)

## 👤 Author

- **Name:** Akash Kankariya
- **Username:** @akash25

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **httpRequest** (×3)
- **code** (×5)
- **stickyNote** (×8)
- **googleSheets** 
- **formTrigger** 
- **merge** 
- **splitInBatches** 
- **wait** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
