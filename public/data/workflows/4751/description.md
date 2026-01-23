
**Automated** n8n workflow: Receives videos via form, dubs/translates them to the selected languages, and—upon completion—uploads them to multiple social media channels and cloud drives, including Box, Dropbox, and YouTube, Telegram, Postiz (Facebook, Instagram, Tiktok, Reddit etc.)

### Workflows
----------
 1. Via n8n form select files to dub for desired languages.
 2. Listen webhook and whenever dubbing finishes upload to desired platforms

### Used Stacks
-------------
 - DubLab App (ApiKey, Webhook Setup Required)
#### Optional (Upload)
 - Telegram (Token Required)
 - Box (Oauth2 Required)
 - Dropbox (Oauth2 Required)
 - Youtube (Oauth2 Required)
 - Postiz (ApiKey Required)