# Post long-form threads to X / Twitter, Threads, and Bluesky

> ## Description
Fully automated pipeline where you send an email to yourself with a rough idea (subject contains “thread”), n8n’s Gmail trigger picks it up, OpenAI ChatGPT rewrites/apply a viral-thread template, and Blotato posts the long-form thread to X/Twitter, Bluesky, and Meta Threads (optionally schedule or include images/videos). Template is easily extensible to other social platforms.

## Who Is This For?
Digital creators, content marketers, social media managers, agencies, entrepreneurs, and influencers who want fast, automated long-form thread posting.

## 📄 Documentation
[Full Step-by-Step Tutorial](https://help.blotato.com/api/templates/2-email-to-long-form-thread)

## How It Works

**1. Trigger: Gmail**
- Connect your Gmail account.
- n8n monitors emails sent from you and filters for subjects containing the word “thread”.

**2. AI Thread Writer: OpenAI ChatGPT**
- Connect your OpenAI account.
- Prompt ChatGPT to clean up your draft and format a long-form viral thread.

**3. Publish to Social Media via Blotato**
- Connect your Blotato account and choose social accounts (X/Twitter, Threads, Bluesky).
- Schedule or post immediately.
- Supports optional image/video URLs via a `mediaUrls` array (publicly accessible URLs).

Example email to trigger the workflow:

**Email Subject:** thread
**Email Body:** I'm obsessed with voice AI apps. Super Whisper is my current favorite because it runs locally and keeps my voice data private. I talk to it instead of typing. Way faster.

## Setup & Required Accounts
- Gmail account (used as trigger)
  - n8n Gmail OAuth doc: https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service
- OpenAI Platform account (access to ChatGPT)
- Blotato account: https://blotato.com
  - Generate Blotato API Key: Settings &gt; API &gt; Generate API Key (paid feature only)
  - Sign in to Blotato and create an API Key (required for posting)
- n8n:
  - Ensure "Verified Community Nodes" enabled in your n8n Admin Panel
  - Install the "Blotato" community node and create Blotato credentials

## Optional: Media & Style Tweaks
- Attach images/videos: insert publicly accessible URLs into the `mediaUrls` array (advanced).
- To emulate a specific tone/structure, provide ChatGPT examples of your favorite viral threads or replace the example viral-thread prompt with your preferred example.
- Voice-to-text tip: record ideas (e.g., Superwhispr) and send the transcript by email — ChatGPT will clean it up.

## Tips & Tricks
- During testing, use “Scheduled Time” in Blotato instead of immediate posting to preview before going live.
- Start with a single social platform while testing.
- If your script is long or includes media, processing may take longer.
- Many users prefer speaking their ideas (voice notes) then letting AI edit — faster than typing.

## Troubleshooting
Check your [Blotato API Dashboard](https://my.blotato.com/api-dashboard) to inspect each request, response, and error. Confirm API key validity, n8n node credentials, and that emails sent have subject containing “thread”.

## Need Help?
In the Blotato web app, click the orange support button in the bottom right to access Blotato support.

## 📊 Basic Information

- **Workflow ID:** 8538
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 264
- **Downloads:** 26
- **Created:** 2025/9/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8538)

## 👤 Author

- **Name:** Sabrina Ramonov 🍄
- **Username:** @sabrina-ramonov

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **gmail** 
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@blotato/n8n-nodes-blotato.blotato** (×3)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
