# Analyze videos with Google Gemini AI - form uploads & YouTube links

> ### ⚙️ Analyze Video Workflow - Automates Video Analysis with Google Gemini



---

### 🚀 Steps to Connect:

1. **Google Gemini API Key**
   - Go to [Google AI](https://ai.google.dev/) and sign up to get your **free API key**.
   - Create your query authorization credential using that API key in the **HTTP Request** nodes (e.g., "Upload File", "Get Analysis") that require a Google Gemini credential.

2. **Form Trigger Setup**
   - Ensure the **On form submission** node is linked and ready to accept video uploads.
   - No additional configuration needed; the node is pre-set for video input.

3. **YouTube Video Analysis (Optional)**
   - Update the **YouTube Video** node’s `jsonBody` field with your desired YouTube URL (e.g., replace `https://youtu.be/gwCQF--cARA?si=uCbaUnoRlEjHO50a` with your video link).
   - Keep the prompt as "Please summarize the video in 3 sentences" or modify it as needed.



---

# Overview of the n8n Workflow

This n8n workflow automates the analysis of uploaded videos or YouTube links using Google Gemini, providing detailed descriptions or summaries of the content. It processes video uploads, extracts analysis, and stores the results, with options for real-time polling and YouTube integration. The workflow includes sticky notes with setup instructions and editable fields, formatted in Markdown for clarity, as seen in the "Example Output.txt".

---

## How it Works

- Uploads a video file or links a YouTube URL for analysis.
- Processes the video through Google Gemini to generate a detailed description or summary.
- Stores the analysis results and optionally polls for updates with a delay.

## Set up Steps

- Setup time: Approximately 10-15 minutes.
- Detailed instructions are available in the sticky notes within the workflow.

---

# Editable Fields

- **YouTube Video Node: jsonBody**
  - Update the `file_uri` field with your YouTube video URL (e.g., replace `https://youtu.be/gwCQF--cARA?si=uCbaUnoRlEjHO50a` with your link).
  - Modify the `text` prompt if you want a different analysis (e.g., "Describe the video in detail" instead of "Please summarize the video in 3 sentences").

- **On form submission Node: No edits needed**
  - Pre-configured for video uploads; ready to use as is.

---

## 📊 Basic Information

- **Workflow ID:** 8017
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 638
- **Downloads:** 63
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8017)

## 👤 Author

- **Name:** LeeWei
- **Username:** @leeweihernandez07

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **httpRequest** (×3)
- **wait** (×2)
- **formTrigger** 
- **stickyNote** (×6)
- **set** (×2)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
