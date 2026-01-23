# Create Anki language flashcards with GPT-4, DALL-E and ElevenLabs

> Turn any topic into a ready-to-study Anki deck. This workflow generates vocabulary flashcards with AI images and native pronunciation, then sends the .apkg file straight to your inbox.

**What it does**
1. You fill out a simple form (topic, languages, difficulty)
2. GPT-4 creates vocabulary with translations, readings, and example sentences
3. DALL-E 3 generates a unique image for each word
4. ElevenLabs adds native pronunciation audio (word + example)
5. Everything gets packaged into a real .apkg file
6. The deck lands in your email, ready to import into Anki
7. A backup copy saves to Google Sheets

**Why I built this**
I was spending hours making flashcards by hand for language learning. Finding images, recording audio, formatting everything for Anki... it took forever. This workflow does all of that in about 3 minutes.

**Setup (~15 min)**
1. Install npm packages: `jszip` and `sql.js`
2. Add OpenAI credentials (for GPT-4 + DALL-E)
3. Add ElevenLabs credentials
4. Connect Gmail and Google Sheets via OAuth
5. Update `OPENAI_API_KEY` in the DALL-E code node
6. Update the Spreadsheet ID in the Sheets node

**Features**
- 20 languages supported
- 7 image styles (minimal icons, kawaii, realistic, watercolor, pixel art...)
- 6 difficulty levels (A1 to C2)
- Optional reverse cards (target→native AND native→target)
- Works on Anki desktop and mobile

## 📊 Basic Information

- **Workflow ID:** 12265
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 17
- **Downloads:** 1
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12265)

## 👤 Author

- **Name:** Victor Manuel Lagunas Franco
- **Username:** @vicktormanuel

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×16)
- **formTrigger** 
- **code** (×12)
- **httpRequest** 
- **splitInBatches** 
- **@elevenlabs/n8n-nodes-elevenlabs.elevenLabs** (×2)
- **googleSheets** 
- **gmail** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
