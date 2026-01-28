##  **Auto-Edit Google Drive Images with Nano Banana + Social Auto-Post**

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