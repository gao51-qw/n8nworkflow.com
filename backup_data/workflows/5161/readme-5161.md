# Enrich LinkedIn profiles with Ghost Genius and Google Sheets (no account needed)

> # LinkedIn Profile Enrichment Automation

**Who is this for?**
This template is perfect for sales teams, recruiters, marketing professionals, and business development specialists who need to gather comprehensive LinkedIn profile data at scale. Ideal for lead generation teams building prospect databases, recruiters sourcing candidate information, sales professionals researching prospects, and marketing teams creating targeted outreach campaigns.

**What problem does this workflow solve?**
Manually collecting detailed information from LinkedIn profiles is incredibly time-consuming and prone to inconsistency. Visiting each profile individually to extract names, job titles, experience, education, skills, and contact details can take hours for even small prospect lists. This automation eliminates the tedious manual data entry while ensuring consistent, comprehensive profile enrichment.

**What this workflow does**
This workflow automatically enriches a list of LinkedIn profile URLs by extracting comprehensive professional data including:
* **Personal details** (first name, last name, headline, location)
* **Professional status** (hiring status, open to work indicators)
* **Network metrics** (connections, followers count)
* **Work experience** (up to 5 most recent positions with company details, dates, and roles)
* **Education background** (up to 3 educational institutions with degrees and dates)
* **Skills and languages** (complete skill sets and language proficiencies)
* **Professional summary** (profile description and bio)

The enriched data is automatically organized and updated in your Google Sheets database with structured formatting for easy analysis and outreach.

**Setup**
1. **Create a Ghost Genius API account** and obtain your API key for cookieless LinkedIn profile scraping
2. **Configure HTTP Request credentials** with Header Auth using your Ghost Genius API key
3. **Set up your Google Sheets database** using the provided template with columns:
   * URL, Firstname, Lastname, Tagline, Location
   * Connections, Followers, Hiring?, Open to work?
   * Summary, Languages, Skills
   * Experience 1-5, Education 1-3
4. **Configure Google Sheets OAuth2 credentials** following n8n's authentication setup guide
5. **Add LinkedIn profile URLs** to the first column of your Google Sheet to begin enrichment
6. **Test the workflow** with a small batch before processing larger lists

**How to customize this workflow**
* **Adjust batch processing settings** to handle larger volumes by modifying the batch size and interval timing
* **Add data validation rules** to filter out incomplete or invalid profiles before processing
* **Integrate with CRM systems** like HubSpot or Salesforce to automatically sync enriched data
* **Set up automated scheduling** to regularly re-enrich profiles and capture profile updates
* **Add email notifications** to alert when enrichment batches are completed or encounter errors
* **Customize data mapping** to include additional profile fields or reorganize the output structure
* **Add duplicate detection** to prevent re-processing the same profiles multiple times

## 📊 Basic Information

- **Workflow ID:** 5161
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 551
- **Downloads:** 55
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5161)

## 👤 Author

- **Name:** Matthieu
- **Username:** @yaznow

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **googleSheets** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
