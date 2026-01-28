# Generate avatar snippet videos from Google Sheets scripts in Google Drive

> ## Who it’s for

This workflow is for content creators and marketers who write short scripts in Google Sheets and want to automatically turn each line into an AI-generated avatar video stored in Google Drive, with links written back to the sheet.

## How it works

A **Manual Trigger** starts the workflow. It first uses **Get Avatar Description** (Google Sheets) to read avatar details from a dedicated “Gaia” sheet. The **Global Variables** node sets the working script page (for example, “Draft 5”) and exposes the avatar description.
Next, **Get Script** reads all rows from the selected sheet. **Loop Over Items** iterates through each row, while **Set Loop Inputs** prepares the variables: avatar description, speech, and framing.
For every row, **Generate a video with Veo** (Google Gemini video model) creates an 8-second 16:9 clip. **Upload video file** saves it to a chosen Google Drive folder, and **Update row in sheet with link to video** writes the Drive link back into the same row, then loops to the next snippet.
Yellow sticky notes explain each phase, with the large one summarizing the end-to-end snippet generation loop.

## How to set up

1. Connect your Google Sheets and Google Drive credentials.
2. Update the spreadsheet IDs, sheet names, and Drive folder to match your own.
3. Configure the Gemini/Veo model credentials.
4. Adjust the default script page name in **Global Variables**.

## Requirements

* n8n instance
* Google Sheets and Google Drive accounts
* Google Gemini / Veo API access
  No API keys or personal identifiers are hardcoded; always store credentials securely in n8n and avoid real PII in test data.

## How to customize

* Change the **page** value in **Global Variables** to target different script tabs.
* Edit the Veo prompt to alter background, camera framing, or speaking style.
* Modify video duration, aspect ratio, or output folder in the Gemini and Drive nodes.
* Extend the loop to add more post-processing steps (e.g., thumbnail generation, analytics tracking).


## 📊 Basic Information

- **Workflow ID:** 11203
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 152
- **Downloads:** 15
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11203)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **set** (×2)
- **stickyNote** (×3)
- **googleSheets** (×3)
- **noOp** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
