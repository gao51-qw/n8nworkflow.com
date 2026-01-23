How it works
This workflow lets users generate AI images directly from Telegram messages using:

Google Gemini API – to convert text to detailed, high-quality image prompts.

Pollinations API – to generate free AI images from the prompts.

Telegram Bot – to interact with users and return generated images instantly.

It’s fully automated using n8n — from text message to stunning image, all in one flow.
Perfect for creators, content marketers, or anyone wanting quick visuals on the go.

Set up steps
🧩 Estimated setup time: ~10–15 minutes

Create a Telegram Bot via @BotFather, copy your token, and set up the Telegram Trigger node in n8n with your credentials.

Set up Google Gemini API via Google AI Studio or Cloud Console.

Make sure your API key is added in the credentials section of the Gemini node.

Customize prompt structure or image size in the Fields - Set Values or Prompt Agent node.

(Optional) Enable Save to Disk if you want to keep a local copy of every image.

Deploy and run the workflow — done 🎉

🛠️ All technical details and logic are fully documented inside the workflow using sticky notes.
⚠️ Requirements
n8n (Self-hosted or Cloud)

Telegram Bot Token

Google Gemini API key (with billing enabled — includes some free usage)

No key needed for Pollinations API — it's 100% free 🆓