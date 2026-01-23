# Automatically rename Gmail attachments with GPT-4o and save to Google Drive

> ## Automatically Rename Gmail Attachments with AI and Save to Google Drive

### Who is this for?

This workflow is perfect for anyone who regularly receives important email attachments like reports, invoices, or PDFs and wants them:

- Renamed using clean AI generated filenames  
- Automatically saved to a specific Google Drive folder  
- Neatly organized without manual work  

It is ideal for freelancers, business owners, accountants, and productivity enthusiasts.

### What does it solve?

Manually naming and organizing email attachments takes time and often leads to messy files.

This workflow solves that by:

- Automatically downloading unread Gmail attachments  
- Using AI to understand the content and generate clean, consistent filenames  
- Saving the renamed files to your chosen Google Drive folder  
- Marking emails as read after processing  

No more confusing filenames like "Attachment 1.pdf".

### How it works

1. The workflow runs on a scheduled interval (every hour by default)  
2. It checks Gmail for any unread emails with attachments.  
3. For each email:
   - Downloads attachments  
   - Extracts and reads PDF content  
   - Uses AI to generate a new filename in the format: `YYYYMMDD-keyword-summary.pdf`  
4. Saves the file to Google Drive with the new name  
5. Marks the email as read to avoid duplicates  

### How to set up?

1. Connect these accounts in your n8n credentials:
   - Gmail (OAuth2)  
   - Google Drive (OAuth2)  
   - OpenAI (API key)  

2. Update the folder URL in the Google Drive node to your target folder  
3. Optional: adjust the trigger interval if you want it to run more or less often  

### How to customize this workflow to your needs

- Change the AI prompt to create different naming rules, such as including sender or topic  
- Dynamically set Drive folders based on email sender or subject  


## 📊 Basic Information

- **Workflow ID:** 7585
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1098
- **Downloads:** 109
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7585)

## 👤 Author

- **Name:** Matt Chong | n8n Creator
- **Username:** @mattxchong

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDrive** 
- **gmail** (×3)
- **merge** 
- **set** 
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
