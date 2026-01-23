What it is

This workflow listens for new tickets in HaloPSA via webhook, generates a professional AI-powered summary of the issue using Gemini (or another LLM), and posts it back into the ticket as a private note.

It’s designed for MSPs using HaloPSA who want to reduce triage time and give engineers a clear head start on each support case.

⸻

✨ Features
	•	🔔 Webhook trigger from HaloPSA on new ticket creation
	•	🚧 Optional team filter (skip Sales or other queues)
	•	📦 Extracts ticket subject, details, and ID
	•	🧠 Builds a structured AI prompt with MSP context (NinjaOne, M365, CIPP)
	•	🤖 Processes via Gemini or other LLM
	•	📑 Cleans & parses JSON output (summary, next step, troubleshooting)
	•	🧱 Generates a branded HTML private note (logo + styled sections)
	•	🌐 Posts the note back into HaloPSA via API

⸻

🔧 Setup
	1.	Webhook
	•	Replace WEBHOOK_PATH and paste the generated Production URL into your HaloPSA webhook.
	2.	Guard filter (optional)
	•	Change teamName or teamId to skip tickets from specific queues.
	3.	Branding
	•	Replace YOUR_LOGO_URL and Your MSP Brand in the HTML note builder.
	4.	HaloPSA API
	•	In the HTTP node, replace YOUR_HALO_DOMAIN and add your Halo API token (Bearer auth).
	5.	LLM credentials
	•	Set your API key in the Gemini / OpenAI node credentials section.
	6.	(Optional) Adjust the AI prompt with your own tools or processes.

⸻

✅ Requirements
	•	HaloPSA account with API enabled
	•	Gemini / OpenAI (or other LLM) API key
	•	SMTP (optional) if you want to extend with notifications

⸻

⚡ Workflow overview

``🔔 Webhook → 🚧 Guard → 📦 Extract Ticket → 🧠 Build AI Prompt → 🤖 AI Agent (Gemini) → 📑 Parse JSON → 🧱 Build HTML Note → 🌐 Post to HaloPSA``