# Send weekly Google Ads performance reports with GPT-5.1 and Gmail

> Automatically analyzes your Google Ads performance every Monday and sends a comprehensive report to your inbox with AI-powered insights, week-over-week comparisons, and prioritized recommendations to optimize your campaigns.

## **How it works**

**Step 1: Schedule Weekly Analysis**

- Triggers automatically every Monday at midnight
- Can be customized to your preferred schedule
- Initiates the entire data collection and analysis process


**Step 2: Collect Performance Data**

- Fetches last 7 days of Google Ads data via API
- Retrieves previous 7 days of data (days 8-14) for comparison
- Extracts key metrics including impressions, clicks, cost, conversions, CTR, and CPA
- Calculates and summarizes performance for each week
- Identifies top performers, problem campaigns, and efficiency trends
- Merges data to create comprehensive week-over-week comparison


**Step 3: AI-Powered Analysis**

- Aggregates all performance data into a single view
- Sends data to AI Analyst powered by GPT-5.1
- AI analyzes trends, identifies insights, and spots anomalies
- Diagnoses root causes of performance changes
- Generates actionable, prioritized recommendations based on business impact
- Calculates efficiency metrics and budget optimization opportunities


**Step 4: Deliver Insights Report**

- Formats analysis into a professional HTML report
- Emails comprehensive insights directly to your inbox
- Includes executive summary, week-over-week comparison tables, and color-coded metrics
- Provides high/medium/low priority action items
- Ready for immediate action and strategy adjustments

## **What you'll get**

The workflow delivers a comprehensive weekly analysis with:

- **Performance Metrics**: Impressions, clicks, CTR, conversions, cost, CPA, and efficiency trends
- **Week-over-Week Comparison**: Side-by-side analysis with percentage changes and visual indicators
- **Top Performers Analysis**: Detailed breakdown of your best-performing campaigns
- **Issues & Performance Risks**: Identification of campaigns with high spend but zero conversions, declining CTR, or rising CPA
- **AI-Generated Insights**: Intelligent pattern recognition and trend analysis with root cause diagnosis
- **Actionable Recommendations**: Prioritized action items (high/medium/low) with expected impact and risk levels
- **Budget Efficiency Analysis**: Spend allocation recommendations and wasted spend identification
- **Campaign Intelligence**: Clear understanding of what's working and what needs attention
- **Data Confidence Assessment**: Commentary on sample size adequacy and metric reliability
- **Automated Delivery**: Weekly HTML report sent directly to your email without manual effort

## **Why use this**

- **Save time on reporting**: Eliminate 2-3 hours of manual weekly analysis and report creation
- **Never miss insights**: AI catches trends and patterns humans might overlook
- **Consistent monitoring**: Automated weekly reviews ensure you stay on top of performance
- **Data-driven decisions**: Make strategic adjustments based on comprehensive analysis with clear priorities
- **Early problem detection**: Spot performance issues and wasted spend before they impact your budget
- **Optimize continuously**: Regular insights enable ongoing campaign refinement
- **Focus on strategy**: Spend less time analyzing data, more time implementing improvements
- **Scalable intelligence**: Works whether you manage 1 campaign or 100
- **Executive-ready reports**: Professional HTML format suitable for sharing with stakeholders

## **Setup instructions**

Before you start, you'll need:

1. **Google Ads Account & API Access**
   - Go to your Google Ads account at [https://ads.google.com](https://ads.google.com/)
   - Find your Customer ID (XXX-XXX-XXXX format in top-right corner)
   - Get a Developer Token from Google Ads API Center
   - Enable API access for your account

2. **OpenAI API Key** (for GPT-5.1 AI analysis)
   - Sign up at [https://platform.openai.com](https://platform.openai.com/)
   - Navigate to API keys section and create a new key
   - Ensure you have access to GPT-5.1 model

3. **Gmail Account** (for receiving reports)
   - OAuth2 authentication will be used
   - No app password needed

## **Configuration steps:**

1. **Replace Google Ads Customer ID**: 
   - Open both "Get Last Week Data" and "Get Previous Week Data" HTTP Request nodes
   - In the URL field, replace `[Customer ID]` with your actual Customer ID (format: XXX-XXX-XXXX)

2. **Add Developer Token**:
   - In both HTTP Request nodes, add your Google Ads Developer Token to the header parameters

3. **Connect Google Ads OAuth2**: 
   - In both HTTP Request nodes, authenticate with your Google Ads credentials
   - Select your ad account

4. **Connect OpenAI credentials**: 
   - In the "OpenAI Chat Model" node, add your OpenAI API key
   - Verify GPT-5.1 model is selected

5. **Configure email delivery**: 
   - In the "Email Report to User" node, connect your Gmail OAuth2 credentials
   - Update the recipient email address (default: lee@sonalabs.com)
   - Customize subject line if desired

6. **Set your schedule** (optional): 
   - In the "Weekly Trigger" node, configure your preferred day and time
   - Default is Monday at midnight

7. **Test the workflow**:
   - Click "Execute Workflow" to run manually
   - Verify data pulls correctly from Google Ads
   - Check that AI analysis provides meaningful insights
   - Confirm email report arrives formatted correctly

8. **Customize analysis focus** (optional):
   - Open the "AI Analyst" node
   - Adjust the prompt to prioritize specific metrics or goals for your business
   - Modify thresholds for "problem campaigns" in the calculation nodes

9. **Activate automation**: 
   - Enable the workflow to run automatically every Monday
   - Monitor the first few reports to ensure accuracy

---

**Note:** The workflow analyzes the last 7 days vs. the previous 7 days, giving you rolling two-week comparisons every Monday. Adjust the date ranges in the HTTP Request nodes if you need different time periods.

## 📊 Basic Information

- **Workflow ID:** 12288
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 26
- **Downloads:** 2
- **Created:** 2025/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12288)

## 👤 Author

- **Name:** Sona Labs
- **Username:** @sona

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **scheduleTrigger** 
- **stickyNote** (×5)
- **httpRequest** (×2)
- **splitOut** (×2)
- **code** (×2)
- **merge** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
