# Manage recipes with AI-powered Telegram bot and Google Sheets database

> ## Transform Your Telegram into a Smart Recipe Assistant!

Tired of scrolling through messy notes and bookmarks to find your favorite recipes? Wish you had a personal chef's assistant to help you in the kitchen?

Introducing the **Culinary Companion for Telegram**, an n8n workflow that turns your Telegram app into a powerful, AI-driven recipe management tool, using Google Sheets as your database.

---

## 🚀 Key Features
*   **Telegram Bot Interface:** Interact with your recipe book using simple text commands.
*   **Google Sheets Database:** Your single source of truth for recipes, easily viewable and editable outside of Telegram.
*   **AI-Powered Recipe Assistant:** Utilizes Google Gemini or OpenAI to understand natural language for creating, modifying, and searching for recipes.
*   **Full Recipe Management (CRUD):**
    *   **Create:** Add new recipes conversationally.
    *   **Read:** Fetch your full recipe list or view a single, detailed recipe card.
    *   **Update:** Modify existing recipes with AI assistance.
*   **Command-Driven & AI-Driven:** Use simple commands for direct actions (`/list`, `/select`) or have a conversation with the AI for more complex tasks (`/search`, `/create`, `/modify`).
*   **Formatted for Mobile:** All responses are sent in clean, readable Markdown, perfect for viewing on the go.

---

## ⚙️ How It Works

The workflow is triggered by messages sent to your Telegram bot. A central **Command Router** (`Switch` node) determines the user's intent and directs the flow to the appropriate tool.

### 1. Command Routing
*   A **Telegram Trigger** node listens for any new message.
*   The **Command Router** (`Switch` node) immediately inspects the message text for keywords like `/list`, `/select`, `/create`, etc.
*   Based on the command, the workflow branches into either a simple data fetch or a more complex AI-powered action.

### 2. Simple Recipe Lookups (`/list` & `/select`)
*   **`/list`:**
    1.  The **Read Recipe Names** (`Google Sheets` node) fetches all values from column A of your sheet.
    2.  A **Format List Message** (`Code` node) transforms the raw data into a clean, numbered list.
    3.  The formatted list is sent to you via the **Telegram Send Recipe List** node.
*   **`/select [recipe name]`:**
    1.  The **Extract Select Param** (`Code` node) isolates the recipe name from your command.
    2.  The **Lookup Recipe Row** (`Google Sheets` node) searches for that specific recipe in your sheet and returns its full row of data.
    3.  A **Format Full Recipe** (`Code` node) assembles the data into a beautifully formatted recipe card, complete with emojis and sections for ingredients, instructions, and notes.
    4.  The final recipe card is sent via the **Telegram Send Full Recipe** node.

### 3. AI-Powered Recipe Management (`/search`, `/create`, `/modify`)
For more complex tasks, the workflow leverages a powerful AI agent.

*   The user's command (e.g., `/search chicken and rice` or `/create a pasta dish`) is passed to the **Recipe AI Agent**.
*   This agent is powered by either **Google Gemini** or an **OpenAI Model**.
*   It is given a specific **system prompt** to act as a helpful, food-focused assistant with access to a set of tools.
*   **Tools Available to the AI:**
    *   **Read Recipes Sheet:** Allows the AI to read the entire Google Sheet to answer broad questions or find recipes based on ingredients.
    *   **Update Recipes Sheet:** Gives the AI the power to add new rows (new recipes) or modify existing ones based on your conversation.
    *   **Think:** A tool that allows the agent to process complex requests step-by-step before acting.
*   **Conversation Memory:** The agent remembers the last few messages, allowing you to have a natural, back-and-forth conversation (e.g., "Create a new recipe" -&gt; "What should it be called?" -&gt; "Spicy Tacos").
*   The AI's final, formatted response is sent back to you via the **Telegram Send AI Response** node.

---

## 🛠️ Setup Steps & Credentials

1.  **Telegram Bot:**
    *   Create a bot with `@BotFather` on Telegram to get your API token.
    *   Add this token as a credential for the **Telegram Trigger** and all **Telegram** sender nodes.

2.  **Google Sheets:**
    *   Create a new Google Sheet.
    *   Set up the first row with headers: `Recipe Name`, `Cooking Time`, `Ingredients`, `Instructions`, `Notes`.
    *   Copy the **Sheet ID** from the URL (it's the long string of characters in the middle).
    *   Paste the Sheet ID into the relevant fields in the **Read Recipe Names**, **Lookup Recipe Row**, and the **Google Sheets Tools** (`Read Recipes Sheet`, `Update Recipes Sheet`).
    *   Create Google OAuth2 credentials and connect them to all `Google Sheets` and `Google Sheets Tool` nodes.

3.  **AI Provider (Choose One):**
    *   **For Google Gemini:** Get an API key from Google AI Studio, create a `Google Gemini(PaLM) Api` credential, and connect it to the **Google Gemini Chat Model** node.
    *   **For OpenAI:** Get an API key from OpenAI, create an `OpenAI` credential, and connect it to the **OpenAI Chat Model** node.
    *   *Note:* You only need to enable one of the two AI models.

---

## 💡 Customization & Learning

*   **Expand Your Database:** Add more columns to your Google Sheet like `Cuisine`, `Difficulty`, or `Rating`, and modify the **Format Full Recipe** node to display them.
*   **Enhance the AI:** Edit the system prompt in the **Recipe AI Agent** to change its personality or give it more specific instructions.
*   **Add New Tools:** Create new tools for the AI agent, such as a function to fetch nutritional information from an external API based on ingredients.
*   **Different Triggers:** Instead of a Telegram bot, you could trigger the `/create` function from a simple web form.


## 📊 Basic Information

- **Workflow ID:** 8425
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 59
- **Downloads:** 5
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8425)

## 👤 Author

- **Name:** Issam AGGOUR
- **Username:** @devgor

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **googleSheets** (×2)
- **function** (×6)
- **telegram** (×4)
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **googleSheetsTool** (×2)
- **stickyNote** (×20)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
