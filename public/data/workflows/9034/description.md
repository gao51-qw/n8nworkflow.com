## Good to know:
- The workflow runs every hour with a randomized delay of 5–20 minutes to help distribute load.
- It records the exact date and time a lead is emailed so you can track outreach.
- Follow-ups are automatically scheduled two days after the initial email.

## How it works:

1. After apify completes, the JSON data is retrieved and inserted into the proper JSON node (only the JSON is removed — nothing else).
2. The agent then runs on its own, parsing the data and pushing it to Google Sheets.
3. When a lead is emailed, the system tags it with the date and time for tracking.
4. Two days later the workflow automatically triggers a follow-up, again on an hourly schedule with the same time delay.

## How to use:

1. Start by connecting your apify account to retrieve data.
2. Place the returned JSON into the designated JSON node.
3. Configure your Google Sheet where the data will be stored.
4. Adjust the time delay window or follow-up period if needed.
5. Insert your email credentials and the message.
 
## Requirements:

- Apify account with active leads/data.
- Google Sheet for storing and managing parsed lead information.
- n8n credentials configured for your accounts.
- email credentials

Customising this workflow:

You can easily extend this template to include other CRMs, different time delays, or additional notification steps. For example, push new leads to Slack, send SMS notifications, or trigger downstream analytics dashboards automatically.