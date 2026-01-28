# Transcribe Youtube videos for free with youtube-transcript.io & save to Supabase

> ## **Transcribe New YouTube Videos and Save to Supabase**

### **Who's It For?**

This workflow is for **content creators**, **marketers**, **researchers**, and anyone who needs to quickly get text transcripts from YouTube videos. If you analyze video content, repurpose it for blogs or social media, or want to make videos searchable, this template will save you hours of manual work.


### **What It Does**

This template automatically monitors multiple YouTube channels for new videos. When a new video is published, it extracts the video ID, retrieves the full transcript using the `youtube-transcript.io` API, and saves the structured data—including the title, author, URL, and full transcript—into a **Supabase** table.

It intelligently filters out YouTube Shorts by default and includes error handling to ensure that only successful transcriptions are processed.

### **Requirements**

* A **Supabase** account with a table ready to receive the video data.
* An API key from [youtube-transcript.io](https://www.youtube-transcript.io/) (offers a free tier).
* The **Channel ID** for each YouTube channel you want to track. You can find this using a free online tool like TunePocket's Channel ID Finder.

### **How to Set Up**

1.  **Add Channel IDs:**
    * In the **"Channels To Track"** node, replace the example YouTube Channel IDs with your own. The workflow uses these IDs to create RSS links and find new videos.
2.  **Configure API Credentials:**
    * Find the **"youtube-captions"** HTTP Request node.
    * In the credentials tab, create a new "Header Auth" credential. Name it `youtube-transcript-io` and paste your API key into the "Value" field. The "Name" field should be `x-api-key`.
3.  **Connect Your Supabase Account:**
    * Navigate to the **"Add to Content Queue Table"** node.
    * Create new credentials for your Supabase account using your Project URL and API key.
    * Once connected, select your target table and map the incoming fields (`title`, `source_url`, `content_snippet`, etc.) to the correct columns in your table.
4.  **Set Your Schedule (Optional):**
    * The workflow starts with a manual trigger. To run it automatically, replace the **"When clicking ‘Execute workflow’"** node with a **Schedule** node and set your desired interval (e.g., once a day).
5.  **Activate the Workflow:**
    * Save your changes and toggle the workflow to **Active** in the top right corner.

### **How to Customize**

* **Transcribe YouTube Shorts:** To include Shorts in your workflow, select the **"Does url exist?"** If node and delete the second condition that checks for `youtube.com/shorts`.
* **Change Your Database:** Don't use Supabase? Simply replace the **"Add to Content Queue Table"** node with another database or spreadsheet node, such as **Google Sheets**, **Airtable**, or n8n's own **Table**.

## 📊 Basic Information

- **Workflow ID:** 9747
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 845
- **Downloads:** 84
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9747)

## 👤 Author

- **Name:** automedia
- **Username:** @automate-social-media

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **wait** 
- **set** (×9)
- **if** (×3)
- **code** (×3)
- **splitInBatches** (×2)
- **merge** (×2)
- **stopAndError** 
- **stickyNote** (×11)
- **rssFeedRead** 
- **splitOut** 
- **manualTrigger** 
- **httpRequest** 
- **supabase** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
