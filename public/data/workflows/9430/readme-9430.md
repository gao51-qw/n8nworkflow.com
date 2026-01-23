# Analyze email performance & optimize campaigns with GPT-4, SendGrid, and Airtable

> # Analyze email performance and optimize campaigns with AI using SendGrid and Airtable

This n8n template creates an automated feedback loop that pulls email metrics from SendGrid weekly, tracks performance in Airtable, analyzes trends across the last 4 weeks, and generates specific recommendations for your next campaign. The system learns what works and provides data-driven insights directly to your email creation process.

## Who's it for

Email marketers and growth teams who want to continuously improve campaign performance without manual analysis. Perfect for businesses running regular email campaigns who need actionable insights based on real data rather than guesswork.

## Good to know

* After 4-6 weeks, expect 15-30% improvement in primary metrics
* Requires at least 2 weeks of historical data to generate meaningful analysis
* System improves over time as it learns from your audience
* Implementation time: ~1 hour total

## How it works

* Schedule trigger runs weekly (typically Monday mornings)
* Pulls previous week's email statistics from SendGrid (delivered, opens, clicks, rates)
* Updates the previous week's record in Airtable with actual performance data
* GPT-4 analyzes trends across the last 4 weeks, identifying patterns and opportunities
* Creates a new Airtable record for the upcoming week with specific recommendations: what to test, how to change it, expected outcome, and confidence level
* Your email creation workflow pulls these recommendations when generating new campaigns
* After sending, the actual email content is saved back to Airtable to close the loop

## How to set up

1. **Create Airtable base**: Make a table called "Email Campaign Performance" with fields for week_ending, delivered, unique_opens, unique_clicks, open_rate, ctr, decision, test_variable, test_hypothesis, confidence_level, test_directive, implementation_instruction, subject_line_used, email_body, icp, use_case, baseline_performance, success_metric, target_improvement
2. **Configure SendGrid**: Add API key to the "SendGrid Data Pull" node and test connection
3. **Set up Airtable credentials**: Add Personal Access Token and select your base/table in all Airtable nodes
4. **Add OpenAI credentials**: Configure GPT-4 API key in the "Previous Week Analysis" node
5. **Test with sample data**: Manually add 2-3 weeks of data to Airtable or run if you have historical data
6. **Schedule weekly runs**: Set workflow to trigger every Monday at 9 AM (or after your weekly campaign sends)
7. **Integrate with email creation**: Add an Airtable search node to your email workflow to retrieve current recommendations, and an update node to save what was sent

## Requirements

* SendGrid account with API access (or similar ESP with statistics API)
* Airtable account with Personal Access Token
* OpenAI API access (GPT-4)

## Customizing this workflow

* **Use different email platform**: Replace SendGrid node with Mailchimp, Brevo, or any ESP that provides statistics API—adjust field mappings accordingly
* **Add more metrics**: Extend Airtable fields to track bounce rate, unsubscribe rate, spam complaints, or revenue attribution
* **Change analysis frequency**: Adjust schedule trigger for bi-weekly or monthly analysis instead of weekly
* **Swap AI models**: Replace GPT-4 with Claude or Gemini in the analysis node
* **Multi-campaign tracking**: Duplicate the workflow for different campaign types (newsletters, promotions, onboarding) with separate Airtable tables

## 📊 Basic Information

- **Workflow ID:** 9430
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9430)

## 👤 Author

- **Name:** Connor Provines
- **Username:** @connorprovines

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **airtable** (×4)
- **merge** 
- **stickyNote** (×6)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
