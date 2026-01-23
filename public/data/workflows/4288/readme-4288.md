# Convert RSS news to AI avatar videos with Heygen & GPT-4o

> 

## 🎬 Automated News-to-Video Workflow (n8n + Heygen + GPT-4o)

### 📄 Overview:

This n8n workflow turns news from an RSS feed (e.g., CNN) into short, AI-generated avatar videos using Heygen. It:

1. Fetches news from an RSS feed.
2. Logs headlines to Google Sheets.
3. Uses GPT-4o or Google Gemini to generate a 30–60 sec script.
4. Sends the script to Heygen to create an avatar video.
5. Monitors and retrieves the final video.
6. Logs video metadata (title, link, etc.) to Google Sheets.

🎯 Ideal for content creators, marketers, or media pages repurposing written news into video content at scale.

---

### ⚙️ Setup Guide (No Sensitive Info)

#### 🔑 1. **Heygen API**

* Paid Heygen plan required.
* Add your API key in the `Setup Heygen` node:

  ```json
  "heygen_api_key": "your_key_here"
  ```
* Optional: Set `"avatar_id"` and `"voice_id"` as desired.

#### 💡 2. **AI Model: GPT-4o or Gemini**

* **GPT-4o**: Use OpenAI’s node or HTTP request with your API key.
* **Gemini**: Link your Google Cloud project and connect the Gemini node using OAuth2 credentials.

#### 📥 3. **RSS Feed**

* Add an RSS node (e.g., CNN).
* Extract `title`, `link`, and `content`.

#### 📊 4. **Google Sheets + Drive**

* Connect via OAuth2:

  * `"Google Sheets account 2"`
  * `"Google Drive account 2"`
* Replace sheet IDs in:

  * `Log news to sheets`
  * `Log video URL and title to sheets`

#### 📹 5. **Create Video (Heygen)**

* Send a `POST` request to Heygen's API using the generated script, avatar, and voice ID.

#### ⏳ 6. **Monitor Status**

* Poll the status endpoint until video is ready.
* Capture the download link.

#### 🧾 7. **Log Final Output**

* Save video metadata to a Google Sheet for publishing or archiving.

Set up video: Link in Workflow 
---





## 📊 Basic Information

- **Workflow ID:** 4288
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2695
- **Downloads:** 269
- **Created:** 2025/5/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4288)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×3)
- **rssFeedRead** 
- **manualTrigger** 
- **wait** 
- **httpRequest** (×3)
- **set** 
- **limit** (×2)
- **googleDrive** 
- **code** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
