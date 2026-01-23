# Automate Facebook reels publishing with Google Sheets and Drive

> ## Publish a Reel on a Facebook Page
### 🧠 Good to Know
&gt;  Set up n8n self-hosted instance using **[https://tino.vn/vps-n8n?affid=388](https://tino.vn/vps-n8n?affid=388)**
&gt;  Use the code ==**VPSN8N**== for up to 39% off.

This workflow automatically **uploads and publishes Facebook Reels** using data from Google Sheets and video files stored in Google Drive. It runs on a schedule (every 30 minutes by default) and can be fully customized for your posting routine.

---

### ⚙️ How It Works

1. **Google Sheets** provides the content data — video file ID, caption, and optional links.
2. **Google Drive** hosts the actual video file (.mp4 format).
3. The workflow initializes an **upload session** with the Facebook Graph API, uploads the video, and publishes it as a Reel on your Page.
4. Finally, it updates your Google Sheet and adds a comment under the published Reel with your affiliate or product link.

---

### How to Use

1. **Open the template Google Sheet** or make a copy:
   👉 [Template Sheet](https://docs.google.com/spreadsheets/d/1JMT2BpWxfcG-d_XEWRppdSr_ZkG0XvtiaGaB8Lzdl78/edit?usp=sharing)

2. Fill out each row with:

   * **File ID** → the ID of your video file from Google Drive
   * **File name** → optional
   * **Caption** → your post caption
   * **Link Share** → optional
   * **Link post** → leave empty (it will be filled after posting)

3. Ensure your video file:

   * **.mp4 format**
   * **shared folder** on Google Drive that’s accessible to your connected account

4. Add your **Facebook Page ID** and **Page Access Token** to the “info” node.
   (Learn how to get these here: [Facebook Reels Workflow Guide](https://n8n.io/workflows/10038))
![image.png](fileId:3103)

---

### 📋 Requirements

* **n8n instance (Self-hosted recommended):**

  * Set up a self-hosted instance using **[https://tino.vn/vps-n8n?affid=388](https://tino.vn/vps-n8n?affid=388)**
  * Use the code **VPSN8N** for up to 39% off.

* **Facebook Page** with publishing permissions
* **[Page Access Token](https://n8n.io/workflows/10038)** (with `pages_manage_posts`, `pages_read_engagement`)
* **Google Drive** and **Google Sheets** account connected to n8n
* Video files in **.mp4** format, under the 1GB upload limit

---

### 🎨 Customizing This Workflow

* **Change schedule:** Adjust the **Schedule Trigger** node (e.g., every 2 hours or only during business hours).
* **Track post links:** Add a node to fetch the `permalink_url` from the Graph API and update it in your sheet.
* **Auto-comment control:** Modify or remove the “Create comment post” node to suit your campaign style.
* **Improve security:** Replace hardcoded tokens with **n8n credentials**, **secrets**, or a **Data Table** lookup.

This structure keeps your automation scalable, secure, and easy to adapt for multi-page or multi-brand use.


## 📊 Basic Information

- **Workflow ID:** 10122
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 746
- **Downloads:** 74
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10122)

## 👤 Author

- **Name:** Đỗ Thành Nguyên
- **Username:** @nathando

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** 
- **scheduleTrigger** (×2)
- **googleDrive** (×2)
- **wait** 
- **httpRequest** (×4)
- **googleSheets** (×3)
- **code** 
- **stickyNote** (×3)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
