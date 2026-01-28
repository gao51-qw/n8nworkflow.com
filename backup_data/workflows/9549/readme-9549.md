# Convert Fathom meeting transcripts to formatted Google Docs with AI summaries

> *Transcript → AI Analysis → Formatted Doc*

This workflow automatically converts Fathom meeting transcripts into beautifully formatted Google Docs with AI-generated summaries, key points, decisions, and action items.

  ### Good to know
  - Works fully with Fathom free account
  - Webhook responds immediately to prevent Fathom timeout and duplicate triggers
  - Validates transcript quality (3+ conversation turns) before AI processing to save costs
  - Uses Google Gemini API (generous free tier and rate limits, typically enough to avoid paying for API requests, but check latest pricing at [Google AI Pricing](https://ai.google.dev/pricing))
  - Creates temporary HTML file that's auto-deleted after conversion

  ## Who's it for
  Individuals or teams using Fathom for meetings who want more control and flexibility with their AI meeting analysis and storage independently of Fathom, as well as automatic, formatted documentation without manual note-taking. Perfect for recurring syncs, client meetings, or interview debriefs.

  ## How it works
  1. Fathom webhook triggers when meeting ends and sends transcript data
  2. Validates transcript has meaningful conversation (3+ turns)
  3. Google Gemini AI analyzes transcript and generates structured summary (key points, decisions, actions, next steps)
  4. Creates formatted HTML with proper styling
  5. Uploads to Google Drive and converts to native Google Doc
  6. Reduces page margins for readability and deletes temporary HTML file

  ## Requirements
  - Fathom account with API webhook access (available on free tier)
  - Google Drive account (OAuth2)
  - Google Docs account (OAuth2)
  - Google Gemini API key ([Get free key here](https://makersuite.google.com/app/apikey))

  ## How to set up
  1. Add credentials: Google Drive OAuth2, Google Docs OAuth2, Google Gemini API
  2. Copy the webhook URL from the Get Fathom Meeting webhook node (Test URL first, change to Production URL when ready)
  3. In Fathom: Settings → API Access → Add → Add webhook URL and select all events including "Transcript"
  4. Test with a short meeting, verify Google Doc appears in Drive
  5. Activate workflow

  ## Customizing this workflow
  - **Change save location**: Edit "Upload File as HTML" node → update "Parent Folder"
  - **Modify AI output**: Edit "AI Meeting Analysis" node → customize the prompt to add/remove sections (e.g., risks, follow-ups, sentiment, etc)
  - **Adjust document margins**: Edit "Reduce Page Margins" node → change margin pixel values
  - **Add notifications**: E.g. add Slack/Email node after "Convert to Google Doc" to notify team when summary is ready

  ## **Quick Troubleshooting**
  * **"Transcript Present?" fails**: Fathom must send `transcript_merged` with 3+ conversation turns (i.e. only send to Gemini for analysis if there's a genuine transcript)
  * **HTML as plain text**: Check "Convert to Google Doc" uses POST to `/copy` endpoint
  * **401/403 errors**: Re-authorize Google credentials
  * **Inadequate meeting notes**: Edit prompts in "AI Meeting Analysis" node
## Sample File and Storage Output
- [Google Doc meeting notes - sample](https://docs.google.com/document/d/1tCC90dIpgb8NtuOJ_jSTCPn4MxORB-XcvwdeljYzC9w/edit?usp=drive_link)
- Google Drive sample folder output:
![](https://i.postimg.cc/MH8Vtny4/Sample-Google-Drive-Output.png)

## 📊 Basic Information

- **Workflow ID:** 9549
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 780
- **Downloads:** 78
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9549)

## 👤 Author

- **Name:** Dean Pike
- **Username:** @deanjp

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** (×2)
- **set** 
- **httpRequest** (×2)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **if** 
- **stickyNote** (×6)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
