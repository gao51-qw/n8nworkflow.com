## 📈 How it works
This n8n workflow allows you to **interact with Binance Spot Trading API** directly to:

- Place **Limit Buy** and **Limit Sell** orders
- Place **Market Buy** and **Market Sell** orders
- **Query account info** and **open orders**
- **Cancel all open orders** for a specific symbol

All requests are signed using Binance's `HMAC SHA256` signature method for secure trading.

---

## ⚙️ Setup Steps
1. **Create Binance API Credentials** in n8n:
   - Go to **Credentials &gt; New**
   - Choose **Binance API**
   - Add `api_key` and `api_secret`
   - Save as **`Binance API`**

2. **Import this workflow** into your n8n instance.

3. **Update default values**:
   - In `Set Parameter` nodes like **LimitBuy Parameter**, change:
     - `symbol` (e.g. `BTCUSDT`)
     - `quantity`, `price` as needed

4. **Run** the workflow manually via the **Execute workflow** trigger.

---

## ✅ Notes
- Credential node is marked with instructions.
- HMAC signatures are automatically calculated before making each request.
- HTTP nodes are preconfigured for Binance API v3.

🔒 **No API key or secret is included.**