# 🕸️ Dynamic Website Change Monitor with Smart Email Alerts

Never miss important website updates again! This workflow automatically tracks changes on dynamic websites (think React apps, JavaScript-heavy sites) and sends you instant email notifications when something changes. Perfect for keeping tabs on competitors, monitoring product updates, or staying on top of important announcements.

## ✨ What makes this special?

🚀 **Handles Dynamic Websites**: Uses Firecrawl API to scrape JavaScript-rendered content that basic scrapers can't touch
📧 **Smart Email Alerts**: Only sends notifications when content actually changes (no spam!)
📊 **Historical Tracking**: Keeps a complete log of all changes in Google Sheets
🛡️ **Bulletproof**: Continues working even if one part fails
⚡ **Ready to Deploy**: Webhook-triggered, perfect for cron jobs or external schedulers

## 🎯 Perfect for monitoring:
- Competitor pricing pages
- Job board postings
- Product availability updates  
- News sites for breaking stories
- API documentation changes
- Terms of service updates

## 🛠️ What you'll need to get started:

### API Accounts & Keys:
1. **Firecrawl Account** 🔥
   - Sign up at [firecrawl.dev](https://firecrawl.dev)
   - Grab your API key from the dashboard
   - Create a "Bearer Auth" credential in n8n

2. **Google Cloud Setup** ☁️
   - Enable Google Sheets API
   - Enable Gmail API  
   - Set up OAuth2 credentials
   - Add both as credentials in n8n

3. **Google Sheets Document** 📋
   - Create a new spreadsheet
   - Add two tabs: "Log" and "comparison"
   - Follow the structure outlined in the workflow notes

## 🚀 How it works:

1. **Webhook receives trigger** → Starts the monitoring process
2. **Firecrawl scrapes website** → Gets fresh content (even JavaScript-rendered!)
3. **Smart comparison** → Checks against previously stored content
4. **Change detected?** → If yes, send email + log everything
5. **Update storage** → Prepares for next monitoring cycle

## ⚙️ Setup Steps:

1. **Import this workflow** into your n8n instance
2. **Configure credentials** for Firecrawl, Google Sheets, and Gmail
3. **Update the target URL** in the Firecrawl node
4. **Set your email address** in the Gmail node
5. **Create your Google Sheets** with the required structure
6. **Test it manually** first, then activate!

## 🎨 Customize it your way:

- **Target any website** by updating the URL
- **Change email templates** to match your style
- **Adjust monitoring frequency** with external cron jobs
- **Switch between markdown/HTML** extraction formats
- **Fine-tune change detection** sensitivity

## 🔧 Troubleshooting:

- **Firecrawl errors?** Check your API key and rate limits
- **Google Sheets issues?** Verify OAuth permissions and sheet structure  
- **Email not sending?** Check Gmail API quotas and spam folders
- **Webhook problems?** Make sure the workflow is activated

Ready to never miss another website change? Let's get this automation running! 🎉