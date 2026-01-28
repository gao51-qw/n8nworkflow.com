# Create a daily visual journal from Discord chats with GPT-4, DALL-E and Notion

> I wanted a journal but never had the discipline to write one. Most of my day happens in Discord anyway, so I built this to do it for me.

Every night, it reads my Discord channel, asks GPT-4 to write a short reflection, generates an image that captures the vibe of the day, and saves everything to Notion. I wake up with a diary entry I didn't have to write.

**How it works**
1. Runs daily at whatever time you set
2. Grabs messages from a Discord channel (last 100)
3. Filters to today's messages only
4. GPT-4 writes a title, summary, mood, and tags
5. DALL-E generates an image based on the day's themes
6. Uploads image to Cloudinary (Notion needs a public URL)
7. Creates a Notion page with everything formatted nicely

**Setup**
- Discord Bot credentials (read message history permission)
- OpenAI API key
- Free Cloudinary account for image hosting
- Notion integration connected to your database

**Notion database properties needed**
- Title (title)
- Date (date)
- Summary (text)
- Mood (select): 😊 Great, 😌 Good, 😐 Neutral, 😔 Low, 🔥 Productive
- Message Count (number)

Takes about 15 minutes to set up. I use Gallery view in Notion with the AI image as cover - looks pretty cool after a few weeks.

## 📊 Basic Information

- **Workflow ID:** 12337
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 7
- **Downloads:** 0
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12337)

## 👤 Author

- **Name:** Victor Manuel Lagunas Franco
- **Username:** @vicktormanuel

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×11)
- **scheduleTrigger** 
- **discord** 
- **code** (×7)
- **if** 
- **httpRequest** 
- **notion** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
