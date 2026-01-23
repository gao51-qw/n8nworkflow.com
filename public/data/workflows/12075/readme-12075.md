# Compare product prices on Amazon and Jumia with Decodo, OpenAI and Telegram

> ## What Problem Does It Solve?
- We’ve all been there: you want to check if a product is cheaper on Amazon or Jumia, but opening a dozen tabs is a pain.
- Building a bot to do this usually fails because big e-commerce sites love to block scrapers with CAPTCHAs.
- This workflow fixes that headache by:
  - Taking a product name from a chat message.
  - Using **Decodo** to handle the hard part—searching Google and scraping the product pages without getting blocked.
  - Using AI to read the messy HTML and pull out just the price and product name.
  - Sending a clean "Best Price" summary back to the user instantly.

## How to Configure It
### Telegram Setup
- Create a bot with BotFather and paste your token into the Telegram node.
- Make sure your webhook is set up so the bot actually "hears" the messages.

### Decodo 
- This is the engine that makes the workflow reliable.
- You'll need to add your **Decodo API key** in the credentials.
- We used Decodo here specifically because it handles the proxies and browser fingerprinting for you—so your Amazon requests actually go through instead of failing.

### AI Setup
- Plug in your OpenAI API key (or swap the node for Claude/Gemini if you prefer).
- The system prompt is already set up to ignore ads and find the real price, but feel free to tweak the tone.

## How It Works
1. **Trigger:** You text the bot a product name (e.g., "Sony XM5").
2. **Search:** The workflow asks **Decodo** to Google that specific term on sites like Amazon.eg.
3. **Scrape:** It grabs the URLs and passes them back to Decodo to fetch the page content safely.
4. **Extract:** The AI reads through the text, finds the lowest price, and ignores the clutter.
5. **Reply:** The bot texts you back with the best deal found.

## Customization Ideas
- **Go wider:** Edit the search query to check other stores like Noon or Carrefour.
- **Track trends:** Connect a Google Sheet to log what people are searching for—great for market research.

If you need any help [Get In Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 📊 Basic Information

- **Workflow ID:** 12075
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 3
- **Downloads:** 0
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12075)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **telegramTrigger** 
- **code** (×9)
- **@n8n/n8n-nodes-langchain.agent** 
- **@decodo/n8n-nodes-decodo.decodo** (×3)
- **if** 
- **splitInBatches** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
