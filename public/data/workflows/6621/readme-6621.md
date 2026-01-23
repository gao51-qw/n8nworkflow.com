# Instagram influencer finder with Bright Data (Auto-Filter & Save to Sheets)

> This workflow automatically identifies and qualifies Instagram influencers based on your marketing criteria. It saves you hours of manual research by automatically filtering profiles that meet specific engagement, follower, and verification requirements, then storing qualified leads directly in Google Sheets.

## Overview
This workflow uses Bright Data to scrape Instagram profile data, then applies smart filters to identify high-quality influencers or brand accounts. Only profiles that meet all your criteria (verified status, follower count, engagement rate, and account type) are saved to your lead database, keeping your list clean and actionable.

## Tools Used
* **n8n**: The automation platform that orchestrates the workflow
* **Bright Data**: For scraping Instagram profile data without restrictions
* **Google Sheets**: For storing qualified influencer leads and profile data

## How to Install
1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the Instagram scraping node
3. **Configure Google Sheets**: Connect your Google Sheets account and copy the template spreadsheet
4. **Customize Filters**: Adjust the criteria (followers, engagement rate, etc.) to match your needs
5. **Run**: Simply paste any Instagram profile URL and execute the workflow

## Use Cases
* **Influencer Marketing**: Build a database of qualified influencers for campaigns
* **Brand Partnerships**: Identify potential brand collaboration opportunities
* **Competitor Analysis**: Track competitor accounts and their engagement metrics
* **Lead Generation**: Find business accounts in your niche for B2B outreach
* **Market Research**: Analyze account types and engagement patterns in your industry

## Connect with Me
* **Website**: https://www.nofluff.online
* **YouTube**: https://www.youtube.com/@YaronBeen/videos
* **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
* **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #influencermarketing #instagram #brightdata #webscraping #leadgeneration #n8nworkflow #workflow #nocode #instagrammarketing #influenceroutreach #socialmediastrategy #brandpartnerships #marketingautomation #instagramanalytics #influencerdatabase #contentcreators #digitalmarketing #socialmediatools #influencerresearch #instagramleads #marketingtools #influenceridentification #instagramscraping #leadqualification #influencerengagement #brandcollaboration #instagramautomation #marketingdatabase

## 📊 Basic Information

- **Workflow ID:** 6621
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1398
- **Downloads:** 139
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6621)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@brightdata/n8n-nodes-brightdata.brightData** 
- **if** 
- **googleSheets** 
- **noOp** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
