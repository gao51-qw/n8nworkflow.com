# Create AI Viral Selfie videos 🎬 with celebrities 😎 using Google Veo 3.1

> This workflow demonstrates how to create **viral AI-generated selfie videos featuring famous characters** using a fully automated and platform-independent approach.

The process is designed to replicate the kind of celebrity selfie videos that are currently going viral on social media and YouTube, where a **realistic selfie-style video** appears to show the creator together with a well-known **public figure**.

Instead of relying on a proprietary or closed platform, the workflow explains how to build the entire pipeline using direct access to **Google Veo 3.1** APIs, giving full control over generation, orchestration, and distribution.



---

### Key Advantages

#### 1. ✅ Fully automated video pipeline

From prompt to final published video, the entire process runs without manual intervention.

#### 2. ✅ Spreadsheet-driven control

Non-technical users can manage video production simply by editing Google Sheets:

* Add new prompts
* Adjust duration
* Control merge logic

#### 3. ✅ Scalable and modular

* Supports batch processing of many videos
* Easy to extend with new AI models, platforms, or output formats

#### 4. ✅ Reliable async handling

* Built-in wait and status-check logic ensures robustness
* Prevents failures caused by long-running AI jobs
#### 5. ✅ Centralized asset management

* Automatically stores video URLs and statuses
* Keeps production data organized and auditable
#### 6. ✅ Multi-platform ready

* One generated video can be reused for:

  * YouTube
  * TikTok
  * Instagram
  * Other social channels

#### 7. ✅ Cost and time efficiency

* Eliminates repetitive manual video editing
* Reduces production time from hours to minutes


#### Ideal Use Cases

* AI-generated storytelling videos
* Social media content automation
* Marketing video campaigns
* Short-form video experiments at scale
* Faceless or semi-automated content channels

---

### **How it Works**

This workflow automates the generation of short video clips using AI, merges them into a final video, and optionally uploads the result to multiple platforms.

1. **Trigger & Data Fetching**  
   The workflow starts with a manual trigger. It reads a Google Sheet containing prompts, image URLs (first and last frames), and duration settings for each video clip to be generated.

2. **Video Clip Generation**  
   For each row in the sheet, the workflow calls the **fal.ai VEO 3.1 API** to generate a video clip based on the provided prompt, start image, end image, and duration. The clip is created asynchronously, so the workflow polls the API for status until completion.

3. **Status Polling & URL Retrieval**  
   Once a clip is marked as `COMPLETED`, its video URL is fetched and written back to the Google Sheet in the corresponding row.

4. **Video Merging**  
   After all clips are generated, the workflow collects the video URLs from rows marked for merging and sends them to the **fal.ai FFmpeg API** to be combined into a single video.

5. **Final Video Processing**  
   The merged video is polled until ready, then its final URL is retrieved. The video file is downloaded via HTTP request.

6. **Upload & Distribution**  
   The final video can be uploaded to:
   - Google Drive
   - YouTube (via [upload-post.com API](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app))
   - [Postiz](https://affiliate.postiz.com/n3witalia) (for multi-platform social media posting)
   Each upload step is currently disabled and requires configuration (usernames, titles, platform settings).

**WARNING**
It may happen that the workflow stops at the video generation node with the following message:

&gt; *Your request is invalid or could not be processed by the service [item 0]*
&gt; *The content could not be processed because it contained material flagged by a content checker.*

This occurs because images are checked both **before and after** the video generation process.
If this happens, you can either use **less restrictive video models** while keeping the same workflow structure, or **change the source images** in the Google Sheets file. 

---

### **Set Up Steps**

1. **Google Sheets Setup**  
   - Prepare a Google Sheet with columns:  
     `START`, `LAST`, `PROMPT`, `DURATION`, `VIDEO URL`, `MERGE`
   - Connect n8n to Google Sheets using OAuth2 credentials.

2. **Fal.ai API Configuration**  
   - Obtain an API key from fal.ai.
   - Set up **HTTP Header Auth** credentials in n8n with the key.

3. **Upload Services Configuration**  
   - **Google Drive**: Configure OAuth2 credentials and specify the target folder ID.
   - [**YouTube/upload-post.com**](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app): Enter your username and title in the respective node.
   - [**Postiz**](https://affiliate.postiz.com/n3witalia): Set up Postiz API credentials and configure platform channels.

4. **Enable Required Nodes**  
   - Enable the upload nodes (`Upload Video`, `Upload to Youtube`, `Upload to Postiz`, `Upload to Social`) once credentials are configured.

5. **Adjust Polling Intervals**  
   - Modify wait times (`Wait 30 sec.`, `Wait 60 sec.`) as needed based on video processing times.

6. **Test Execution**  
   - Start the workflow manually via the trigger node.
   - Monitor execution in n8n’s editor and check the Google Sheet for updated video URLs.

This workflow is designed for batch video creation and merging, ideal for content 
pipelines involving AI-generated media.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 


## 📊 Basic Information

- **Workflow ID:** 12536
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 65
- **Downloads:** 6
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12536)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **wait** (×2)
- **if** (×2)
- **splitInBatches** 
- **httpRequest** (×9)
- **googleDrive** 
- **stickyNote** (×10)
- **googleSheets** (×4)
- **set** 
- **code** 
- **n8n-nodes-postiz.postiz** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
