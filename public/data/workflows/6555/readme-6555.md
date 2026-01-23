# Analyze any video and generate text summaries with Google Gemini 2.5 Pro

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Analyze Any Video and Get a Text Summary with Google Gemini
This workflow uses the NEW native Google Gemini node in n8n to analyze videos and generate detailed text summaries. Just upload a video, and Gemini will describe the scenes, objects, and actions frame by frame.

### Who Is This For?
* **Content Creators & Marketers**
  Quickly generate summaries, shot lists, or descriptions for video content.
* **Video Editors**
  Get a fast overview of footage without manual review.
* **Developers & n8n Beginners**
  Learn how to use multimodal AI in n8n with a simple setup.
* **AI Enthusiasts**
  Explore the new capabilities of the Gemini Pro model.

### How It Works
* **Upload**
  Triggered via a form where you upload a video file.
* **Analyze**
  The video is sent to the Gemini 2.5 Pro model for analysis.
* **Describe**
  Gemini returns a detailed text summary of what it sees in the video.

### Setup Instructions
**1. Add Credentials**
Connect your Google AI (Gemini) credentials in n8n.
**2. Activate Workflow**
Save and activate the workflow.
**3. Upload Video**
Open the Form Trigger URL, upload a video, and submit the form.

### Requirements
* An n8n instance (Cloud or Self-Hosted)
* A Google AI (Gemini) account

### Customization Ideas
* **Translate the Summary**
  Add another LLM node to translate the analysis.
* **Create Social Media Posts**
  Use the output to generate Twitter or LinkedIn content.
* **Store the Output**
  Save the summary to Google Sheets or Airtable.

* **Automate with Cloud Storage**
  Replace the Form Trigger with a Google Drive or Dropbox trigger to process videos automatically.

## 📊 Basic Information

- **Workflow ID:** 6555
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 2726
- **Downloads:** 272
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6555)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
