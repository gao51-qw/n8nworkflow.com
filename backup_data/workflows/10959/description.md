## What this workflow does

This workflow automatically monitors **eBay Deals** and sends **Telegram alerts** when relevant, high-quality deals are detected.

It combines:
- **Web scraping with Decodo**
- **JavaScript pre-processing (no raw HTML sent to the LLM)**
- **AI-based product classification and deal scoring**
- **Rule-based filtering using price and score**

Only valuable deals reach the final notification.

## How it works (overview)

1. The workflow runs manually or on a schedule.
2. The eBay Deals page is scraped using **Decodo**, which handles proxies and anti-bot protections.  
[Decodo – Web Scraper for n8n](https://visit.decodo.com/raqXGD)
3. JavaScript extracts only key product data (ID, title, price, URL, image).
4. An AI Agent classifies each product and assigns a deal quality score (0–10).
5. Price and score rules are applied.
6. Matching deals are sent to Telegram.


## How to configure it

### 1. Decodo
- Add your **Decodo API credentials** to the Decodo node.
- Optionally change the target eBay URL.

### 2. AI Agent
- Add your LLM credentials (e.g. Google Gemini).
- No HTML is sent to the model — only compact, structured data.

### 3. Telegram
- Add your **Telegram Bot Token**.
- Set your **chat_id** in the Telegram node.
- Customize the alert message if needed.

### 4. Filtering rules
- Adjust price limits and minimum deal score in the **IF node**