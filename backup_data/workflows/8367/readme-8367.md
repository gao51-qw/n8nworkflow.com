# Extract business card data from Slack to Google Sheets with GPT-4o OCR

> You can turn messy business card photos into organized contact data automatically.
With this workflow, you can upload a business card photo to Slack and instantly capture the contact details into Google Sheets using OCR. No more manual typing—each new card is scanned, structured, saved, and confirmed back in Slack, making contact management fast and effortless.

## How it works
1. Slack Trigger – The workflow starts when a business card photo is uploaded to Slack.
2. HTTP Request – The uploaded image is fetched from Slack.
3. AI/OCR Parsing – The card image is analyzed by an AI model and structured into contact fields (name, company, email, phone, etc.).
4. Transform Data – The extracted data is cleaned and mapped into the correct format.
5. Google Sheets – A new row is appended to your designated Google Sheet, creating an organized contact database.
6. Slack Notification – Finally, a confirmation message is sent back to Slack to let you know the contact has been successfully saved.

## How to use
1. Copy the template into your n8n instance.
2. Connect your Slack account to capture uploaded images.
3. Set up your Google Sheets connection and choose the spreadsheet where contacts should be stored.
4. Adjust the Contact Information extraction node if you want to capture custom fields (e.g., job title, address).
5. Deploy and test: upload a business card image in Slack and confirm it’s added to Google Sheets automatically.

## Requirements
1. n8n running (cloud).
2. A Slack account with access to the channel where photos will be uploaded.
3. A Google Sheets account with a target sheet prepared for storing contacts.
4. AI/OCR capability enabled in your n8n (e.g., OpenAI, Google Vision, or another OCR/LLM provider).
5. Basic access rights in both Slack and Google Sheets to read and write data.

## 📊 Basic Information

- **Workflow ID:** 8367
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 297
- **Downloads:** 29
- **Created:** 2025/9/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8367)

## 👤 Author

- **Name:** Toshiki Hirao
- **Username:** @hirao

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **slackTrigger** 
- **googleSheets** 
- **splitOut** 
- **slack** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
