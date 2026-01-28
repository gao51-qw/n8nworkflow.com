## 🚀 Automatically enhance and expand Telegram images with AI

This n8n workflow turns your Telegram bot into a powerful AI photo enhancer!  
Whether users send a **photo or a link**, it processes the image by:

1. 📥 Receiving the input (photo or link)
2. 🧠 Upscaling quality using **Replicate's CodeFormer**
3. 📐 Analyzing image dimensions and calculating paddings to fit the 3:2 ratio
4. 🖼️ Expanding the image contextually with **LightX AI**
5. ☁️ Uploading the result to S3
6. 🔗 Sending back a public URL to the user in Telegram

---

## 👥 Who is it for?
- Telegram bot creators
- Content creators & photographers
- SMM pros looking to quickly polish user images
- AI enthusiasts who want plug-and-play image workflows

---

## 🛠️ Setup Requirements
- A Telegram bot (via @BotFather)
- AWS S3 Bucket (public)
- Replicate API key
- LightX API key

---

## 🔧 How to customize
- Add custom prompts or ratio in JavaScript node
- Connect to other AI tools for filters or style transfer
- Switch storage destination (e.g. Google Drive or Dropbox)

---

## 💡 Tips
- Works great in photo-related communities
- Can be used for virtual try-ons, image recovery or thumbnail generation

---

## 🌍 Languages
The main sticky note can be localized — feel free to swap it for your audience!

---