# Generate AI videos from text prompts with Google Veo

> This n8n workflow uses the Google Gemini node to generate AI videos via the Veo model. It replaces complex manual API setups with a simple, plug-and-play experience.

### Important Prerequisite
To use the Veo model, your Google Cloud project **must have billing enabled**. The feature is not available on the free tier and may incur charges.


### Who Is This For?
* **Marketers & Content Creators**
  Quickly create B-roll, ad clips, or social content from text prompts.
* **Filmmakers & Artists**
  Prototype scenes and visualize ideas without filming.
* **Anyone exploring AI video generation**
  Use Google’s Veo model without any manual API work.

### What the Workflow Does
* **Define Prompt**
  Write a text prompt in the `1. Set Video Prompt` node.
* **Trigger**
  Manually run the workflow with one click.
* **Generate**
  The Gemini node sends the prompt to the Veo model and generates a video.
* **Output**
  Returns a binary video file ready to save or share.

### Setup Instructions
**1. Enable Google Cloud Billing**
Make sure your Google Cloud project has billing activated.
**2. Add Credentials**
Add your Google AI (Gemini) credentials in n8n.
**3. Set the Prompt**
Open the `1. Set Video Prompt` node and write your video idea.
**4. Activate Workflow**
Save and activate the workflow.
**5. Run It**
Click “Execute Workflow” to generate a video.

### Requirements
* n8n (Cloud or Self-Hosted)
* Google Cloud Project with billing enabled
* Google AI (Gemini) credentials linked to that project

### Customization Ideas
* **Save Output**
  Add a Google Drive, Dropbox, or S3 node to store the video.
* **Post Automatically**
  Connect social media nodes (YouTube Shorts, TikTok, etc.) to publish content.

* **Generate in Bulk**
  Replace the Set node with Google Sheets or Airtable to generate multiple videos from a list of prompts.


## 📊 Basic Information

- **Workflow ID:** 6557
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 4336
- **Downloads:** 433
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6557)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.googleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
