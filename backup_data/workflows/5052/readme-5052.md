# Track LinkedIn profile changes with Google Sheets & Slack notifications

> # LinkedIn Profile Tracker Automation

## **Who is this for?**
This template is ideal for sales teams, recruiters, business development professionals, and relationship managers who need to monitor changes in their network's LinkedIn profiles. Perfect for agencies tracking client personnel changes, HR teams monitoring talent movements, sales professionals staying updated on prospect job changes, and content teams tracking influencer activity.

## **What problem does this workflow solve?**
Manually checking LinkedIn profiles for updates like job changes, status modifications, profile edits, or latest posts is extremely time-consuming and easy to miss. 
This automation eliminates the need for constant manual monitoring while ensuring you never miss important changes that could signal new business opportunities, relationship updates, or content engagement opportunities.

## **What this workflow does**
This workflow automatically monitors a list of LinkedIn profiles on a weekly schedule, detects any changes in:
- **Personal information** (name, headline, summary)
- **Job status** (hiring/open to work flags)
- **Latest work experience** (new positions, company changes)
- **Recent posts** (latest content activity)

When changes are detected, it immediately sends Slack notifications with before/after comparisons and updates your tracking database to maintain historical records of all profile evolution.

## **Setup**
1. **Create a Ghost Genius API account** and get your API key for LinkedIn profile scraping
2. **Configure HTTP Request nodes** with Header Auth credentials using your Ghost Genius API key
3. **Set up your Google Sheets database** with columns:
   - Firstname, Lastname, LinkedIn URL, ID
   - Tagline, Summary, Latest experience
   - Open to work?, Hiring?, Latest post
4. **Configure Slack webhook integration** for real-time notifications
5. **Set up credentials** for Google Sheets and Slack following n8n documentation
6. **Add LinkedIn profile URLs** to your Google Sheet to start monitoring

## **How to customize this workflow**
- **Modify the schedule trigger** to check profiles daily, bi-weekly, or monthly based on your monitoring needs
- **Customize Slack notification messages** to include additional context, mentions, or custom formatting
- **Add email notifications** alongside Slack alerts for critical changes like job transitions
- **Set up filtered notifications** to only alert on specific types of changes (e.g., job changes only, posts from key influencers)
- **Add post content analysis** to detect mentions of your company or competitors
- **Integrate with CRM systems** to automatically update lead records when profile changes occur

## 📊 Basic Information

- **Workflow ID:** 5052
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 1508
- **Downloads:** 150
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5052)

## 👤 Author

- **Name:** Matthieu
- **Username:** @yaznow

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **if** (×2)
- **googleSheets** (×11)
- **filter** 
- **httpRequest** (×4)
- **switch** 
- **slack** (×8)
- **noOp** 
- **stickyNote** (×5)
- **scheduleTrigger** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
