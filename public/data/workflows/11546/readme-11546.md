# Telegram bot: extract & store TikTok and LinkedIn data to Google Sheets with Dumpling AI

> ### Who's it for
This workflow is perfect for marketers, social media managers, recruiters, sales teams, and researchers who need to collect and organize public profile data from TikTok and LinkedIn. Whether you're building influencer databases, enriching CRM data, conducting competitor research, or gathering prospect information, this workflow automates the entire data extraction and storage process.

### What it does
This AI-powered Telegram bot automatically scrapes public profile data from TikTok and LinkedIn, then saves it directly to Google Sheets. Simply send a TikTok username or LinkedIn profile URL via text or voice message, and the workflow handles everything:

**For TikTok profiles:**
- Username and verification status
- Follower, following, and friend counts
- Total hearts (likes) and video count
- Bio link and secure user ID

**For LinkedIn profiles:**
- Full name and profile picture
- Location and follower count
- Bio/about section
- Recent posts activity link

All data is automatically organized into separate Google Sheets tabs for easy reference and analysis. You receive an email notification when extraction is complete.

### How it works
The workflow uses an AI Agent as an intelligent router that determines which platform to scrape based on your input. Here's the flow:

1. **Input Processing:** Send a message via Telegram (text or voice)
2. **Voice Transcription:** If you send a voice note, OpenAI Whisper transcribes it to text
3. **AI Routing:** The agent identifies whether it's TikTok or LinkedIn
4. **Profile Scraping:** Calls Dumpling AI's specialized scraper for that platform
5. **Data Extraction:** Parses the profile metrics and details
6. **Database Storage:** Saves all data to the appropriate Google Sheets tab
7. **Confirmation:** Sends an email notification when complete

The AI agent ensures proper tool pairing - it always scrapes first, then saves, preventing partial data or errors.

### Setup Requirements

**Accounts & Credentials Needed:**
- Telegram Bot Token (create via @BotFather)
- OpenAI API Key (for voice transcription and AI routing)
- Dumpling AI API Key (for profile scraping)
- Google Sheets OAuth2 credentials
- Gmail OAuth2 credentials (for notifications)

**Google Sheets Structure:**
Create a spreadsheet with two tabs:

**TikTok Tab - Columns:**
- Username
- verified
- secUid
- bioLink
- followerCount
- followingCount
- heartCount
- videoCount
- friendCount

**LinkedIn Tab - Columns:**
- name
- image
- location
- followers
- about
- recentPosts link

### How to set up

**Step 1: Create Telegram Bot**
1. Open Telegram and message @BotFather
2. Use `/newbot` command and follow prompts
3. Save your bot token for later

**Step 2: Configure Credentials**
1. Add Telegram bot token to "Receive Telegram Message" node
2. Add OpenAI API key to "OpenAI Chat Model" and "Transcribe Audio" nodes
3. Add Dumpling AI credentials as HTTP Header Auth
4. Connect Google Sheets OAuth2
5. Connect Gmail OAuth2

**Step 3: Set Up Google Sheets**
1. Create a new Google Spreadsheet
2. Create two tabs: "TikTok" and "LinkedIn"
3. Add column headers as specified above
4. Copy the spreadsheet ID from the URL

**Step 4: Update Workflow**
1. Replace Google Sheets document ID in both database saver nodes
2. Update email address in "Send Completion Email" node
3. Remove personal credential names ("Nneka")

**Step 5: Test the Workflow**
1. Activate the workflow
2. Message your bot with: "Scrape TikTok profile: @charlidamelio"
3. Or try: "Extract this LinkedIn: https://www.linkedin.com/in/example"
4. Check your Google Sheets for the data

### How to customize

**Add More Social Platforms:**
Create new scraper/saver tool pairs for Instagram, Twitter/X, or YouTube by:
- Adding new HTTP Request Tool nodes for scraping
- Adding corresponding Google Sheets Tool nodes
- Updating the AI Agent's system prompt with new protocols

**Enhance Voice Input:**
- Add language detection for multilingual voice notes
- Implement speaker identification for team usage
- Add voice response capability

**Advanced Data Enrichment:**
- Chain multiple profile lookups for followers
- Add sentiment analysis on bios and recent posts
- Implement automatic categorization/tagging

**Notification Improvements:**
- Send results directly to Telegram instead of email
- Add Slack notifications for team collaboration
- Create detailed extraction reports with statistics

**Batch Processing:**
- Modify to accept CSV files with multiple profiles
- Add rate limiting to avoid API throttling
- Implement queue system for large-scale scraping



## 📊 Basic Information

- **Workflow ID:** 11546
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 99
- **Downloads:** 9
- **Created:** 2025/12/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11546)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequestTool** (×2)
- **googleSheetsTool** (×2)
- **telegramTrigger** 
- **if** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
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
