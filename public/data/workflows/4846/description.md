This workflow allows users to **generate AI videos** using **Google Veo3**, save them to **Google Drive**, generate optimized YouTube titles with GPT-4o, and **automatically upload them to YouTube** with [Upload-Post](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app). The entire process is triggered from a Google Sheet that acts as the central interface for input and output.

IT automates video creation, uploading, and tracking, ensuring seamless integration between Google Sheets, Google Drive, Google Veo3, and YouTube.


---

### Benefits of this Workflow

* **💡 No Code Interface**: Trigger and control the video production pipeline from a simple Google Sheet.
* **⚙️ Full Automation**: Once set up, the entire video generation and publishing process runs hands-free.
* **🧠 AI-Powered Creativity**:

  * Generates engaging YouTube titles using GPT-4o.
  * Leverages advanced generative video AI from Google Veo3.
* **📁 Cloud Storage & Backup**: Stores all generated videos on Google Drive for safekeeping.
* **📈 YouTube Ready**: Automatically uploads to YouTube with correct metadata, saving time and boosting visibility.
* **🧪 Scalable**: Designed to process multiple video prompts by looping through new entries in Google Sheets.
* **🔒 API-First**: Utilizes secure API-based communication for all services.

---

### **How It Works**  
1. **Trigger**: The workflow can be started manually ("When clicking ‘Test workflow’") or scheduled ("Schedule Trigger") to run at regular intervals (e.g., every 5 minutes).  
2. **Fetch Data**: The "Get new video" node retrieves unfilled video requests from a Google Sheet (rows where the "VIDEO" column is empty).  
3. **Video Creation**:  
   - The "Set data" node formats the prompt and duration from the Google Sheet.  
   - The "Create Video" node sends a request to the Fal.run API (Google Veo3) to generate a video based on the prompt.  
4. **Status Check**:  
   - The "Wait 60 sec." node pauses execution for 60 seconds.  
   - The "Get status" node checks the video generation status. If the status is "COMPLETED," the workflow proceeds; otherwise, it waits again.  
5. **Video Processing**:  
   - The "Get Url Video" node fetches the video URL.  
   - The "Generate title" node uses OpenAI (GPT-4.1) to create an SEO-optimized YouTube title.  
   - The "Get File Video" node downloads the video file.  
6. **Upload & Update**:  
   - The "Upload Video" node saves the video to Google Drive.  
   - The "HTTP Request" node uploads the video to YouTube via the Upload-Post API.  
   - The "Update Youtube URL" and "Update result" nodes update the Google Sheet with the video URL and YouTube link.  

---

### **Set Up Steps**  
1. **Google Sheet Setup**:  
   - Create a Google Sheet with columns: **PROMPT**, **DURATION**, **VIDEO**, and **YOUTUBE_URL**.  
   - Share the Sheet link in the "Get new video" node.  

2. **API Keys**:  
   - Obtain a Fal.run API key (for Veo3) and set it in the "Create Video" node (Header: `Authorization: Key YOURAPIKEY`).  
   - Get an Upload-Post API key (for YouTube uploads) and configure the "HTTP Request" node (Header: `Authorization: Apikey YOUR_API_KEY`).  

3. **YouTube Upload Configuration**:  
   - Replace `YOUR_USERNAME` in the "HTTP Request" node with your Upload-Post profile name.  

4. **Schedule Trigger**:  
   - Configure the "Schedule Trigger" node to run periodically (e.g., every 5 minutes).  

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 