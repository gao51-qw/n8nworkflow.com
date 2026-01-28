# One-way sync between Telegram, Notion, Google Drive, and Google Sheets

> # One-way sync between Telegram, Notion, Google Drive, and Google Sheets

## Who is this for?

This workflow is perfect for productivity-focused teams, remote workers, virtual assistants, and digital knowledge managers who receive documents, images, or notes through Telegram and want to automatically organize and store them in Notion, Google Drive, and Google Sheets—without any manual work.

## What problem is this workflow solving?

Managing Telegram messages and media manually across different tools like Notion, Drive, and Sheets can be tedious. This workflow automates the classification and storage of incoming Telegram content, whether it’s a text note, an image, or a document. It saves time, reduces human error, and ensures that media is stored in the right place with metadata tracking.

## What this workflow does

- **Triggers on a new Telegram message** using the Telegram Trigger node.
- **Classifies the message type** using a Switch node:
  - Text messages are appended to a Notion block.
  - Images are converted to base64, uploaded to imgbb, and then added to Notion as toggle-image blocks.
  - Documents are downloaded, uploaded to Google Drive, and the metadata is logged in Google Sheets.
- **Sends a completion confirmation** back to the original Telegram chat.

## Setup

1. **Telegram Bot**: Set up a bot and get the API token.
2. **Notion Integration**:
   - Share access to your target Notion page/block.
   - Use the Notion API credentials and block ID where content should be appended.
3. **Google Drive & Sheets**:
   - Connect the relevant accounts.
   - Select the destination folder and spreadsheet.
4. **imgbb API**: Obtain a free API key from [imgbb](https://api.imgbb.com/).

Replace placeholder credential IDs and asset URLs as needed in the imported workflow.

## How to customize this workflow to your needs

- **Change Storage Locations**:
  - Update the Notion block ID or Google Drive folder ID.
  - Switch Google Sheet to log in a different file or sheet.
- **Add More Filters**:
  - Use additional Switch rules to handle other Telegram message types (like videos or voice messages).
- **Modify Response Message**:
  - Personalize the Telegram confirmation text based on the file type or sender.
- **Use a different image hosting service** if you don’t want to use imgbb.


## 📊 Basic Information

- **Workflow ID:** 4404
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 9553
- **Downloads:** 955
- **Created:** 2025/5/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4404)

## 👤 Author

- **Name:** Lakshit Ukani
- **Username:** @lakshit1996

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **stickyNote** (×5)
- **telegramTrigger** 
- **switch** 
- **telegram** (×3)
- **extractFromFile** 
- **httpRequest** (×2)
- **notion** 
- **googleDrive** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
