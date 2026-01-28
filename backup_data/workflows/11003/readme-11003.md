# Scrape TikTok trends & generate AI videos with Apify, Fal AI & Google Suite

> # Automated TikTok Repurposing & Video Generation Workflow

## Who’s it for
This workflow is designed for **content creators, social media managers, and marketers**—specifically those in the **career, recruitment, or "job change" (転職/就職)** niches. It is ideal for anyone looking to automate the process of finding trending short-form content concepts and converting them into fresh AI-generated videos.

## How it works / What it does
This workflow automates the pipeline from content research to video creation:
1.  **Scrape Data:** It triggers an Apify actor (`clockworks/tiktok-scraper`) to search and scrape TikTok videos related to "Job Change" (転職) and "Employment" (就職).
2.  **Store Raw Data:** It saves the scraped TikTok metadata (text, stats, author info) into a Google Sheet.
3.  **AI Analysis & Prompting:** An AI Agent (via OpenRouter) analyzes the scraped video content and creates a detailed prompt for a new video (concept, visual cues, aspect ratio).
4.  **Log Prompts:** The generated prompt is saved to a separate tab in the Google Sheet.
5.  **Video Generation:** The prompt is sent to **Fal AI (Veo3 model)** to generate a new 8-second, vertical (9:16) video with audio.
6.  **Wait & Retrieve:** The workflow waits for the generation to complete, then retrieves the video file.
7.  **Cloud Storage:** Finally, it uploads the generated video file to a specific Google Drive folder.

## How to set up
1.  **Credentials:** Configure the following credentials in n8n:
    *   **Apify API:** (Currently passed via URL query params in the workflow, recommended to switch to Header Auth).
    *   **Google Sheets OAuth2:** Connect your Google account.
    *   **OpenRouter API:** For the AI Agent.
    *   **Fal AI (Header Auth):** For the video generation API.
    *   **Google Drive OAuth2:** For uploading the final video.
2.  **Google Sheets:**
    *   Create a spreadsheet.
    *   Note the `documentId` and update the Google Sheets nodes.
    *   Ensure you have the necessary Sheet names (e.g., "シート1" for raw data, "生成済み" for prompts) and columns mapped.
3.  **Google Drive:**
    *   Create a destination folder.
    *   Update the **Upload file** node with the correct `folderId`.
4.  **Apify:**
    *   Update the `token` in the **HTTP Request** and **HTTP Request1** URLs with your own Apify API token.

## Requirements
*   **n8n Version:** 1.x or higher (Workflow uses version 4.3 nodes).
*   **Apify Account:** With access to `clockworks/tiktok-scraper` and sufficient credits.
*   **Fal.ai Account:** With credits for the `fal-ai/veo3` model.
*   **OpenRouter Account:** With credits for the selected LLM.
*   **Google Workspace:** Access to Drive and Sheets.

## How to customize the workflow
*   **Change the Niche:** Update the `searchQueries` JSON body in the first **HTTP Request** node (e.g., change "転職" to "Cooking" or "Fitness").
*   **Adjust AI Logic:** Modify the **AI Agent** system prompt to change the style, tone, or structure of the video prompts it generates.
*   **Video Settings:** In the **Fal Submit** node, adjust `bodyParameters` to change the duration (e.g., `5s`), aspect ratio (e.g., `16:9`), or disable audio.
*   **Scale:** Increase the `amount` in the **Limit** node to process more than one video per execution.

## 📊 Basic Information

- **Workflow ID:** 11003
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 522
- **Downloads:** 52
- **Created:** 2025/11/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11003)

## 👤 Author

- **Name:** furuidoreandoro
- **Username:** @furuidoreandoro

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×4)
- **googleDrive** 
- **wait** (×2)
- **limit** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **manualTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
