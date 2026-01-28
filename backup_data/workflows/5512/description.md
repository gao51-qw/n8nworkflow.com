# Daily Currency Update Workflow (n8n)

- Trigger: ScheduleTrigger node (configurable interval)
- Set Variables: API Key, Preferred Currencies (PKR, GBP, EUR, USD, BDT, INR)
- HTTP Request: Fetch latest exchange rates from CurrencyFreaks API
- Set Recipient Email
- Set Email Subject
- Send Email: HTML formatted via Gmail OAuth2 with dynamic rate data (date, base currency, rates)
- Flow: ScheduleTrigger → Set API Key & Currencies → HTTP Request → Set Recipient → Set Subject → Gmail Send
