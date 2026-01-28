# Auto-save Zoom recordings to Google Drive + log meetings in Airtable

> # 🎥 Auto-Save Zoom Recordings to Google Drive + Log Meetings in Airtable

This workflow automatically saves **Zoom meeting recordings** to **Google Drive** and logs all important details into **Airtable** for easy tracking. Perfect for teams that want a searchable meeting archive.

---

## ⚙️ How It Works

1. **Zoom Recording Webhook**  
   - Listens for `recording.completed` events from Zoom.  
   - Captures metadata (Meeting ID, Topic, Host, File Type, File Size, etc.).  

2. **Normalize Recording Data**  
   - A Code node extracts and formats Zoom payload into clean JSON.  

3. **Download Recording**  
   - Uses HTTP Request to download the recording file.  

4. **Upload to Google Drive**  
   - Saves the recording into your chosen Google Drive folder.  
   - Returns the file ID and share link.  

5. **Log Result**  
   - Combines Zoom metadata with Google Drive file info.  

6. **Save to Airtable**  
   - Logs all details into your `Meeting Logs` table:  
     - Meeting ID  
     - Topic  
     - Host  
     - File Type  
     - File Size  
     - Google Drive Saved (Yes/No)  
     - Drive Link  
     - Timestamp  

---

## 🛠️ Setup Steps

### 1. Zoom
- Create a Zoom App → enable **`recording.completed`** event.  
- Add the workflow’s Webhook URL as your Zoom Event Subscription endpoint.  

### 2. Google Drive
- Connect OAuth in n8n.  
- Replace `YOUR_FOLDER_ID` with your destination Drive folder.  

### 3. Airtable
- Create a base with table **`Meeting Logs`**.  
- Add columns:  
  - Meeting ID  
  - Topic  
  - Host  
  - File Type  
  - File Size  
  - Google Drive Saved  
  - Drive Link  
  - Timestamp  
- Replace `YOUR_AIRTABLE_BASE_ID` in the node.  

---

## 📊 Example Airtable Output

| Meeting ID | Topic        | Host              | File Type | File Size | Google Drive Saved | Drive Link | Timestamp           |
|------------|-------------|-------------------|-----------|-----------|--------------------|------------|---------------------|
| 987654321  | Team Sync    | host@email.com    | MP4       | 104 MB    | Yes                | 🔗 Link     | 2025-08-30 15:02:10 |

---

⚡ With this workflow, every Zoom recording is safely archived in Google Drive and logged in Airtable for quick search, reporting, and compliance tracking.


## 📊 Basic Information

- **Workflow ID:** 8056
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 598
- **Downloads:** 59
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8056)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **airtable** 
- **code** (×2)
- **googleDrive** 
- **httpRequest** 
- **webhook** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
