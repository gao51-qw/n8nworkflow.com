# Transform YouTube videos to social media content with Vizard AI and GPT-4.1

> Transform YouTube Videos to Social Media Content with Vizard AI and GPT‑4.1

## Overview

This n8n template fetches new YouTube videos, enriches them with Vizard AI metadata, generates social‑media captions using GPT‑4.1, logs everything to Google Sheets, and notifies you by email. It’s a turnkey solution for content creators and marketers who need an end‑to‑end automated pipeline from video publishing to post scheduling.

## Setup Instructions

1. **Import the Template**

   * In n8n, click **Import from JSON**, paste this workflow, and save.
2. **Configure Credentials**

   * **Vizard AI**: Create an HTTP Request credential named `Vizard API` and set your `VIZARDAI_API_KEY`.
   * **OpenAI**: Add a new OpenAI credential for GPT‑4.1.
   * **Google Sheets**: Create a Google Sheets OAuth2 credential with read/write access or just sign in if your on cloud hosting 
   * **Gmail**: Add a Gmail OAuth2 credential for email notifications or just sign in if you are on cloud hosting 

4. **Adjust Limits**

   * In the **Limit Videos** node, set `maxItems` to control batch size.

## Google Sheets Column Structure

| Column             | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `videoId`          | Unique YouTube video identifier                      |
| `projectId`        | Vizard AI project ID returned                        |
| `videoUrl`         | Original YouTube video URL                           |
| `title`            | Video title                                          |
| `transcript`       | Transcribed text from Vizard AI                      |
| `viralScore`       | Vizard AI’s viral‑score metric                       |
| `viralReason`      | Explanation for viral score                          |
| `generatedCaption` | GPT‑4.1–generated caption in JSON `{ "caption": ""}` |
| `clipEditorUrl`    | URL to Vizard’s clip editor                          |

## Workflow Steps

1. **Read YouTube RSS Feed** (`Read YouTube RSS Feed`)
2. **Limit Videos** (`Limit Videos to N`)
3. **Send to Vizard** (`Create Vizard Project` & `Retrieve Vizard Metadata`)
4. **Split Items for Processing** (`Iterate Each Video`)
5. **Generate Captions** (`Generate Social Media Captions`)
6. **Append Row in Sheet** (`Log to Google Sheets`)
7. **Send Notification** (`Email Summary`)

## Customization Tips
* **Alternate Caption Styles**: Modify the AI prompt for tone, length, or brand voice.
* **Localization**: Extend prompts for other languages.
* **Notification Channels**: Swap Gmail for Slack, Teams, or SMS via webhook nodes.


## 📊 Basic Information

- **Workflow ID:** 6381
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 800
- **Downloads:** 80
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6381)

## 👤 Author

- **Name:** Basil Irfan
- **Username:** @basil

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitOut** 
- **httpRequest** (×2)
- **splitInBatches** 
- **stickyNote** (×2)
- **limit** 
- **webhook** 
- **googleSheets** 
- **gmail** 
- **rssFeedRead** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
