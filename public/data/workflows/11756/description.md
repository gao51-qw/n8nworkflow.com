Takes a product image from Google Sheets, adds frozen effect with Gemini, generates ASMR video with Veo3, writes captions with GPT-4o, and posts to 4 platforms automatically.

## How it works

1. Schedule trigger picks first unprocessed row from Google Sheet
2. Downloads product image and sends to Gemini for frozen/ice effect
3. Uploads frozen image to ImgBB (Veo3 needs public URL)
4. Veo3 generates 10-12s ASMR video with ice cracking sounds
5. GPT-4o writes platform-specific titles and captions
6. Uploads simultaneously to YouTube, TikTok, Instagram, Pinterest
7. Updates sheet status and sends Telegram notification

## Setup

Replace these placeholders in the workflow:
- YOUR_GOOGLE_AI_API_KEY (Gemini)
- YOUR_KIE_AI_API_KEY (Veo3)
- YOUR_IMGBB_API_KEY (free)
- YOUR_UPLOAD_POST_API_KEY
- YOUR_GOOGLE_SHEET_ID
- YOUR_PINTEREST_BOARD_ID
- YOUR_PINTEREST_USERNAME
- YOUR_TIKTOK_USERNAME
- YOUR_INSTAGRAM_USERNAME
- YOUR_TELEGRAM_CHAT_ID

## Google Sheet format

| topic | image_url | status |
|-------|-----------|--------|
| Dior Sauvage — Dior | https://example.com/img.jpg | |

Leave status empty. Workflow sets it to `processing` then `uploaded`.

## Requirements

- Gemini API key - [Google AI Studio](https://makersuite.google.com/app/apikey)
- Kie.ai account - [kie.ai](https://kie.ai)
- ImgBB API key - [api.imgbb.com](https://api.imgbb.com/)
- OpenAI API key
- upload-post.com account with connected TikTok/IG/Pinterest
- YouTube channel with OAuth