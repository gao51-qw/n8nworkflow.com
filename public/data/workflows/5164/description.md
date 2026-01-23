Automate LinkedIn engagement without sounding like a bot.
This workflow:
🌍 Detects language & tone (German / English)
👍 Chooses the right reaction (like / celebrate / support …)
🗣 Generates a personalised comment in your voice and mentions the author
📲 Optional Telegram review – approve ✅ or regenerate ❌ before posting
💸 Runs on cost-efficient GPT-4o mini or Claude 3.5 Haiku
☁️ Publishes comment + reaction via the Unipile API
Setup (≈ 15-30 min)
Unipile – connect LinkedIn → copy account_id, dsn, then create an Access-Token (X-API-KEY).
Telegram (optional) – create a bot, add a credential named YOUR TELEGRAM ACCOUNT.
OpenAI / Anthropic – add your API key and keep one LLM node (delete the other).
Open the “Defining guardrails” node and replace the credential placeholders.
(Optional) Tweak role, comment_length and openers_example_1-3 for your brand voice.
Security: no live keys included – all secrets are placeholders.
Best for: solopreneurs, marketing teams, personal-branding consultants.