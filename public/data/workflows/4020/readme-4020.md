# Extract & categorize receipt data with Google OCR, OpenRouter AI & Telegram

> Effortlessly track your expenses with **MoneyMate**, an n8n workflow that transforms receipts into organized financial insights.

Upload a photo or text via **Telegram**, and let **MoneyMate** extract key details—store info, transaction dates, items, and totals—using **Google Vision OCR** and **AI-powered** parsing via **OpenRouter**.

It categorizes expenses (e.g., **Food & Beverages**, **Transport**, **Household**) and delivers a clean, emoji-rich summary back to your **Telegram** chat. Handles zero-total errors with a friendly nudge to double-check inputs.

Perfect for freelancers, small business owners, or anyone seeking hassle-free expense management. No database required, ensuring **privacy** and simplicity. Deploy **MoneyMate** and take control of your finances today!

## Key Features
- 📱 **Telegram Integration:** Input via photo or text, receive summaries instantly.
- 📸 **Receipt Scanning:** Converts receipt images to text using **Google Vision API**.  
- 🤖 **AI Parsing:** Categorizes transactions with **OpenRouter’s AI** analysis.   
- 🛡️ **Privacy-First:** Processes data on-the-fly without storage.  
- ⚠️ **Smart Error Handling:** Catches zero totals with user-friendly prompts.  
- 📊 **Flexible Categories:** Supports **Income/Expense** and custom expense types.  

## Ideal For
- **Budget-conscious individuals** managing personal finances.  
- **Entrepreneurs** tracking business expenses.  
- **Teams** needing quick, automated expense reporting.  

## Pre-Requirements
- **[n8n Instance](https://n8n.partnerlinks.io/khaisastudio):** A running n8n instance (cloud or self-hosted).  
- **Credentials:**  
  - **Telegram:** A bot token and webhook setup (obtained via BotFather). For more information, please refer to [Telegram bots creation](https://core.telegram.org/bots/tutorial)
  - **Google Cloud:** A service account with **Google Vision API** enabled and API key. For more informations, please refer to [Google cloud Vision](https://cloud.google.com/use-cases/ocr)  
  - **OpenRouter:** An account with API access for AI language model usage.  
- **Telegram Bot:** A configured **Telegram** bot to receive inputs and send summaries.  

## Setup Instructions
- **Import Workflow:** Copy the **MoneyMate** workflow JSON and import it into your n8n instance using the "Import Workflow" option.  
- **Set Up Telegram Bot:** Create a bot via BotFather on **Telegram** to get a token and set up a webhook. For detailed steps, refer to [n8n’s Telegram setup guide](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/).  
- **Configure Credentials:**  
  - In the **Telegram Trigger**, **Send Error Message**, and **Send Expense Summary** nodes, add **Telegram API** credentials with your bot token.  
  - In the **Get Telegram File** and **Download Image** nodes, ensure **Telegram API** credentials are linked.  
  - In the **Google Vision OCR** node, add **Google Cloud** credentials with **Google Vision API** access.  
  - In the **OpenRouter AI Model** node, set up **OpenRouter API** credentials.  
- **Test the Workflow:** Send a test receipt photo or text (e.g., "Lunch 50,000 IDR") via **Telegram** and verify the summary in your chat.  
- **Activate:** Enable the workflow in n8n to run automatically for each input.  

## Customization Options
- **Add Categories:** Modify the **AI Categorizer** node to include new expense types (e.g., **Entertainment**).  
- **Change Output Format:** Adjust the **Format Summary Message** node to include more details like taxes or payment methods.  
- **Switch AI Model:** In the **OpenRouter AI Model** node, select a different **OpenRouter** model for better parsing.  
- **Store Data:** Add a **Google Sheets** node after **Parse Receipt Data** to save expense records.  
- **Enhance Errors:** Include an email notification node after **Check Invalid Input** for failed inputs.  

## Why Choose MoneyMate?
Save time, reduce manual entry, and gain clarity on your spending with **MoneyMate’s AI-driven** workflow. Ready to streamline your finances? Get **MoneyMate** now!


*Made by: [khmuhtadin](khmuhtadin.com)*
Need a custom? contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 📊 Basic Information

- **Workflow ID:** 4020
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 3037
- **Downloads:** 303
- **Created:** 2025/5/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4020)

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
