# Track food calories via Telegram with GPT-4 Vision and Google Sheets

> 

This workflow enables users to submit food images to a Telegram bot, which uses OpenAI’s GPT-4 Vision to identify the item and estimate its caloric value. The results are stored in Google Sheets and sent back to the user.

### What it does:
1. Triggers on a photo sent via Telegram.
2. Acknowledges the user with a sticky note message.
3. Downloads the image file securely using Telegram's API.
4. Sends the image to GPT-4 Vision with a prompt: *“Describe this food and estimate its calories.”*
5. Logs the GPT response to a Google Sheet (with timestamp).
6. Replies to the user with the result (e.g., food name and estimated calories).

### Use cases:
- Personal food tracking
- Nutrition logging via chat
- Meal journaling for fitness or health

### Requirements:
- Telegram Bot Token (via credentials)
- OpenAI GPT-4 Vision access
- Google Sheets credential with access to the target sheet

### Notes:
- You can extend this template to calculate daily totals, categorize meals (breakfast/lunch/dinner), or even integrate with calorie goals.
- The sticky note node confirms receipt to enhance UX.
- Ideal for wellness apps, chat-based food journals, or AI-powered health bots.


## 📊 Basic Information

- **Workflow ID:** 7006
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1904
- **Downloads:** 190
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7006)

## 👤 Author

- **Name:** Shiva
- **Username:** @shivp1413

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **telegram** (×3)
- **function** 
- **openai** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
