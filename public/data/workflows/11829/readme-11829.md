# Create script-to-video avatar videos with GPT-4.1-mini, HeyGen, Google Drive, Gmail and Slack

> ## 📘 Description
This workflow automates the entire process of taking a raw user-submitted script, rewriting it into a polished HeyGen-ready narration, generating a full avatar video, handling all processing checks, retrieving the final MP4, uploading it to Google Drive, and notifying the user through email and Slack. It turns an unstructured script into a complete, ready-to-share video package without any manual intervention.
The system rewrites scripts into structured sections (intro → narration sections → closing), ensures the final narration fits HeyGen’s free-tier limits, submits the script to HeyGen’s video API, initiates a polling loop until the video is fully rendered, downloads the finished file, uploads it to Drive with metadata, and generates clean notification messages containing the file links. Errors at any point trigger automated Slack alerts for debugging.
This workflow replaces manual rewriting, video rendering, download/upload, and team communication—providing a fully-managed script-to-video pipeline.

## ⚙️ What This Workflow Does (Step-by-Step)
🟢 Receive Script Request via Webhook
 Captures the raw script payload submitted by the user.
🧹 Parse Incoming Script Payload
 Converts stringified JSON body into structured data for processing.
✍️ Rewrite & Structure Video Script Using AI
 Transforms the raw script into:
 • Video title
 • Intro
 • Multiple sections (title + narration)
 • Closing
 • Combined full_script optimized for HeyGen’s ~300–350 word limit
 Ensures natural, human narration with smooth transitions.
🧠 Script Writing Memory + LLM Engine
 Maintains writing consistency and uses GPT-4.1-mini to generate polished narration.
🧪 Validate Structured Script Output
 Enforces strict JSON schema for titles, sections, closing, and full_script.
🎞️ Submit Video Generation Request to HeyGen
 Sends structured script to HeyGen API with avatar, voice, and background settings for 1280×720 export.
⏳ Wait Before Polling Loop
 Initial delay before the first status check.
📡 Check HeyGen Video Status
 Queries the HeyGen API to check progress of the video generation.
⏳ Wait Before Rechecking
 Adds timed spacing between repeated polls.
🔍 Evaluate Video Completion
 If status = completed → proceed
 If still processing → loop back to polling sequence
📥 Download Generated HeyGen Video
 Retrieves the completed MP4 using the returned video_url.
☁️ Upload Video to Google Drive
 Uploads the MP4 to a specific Google Drive folder, returning:
 • File name
 • View link
 • Download link
 • Timestamp
 • Size metadata
📣 Generate Completion Notifications Using AI
 Creates two outputs:
 • A friendly short email summary
 • A concise Slack message
 Both containing the Google Drive file link.
🧠 Notification Memory + LLM Engine
 Maintains tone and ensures consistent messaging across channels.
🧪 Validate Notification Output JSON
 Ensures email_subject, email_body, and slack_message follow schema.
💬 Send Video Ready Slack Notification
 Posts the final Slack message containing file details and Drive link.
📧 Send Video Ready Email Notification
 Emails the summary and file link to the designated recipient.
🚨 Error Handler Trigger → Slack Alert
 Any workflow failure sends a detailed diagnostic alert with node name, message, and timestamp.

## 🧩 Prerequisites
 • HeyGen API key
 • Google Drive OAuth connection
 • Slack API credentials
 • Gmail OAuth connection
 • Valid webhook endpoint to receive scripts

## 💡 Key Benefits
 ✔ Converts raw script → structured HeyGen-ready narration automatically
 ✔ Produces full HD avatar video with zero manual steps
 ✔ Polls HeyGen until the video is fully rendered
 ✔ Securely uploads final MP4 to Google Drive
 ✔ Auto-generates polished email + Slack notifications
 ✔ Ensures narrative consistency using memory context
 ✔ Provides real-time error alerts via Slack

## 👥 Perfect For
 HR teams automating onboarding videos
 Marketing teams producing quick avatar explainers
 Training content creators
 Founders creating rapid how-to or announcement videos
 Anyone needing instant script-to-video automation

## 📊 Basic Information

- **Workflow ID:** 11829
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 11
- **Downloads:** 1
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11829)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×3)
- **webhook** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **wait** (×2)
- **if** 
- **googleDrive** 
- **slack** (×2)
- **gmail** 
- **errorTrigger** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
