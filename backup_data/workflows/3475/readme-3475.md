# LinkedIn company ICP scoring automation with Airtop & Google Sheets

> ### About The ICP Company Scoring Automation

Sorting through lists of potential leads manually to determine who's truly worth your sales team's time isn't just tedious, it's incredibly inefficient. Without proper qualification, your team might spend hours pursuing prospects who aren't the right fit for your product, while ideal customers slip through the cracks.

### How to Automate Identifying Your Ideal Customers

With this automation, you'll learn how to automatically score and prioritize leads using data extracted directly from LinkedIn profiles via Airtop's integration with n8n. By the end, you'll have a fully automated workflow that analyzes prospects and calculates an Ideal Customer Profile (ICP) score, helping your sales team focus on high-potential opportunities.

### What You'll Need

- A free [Airtop API key](https://portal.airtop.ai/?utm_campaign=n8n)
- A copy of [this](https://docs.google.com/spreadsheets/d/1O69nQkKr4fyWl5AQUrX7y-nwPCMDeFwp-2swG0YW6Cg/copy) Google Sheets

### Understanding the Process

This automation transforms how you qualify and prioritize leads by extracting real-time, accurate information directly from LinkedIn profiles. Unlike static databases that quickly become outdated, this workflow taps into the most current professional information available.

The workflow in this template:

- Uses Airtop to extract comprehensive LinkedIn profile data
- Analyzes the data to calculate an ICP score based on AI interest, technical depth, and seniority
- Updates your Google Sheet with the enriched data and the ICP Company score


### Company ICP Scoring Workflow

Our company-focused workflow analyzes company LinkedIn profiles with a comprehensive set of criteria:

 - Company Identity Extraction
 - Company Scale Assessment
 - Business Classification
 - Technical Sophistication Assessment
 - Investment Profile

To then calculate the ICP Scoring, it will focus on:

- AI Implementation Level: Low-5 pts, Medium-10 pts, High-25 pts
- Technical Sophistication: Basic-5 pts, Intermediate-15 pts, Advanced-25 pts, Expert-35 pts
- Employee Count: 0-9 employees-5 pts, 10-150 employees-25 pts, 150+ employees-30 pts
- Automation Agency Status: True-20 pts, False-0 pts
- Geography: US/Europe Based-10 pts, Other-0 pts


### Setting Up Your Automation

We've created ready-to-use templates for both person and company ICP scoring. Here's how to get started:

#### Configure your connections

- Connect your Google Sheets account
- Add your Airtop API key (obtain from the [Airtop dashboard](https://portal.airtop.ai/api-keys))

#### Set up your Google Sheet

- Ensure your Google Sheet has the necessary columns for input data and result fields
- Ensure that columns Linkedin_URL_Company and ICP_Score_Company exist at least

#### Configure the Airtop module

- Set up the Airtop module to use the appropriate LinkedIn extraction prompt
- Use our provided prompt that extracts company profile data

### Customization Options

While our templates work out of the box, you might want to customize them for your specific needs:

- Modify the ICP scoring criteria: Adjust the point values or add additional criteria specific to your business
- Add notification triggers: Set up Slack or email notifications for high-value leads that exceed a certain ICP threshold
- Implement batch processing: Modify the workflow to process leads in batches to optimize performance
- Add conditional logic: Create different scoring models for different industries or product lines
- Integrate with your CRM: Integrate this automation with your preferred CRM to get the details added automatically for you

### Real-World Applications

Here's how businesses are using this automation:

**AI Sales Platform**: A B2B AI company could implement this workflow to process their trade show lead list of contacts. Within hours, they can identify the top 50 prospects based on ICP score.

**SaaS Analytics Tool**: A SaaS company could implement LinkedIn enrichment to identify which companies fit best. The automation processes weekly leads and categorizes them into high, medium, and low priority tiers, allowing their sales team to focus on the most promising opportunities first.

### Best Practices

To get the most out of this automation:

- Review and refine your ICP criteria quarterly: What constitutes an ideal customer may evolve as your product and market develop
- Create tiered follow-up processes: Develop different outreach strategies based on ICP score ranges
- Perform regular data validation: Periodically check the accuracy of the automated scoring against your actual sales results

### What's Next?

Now that you've automated your ICP scoring with LinkedIn data, you might be interested in:

- Setting up automated outreach sequences based on ICP score thresholds
- Creating custom reporting dashboards to track conversion rates by ICP segment
- Expanding your scoring model to include additional data sources
- Implementing lead assignment automation based on ICP scores


Happy automating!

## 📊 Basic Information

- **Workflow ID:** 3475
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 454
- **Downloads:** 45
- **Created:** 2025/4/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3475)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **airtop** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
