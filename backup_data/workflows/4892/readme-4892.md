# Analyze stock charts with GPT-4 Vision and send results via Telegram

> # n8n Workflow: AI-Powered Stock Chart Analysis Bot for Telegram

This is a powerful n8n automation workflow that integrates a Telegram bot with OpenAI's multimodal large language model (GPT-4 Vision) to provide users with real-time stock chart analysis.

## Workflow Breakdown

*   **Receive Image:** The workflow is initiated by a Telegram Trigger. It activates whenever a user sends an image (e.g., a stock's candlestick chart) to a designated Telegram chat, automatically downloading the file.
*   **Image Pre-processing:** To optimize the AI's performance and efficiency, the Edit Image node resizes the incoming image to a standard 512x512 pixel format.
*   **AI Vision Analysis:** The processed image is then passed to a LangChain Chain, which utilizes the OpenAI GPT-4 Vision model. A sophisticated system prompt instructs the AI to act as a professional stock analyst.
*   **Intelligent Interpretation:** The AI analyzes the image to identify the stock's name, price trend (uptrend, downtrend, or sideways), key support/resistance levels, and volume changes. It then generates a comprehensive analysis report combining technical indicators and market sentiment.
*   **Structured Output:** To ensure reliability and consistency, the AI's output is parsed into a specific JSON format. This structure includes a `search_word` (for the industry/sector) and the main `content` (the analysis text).
*   **Send Response:** Finally, the workflow extracts the `content` field from the JSON output and uses the Telegram node to send this professional analysis back to the user as a text message in the same chat.

## Key Features

*   **User-Friendly:** Users simply send an image to get an analysis, requiring no complex commands.
*   **Instant & Efficient:** The entire analysis and response process is fully automated and completed within moments.
*   **Professional-Grade Analysis:** Leverages the advanced image recognition and reasoning capabilities of GPT-4 Vision to deliver insights comparable to those of a human analyst.
*   **Reliable & Consistent:** The use of structured output ensures that the format of the response is always consistent and easy to read or process further.

## 📊 Basic Information

- **Workflow ID:** 4892
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 6564
- **Downloads:** 656
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4892)

## 👤 Author

- **Name:** Fenngbrotalk
- **Username:** @yihaohuang

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **editImage** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
