The **AI-Powered Financial Chart Analyzer** is a cutting-edge automation tool that streamlines financial analysis using n8n workflows, AI agents, and **MacOS Shortcuts**. It enables users to capture, process, and analyze candlestick charts for both **stocks and cryptocurrencies**. By integrating powerful tools like **ChatGPT-4o-mini** (via **OpenRouter**), **MarketStack**, and **SerpAPI**, this automation provides real-time market insights, technical analysis, and AI-driven stock trend predictions.

[![Video Thumbnail](https://img.youtube.com/vi/CeEysWsV8RQ/maxresdefault.jpg)](https://youtu.be/CeEysWsV8RQ?si=EXxjmzF3ofXJa7Q9)

### Workflow

1. The Webhook node will receive image data from a macOS shortcut in Base64 format.  
2. The Convert to File node will convert the Base64 image into a binary file.  
3. The AI Agent node will process the binary image. It utilizes OpenRouter, Windows buffer memory, MarketStack, and the SerpAPI tool.  
4. Remember to use a model capable of processing images; otherwise, the workflow will throw an error.  
5. We use the MarketStack tool to fetch the latest stock data; however, it is rarely used.  
6. SerpAPI is used for market research, such as news and insights about stocks.  
7. Finally, the Markdown node converts Markdown to HTML.  
8. The response is then sent to the Webhook.

### Use Case

**Traders & Investors:** Quickly analyze candlestick charts and identify trading opportunities.

**Financial Analysts:** Automate chart interpretation and data aggregation for in-depth reports.

**AI & Automation Enthusiasts:** Experiment with AI-driven financial workflows using n8n.

**Business Owners:** Gain real-time stock insights to make informed investment decisions.


### Setup Instructions

**Install MacOS Shortcut**

- Download the MacOS Shortcut provided with this product and double-click on it to install.
- If you don’t have the Shortcuts app (parent app) installed, first download it from the App Store, then follow Step 1.

**Set Up Workflow**

- Import the n8n workflow provided with this product.

**Set Up Credentials**

🔹**Webhook Authentication**

- Create an API key (you can use a key generation tool or simply use a custom string).
- Add the API key to your n8n Webhook and MacOS Shortcut.
- If you prefer not to use authentication, remove it from both the n8n Webhook and the MacOS Shortcut.

🔹**OpenRouter API Setup**

- Get a free API key from OpenRouter and add it to your workflow.
- Free API keys have usage limits.
- OpenRouter provides multiple models—ensure that the selected model supports image processing.

🔹**MarketStack API Setup**

- Get a free API key from MarketStack and use it in your workflow.
- Free API keys have usage limits.

🔹**SerpAPI Setup**
- Get a free API key from SerpAPI and use it in your workflow.
- Free API keys have usage limits.


### Disclaimer

This tool is designed for educational and informational purposes only. The AI-generated insights should not be considered as financial advice. Users should conduct their own research before making investment decisions. AgentsOps is not responsible for any financial losses incurred from using this automation.
