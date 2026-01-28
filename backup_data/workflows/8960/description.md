## Description
Automatically generate multi-jurisdiction tax summaries from Stripe invoices and sync them into Google Sheets with daily reporting. This workflow ensures compliance-ready tax data, detailed breakdowns by country/state/tax rate, and real-time Slack notifications for both success and error handling. 💳📈📢

## What This Template Does
- Triggers daily at 2:00 AM using a scheduled cron. ⏰
- Fetches paid invoices from Stripe (last 30 days). 💳
- Validates data integrity before processing. ✅
- Summarizes taxes by period, country, state, and rate. 🧮
- Formats and logs results in Google Sheets for reporting. 📊
- Sends Slack notifications for both success and failure. 📢

## Key Benefits
- Automated tax compliance reporting. 🧾
- Accurate multi-jurisdiction tracking. 🌍
- Eliminates manual spreadsheet work. ⏱️
- Maintains a historical audit trail. 📋
- Real-time notifications keep your team informed. 🔔
- Built-in error handling ensures reliability. 🛡️

## Features
- Daily cron schedule (0 2 * * *).
- Stripe invoices fetched with expanded tax amounts.
- Intelligent grouping by period, country, state, and tax rate.
- Google Sheets integration with append/update logic.
- Success Slack message: summary totals, record count, period.
- Error Slack message: troubleshooting guidance and failure logs.
- Uses environment variables for secure configuration (GOOGLE_SHEETS_DOCUMENT_ID, SLACK_CHANNEL_ID).

## Requirements
- n8n instance (cloud or self-hosted).
- Stripe API credentials with invoice read access.
- Google Sheets OAuth2 credentials with write access.
- Slack API credentials with chat:write permissions.
- Proper tax configuration in Stripe for accurate reporting.

## Target Audience
- Finance teams handling recurring billing and tax filings. 💼
- Accountants needing automated jurisdiction tax breakdowns. 📊
- SaaS businesses managing global customers. 🌐
- Agencies and SMEs streamlining monthly tax reporting. 🏢
- Remote teams requiring real-time workflow notifications. 📲

## Step-by-Step Setup Instructions
- Configure Stripe API credentials in n8n.
- Set up Google Sheets with a “Tax Summary” sheet (columns: period, country, state, tax rate, taxable amount, tax collected, processing date).
- Configure Slack API credentials and channel ID (e.g., tax-reports).
- Replace hardcoded values with environment variables for security.
- Import this workflow JSON into n8n.
- Run once manually with test invoices to validate.
- Enable the workflow for daily automated reporting. ✅
