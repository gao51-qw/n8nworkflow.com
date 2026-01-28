## Revolut Extracts Analyzer

### This n8n template processes Revolut statements, normalizes transactions, and uses AI to categorize expenses automatically.
### Use cases include detecting subscriptions, separating internal transfers, and building dashboards to track spending.
---

## How it works
* **Get Categories from Supabase**
* **Download & Transform**
* **Loop Over Items**
* **LLM Categorizer**  
* **Insert into Supabase**

---

## How to use
* Start with the **manual trigger node** or replace it with a schedule/webhook.  
* Connect **Google Drive** to provide Revolut CSV files.  
* Ensure **Supabase** has tables for `transactions` and `categories`.  
* Extend with notifications, reports, or BI tools.  

---

## Requirements
* Google Drive for CSV files  
* Supabase tables for categories & transactions  
* LLM provider (OpenAI/Gemini)