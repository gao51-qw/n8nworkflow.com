# Daily Bible verse & reflection email with bible.api, Google Gemini, and Gmail

> ## What this does
This automation automatically sends an email with a random Bible verse to a specified recipient every morning, as well as some reflections on the meaning of that verse. Start your day off grounded and faithful.

## Requirements
- n8n
- Gmail account with OAuth2 credentials enabled
- Google Gemini(PaLM) API credentials enabled

## How this works
- Runs every morning at 7:00a.
- Reads the config value `send_to_email`
- Calls [bible.api](https://bible-api.com/) for a random verse
- Uses Gemini to analyze the random verse and create the body text for the email
- Sends an Email to the recipient specified by `send_to_email`
  - Subject reads "Daily Bible Verse: Inspiration for Today (`book #:#`)"

## How to set up
1. In the "Config - recipient" node, in the `send_to_email` field, replace "example@example.com" with the desired recipient email
2. Add your Google Gemini(PaLM) API credentials
3. Add your Gmail OAuth2 credentials
4. (optional) In the "Schedule trigger" node, keep the default schedule at 7:00a or change the hour as desired
5. Test the flow by running it to verify the subject and body content.

## How to customize the workflow
- Change the send time in the Schedule Trigger node
- Change the Bible translation, or specify Old vs. New Testament in the Bible API node
- Adjust the prompt in the Gemini node to change the email content
- Modify the subject line in the Gmail node



## 📊 Basic Information

- **Workflow ID:** 8663
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 192
- **Downloads:** 19
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8663)

## 👤 Author

- **Name:** Hattie Elbahri
- **Username:** @hattieelbahri

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
