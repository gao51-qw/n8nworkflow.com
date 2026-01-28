# Scrape TikTok profile & transcript with Dumpling AI and save to Google Sheets

> 

### Who is this for?

This workflow is built for marketers, researchers, and content analysts who need to monitor TikTok content, analyze user data, or track trends across influencers. It's useful for agencies that manage creators or want to keep an organized record of profile performance and video content for reporting or outreach.

---

### What problem is this workflow solving?

Instead of manually checking TikTok profiles or watching videos to understand performance or content, this workflow automates everything. It extracts both profile statistics and full video transcripts, then logs them in Google Sheets for easy access, filtering, and segmentation.

---

### What this workflow does

The automation watches for new TikTok video URLs added to a Google Sheet. When a new row is detected:

1. It extracts the username from the URL.
2. Sends the username to Dumpling AI to get full profile data (followers, likes, videos).
3. Sends the video URL to Dumpling AI to extract the full transcript.
4. Appends all this information back into the same sheet.

Everything happens automatically after a new URL is added to the sheet.

---

### Setup

1. **Google Sheets Trigger**  
   - Connect your Google account and select the spreadsheet where TikTok links will be added.  
   - The workflow will trigger on each new row.
   - Example sheet column: `USERNAME Video`

2. **Extract Username**  
   - This Set node uses RegEx to extract the username (handle) from the TikTok video URL.
   - No need to change anything unless TikTok URL formatting changes.

3. **Dumpling AI Profile Scraper**  
   - Go to [Dumpling AI](https://app.dumplingai.com/)  
   - Sign in and retrieve your API key  
   - Create an agent using the `get-tiktok-profile` endpoint  
   - Paste your API key into the `httpHeaderAuth` field in n8n

4. **Dumpling AI Transcript Scraper**  
   - Also uses Dumpling AI  
   - Make sure the endpoint `get-tiktok-transcript` is enabled in your Dumpling account  
   - Connect using the same API key

5. **Save to Google Sheets**  
   - The final node appends data back to your original Google Sheet  
   - Required columns: `USERNAME Video`, `Username`, `Follower count`, `Following Count`, `heart count`, `Video Count`, `Transcript`

---

### How to customize this workflow to your needs

- Add a filter node to only save profiles with a minimum follower count  
- Add sentiment analysis for the transcript using OpenAI  
- Connect Airtable or Notion instead of Google Sheets  
- Use GPT to summarize or classify transcripts for research

---

### ⚠️ Notes

- Requires a Dumpling AI account and API key  
- Make sure Google Sheets API is connected and has the correct permissions  
- TikTok usernames must start with `@` for RegEx to work

---


## 📊 Basic Information

- **Workflow ID:** 4328
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2372
- **Downloads:** 237
- **Created:** 2025/5/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4328)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **set** 
- **httpRequest** (×2)
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
