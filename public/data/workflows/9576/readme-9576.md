# Generate AI videos with Sora2 Pro, save to Google Drive and upload to YouTube

> This workflow automates the entire process of **creating, managing, and publishing AI-generated videos** using **OpenAI Sora2 Pro**, **Google Sheets**, **Google Drive**, and **YouTube**.


---

### **Advantages**

* ✅ **Fully Automated Video Pipeline**
From idea to YouTube publication with zero manual intervention after setup.

* ✅ **Centralized Control via Google Sheets**
Simple spreadsheet interface — no need to use APIs or dashboards directly.

* ✅ **AI-Powered Video Creation**
Uses **OpenAI Sora2 Pro** for generating professional-quality videos from text prompts.

* ✅ **SEO-Optimized Titles with GPT-5**
Automatically creates catchy, keyword-rich titles optimized for YouTube engagement.

* ✅ **Cloud Integration**
Seamless use of **Google Drive** for file management and **YouTube** for publishing.

* ✅ **Scalable and Repeatable**
Can handle multiple videos in sequence, triggered manually or at regular intervals.

* ✅ **Error-Resilient and Transparent**
Uses conditional checks (“Completed?” node) and real-time updates in Google Sheets to ensure reliability and visibility.

---
### How it Works

This workflow automates the entire process of generating AI videos and publishing them to YouTube, using a Google Sheet as the central control panel.

1.  **Trigger & Data Fetch:** The workflow is triggered either manually or on a schedule. It starts by reading a specific Google Sheet to find new video requests. A new request is identified as a row where the "PROMPT" and "DURATION" columns are filled, but the "VIDEO" column is empty.
2.  **AI Video Generation:** For each new request, it takes the prompt and duration, then sends a request to the **Fal.ai Sora-2 Pro** model via its API to generate the video. The system then enters a polling loop, checking the video generation status every 60 seconds until it is `COMPLETED`.
3.  **Post-Processing & Upload:** Once the video is ready, the workflow performs three parallel actions:
    *   **Fetch Video & Upload to Drive:** It retrieves the generated video file and uploads it to a specified folder in Google Drive for archiving.
    *   **Generate YouTube Title:** It sends the original prompt to **OpenAI's GPT-5** (or another specified model) to generate an optimized, SEO-friendly title for the YouTube video.
    *   **Publish to YouTube:** It takes the generated video file and the AI-created title and uses the **Upload-Post.com** service to automatically publish the video to a connected YouTube channel.
4.  **Update & Log:** Finally, the workflow updates the original Google Sheet row with the URL of the archived video in Google Drive and the newly created YouTube video URL, providing a complete audit trail.

---
### Set up Steps

To configure this workflow, follow these steps:

1.  **Prepare the Google Sheet:**
    *   Create a Google Sheet with at least these columns: `PROMPT`, `DURATION`, `VIDEO`, and `YOUTUBE_URL`.
    *   In the n8n "Get new video" and update nodes, configure the `documentId` and `sheetName` to point to your specific Google Sheet.

2.  **Configure Fal.ai API Key:**
    *   Create an account on [fal.ai](https://fal.ai/) and obtain your API key.
    *   In both the "Create Video" and "Get status" HTTP Request nodes, set up the HTTP Header Authentication.
    *   Set the `Name` to `Authorization` and the `Value` to `Key YOUR_API_KEY`.

3.  **Set up Upload-Post.com for YouTube:**
    *   Create an account on [Upload-Post.com](https://www.upload-post.com/) and get your API key. Connect your YouTube channel as a "profile".
    *   In the "HTTP Request" node (for uploading), configure the Header Auth with `Name: Authorization` and `Value: Apikey YOUR_UPLOAD_POST_API_KEY`.
    *   Replace `YOUR_USERNAME` in the node's body parameters with the profile name you created on Upload-Post.com (e.g., `test1`).

4.  **Configure OpenAI (Optional but Recommended):**
    *   The "Generate title" node uses an OpenAI model. Ensure you have valid OpenAI API credentials set up in n8n for this node to function and create optimized titles.

5.  **Finalize Paths and Activate:**
    *   In the "Upload Video" node, specify the correct Google Drive folder ID where you want the videos to be saved.
    *   Once all credentials and paths are set, you can activate the workflow and set the "Schedule Trigger" node to run at your desired interval (e.g., every 5 minutes).

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 


## 📊 Basic Information

- **Workflow ID:** 9576
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 2800
- **Downloads:** 280
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9576)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×5)
- **wait** 
- **scheduleTrigger** 
- **stickyNote** (×7)
- **if** 
- **googleSheets** (×3)
- **set** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
