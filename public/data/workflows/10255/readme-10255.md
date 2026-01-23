# Transcribe & summarize GoHighLevel call recordings

> This n8n template automatically transcribes GoHighLevel (GHL) call recordings and creates an AI-generated summary that is added as a note directly to the related contact in your GHL CRM.

It’s designed for real estate investors, agencies, and sales teams that handle a large volume of client calls and want to keep detailed, searchable notes without spending hours on manual transcription.

---

## Who’s it for
* Sales and acquisitions teams that want instant call notes in their CRM  
* Real estate wholesalers or agencies using GoHighLevel for deal flow  
* Support and QA teams that need summarized transcripts for review  
* Any business owner who wants to automatically document client conversations  

---

## How it works
1. A **HighLevel automation workflow** triggers when a call is marked “Completed” and automatically sends a webhook to n8n.   
2. The n8n workflow receives this webhook and waits briefly to ensure the call recording is ready.    
3. It retrieves the **conversation and message IDs** from the webhook payload.  
4. The call recording is fetched from GHL’s API.  
5. An **AI transcription node** converts the audio to text.  
6. A **summarization node** condenses the transcript into bullet points or a concise paragraph.  
7. A **Code node** formats the AI output into proper JSON for GHL’s “Create Note” endpoint.  
8. Finally, an **HTTP Request node** posts the summary to the contact’s record in GHL.  

---

## How to set up
1. Add your **GoHighLevel OAuth credential** and connect your agency account.  
2. Add your **AI credential** (e.g., OpenAI, Anthropic, or Gemini).  
3. Replace the sample webhook URL with your n8n endpoint.   
5. Test with a recent call and confirm the summary appears in the contact timeline.  

---

## Requirements
* GoHighLevel account with API and OAuth access    
* AI service for transcription and summarization (e.g., OpenAI Whisper + GPT)  

---

## Customizing this workflow
You can tailor this automation for your specific team or workflow:  
* Add sentiment analysis or keyword extraction to the summary.  
* Change the AI prompt to focus on “action items,” “objections,” or “next steps.”  
* Send summaries to Slack, Notion, or Google Sheets for reporting.  
* Trigger follow-up tasks automatically in your CRM based on keywords.  

---

**Good to know**
* AI transcription and summarization costs vary by provider — check your LLM’s pricing.  
* GoHighLevel’s recording availability may take up to 1 minute after the call ends; adjust the delay accordingly.  
* For OAuth setup help, refer to GHL’s [OAuth documentation](https://marketplace.gohighlevel.com/docs/Authorization/OAuth2.0/index.html).  

---

Happy automating! ⚙️


## 📊 Basic Information

- **Workflow ID:** 10255
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 366
- **Downloads:** 36
- **Created:** 2025/10/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10255)

## 👤 Author

- **Name:** Belen
- **Username:** @belenmejia

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×6)
- **httpRequest** (×4)
- **set** 
- **webhook** 
- **code** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
