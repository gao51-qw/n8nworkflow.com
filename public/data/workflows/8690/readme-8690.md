# Automate image editing & Instagram posting with Nano Banana & GPT-5 captions

> ##  **Auto-Edit Google Drive Images with Nano Banana + Social Auto-Post**

Drop an image into Google Drive and let this workflow handle the rest: it auto-cleans and enhances the image with Google’s Nano Banana (via Wavespeed API), generates a catchy caption with GPT-5, and publishes directly to your connected social accounts using Postiz.

**👉 Watch step-by-step video tutorials of workflows like these on ****https://www.youtube.com/watch?v=4wk6PYgBtBM&list=PL05w1TE8X3bb1H9lXBqUy98zmTrrPP-s1**

## What it does

- Triggers from Google Drive when a new image is uploaded
- Sends the image to Nano Banana to declutter, brighten, and make it real-estate/photo-listing ready
- Polls for the edited result until it’s complete
- Logs the edited image URL into Google Sheets for tracking
- Downloads and uploads the edited image into Postiz media library
- Generates an engaging caption with GPT-5 Caption Agent
- Publishes instantly to Instagram (can be extended to TikTok, LinkedIn, etc.)

## Perfect for

- Real-estate agents posting property shots
- Ecommerce sellers updating product catalogs
- Social media marketers needing fast, polished posts
- Apps & Services

## Tools Used 
- Google Drive (Trigger)
- Wavespeed API – Google Nano Banana (Image editing)
- Google Sheets (Logging)
- Postiz (Social scheduling/posting)
- OpenAI GPT-5 (Caption agent)

## Setup

- Connect your Google Drive and select the upload folder.

- Add your Wavespeed API key for Nano Banana.

- Connect Google Sheets for logging.

- Add Postiz API credentials and set the integration ID for your channel(s).

- Enter your OpenAI API key for GPT-5 captioning.

## Customization

- Adjust the edit prompt for different use cases (e.g., product cleanup, lighting tweaks).

- Change Postiz post type to scheduled instead of “now.”

- Add more Postiz posts for multi-platform publishing.

- Insert an approval loop (Slack/Email) before posting.

## Logs

- Edited Image Log (Sheets): stores final image URL + timestamp.

- Publishing Log (Sheets): tracks workflow status per asset.

## Notes

- Sticky notes in the template explain each major block.

- Replace sample IDs with your own (folder IDs, sheet IDs, Postiz integration).

- Keep all API keys in n8n Credentials, not in node parameters.

## 📊 Basic Information

- **Workflow ID:** 8690
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1896
- **Downloads:** 189
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8690)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **httpRequest** (×5)
- **wait** (×2)
- **googleSheets** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
