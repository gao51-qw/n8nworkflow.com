# Scheduled YouTube transcription with de-duplication using Transcript.io and Supabase

> ## **Scheduled YouTube Transcription with Duplicate Prevention**

### **Who's It For?**

This template is for advanced users, content teams, and data analysts who need a robust, automated system for capturing YouTube transcripts. It’s ideal for those who monitor multiple channels and want to ensure they only process and save each video's transcript once.


### **What It Does**

This is an advanced, "set-it-and-forget-it" workflow that runs on a daily schedule to monitor YouTube channels for new content. It enhances the basic transcription process by connecting to your **Supabase** database to prevent duplicate entries.

The workflow fetches all recent videos from the channels you track, filters out any that are too old, and then checks your database to see if a video's transcript has already been saved. Only brand-new videos are sent for transcription via the `youtube-transcript.io` API, with the final data (title, URL, full transcript, author) being saved back to your Supabase table.

### **Requirements**

* A **Supabase** account with a table to store video data. This table must have a column for the `source_url` to enable duplicate checking.
* An API key from [youtube-transcript.io](https://www.youtube-transcript.io/) (offers a free tier).
* The **Channel ID** for each YouTube channel you want to track.

### **How to Set Up**

1.  **Set Your Time Filter:**
    * In the **"Max Days"** node, set the number of days you want to look back for new videos (e.g., `7` for the last week).
2.  **Add Channel IDs:**
    * In the **"Channels To Track"** node, replace the example YouTube Channel IDs with the ones you want to monitor.
3.  **Configure API Credentials:**
    * Select the **"Get Transcript from API"** node.
    * In the credentials tab, create a new "Header Auth" credential. Name it `youtube-transcript-io` and paste your API key into the "Value" field. The "Name" field should be `x-api-key`.
4.  **Connect Your Supabase Account:**
    * This workflow uses Supabase in two places: **"Check if URL Is In Database"** and **"Add to Content Queue Table"**.
    * You must configure your Supabase credentials in **both** nodes.
    * In each node, select your target table and ensure the columns are mapped correctly.
5.  **Adjust the Schedule:**
    * The **"Schedule Trigger"** node is set to run once a day. Click it to adjust the time and frequency to your needs.
6.  **Activate the Workflow:**
    * Save your changes and toggle the workflow to **Active**.

## 📊 Basic Information

- **Workflow ID:** 9749
- **Complexity:** advanced
- **Node Count:** 52
- **Views:** 139
- **Downloads:** 13
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9749)

## 👤 Author

- **Name:** automedia
- **Username:** @automate-social-media

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **code** (×4)
- **supabase** (×2)
- **wait** 
- **set** (×13)
- **dateTime** 
- **if** (×5)
- **splitInBatches** (×3)
- **merge** (×5)
- **stopAndError** 
- **stickyNote** (×13)
- **rssFeedRead** 
- **splitOut** 
- **scheduleTrigger** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 52 nodes with 38 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
