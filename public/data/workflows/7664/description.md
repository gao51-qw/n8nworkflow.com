**🤖 Telegram Bot with Dynamic Menus & Rating System**

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