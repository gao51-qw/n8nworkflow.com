# Extract business emails from Google Maps search results to Google Sheets

> ### This workflow demonstrates how to automate the extraction of business emails from Google Maps results using a specific keyword. It streamlines the process of finding, filtering, and saving contact emails into a Google Sheet, eliminating the need for tedious manual research.

This tool is perfect for those who need to collect business email addresses for outreach, research, or marketing purposes, especially those whose success depends on building and managing business relationships at scale.
- **Sales and Lead Generation Teams**: Quickly build targeted business email lists for efficient cold outreach and follow-up.
- **Marketing Agencies and Freelancers**: Effortlessly gather contact details for potential clients in specific niches or locations to power outreach campaigns.
- **Recruiters and Talent Acquisition Specialists**: Easily collect company contacts to connect with HR or hiring managers in targeted industries or regions.
- **Event Organizers and B2B Promoters**: Rapidly compile relevant business emails for event invitations, sponsorship proposals, or promotional efforts.
- **Market Researchers and Data Analysts**: Automate large-scale collection of business emails to support industry analysis and data-driven research.

## How It Works
- A target keyword (e.g., “n8n workflow”) should be entered in Node **Fields - Set Keyword / Phrase**.
- Then, the process is triggered by clicking **Test Workflow** or **Execute Workflow**.
- The workflow queries Google Maps, collects keyword-related website URLs from its HTML, and filters for only valid website URLs.
- Next, it removes duplicate website URLs to ensure each is processed only once later.
- For every unique valid website URL, the workflow sends an HTTP request to extract all potential email addresses from the website’s content in a loop.
- After that, the emails are passed through another loop and a code node (**Code – Match Email**) to ensure each one is a valid, properly formatted email address (not just random text). Any invalid emails are filtered out during this step.
- All valid emails are then collected and prepared for further processing.
- The workflow then splits out the results and removes any duplicate emails to ensure each address appears only once.
- Finally, the list of unique, verified emails (directly related to your chosen keyword) is saved to your connected Google Sheet for easy access and follow-up.

## How To Set Up
- Download the working package.
- Import the package into your n8n interface.
- Duplicate the [**Google Maps - Crawl Emails By Keyword Google Sheets template**](https://docs.google.com/spreadsheets/d/17y_MmRHfBbW67bVyRuep1hkpoh2BV3yF5_Woxt0W9kk/edit?gid=0#gid=0) into your Google Sheets account. 
- Set up necessary credentials in Google Cloud Console for Google Sheets access and usability in Node **Google Sheets - Update Data**.
- Set up a GET method to access Google Maps in Node **HTTP Request - Get Sites**.
- Enter your desired keyword or phrase in Node **Fields - Set Keyword / Phrase**.
- Start the workflow in n8n.
- Wait a few minutes for the process to finish.
- Check the list of all valid emails related to your keyword/phrase in the connected Google Sheet.

## Requirements
- Basic setup in **Google Cloud Console** (OAuth or API Key method enabled) with enabled access to **Google Sheets**.
- Access to **Google Maps**.

## How To Customize
- **Adjust the Keyword Input**: You can easily change the keyword or phrase you want to search for by editing the second node, **Fields – Set Keyword / Phrase**, in your n8n workflow.
- **Add Follow-up Steps**: Modify the workflow to even trigger follow-up actions like sending emails automatically.
## Need Help?
If you need a step-by-step guide to set up this workflow or want it customized for your specific business needs, feel free to reach out to [**Agent Circle**](https://www.agentcircle.ai/). We’re always here to support and help you to bring automation ideas to life.
Join our community on different platforms for assistance, inspiration and tips from others.
Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle







## 📊 Basic Information

- **Workflow ID:** 6085
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 603
- **Downloads:** 60
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6085)

## 👤 Author

- **Name:** Agent Circle
- **Username:** @agentcircle

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **filter** 
- **aggregate** 
- **splitOut** 
- **removeDuplicates** (×2)
- **googleSheets** 
- **splitInBatches** (×2)
- **httpRequest** (×2)
- **stickyNote** (×6)
- **code** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
