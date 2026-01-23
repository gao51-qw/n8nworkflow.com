## 🧾 What this workflow does

This automation turns a **Telegram voice or text message** into a high-quality LinkedIn post using OpenAI’s Whisper, Dumpling AI and GPT-4, and then repurposes that same message into a content idea with visual inspiration using Dumpling AI. All outputs are saved to Airtable for review, approval, and scheduling.

---

## 👤 Who is this for

- Founders or creators sharing ideas while walking or multitasking  
- Content teams turning voice memos into carousel content  
- Personal brands posting on LinkedIn with minimal manual work  
- Virtual assistants or SMMs handling voice-driven content tasks  

---

## ⚙️ How to set up

### ✅ Requirements

You’ll need active accounts for:
- Telegram Bot (via n8n’s Telegram Trigger node)
- OpenAI (for Whisper and GPT-4)
- Dumpling AI (to search Google and create Image)
- Airtable (to log your posts)

In Airtable, create a table with the following fields:
- `Ideas` (Single line text)
- `Context` (Long text)
- `Image URL` (URL)

---

### 🔧 Setup steps

1. **Set up your Telegram bot**
   - Use BotFather to create a bot and get your token
   - Add the bot to a private group or channel

2. **Connect all credentials in n8n**
   - Telegram Trigger (Bot Token)
   - OpenAI (for Whisper + GPT-4)
   - Dumpling AI (HTTP Auth)
   - Airtable (OAuth or Personal Token)

3. **Update node parameters**
   - In the Telegram Trigger node, specify your bot and listening chat
   - In the HTTP node for Dumpling AI, add your API key via header
   - In Airtable nodes, map to your base and table correctly

4. **Optional prompt customization**
   - In the GPT-4 node, you can update the prompt for tone, formatting, or CTA style
5. **Optional**: Adjust the Dumpling AI prompt to suit your niche (e.g., health, tech, finance).
---

## 🧠 How it works

1. The Telegram bot receives a voice message.
2. Whisper transcribes the voice into clean text.
3. GPT-4 formats the text into a polished LinkedIn post.
4. Dumpling AI:
   - Generates a short-form **content idea** from the transcript.
   - Creates a branded **image prompt** and renders a matching image.
5. The full set of outputs (text, idea, image) is saved to Airtable.
6. You can now review and schedule the post manually or via another automation. 

---

## 🛠️ Customization ideas

- Swap Telegram for WhatsApp or voice memos via Google Drive  
- Add moderation or approval steps before saving to Airtable  
- Send the LinkedIn post directly to Buffer or Hootsuite for auto-posting  
- Generate post captions or hashtags using GPT-4 before publishing  
- Extend the workflow to auto-create carousel slides from the content idea 
---

This workflow makes it easy to share your voice with your audience — literally. Whether you're walking, thinking out loud, or sending team updates, this automation turns your spoken ideas into professional content, ready to post or polish.
