# Create stunning CGI videos with Sora 2 API and Google Drive integration

> ### **Create Stunning CGI Videos with Sora 2 API and Google Drive Integration**
The [**Sora 2 API**](https://rapidapi.com/skdeveloper/api/sora-2-openai) allows seamless generation of CGI ads, turning text prompts into stunning videos. This workflow automates the entire process from video generation to upload, notification, and file sharing via Google Drive.

---

### **Node-by-Node Explanation**

1. **On form submission**: Triggers the workflow when a form with a prompt is submitted.
2. **Sora API Processor:** The prompt is sent to the Sora 2 API's txttovideo.php endpoint to initiate video generation.
(This step calls the API where the magic of turning text into video happens.)
2. **Wait for API Response**: Pauses for 60 seconds before checking the API response.
3. **API Request: Check Task Status**: Sends an HTTP request to check the status of the CGI ad generation task.
4. **Condition: Task Output Status**: Validates the task status (success, processing, failed).
5. **Wait for Task to Complete**: Waits for another 60 seconds to recheck the task completion status.
6. **Send Email: API Error - Task ID Missing**: Sends an email if the prediction ID is missing in the response.
7. **Upload File to Google Drive**: Uploads the CGI ad video to Google Drive.
8. **Set Google Drive Permissions**: Configures file permissions for sharing.
9. **Send an email: Video Link**: Notifies the user with a link to the uploaded video.
10. **Sticky Notes**: Annotates and documents each step in the process for clarity.

---

### **How to Obtain API Key**

1. Go to [Sora 2 API on RapidAPI](https://rapidapi.com/skdeveloper/api/sora-2-openai).
2. Sign up or log in to RapidAPI.
3. Subscribe to the API plan that suits your needs.
4. Copy the API key from the dashboard under "Endpoints" or "Security" sections.

---

### **How to Configure Google Drive**

1. Go to the [Google Developer Console](https://console.developers.google.com/).
2. Create a new project or select an existing one.
3. Enable the **Google Drive API** for the project.
4. Set up OAuth 2.0 credentials.
5. Authorize the app in n8n by connecting your Google account with the credentials.

---

### **Use Case**

This workflow is perfect for businesses looking to automate CGI ad generation, reducing the time and effort required to create videos from textual prompts. It is ideal for digital marketers, content creators, or any business that needs video content quickly and efficiently.

---

### **Benefits**

* **Automates video generation**: Streamlines the creation of CGI ads.
* **Efficient content sharing**: Automatically uploads to Google Drive and configures permissions.
* **Error handling**: Sends notifications if anything goes wrong.
* **Time-saving**: Reduces manual effort with automated API interactions.
* **Easy to use**: Simple form submission to generate high-quality videos.

---

### **Who is this for?**

* **Digital Marketers**: Automates video content creation for ads and campaigns.
* **Content Creators**: Quickly generates high-quality CGI ads for social media or websites.
* **Businesses**: Small to medium businesses looking for cost-effective video creation solutions.
* **Developers**: Looking for an automated workflow to integrate CGI video generation into their applications or services.



## 📊 Basic Information

- **Workflow ID:** 10861
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 123
- **Downloads:** 12
- **Created:** 2025/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10861)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **wait** (×2)
- **httpRequest** (×3)
- **switch** 
- **emailSend** (×3)
- **googleDrive** (×2)
- **stickyNote** (×15)
- **if** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
