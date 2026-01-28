🔗 Slack + Bitly UTM Generator — Powered by OpenAI

Description:

This no-code n8n workflow transforms how marketing teams generate Bitly links with UTM parameters — directly from Slack. Powered by AI and fully automated, this system extracts relevant campaign data from a Slack message, creates a clean Bitly shortlink with UTM tags, and logs everything to a Google Sheet for tracking and reporting.

Perfect for growth marketers, content teams, and anyone tired of manually building UTM-tagged links.

If you like to follow step-by-step build of workflows like these, check out:
https://www.youtube.com/@Automatewithmarc

⚙️ How It Works
🟢 Slack Trigger
The workflow starts when a user mentions the bot in a Slack channel (e.g., @BitlyBot link this for IG campaign).

🧠 AI Agent (LangChain)

Uses GPT-4o-mini to infer UTM values (e.g., utm_source, utm_medium, utm_campaign)

Normalizes short forms like "IG" to "instagram"

Follows UTM naming conventions (e.g., lowercase, underscore-separated)

🔍 Information Extractor
Pulls cleanly structured UTM data from the AI response to prep for Bitly.

🔗 Bitly Tool Node
Generates a short link using the inferred target URL + UTM values.

📋 Google Sheets Logger
Automatically appends the full details (Bitly link, UTM parameters, campaign owner) to a Google Sheet for easy access.

📢 Slack Response
Replies in-thread with the new Bitly link and campaign details, formatted clearly for the user.

🛑 Error Handling
If Bitly link generation fails, the workflow gracefully stops with an error message.

🔧 Tools & Services Used
Slack (Trigger + Response)

LangChain AI Agent (with GPT-4o-mini)

Bitly (via Bitly Tool Node)

Google Sheets (auto-log generated links)

OpenAI GPT-4o-mini (Language model for prompt understanding)

💡 Use Cases
🔗 Instantly create UTM-tagged links for campaigns

📊 Maintain a central Bitly + UTM link database in Google Sheets

🧠 Use AI to reduce manual tagging and formatting errors

🤝 Empower your team to request links via Slack, no forms needed

✅ Setup Instructions
Slack:
Set up a Slack bot and connect it using Slack Trigger and Slack response nodes.
Bitly API:
Generate a Bitly access token and set up credentials in the Bitly node.
OpenAI / LangChain:
Connect your GPT-4o or GPT-4 API key to the OpenAI Chat Model nodes.
Google Sheets:
Use OAuth2 credentials to connect to your Google Sheet.
Make sure the sheet has matching columns for UTM parameters (sample headers included in the node schema).


