# YouTube channel monitor with Gemini AI transcription & summarization

> # This n8n workflow monitors YouTube channels 24/7, transcribes new videos with AI, and scores them by relevance—all automatically saved to Google Sheets.


## About

This n8n workflow automatically monitors YouTube channels, transcribes new videos, and generates AI-powered summaries with relevance scoring. It pulls channel URLs from a Google Sheet, fetches recent videos (last 14 days), transcribes them using Google Gemini, and saves detailed summaries back to your spreadsheet with relevance scores based on custom criteria.

## How It Works

1. **Schedule Trigger**: Runs weekly (every 7 days at 7:05 AM)
2. **Fetch Channels**: Reads channel URLs and filter criteria from Google Sheets
3. **Process Channels**: Loops through each channel and fetches recent videos via YouTube RSS feeds
4. **Filter Videos**: Only processes videos from the last 14 days that don't already exist in the database
5. **Transcribe**: Uses Google Gemini API to transcribe video content
6. **Summarize & Score**: AI agent analyzes transcripts against your criteria and generates:
   - Full 500-word summary in markdown
   - Short bullet-point summary
   - Topic classification
   - Relevance score (1-10)
   - Relevance reasoning
7. **Save Results**: Appends or updates video data in Google Sheets

## Setup Instructions

### Prerequisites
- n8n instance (cloud or self-hosted)
- Google account with Sheets API access
- Google Gemini API key

### Step 1: Google Sheets Setup

Create a new Google Spreadsheet with two sheets:

**Google Sheet Template**: [Click here to access](https://docs.google.com/spreadsheets/d/1CvRiadHGvfLOduLUZZThc-_g339q9BQXb_P8ZUCchIo/edit?usp=sharing)
   - Make a copy to your Google Drive
   - Configure the two sheets as described below

**Sheet 1: "channels"**
- Column A: `category` (e.g., "AI Tools", "Marketing")
- Column B: `channels` (comma-separated YouTube channel URLs)
- Column C: `video filter criteria` (describe what makes videos relevant)

**Sheet 2: "videos"**
- Columns: `id`, `title`, `video url`, `date`, `channel`, `category`, `topic`, `summary`, `short sumary`, `transcript`, `relevance score`, `relevance reason`

### Step 2: Configure n8n Workflow

1. Import the workflow JSON into n8n
2. **Google Sheets Authentication**:
   - Connect your Google account in both "Get row(s) in sheet" nodes
   - Update the document ID to match your spreadsheet
3. **Gemini API Key**:
   - In the "set channel" node, replace the placeholder API key with your own Gemini API key
   - Get your key from: https://makersuite.google.com/app/apikey

### Step 3: Adjust Settings (Optional)

- **Video lookback period**: Edit line 6 in "Videos Posted in Last X days" node (default: 14 days)
- **Videos per channel**: Modify the "Limit" node (default: 4 videos)
- **Schedule**: Change the "Schedule Trigger5" node timing as needed
- **Wait times**: Adjust wait nodes to respect API rate limits

### Step 4: Test & Activate

1. Add a test channel URL to your "channels" sheet
2. Run the workflow manually to verify it works
3. Activate the workflow to run on schedule

## Notes

- The workflow includes rate limiting (wait nodes) to avoid API throttling
- Videos are checked for duplicates before processing
- Failed transcriptions continue to the next video without stopping the workflow
- Results are automatically saved to Google Sheets after each video processes

## 📊 Basic Information

- **Workflow ID:** 9268
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 174
- **Downloads:** 17
- **Created:** 2025/10/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9268)

## 👤 Author

- **Name:** Muhammad Asadullah
- **Username:** @asadtech

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **if** (×5)
- **splitInBatches** (×2)
- **set** (×6)
- **httpRequest** (×2)
- **googleSheets** (×3)
- **code** (×2)
- **stickyNote** (×5)
- **rssFeedRead** 
- **scheduleTrigger** 
- **wait** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
