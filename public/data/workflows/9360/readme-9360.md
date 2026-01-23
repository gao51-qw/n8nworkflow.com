# Generate AI videos with OpenAI Sora 2 & upload to Google Drive

> ## Who's it for
This template is designed for filmmakers, content creators, social media managers, and AI developers who want to harness OpenAI's Sora 2 for creating physically accurate, cinematic videos with synchronized audio. Whether you're generating realistic scenes from text prompts or reference images with proper physics simulation, creating multi-shot sequences with persistent world state, or producing content with integrated dialogue and sound effects, this workflow streamlines the entire video generation process from prompt to preview and Google Drive upload.

## What it does
This workflow:
* Accepts a text prompt, optional reference image, OpenAI API key, and generation settings via form submission
* Validates reference image format (jpg, png, or webp only)
* Sends the prompt and optional reference to the Sora 2 API endpoint to request video generation
* Continuously polls the video rendering status (queued → in progress → completed)
* Waits 30 seconds between status checks to avoid rate limiting
* Handles common generation errors with descriptive error messages
* Automatically fetches the generated video once rendering is complete
* Downloads the final .mp4 file
* Uploads the resulting video to your Google Drive
* Displays the download link and video preview/screenshot upon completion

## How to set up

### 1. Get Your OpenAI API Key

You'll need an OpenAI API key to use this workflow. Here's the general process:

1. **Create an OpenAI account** at https://platform.openai.com
2. **Set up billing** - Add payment information to enable API access
3. **Generate your API key** through the API keys section in your OpenAI dashboard
4. **Copy and save your key immediately** - you won't be able to view it again!

⚠️ **Important**: Your API key will start with `sk-` and should be kept secure. If you lose it, you'll need to generate a new one.

### 2. Connect Google Drive
* Add your **Google Drive OAuth2** credential to n8n
* Grant necessary permissions for file uploads

### 3. Import and Run
* Import this workflow into n8n
* Execute the workflow via the form trigger
* Enter your API key, prompt, and desired settings in the form
* **Optionally upload a reference image** to guide the video generation

**All generation settings are configured through the form**, including:
* **Model**: Choose between `sora-2` or `sora-2-pro`
* **Duration**: 4, 8, or 12 seconds
* **Resolution**: Portrait or Landscape options
* **Reference Image** (optional): Upload jpg, png, or webp matching your target resolution

## ⚠️ Sora 2 Pricing

The workflow supports two Sora models which have the following API pricing:

**Sora 2** - $0.10/sec
* Portrait: 720x1280
* Landscape: 1280x720

**Sora 2 Pro** - $0.30/sec (720p) or $0.50/sec (1080p)
* 720p - Portrait: 720x1280, Landscape: 1280x720
* 1080p - Portrait: 1024x1792, Landscape: 1792x1024

**Duration options**: 4, 8, 12 seconds (default: 4)

**Example costs:**
* 4-second video with Sora 2: $0.40
* 12-second video with Sora 2 Pro (1080p): $6.00

## Requirements
* Valid OpenAI API key (starting with `sk-`)
* Google Drive OAuth2 credential connected to n8n
* **Reference image** (optional): jpg, png, or webp format - should match your selected video resolution for best results

## How to customize the workflow

### Modify generation parameters
* Edit the form fields to include additional options:
  * Style presets (cinematic, anime, realistic)
  * Camera movement preferences
  * Audio generation options
  * Image reference strength/influence settings

[It's recommended to visit the official documentation on prompting for a detailed Sora 2 guide.](https://cookbook.openai.com/examples/sora/sora2_prompting_guide)

### Adjust polling behavior
* Change the **Wait** node duration (default: 30 seconds)
* Modify the **Check Status** polling frequency based on typical generation times
* Add timeout logic for very long renders

### Customize error handling
* Extend error messages for additional failure scenarios
* Add retry logic for transient errors
* Configure notification webhooks for error alerts

### Alternative upload destinations
* Replace the **Google Drive** node with:
  * Dropbox
  * AWS S3
  * Azure Blob Storage
  * YouTube direct upload
  * Slack/Discord notification with video attachment

### Enhance result display
* Customize the completion form to show additional metadata
* Add video thumbnail generation
* Include generation parameters in the results page
* Enable direct playback in the completion form

## Workflow Architecture

**Step-by-step flow:**
1. **Form Submission** → User inputs text prompt, optional reference image, API key, and generation settings
2. **Create Video** → Sends request to Sora 2 API endpoint with all parameters and reference image (if provided)
3. **Check Status** → Polls the API for video generation status
4. **Status Decision** → Routes based on status:
   * **Queued** → Wait 30 seconds → Check Status again
   * **In Progress** → Wait 30 seconds → Check Status again
   * **Completed** → Proceed to download
   * **Failed** → Display descriptive error message
5. **Wait** → 30-second delay between status checks
6. **Download** → Fetches the generated video file
7. **Google Drive** → Uploads .mp4 to your Drive
8. **Completion Form** → Displays download link and video preview/screenshot


**If you have any questions, just contact me on [Linkedin](https://www.linkedin.com/in/crisandrews/?locale=en_US)**


---

**Ready to create cinematic AI videos with physics-accurate motion, synchronized audio, and optional image references? Import this workflow and start generating!** 🎬✨

## 📊 Basic Information

- **Workflow ID:** 9360
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 6890
- **Downloads:** 689
- **Created:** 2025/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9360)

## 👤 Author

- **Name:** Juan Cristóbal Andrews
- **Username:** @crisandrews

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **wait** 
- **switch** (×2)
- **httpRequest** (×5)
- **stickyNote** (×5)
- **set** 
- **formTrigger** 
- **form** (×2)
- **merge** 
- **googleDrive** (×2)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
