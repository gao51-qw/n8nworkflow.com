## Description
Automate customer feedback analysis and action planning by integrating Monday.com, Azure OpenAI, Jira, Google Sheets, and Outlook. This workflow classifies customer feedback with AI, calculates business impact, creates Jira tasks for high-priority issues, and sends weekly performance summaries — turning raw feedback into actionable insights. 💬📈🤖

## What This Template Does
- Step 1: Triggers automatically every Monday at 9:00 AM to fetch new customer feedback from Monday.com. ⏰
- Step 2: Normalizes and structures data into consistent fields (title, account, ARR, NPS, etc.). 🧩
- Step 3: Uses Azure OpenAI GPT-4 to classify sentiment and identify feedback themes (e.g., “UI Design,” “App Crash”). 🧠
- Step 4: Calculates a business impact score based on ARR, NPS delta, and sentiment weightings. ⚙️
- Step 5: Creates Jira tasks for high-impact feedback items for product or engineering follow-up. 🎫
- Step 6: Logs all feedback and impact scores into Google Sheets for analytics dashboards. 📊
- Step 7: Generates a professional HTML report summarizing metrics, wins, and risks, then emails it via Outlook. 📧
- Step 8: Sends automated error-alert emails if any node fails during execution. 🚨

## Key Benefits
✅ Converts qualitative feedback into measurable business intelligence
 ✅ Identifies critical customer issues automatically using AI
 ✅ Reduces manual effort in triaging and prioritizing feedback
 ✅ Creates real-time visibility for product and CX teams
 ✅ Provides weekly executive summaries and performance insights

## Features
- Weekly scheduled trigger (every Monday 9 AM)
- Monday.com data fetching and field normalization
- Azure OpenAI GPT-4-based sentiment and theme detection
- Impact scoring combining ARR + NPS + sentiment weighting
- Jira issue creation with context-rich descriptions
- Google Sheets logging for dashboards and historical records
- Outlook HTML email reports for leadership visibility
- Automated Gmail error-notification system

## Requirements
- Monday.com API credentials with board access
- Azure OpenAI GPT-4 API credentials
- Jira Software Cloud API credentials
- Google Sheets OAuth2 credentials with edit permissions
- Microsoft Outlook OAuth2 credentials for email delivery
- Gmail OAuth2 credentials for error alerting

## Target Audience
- Product and CX teams analyzing customer sentiment
- SaaS businesses tracking post-implementation feedback
- Customer-success and support operations teams
- Product managers prioritizing improvements based on impact
- Leadership teams monitoring customer health and satisfaction

## Step-by-Step Setup Instructions
1️⃣ Connect Monday.com API and update your boardId and groupId.
 2️⃣ Configure Azure OpenAI GPT-4 credentials for the AI classifier.
 3️⃣ Set Jira project ID and issue type for ticket creation.
 4️⃣ Link Google Sheets and replace YOUR_SHEET_ID.
 5️⃣ Connect Outlook OAuth2 and add recipient email for reports.
 6️⃣ Configure Gmail OAuth2 for error alerts.
 7️⃣ Adjust the cron expression (0 9 * * 1) to fit your timezone.
 8️⃣ Test the workflow end-to-end with sample data.
 9️⃣ Enable automation for seamless weekly feedback intelligence. ✅