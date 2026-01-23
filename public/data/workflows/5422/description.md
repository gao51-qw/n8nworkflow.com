## 🎯 PT Clinic AI Email Sequence Generator



## 🧠 What it does

This automation generates personalized cold email sequences for uncontacted physical therapy clinics, pulling lead info from Google Sheets and using GPT-4 to create 4 highly-targeted outreach emails — all tailored for the PT industry.

✅ Key Benefits

Saves 25–40 hours/week of manual email writing
Delivers niche, pain-point-driven messages to PT clinic directors
Auto-updates your campaign sheet with verified, ready-to-send sequences
Scales cold outreach with quality and speed
## ⚙️ How it works

Fetch Prospects
Pulls leads from a Google Sheet tab (e.g. Sports & Orthopedic PT)
Filters only those with Email Sent Status = "No"
Batch Processing
Runs one lead at a time to avoid API throttling and preserve accuracy
AI-Powered Generation
GPT-4 generates a 4-part email sequence:
Email 1: Pain point + intro
Email 2: Social proof (success story)
Email 3: Objection handling
Email 4: Final CTA with opt-out or redirect option
Content Validation
Extracts emails using regex
Checks for name mismatches
Ensures all 4 emails exist before saving
Data Update
Auto-saves all email subjects and bodies to Google Sheets
Marks lead as updated and moves on to the next
## 🧾 Requirements

Google Sheets with required fields (link to make a copy is in the workflow)
OpenAI GPT-4 API key
SMTP service (optional, for sending later)
Telegram/Slack bot (optional for alerts)
📦 Output

A fully populated sheet with:

Four cold emails per clinic
Subject lines and message bodies
Quality-checked entries, ready to be scheduled or sent manually
