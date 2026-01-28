# Telegram bot inline keyboard with dynamic menus & rating system

> **🤖 Telegram Bot with Dynamic Menus & Rating System**

**What It Does**

  This n8n workflow creates an interactive Telegram bot with:
  - Dynamic inline keyboards that respond to user clicks
  - 5-star rating system for collecting feedback
  - Personalized responses using the user's actual name
  - Multi-level menu navigation (Main → Settings → Profile, etc.)
  - Real-time message updates when buttons are clicked

**How It Works**

  1. Receives messages via Telegram webhook trigger node
  2. Extracts user data (name, ID, message type)
  3. Builds dynamic menus based on user actions
  4. Sends/updates messages with inline keyboards
  5. Handles button clicks without page refresh

  🚀 **Setup Instructions**

  1. Get Your Bot Credentials
  2. Configure Workflow
  - Open "Set Bot Token" node
  - Replace token with yours
  - Save and activate workflow (Active)

  3. Test Your Bot

  - Message your bot on Telegram
  - Click the buttons to navigate menus
  - Try the rating system on Feature 1

🎨 **Customization Guide**

  Add New Menu Items

  In the "Prepare Response" Function node, add new cases:
  case 'your_feature':
    responseText = 'Your feature description';
    keyboard = [
      [{ text: '🎯 Button 1', callback_data: 'action1' }],
      [{ text: '🔙 Back', callback_data: 'main' }]
    ];
    break;

**Modify Rating Options**

  Change star buttons to numbers or emojis:
  // Current: ⭐⭐⭐
  // Alternative: 1️⃣ 2️⃣ 3️⃣ or 👎 👍

  **Change Bot Responses**

  - Edit responseText for message content
  - Modify keyboard arrays for button layout
  - Add HTML formatting: <b>bold</b>, <i>italic</i>

💡 ++Key Features Demonstrated++

  - HTTP Request workaround for dynamic keyboards (n8n Telegram node limitation)
  - Callback query handling to prevent loading animations
  - Message editing vs sending new messages
  - User data extraction from Telegram API
  - Switch-case menu routing for scalable navigation

⚠️ ++Important Notes++

  - Limitation: n8n's native Telegram node doesn't support dynamic inline keyboards, this is why need to use HTTP nodes.
  - Solution demonstrated: Use HTTP Request node with Telegram Bot API directly

## 📊 Basic Information

- **Workflow ID:** 7664
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3239
- **Downloads:** 323
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7664)

## 👤 Author

- **Name:** Ruslan Elishev
- **Username:** @relishev

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **telegramTrigger** 
- **function** 
- **set** 
- **if** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
