# Discover & analyze TikTok influencers with Bright Data, Claude AI & email outreach

> # 🎯 Automated TikTok Influencer Discovery & Analysis

A complete **n8n** automation that discovers TikTok influencers using **Bright Data**, evaluates their fit using **Claude AI**, and sends personalized outreach emails. Designed for marketing teams and brands that need a scalable, intelligent way to find and connect with relevant creators.

---

## 📋 Overview

This workflow provides a full-service influencer discovery pipeline: it finds TikTok profiles using search keywords, uses AI to assess alignment with your brand, and initiates contact with qualified influencers. Ideal for influencer marketing, brand partnerships, and campaign planning.

---

## ✨ Key Features

- **🔍 Keyword-Based Discovery**  
  Locate TikTok influencers by specific niche-related keywords.

- **📊 Bright Data Integration**  
  Access accurate TikTok profile data from Bright Data’s datasets.

- **🤖 AI-Powered Analysis**  
  Claude AI evaluates each profile's fit with your brand based on bio, content, and more.

- **📧 Smart Email Notifications**  
  Sends tailored outreach emails to creators deemed highly relevant.

- **📈 Data Storage**  
  Google Sheets stores profile details, AI evaluation results, and outreach status.

- **🎯 Intelligent Filtering**  
  Processes only influencers who meet your criteria (e.g., 5000+ followers, industry match).

- **⚡ Fast & Reliable**  
  Uses professional scraping with robust error handling.

- **🔄 Batch Processing**  
  Supports bulk influencer processing through a single automated flow.

---

## 🎯 What This Workflow Does

### **Input**

- **Search Keywords** – TikTok terms for finding niche creators  
- **Business Info** – Brand description and industry  
- **Collaboration Criteria** – Follower count minimum, niche alignment

### **Processing Steps**

1. Form Submission  
2. TikTok Discovery via Bright Data  
3. Data Extraction and Normalization  
4. Save to Google Sheets  
5. Relevance Scoring via Claude AI  
6. Filtering Based on AI Score + Follower Count  
7. Personalized Email Outreach

### **Output Data Points**

| Field         | Description                        | Example                          |
|---------------|------------------------------------|----------------------------------|
| Profile ID    | TikTok profile identifier          | tiktoker123456                   |
| Username      | TikTok handle                      | @creativecreator                 |
| URL           | Profile link                       | https://tiktok.com/@creativecreator |
| Description   | Creator bio                        | "Fashion & lifestyle content..." |
| Followers     | Total follower count               | 50,000                           |
| Collaboration | AI assessment of brand fit         | "Highly Relevant"               |
| Analysis      | 50-word Claude AI relevance summary| "Strong alignment with fashion..."|

---

## 🚀 Setup Instructions

### **Prerequisites**

- n8n (cloud or self-hosted)  
- Bright Data account with TikTok access  
- Google Sheets + Gmail  
- Anthropic Claude API key  
- 10–15 minutes setup time

### **Step-by-Step Setup**

1. **Import Workflow** via JSON in n8n  
2. **Configure Bright Data** – Add API credentials and dataset ID  
3. **Google Sheets** – Setup credentials and map columns  
4. **Claude AI** – Insert API key and select desired model  
5. **Gmail** – Authenticate Gmail and update mail node settings  
6. **Update Variables** – Replace placeholders with business info  
7. **Test & Launch** – Submit a sample form and verify all outputs

---

## 📖 Usage Guide

### **Adding Search Keywords**

Submit the form with search terms, business description, and industry category to trigger the workflow.

### **Understanding AI Analysis**

- Emails are sent **only** if:
  - Collaboration status = *Highly Relevant*
  - Follower count ≥ 5000
  - Industry alignment confirmed
- Claude AI returns a 50-word analysis justifying the match

### **Customizing Filters**

Edit the **"Find the Collaborator"** prompt to adjust:
- Follower thresholds
- Industry relevance
- Additional metrics (e.g., engagement rate)

### **Viewing Results**

Google Sheets log includes:
- Influencer metadata
- AI scores and rationale
- Collaboration status
- Email delivery timestamp

---

## 🔧 Customization Options

- **Add More Fields:** Engagement rate, contact email, content themes  
- **Email Personalization:** Customize message templates or integrate other mail services  
- **Enhanced Filtering:** Use engagement rates, region, content frequency

---

## 🚨 Troubleshooting

| Issue | Fix |
|-------|-----|
| Bright Data fails | Recheck API and dataset ID |
| No influencer data | Adjust keywords or dataset scope |
| Sheets permission error | Re-authenticate and check sharing |
| Claude fails | Validate API key and prompt |
| Emails not sent | Re-auth Gmail or update recipient field |
| Form not triggering | Reconfirm webhook URL and permissions |

### **Advanced Debugging**

- Check n8n execution logs  
- Run individual nodes for pinpointing failures  
- Confirm all data formats  
- Handle API rate limits  
- Add error-catch nodes for retries

---

## 📊 Use Cases & Examples

- **Brand Discovery:** Fashion, tech, fitness creators  
- **Competitor Insights:** Find influencers used by rival brands  
- **Campaign Planning:** Build targeted influencer lists  
- **Market Research:** Identify creator trends across regions

---

## ⚙️ Advanced Configuration

- **Batch Execution:** Process multiple keywords with delay logic  
- **Engagement Metrics:** Scrape and calculate likes-to-follower ratios  
- **CRM Integration:** Sync qualified profiles to HubSpot, Salesforce, or Slack

---

## 📈 Performance & Limits

- **Processing Time:** 3–5 minutes per keyword  
- **Concurrency:** 3–5 simultaneous fetches (depends on plan)  
- **Accuracy:** >95% influencer data reliability  
- **Success Rate:** 90%+ for outreach and processing

## 📊 Basic Information

- **Workflow ID:** 4774
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 3358
- **Downloads:** 335
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4774)

## 👤 Author

- **Name:** Dvir Sharon
- **Username:** @dvirsharon

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **code** 
- **googleSheets** (×2)
- **filter** 
- **gmail** 
- **httpRequest** (×2)
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×11)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
