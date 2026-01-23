## Description
Streamline interview feedback handling with this rejection-focused workflow. It processes raw interview feedback, applies an AI-powered scoring model, checks against a threshold, and automatically sends polite rejection emails while logging tasks in ClickUp—ensuring consistent, hands-free candidate management.

**What This Template Does**

📋 Pulls raw feedback data from Google Sheets
 🧠 Uses GPT-4o-mini to structure and score candidate profiles
 ⚖️ Applies threshold check (average score &gt; 3.1 = pass, else reject)
 🔀 Routes candidates via decision branch (pass = no action, fail = rejection)
 📩 Sends templated rejection email via Gmail
 🗂 Creates ClickUp task for rejection tracking (7-day due date)

**Prerequisites**

- Google Sheets with interview feedback data
- n8n instance (self-hosted or cloud)
- Azure OpenAI (GPT-4o-mini) API key for AI-powered analysis
- Gmail API credentials (for sending rejection emails)
- ClickUp API credentials (for rejection task logging)

**Step-by-Step Setup**

- Connect Google Sheets node to fetch feedback data.
- Configure LangChain LLM node with GPT-4o-mini to structure and score feedback.
- Add Code node to apply rejection threshold (&gt; 3.1).
- Route candidates via If node (TRUE = pass, FALSE = rejection).
- For failed candidates:
- Use Code node to prepare structured data.
- Send rejection email with Gmail node.
- Log decision with ClickUp task creation node.

**Customization Ideas**

- Replace templated rejection with AI-personalized feedback.
- Store candidate profiles in Notion or Airtable for future reference.
- Send recruiter alerts in Slack/Teams for visibility.
- Adjust scoring threshold per role or interview stage.

**Key Benefits**

 ✅ Automates rejection handling with no manual effort
 ✅ Ensures fair and consistent candidate scoring
 ✅ Maintains candidate experience with polite communication
 ✅ Provides recruiters visibility with ClickUp tracking
 ✅ Simple, lightweight workflow for fast hiring pipelines

**Perfect For**

- HR teams handling high interview volumes
- Companies seeking automated rejection handling
- Startups needing lightweight ATS alternatives
- Recruiters wanting to save time while staying consistent
