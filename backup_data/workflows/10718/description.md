# Automate Google Ads Search Term Analysis and Send Insights to Slack

Stop manually digging through endless Google Ads search term reports! 📊 This workflow puts your brand campaign analysis on autopilot, acting as an AI-powered performance marketer that works for you 24/7.

This template fetches your recent search term data, uses AI to identify wasted ad spend and new keyword opportunities, and delivers a concise, actionable report directly to your Slack channel—complete with buttons to approve the changes.

## ⚙️ How it works
This workflow connects to your Google Ads account to pull search term data from your brand campaigns. It then feeds this data to Google Gemini with a specific prompt to:
- Identify Non-Brand Keywords: Isolate all search terms that are not related to your brand.
- Calculate Wasted Spend: Find terms with zero conversions and sum up the total cost.
- Flag Opportunities: Highlight non-brand terms that are converting for manual review.
- Send to Slack: Format the findings into a beautiful, easy-to-read Slack message with interactive buttons to approve adding the wasteful terms as negative keywords.

## 👥 Who’s it for?
- PPC & SEM Managers: Save hours each week by automating the search query mining process.
- Performance Marketers: Instantly spot and plug budget leaks in your brand campaigns.
- Digital Marketing Agencies: Provide proactive, data-driven insights to clients with zero manual effort.

## 🛠️ How to set up
This is an advanced workflow that requires several connection points.

Setup involves connecting your Google Ads account, providing your Manager and Client IDs, specifying which campaign and brand terms to analyze, configuring the direct API call with your developer token, and finally connecting your Slack workspace.

👉 For a detailed, step-by-step guide, please refer to the yellow sticky note inside the workflow.