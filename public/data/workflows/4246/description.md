# 📌 Request TRM (Colombian Peso to US Dollar exchange rate)

## 🎯 Objective

Retrieve the TRM (Colombian Peso to US Dollar exchange rate) for a specific date provided by the user via Telegram.

## 🔄 Summary Flow

1. 📨 **Telegram Message**  
   The user sends a text or audio message  to the Telegram Bot.

2. 🧠 **Date Extraction**  
   AI (OpenAI) is used to identify the date in `YYYY-MM-DD` format.

3. 📅 **Validation**  
   If the date is in the future, the user is notified that it is not valid.

4. 📡 **TRM Query**  
   The bot queries the open data API from the Colombian government.

5. 📥 **Result**  
   - ✅ If TRM data exists for that date → The bot replies to the user.  
   - ❌ If not → It searches up to 10 previous days for available data.

6. 📤 **Final Response**  
   The most recent available value is sent, or a message indicating no information is available.

## 🔗 Data Source

**datos.gov.co** – [TRM](https://www.datos.gov.co/)