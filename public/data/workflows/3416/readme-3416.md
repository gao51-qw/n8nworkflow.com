# Generate AI YouTube shorts with Flux, Runway, Eleven Labs and Creatomate

> # Automated Video Creation Workflow Using n8n  

This workflow automates the creation and publishing of animated videos based on ideas listed in a Google Sheet. It processes one idea at a time, generating text prompts, images, animations, sound effects, and merging them into a final video before uploading it to YouTube.  

## Table of Contents  
- [Pre-conditions and Requirements](#pre-conditions-and-requirements)  
- [Google Sheets Setup](#google-sheets-setup)  
- [Step-by-Step Workflow Explanation](#step-by-step-workflow-explanation)  
- [Customization Guide](#customization-guide)  

---

## Pre-conditions and Requirements  

### 1. **API Keys Required**  
To run this workflow, you'll need API access to the following services:  
- **Anthropic Claude or Google Gemini** (for text prompt generation)  
- **Flux AI** ([RapidAPI](https://rapidapi.com/poorav925/api/ai-text-to-image-generator-flux-free-api/playground/apiendpoint_b28cd8ef-63fe-4242-98e4-908a332770d3)) (for AI-generated images)  
- **RunwayML** ([API Documentation](https://dev.runwayml.com/)) (for AI video animation)  
- **ElevenLabs** (for AI-generated voiceovers and sound effects)  
- **Creatomate** ([Website](https://creatomate.com)) (for video/audio merging and rendering)  
- **YouTube API** (for video upload and posting)  

### 2. **n8n Instance Setup**  
- Use cloud (n8n.io) or Install and run n8n ([Official Guide](https://docs.n8n.io/))  
- Set up credentials for each API in n8n’s settings  

---

## Google Sheets Setup  

Before running the workflow, ensure your Google Sheet is structured as follows:  

| **Column Name**  | **Description**  |  
|------------------|----------------|  
| `title`         | Video title (e.g., "Elijah's Fiery Chariot") |  
| `bibleverse`    | Corresponding Bible verse reference |  
| `idea`         | Brief description of the scene |  
| `style`        | Animation style (e.g., cinematic, vibrant, etc.) |  
| `caption`      | Suggested caption for social media |  
| `videoStatus`  | Status of video creation (`To Do`, `Created`) |  
| `publishStatus`| Publishing status (`Not Processed`, `Processed`) |  

---

## Step-by-Step Workflow Explanation  

### 1. **Extract an Idea from Google Sheets**  
- The workflow retrieves the first row where `videoStatus = "To Do"`.  
- Marks it as `Processing` to avoid duplicate processing.  

### 2. **Generate a Prompt for AI Image Creation and Sound Effects/Audio**  
- Uses **Anthropic Claude** or **Google Gemini** to generate prompts.  

### 3. **Generate an AI Image with Flux AI**  
- Sends the prompt to **Flux AI** to create a high-quality image.  

### 4. **Animate the Image Using RunwayML**  
- The generated image is sent to **RunwayML**, which animates the image.  

### 5. **Generate Sound Effects and Voiceover with ElevenLabs**  
- ElevenLabs produces a realistic narration based on the video content.  
- Background sound effects (e.g., storm sounds, fire crackling) are also generated.  

### 6. **Merge Video and Audio Using Creatomate**  
- **Creatomate** compiles the animated video with the audio.  

### 7. **Upload and Publish to YouTube**  
- The finalized video is automatically uploaded to **YouTube** using the YouTube API.  

### 8. **Update Google Sheet Status**  
- Marks `videoStatus` as `Created`.  
- Marks `publishStatus` as `Processed`.  

---

## Customization Guide  

### **Modifying the Animation Style**  
- Update the `style` column in Google Sheets with custom animation preferences (e.g., cinematic, slow-motion).  
- Modify the prompt generation step in n8n to incorporate different styles.  

### **Changing the Video Length**  
- Adjust the **RunwayML** settings to control animation speed and length.  
- Modify the **Creatomate** rendering step to adjust clip duration.  

### **Adding Subtitles**  
- Modify the **Creatomate** step to include AI-generated subtitles from ElevenLabs' text output.  

### **Publishing to Other Platforms**  
- Add additional steps to post to TikTok, Instagram, or Facebook using their respective APIs.  

---

This workflow ensures a fully automated video creation pipeline, reducing manual effort and optimizing content production. 🚀

## 📊 Basic Information

- **Workflow ID:** 3416
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 8055
- **Downloads:** 805
- **Created:** 2025/4/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3416)

## 👤 Author

- **Name:** Joseph
- **Username:** @mjomba

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **code** 
- **set** (×3)
- **httpRequest** (×7)
- **limit** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleDrive** (×2)
- **merge** 
- **wait** (×3)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **youTube** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
