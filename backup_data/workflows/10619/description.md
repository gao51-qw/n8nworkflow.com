# How it works
This workflow turns a Google Drive folder into a fully automated YouTube publishing pipeline. Whenever a new video file is added to the folder, the workflow generates all YouTube metadata using AI, uploads the video to your YouTube channel, deletes the original file from Drive, sends a Telegram confirmation, and can optionally post to Instagram and Facebook using permanent system tokens.
## High-level flow:
Detects new video uploads in a specific Google Drive folder.

Downloads the file and uses AI to generate:
• a polished first-person YouTube description
• an SEO-optimized YouTube title
• high-ranking YouTube tags

Uploads the video to YouTube with the generated metadata.

Deletes the original Drive file after upload.

Sends a Telegram notification with video details.

(Optional) Posts to Instagram & Facebook using permanent system user tokens.

## Set up steps
Setup usually takes a few minutes.

Add Google Drive OAuth2 credentials for the trigger and download/delete nodes.

Add your OpenAI (or Gemini) API credentials for title/description/tag generation.

Add YouTube OAuth2 credentials in the YouTube Upload node.

Add Facebook/Instagram Graph API credentials if enabling cross-posting.

Replace placeholder IDs (Drive folder ID, Page ID, IG media endpoint).

Review sticky notes in the workflow—they contain setup guidance and token info.

Activate the Google Drive trigger to start automated uploads.