# Track construction site progress with Google Gemini AI, drive photos and Sheets

> This automated n8n workflow leverages AI to monitor construction site progress using daily site photos, providing real-time updates and detailed tracking. The system analyzes images, generates progress summaries, and appends data to a Google Sheet for comprehensive project management.

## Good to Know
- Supports daily photo analysis for construction progress tracking
- Utilizes Google Gemini AI for intelligent image processing and analysis
- Includes memory to maintain context of ongoing construction updates
- Automates data appending to Google Sheets for real-time tracking
- Integrates with scheduled triggers for consistent daily updates

## How It Works
- **Schedule Trigger** - Initiates the workflow daily to check for new site photos
- **List a file** - Retrieves the latest photos from the designated drive folder
- **Tack All Images** - Passes each photo to the AI for individual analysis
- **AI Analysis** - Processes images using Google Gemini to detect construction progress
- **Append data to a sheet** - Updates a Google Sheet with the analyzed progress data
- **Send email** - Notifies stakeholders with a daily progress update

## How to Use
- Import workflow into n8n
- Configure Google Drive API for photo access
- Set up Google Gemini AI model for image analysis
- Configure Google Sheets API for data appending
- Set up email notification settings
- Test with sample photos and monitor updates
- Adjust AI parameters for accuracy as needed

## Requirements
- Access to Google Drive API
- Google Gemini AI model integration
- Google Sheets API access
- Email service configuration
- Scheduled trigger setup in n8n

### Sheet Columns:
- **Date**
- **Photo ID**
- **Progress Summary**
- **Status**
- **Notes**

## Customizing This Workflow
- Modify AI prompts for specific construction milestones
- Adjust photo analysis frequency based on project needs
- Configure custom Google Sheet columns for additional data
- Set up custom email templates for stakeholder updates
- Integrate additional AI models for enhanced analysis

## 📊 Basic Information

- **Workflow ID:** 6742
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 822
- **Downloads:** 82
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6742)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleSheets** 
- **splitInBatches** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **emailSend** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
