
Replace `YOUR_API_KEY` with your actual SerpApi key.  

### 2️⃣ Set Up OpenAI Connection  
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to **Billing** and ensure your account has credits/funding  
3. Copy your **API Key** into the **OpenAI credentials** in n8n  

---

## 🧠 Workflow Breakdown
1. **Chat Trigger** → User enters a financial question (e.g., “What’s the current price of Tesla?”).  
2. **HTTP Request (SerpApi Finance Search)** → Fetches the latest market data for the requested ticker or index.  
3. **OpenAI Node** → Takes both the raw financial data and the user’s query, then formulates a natural language response.  
4. **Output** → Returns a clear, conversational answer that can be displayed in chat, Slack, or another integration.  

---

## 🎛️ Customization Guidance
- **Multiple Tickers**: Update the workflow to query multiple tickers (e.g., TSLA, AAPL, AMZN) and return a combined report.  
- **Scheduling**: Add a **Schedule Trigger** to run this workflow every morning and send a market recap.  
- **Delivery Channels**: Use Slack, Email, or Google Sheets nodes to distribute reports automatically.  
- **Extended Data**: Adjust the SerpApi query to include more than prices — e.g., company info, market news, or related tickers.  
- **Custom Prompts**: Change the OpenAI system prompt to make the chatbot more formal (for reporting) or casual (for quick insights).  

---

## 💬 Example Questions & Responses

**Question:** *“What’s the current price of the S&P 500?”*  
**Expected Response:**  
“The S&P 500 (^GSPC) is currently trading at **4,725.13**, down **0.8%** today.”  

**Question:** *“Summarize the performance of Tesla and Apple today.”*  
**Expected Response:**  
- Tesla (TSLA): **$238.45**, up **1.5%**  
- Apple (AAPL): **$192.11**, down **0.3%**  

**Question:** *“Give me a quick market recap.”*  
**Expected Response:**  
“Markets are mixed today — the S&P 500 is slightly down, while tech stocks like Tesla are showing gains. Apple dipped slightly after earnings news.”  

---

## 📬 Contact
Need help customizing this workflow (e.g., multiple tickers, daily summaries, or integrating into dashboards)?  

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**
