# Nano banana AI image editor via Telegram

> # Nano Banana AI Image Editor

Transform your Telegram photos with AI-powered image processing using the revolutionary Nano Banana technology. This workflow automatically receives photos via Telegram, processes them through Google's advanced Gemini 2.5 Flash vision model, and sends back intelligently enhanced images - all powered by the innovative Nano Banana processing pipeline.

## Who's it for

Perfect for content creators, social media managers, photographers, and anyone who wants to automatically enhance their Telegram photos with AI. Whether you're running a photo editing service, creating content for clients, or just want smarter image processing in your personal chats, the Nano Banana AI editor delivers professional-grade results.

## How it works

The Nano Banana workflow creates an intelligent Telegram bot that processes images in real-time. When you send a photo with a caption to your bot, it automatically downloads the image, converts it to the proper format, sends it to Google's Gemini AI for analysis and enhancement, then returns the processed result. The Nano Banana engine optimizes every step for speed and quality.

## How to set up

1. **Create Telegram Bot:** Get your bot token from @BotFather on Telegram
2. **OpenRouter Account:** Sign up at openrouter.ai for free Gemini access  
3. **Configure Credentials:** Add your Telegram and OpenRouter API keys to n8n
4. **Update Chat ID:** Replace "YOUR_CHAT_ID_HERE" with your actual Telegram chat ID
5. **Activate Webhook:** Enable the Telegram trigger to start receiving messages

## Requirements

- n8n instance (cloud or self-hosted)
- Telegram Bot API credentials
- OpenRouter account (free tier available)
- Basic understanding of webhook configuration

## How to customize the workflow

The Nano Banana editor is highly customizable:

- **Change AI Model:** Modify the model parameter in "Nano Banana Image Processor" node
- **Add Filters:** Insert additional processing nodes before the AI analysis
- **Custom Prompts:** Edit the text content sent to Gemini for different processing styles
- **Multiple Chats:** Duplicate the final node for different Telegram destinations
- **Error Handling:** Add conditional logic for failed processing attempts
- **Batch Processing:** Extend to handle multiple images simultaneously

The Nano Banana technology ensures optimal performance while maintaining flexibility for your specific use cases.

## 📊 Basic Information

- **Workflow ID:** 8082
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 6982
- **Downloads:** 698
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8082)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **telegram** (×2)
- **extractFromFile** 
- **code** 
- **set** 
- **convertToFile** 
- **stickyNote** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
