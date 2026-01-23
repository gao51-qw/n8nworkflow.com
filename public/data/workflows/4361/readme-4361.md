#  Extract Details from Receipts via Telegram with Tesseract and Llama

> # Tesseract - Money Mate Workflow Description
![Screenshot 20250527 at 14.20.42.png](fileId:1383)
**Disclaimer**: This template requires the `n8n-nodes-tesseractjs` community node, which is only available on self-hosted n8n instances. You’ll need a self-hosted n8n setup to use this workflow.

## Who is this for?
This workflow is designed for individuals, freelancers, or small business owners who want an easy way to track expenses using Telegram. It’s ideal for anyone looking to digitize receipts—whether from photos or text messages—using free tools, without needing advanced technical skills.

## What problem does this workflow solve?
Manually entering receipt details into a spreadsheet or app is time-consuming and prone to mistakes. This workflow automates the process by extracting information from receipt images or text messages sent via Telegram, categorizing expenses, and sending back a clear, formatted summary. It saves time, reduces errors, and makes expense tracking effortless.

## What this workflow does
The workflow listens for messages sent to a Telegram bot, which can be either text descriptions of expenses or photos of receipts. If a photo is sent, Tesseract (an open-source text recognition tool) extracts the text. If text is sent, it’s processed directly. An AI model (LLaMA via OpenRouter) analyzes the input, categorizes it into expense types (e.g., Food & Beverages, Household, Transport), and creates a structured summary including store name, date, items, total, and category. The summary is then sent back to the user’s Telegram chat.

## Setup Instructions
Follow these step-by-step instructions to set up the workflow. No advanced technical knowledge is required, but you’ll need a self-hosted n8n instance.

1. **Set Up a Self-Hosted [n8n Instance](https://n8n.partnerlinks.io/khaisastudio)**:
   - If you don’t have n8n installed, follow the [n8n self-hosting guide](https://docs.n8n.io/hosting/installation/self-hosting/) to set it up. You can use platforms like Docker or a cloud provider (e.g., DigitalOcean, AWS).
   - Ensure your n8n instance is running and accessible via a web browser.

2. **Install the Tesseract Community Node**:
   - In your n8n instance, go to **Settings &gt; Community Nodes** in the sidebar.
   - Click **Install a Community Node**, then enter `n8n-nodes-tesseractjs` in the search bar.
   - Click **Install** and wait for confirmation. This node enables receipt image processing.
   - If you encounter issues, check the [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/) for troubleshooting.

3. **Create a Telegram Bot**:
   - Open Telegram and search for **@BotFather** to start a new bot.
   - Send `/start` to BotFather, then `/newbot` to create your bot.
   - Follow the prompts to name your bot (e.g., “MoneyMateBot”).
   - BotFather will provide a **Bot Token** (e.g., `23872837287:ExampleExampleExample`). Copy this token.
   - In n8n, go to **Credentials &gt; Add Credential**, select **Telegram API**, and paste the token. Name the credential (e.g., “MoneyMateBot”) and save.

4. **Set Up OpenRouter for AI Processing**:
   - Sign up for a free account at [OpenRouter](https://openrouter.ai/).
   - In your OpenRouter dashboard, generate an **API Key** under the API section.
   - In n8n, go to **Credentials &gt; Add Credential**, select **OpenRouter API**, and paste the API key. Name it (e.g., “OpenRouter Account”) and save.
   - The free tier of OpenRouter’s LLaMA model is sufficient for this workflow.

5. **Import and Configure the Workflow**:
   - Download the workflow JSON file (provided separately or copy from the source).
   - In n8n, go to **Workflows &gt; Import Workflow** and upload the JSON file.
   - Open the imported workflow (“Tesseract - Money Mate”).
   - Ensure the **Telegram Trigger** and **Send Expense Summary** nodes use the Telegram credential you created.
   - Ensure the **AI Analyzer** node uses the OpenRouter credential.
   - Save the workflow.

6. **Test the Workflow**:
   - Activate the workflow by toggling the **Active** switch in n8n.
   - In Telegram, find your bot (e.g., @MoneyMateBot) and send `/start`.
   - Test with a sample input (see “Example Inputs” below).
   - Check the n8n workflow execution panel to ensure data flows correctly.
   - If errors occur, double-check credentials and node connections.

7. **Activate for Continuous Use**:
   - Once tested, keep the workflow active in n8n.
   - Your bot will now process any text or image sent to it via Telegram.

## Example Inputs/Formats
To help the workflow process your data accurately, use clear and structured inputs. Below are examples of valid inputs:

### Text Input Example:
Send a message to your Telegram bot like this:
```
Bought coffee at Starbucks, Jalan Sudirman, yesterday. Total Rp 50,000. 2 lattes, each Rp 25,000.
```
**Expected Output**:
```
hello [Your Name]

Ini Rekap Belanjamu
📋 Store: Starbucks
📍 Location: Jalan Sudirman
📅 Date: 2025-05-26
🛒 Items:
- Latte: Rp 25,000
- Latte: Rp 25,000
💸 Total: Rp 50,000
📌 Category: Food & Beverages
```

### Image Input Example:
Upload a photo of a receipt to your Telegram bot. The receipt should contain:
- Store name (e.g., “Alfamart”)
- Address (e.g., “Jl. Gatot Subroto, Jakarta”)
- Date and time (e.g., “27/05/2025 14:00”)
- Items with prices (e.g., “Bread Rp 15,000”, “Milk Rp 20,000”)
- Total amount (e.g., “Total: Rp 35,000”)

**Expected Output**:
```
hello [Your Name]

Ini Rekap Belanjamu
📋 Store: Alfamart
📍 Location: Jl. Gatot Subroto, Jakarta
📅 Date: 2025-05-27 14:00
🛒 Items:
- Bread: Rp 15,000
- Milk: Rp 20,000
💸 Total: Rp 35,000
📌 Category: Household
```

**Tips for Images**:
- Ensure the receipt is well-lit and text is readable.
- Avoid blurry or angled photos for better Tesseract accuracy.

## How to Customize This Workflow
- **Change Expense Categories**: In the **AI Categorizer** node, edit the prompt to include custom categories (e.g., add “Entertainment” or “Utilities” to the list: Food & Beverages, Household, Transport).
- **Modify Response Format**: In the **Format Summary Message** node, adjust the JavaScript code to change how the summary looks (e.g., add emojis, reorder fields).
- **Save to a Database**: Add a node (e.g., Google Sheets or PostgreSQL) after the **Format Summary Message** node to store summaries.
- **Support Other Languages**: In the **AI Categorizer** node, update the prompt to handle additional languages (e.g., Spanish, Mandarin) by specifying them in the instructions.
- **Add Error Handling**: Enhance the **Check Invalid Input** node to catch more edge cases, like invalid dates.

## All Free, End-to-End
This workflow is 100% free! It leverages:
- **Telegram Bot API**: Free via BotFather.
- **Tesseract**: Open-source text recognition.
- **LLaMA via OpenRouter**: Free tier available for AI processing.

Enjoy automating your expense tracking without any cost!

*Made by: [khmuhtadin](khmuhtadin.com)*
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 📊 Basic Information

- **Workflow ID:** 4361
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 2145
- **Downloads:** 214
- **Created:** 2025/5/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4361)

## 👤 Author

- **Name:** Khairul Muhtadin
- **Username:** @khmuhtadin

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **code** 
- **httpRequest** (×2)
- **telegramTrigger** 
- **stickyNote** (×14)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **if** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **telegram** (×2)
- **n8n-nodes-tesseractjs.tesseractNode** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
