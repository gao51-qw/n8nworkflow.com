## Introduction
Automate candidate evaluation from CV submission to interview booking. Perfect for HR teams and recruiters.
## How It Works
Webhook receives CVs, extracts Airtable data, AI assesses qualifications, filters candidates, sends emails, schedules Google Calendar interviews, and updates records.
## Workflow Template
Webhook → Airtable (Get Data) → AI Extract CV → AI Assessment → Filter Qualified → Generate Email → Send Email → Filter Interview Candidates → Schedule Calendar → Update Airtable → Slack Notification → Respond
## Workflow Steps
1. Receive & Store: Webhook receives CVs, saves to Airtable.
2. Fetch & Download: Gets job criteria, downloads CVs.
3. AI Assessment: Parses skills, scores candidates.
4. Filter & Email: Routes qualified, sends messages.
5. Schedule & Update: Books interviews, updates Airtable.
6. Notify: Alerts via Slack, confirms status.
## Setup Instructions
1. **Webhook & Airtable:** Set URL, create tables, add credentials.
2. **AI Configuration:** Add OpenAI key, define schema, customize scoring.
3. **Communication:** Connect Gmail, Calendar, and Slack.
## Prerequisites
- Airtable account
- OpenAI API key
- Gmail and Google Calendar
- Slack workspace (optional)
## Customization
- Multi-stage scheduling
- ATS integration (Greenhouse, Lever)
## Benefits
- Reduces screening time by 90%
- Ensures uniform evaluation
- Cuts time-to-hire by 60%