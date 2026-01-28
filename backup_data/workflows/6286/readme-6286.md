# Extract organizations & summarize documents with Foxit and Diffbot

> ## How It Works

This N8N template demonstrates using Foxit's Extraction API to get information from an incoming document and then using Diffbot's APIs to turn the text into a list of organizations mentioned in the document and create a summary.

## How it works

* Listen for a new file added to a Google Drive folder. When executed, the bits are downloaded.
* Upload the bits to Foxit.
* Call the [Extract API](https://docs.developer-api.foxit.com/#f7aaf21d-f519-4c20-90b9-17d0c1763476) to get the text contents of the document.
* Poll the API to see if it's done, and when it is, grab the text.
* Send the text to [Diffbot API](https://docs.diffbot.com/reference/introduction-to-natural-language-api) to get a list of entities mentioned in the doc as well as the summary.
* Use a code step to filter the entities returned from Diffbot to ones that are organizations, as well as filtering to a high confidence score.
* Use another code step to make an HTML string from the previous data.
* Email it using the GMail node.

## Requirements

* A Google account for Google Drive and GMail
* Foxit developer account (https://developer-api.foxit.com)
* Diffbot developer account (https://app.diffbot.com/get-started)

## Next Steps

This workflow assumes PDF input, but Foxit has APIs to convert Office docs to PDF and that flow could be added before the Extract API is called. 

Diffbot returns an incredible set of information and more could be used in the email.

Instead of emailing, you could sort documents by organizations into new folders.

## 📊 Basic Information

- **Workflow ID:** 6286
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 225
- **Downloads:** 22
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6286)

## 👤 Author

- **Name:** Raymond Camden
- **Username:** @raymondcamden

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **httpRequest** (×5)
- **if** 
- **wait** 
- **code** (×2)
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
