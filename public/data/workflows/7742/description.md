This workflow fetches **live financial data** from SerpApi and generates a **daily market recap** using OpenAI.  

---

## ⚙️ Setup Instructions  

### 1️⃣ Set Up SerpApi Connection  
1. Create a free account at [SerpApi](https://serpapi.com/)  
2. Copy your **API Key** from the SerpApi dashboard  
3. In **n8n** → **Credentials → New → SerpApi**  
   - Paste your API Key → **Save**  
4. In the workflow, select your SerpApi credential in the **Finance Search** node.  

---

### 2️⃣ Set Up OpenAI Connection  
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

---

## 🧠 How it works  
- **SerpApi Finance Search** → pulls market data (example: S&P 500, ticker `^GSPC`)  
- **OpenAI Model** → summarizes into a daily report with a paragraph + key bullet points  

---

## 📬 Contact  
Need help customizing (e.g., pulling multiple tickers, exporting to Google Sheets, or sending Slack/Email updates)?  

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**
