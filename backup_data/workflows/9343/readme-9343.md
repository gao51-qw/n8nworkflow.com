# Monitor iOS App Store reviews & send email notifications automatically

> # iOS App Store Review Monitor & Notifier – Automated User Feedback Tracking

This workflow runs on a scheduled basis (default: every 6 hours, customizable) and **monitors new App Store reviews for your iOS apps.** It fetches reviews via Apple’s iTunes RSS API, filters only new reviews since the last run and sends **real-time notifications** to your team via email, Slack, Telegram or other channels.

Never miss important user feedback again.

## Who’s it for
- **iOS developers** tracking user sentiment and bug reports.
- Product managers monitoring **customer satisfaction** and feature requests.
- Customer support teams responding quickly to complaints and issues.
- Marketing teams collecting testimonials and case studies from positive reviews.
- DevOps teams automating review monitoring as part of release processes.

## How it works
- **Schedule Trigger** runs every 6 hours (cron configurable).
- **App Configuration:** Define monitored apps with {appId, country, lang}.
- **Fetch Reviews:** Call Apple’s iTunes RSS API for latest customer reviews.
- **Extract & Parse:** Convert JSON into structured review data (rating, content, author, date, version).
- **Filter New Reviews:** Compare with last run using timestamps → only new reviews pass.
- **Format Notifications:** Build rich messages with review details.
- **Send Alerts:** Deliver via Email, Slack, Telegram, Teams, etc.
- **Track State:** Last check time to prevent duplicates.

## How to set up
1. **Find your App Store ID**

Go to your app’s App Store page.

**Example URL:** https://apps.apple.com/us/app/app-name/id123456789

The number after id is the App Store ID (123456789).

2. **Configure App Settings**

In the App Config node set:

appId = App Store ID
country = Country code (us, gb, de, etc.)
lang = Language code (en, es, fr, etc.)

3. **Set Up Notifications**

Choose your notification method:

**Email:** configure Gmail/SMTP credentials
**Slack:** add Slack webhook URL
**Telegram:** set up bot token + chat ID
**Teams:** configure Teams webhook

4. **Customize Schedule**

In the Schedule Trigger node:

Every 6 hours → 0 */6 * * *
Daily at 9 AM → 0 9 * * *
Every 2 hours → 0 */2 * * *

5. **Test the Workflow**

Use a known App ID (e.g., WhatsApp: 310633997) for testing.

Run manually to verify notifications are formatted correctly.

## Requirements

- n8n (cloud or self-hosted) with HTTP Request + notification nodes.
- **App Store ID** for each monitored app.
- Notification credentials (Email, Slack, Telegram, etc.).
- Internet access to query Apple’s iTunes API.

## How to customize the workflow

- **Multiple Apps**
- **Monitor multiple apps by extending config:**
[
{appId: "310633997", country: "us", lang: "en"},
{appId: "389801252", country: "gb", lang: "en"},
{appId: "544007664", country: "de", lang: "de"}
]
- **Notification Templates**

## Add-ons to level up

- **Sentiment Analysis:** AI-based scoring per review.
- **Auto-Reply Integration:** Respond via App Store Connect API.
- **Analytics Dashboard:** Store in Sheets/Airtable for trends.
- **Competitor Monitoring:** Track rival app reviews.
- **Translation:** Auto-translate to English.
- **Escalation Rules:** Different alerts by rating severity.

## Common Troubleshooting

- **No reviews returned** → app may not have recent reviews, try other country codes.
- **JSON parsing errors** → check App Store ID validity.
- **Duplicate notifications** → confirm time filtering works correctly.
- **API rate limits** → Apple may throttle, add delays.
- **Missing metadata** → some apps don’t return all fields.

## Need Help?
If you’d like to customize this automation flow to suit your needs, write to our n8n automation team at WeblineIndia and we’ll adapt the template to your exact use case.

## 📊 Basic Information

- **Workflow ID:** 9343
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 403
- **Downloads:** 40
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9343)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×2)
- **if** 
- **set** (×2)
- **httpRequest** 
- **stickyNote** (×4)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
