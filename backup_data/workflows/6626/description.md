*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# How it works

This workflow automatically analyzes property maintenance costs by scraping contractor websites and provides comprehensive budget planning and recommendations.

## Key Steps

1. **Scheduled Trigger** - Runs weekly to update maintenance cost data from multiple sources.
2. **Multi-Source Scraping** - Uses ScrapeGraphAI to extract service data from plumbing, electrical, and HVAC contractor websites.
3. **Cost Analysis** - JavaScript nodes process and categorize services by price level and urgency.
4. **Service Comparison** - Compares providers within each category to find best-rated and most cost-effective options.
5. **Budget Planning** - Creates annual budget with quarterly breakdown and service scheduling recommendations.
6. **Property Manager Alerts** - Formats comprehensive reports with budget summaries and actionable recommendations.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping.
2. **Customize contractor websites** - Update the URLs in the scraping nodes to target specific local contractor directories.
3. **Adjust schedule frequency** - Modify the trigger timing based on how often you want cost updates.
4. **Review budget parameters** - Customize the budget planning logic in the JavaScript nodes if needed.
5. **Test the workflow** - Run manually first to ensure all scraping and analysis nodes work correctly.

## Technologies Used

- **ScrapeGraphAI** - For extracting structured data from contractor websites
- **JavaScript Code Nodes** - For data processing, cost analysis, and budget planning
- **Schedule Trigger** - For automated weekly execution
- **JSON Data Processing** - For structured data handling and analysis
