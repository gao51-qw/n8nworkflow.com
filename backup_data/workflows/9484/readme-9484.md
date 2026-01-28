# Generate personalized and aggregate survey reports with Jotform and Gemini AI

> # Generate Personalized & Aggregate Survey Reports with Jotform and Gemini AI

## Overview
Automatically transform Jotform survey responses into intelligent, professional reports. This workflow generates personalized insights for each respondent and statistical summaries for administrator, all hands-free.

## Who Should Use This
- Survey managers needing automated report generation
- Market researchers analyzing response data
- Product teams collecting customer feedback
- Organizations using Jotform without built-in analytics

## What It Does

**Two-Part Report System:**

1. **Personal Reports (Instant)**
   - Triggers immediately when respondent submits survey
   - AI analyzes their individual responses using Google Gemini
   - Generates customized insights and recommendations
   - Sends professional HTML report to respondent's email

2. **Weekly Aggregate Reports (Scheduled)**
   - Runs automatically every week
   - Collects all survey submissions
   - Calculates statistics, percentages, and trends
   - Identifies patterns across all respondents
   - Sends comprehensive analysis to admin

## Key Features

✓ Real-time personal report generation  
✓ Intelligent AI-powered analysis (Google Gemini)  
✓ Professional HTML email formatting  
✓ Automatic weekly summaries  
✓ Statistical analysis and trend identification  
✓ Zero manual processing required  
✓ Fully customizable prompts and styling  
✓ Works with any Jotform survey structure  

## Setup Requirements

- **Jotform** account with active survey form [Get Jotform from here](https://www.jotform.com/?partner=roshanramanidev)
- **n8n** instance (cloud or self-hosted)
- **Google Gemini API** key 
- **Gmail** account (for sending reports)
- **Jotform API** key

## What You Get in Reports

### Personal Reports Include:
- **Respondent Profile** – Auto-extracted demographics (age, role, location, email)
- **Key Insights** – 3-4 AI-generated insights specific to their responses
- **Personalized Recommendations** – 3-4 actionable suggestions based on their answers
- **Professional Formatting** – HTML-styled email with your branding colors
- **Mobile Responsive** – Looks great on all devices

**Fully Customizable:**
- Edit the AI prompt to generate different types of insights
- Change HTML styling (colors, fonts, layout)
- Add/remove sections (logos, footers, additional analysis)
- Adjust the tone (professional, casual, technical, etc.)
- Include custom branding and messaging

### Aggregate Reports Include:
- **Total Respondents Count** – How many submissions in the period
- **Demographic Breakdown** – Distribution of respondent profiles
- **Response Statistics** – Percentages and frequencies for each question
- **Answer Distribution** – Most popular choices across all responses
- **Trend Analysis** – Patterns and correlations in the data
- **Key Findings** – Top 5-7 insights from all responses combined
- **Statistical Metrics** – Averages, frequencies, comparisons

**Fully Customizable:**
- Choose which statistics to calculate and display
- Change how data is visualized and presented
- Customize report styling and branding
- Adjust analysis depth and metrics focus
- Add custom sections for your specific needs
- Modify HTML layout and design

## How Reports Look

### Personal Report Structure (Email):
```
Header: Professional gradient background with thank you message
Section 1: Respondent Details (extracted from survey)
Section 2: Key Insights (AI-generated from their responses)
Section 3: Recommendations (personalized suggestions)
Footer: Thank you message and company info
```

### Aggregate Report Structure (Email):
```
Header: Report title and date range
Section 1: Total respondent count and demographics
Section 2: Question-by-question response breakdown
Section 3: Statistical analysis and trends
Section 4: Key findings and patterns discovered
Section 5: Actionable insights for decision-makers
Footer: Next report date and company branding
```


## Quick Start

1. Get your Jotform Form ID and API key
2. Enable Google Gemini API and create API key
3. Set up Gmail OAuth2 credentials in n8n
4. Import this workflow
5. Add your credentials to the nodes
6. Test with a sample survey submission

*Complete setup instructions are included in the workflow as an expandable sticky note.*

## Workflow Logic

```
PERSONAL REPORTS:
Survey Submission
    ↓
Collect Response Data
    ↓
AI Analysis & Insights Generation
    ↓
Create Styled HTML Report
    ↓
Send to Respondent Email

AGGREGATE REPORTS:
Weekly Schedule Triggers
    ↓
Fetch All Submissions
    ↓
Statistical Analysis & Trend Detection
    ↓
Generate Insights from All Data
    ↓
Create Summary HTML Report
    ↓
Send to Admin Email
```

## Use Cases

- **Customer Feedback Surveys** – Analyze responses, send personalized insights
- **Product Research** – Track trends across respondents weekly
- **Market Research** – Automated statistical reporting
- **Employee Surveys** – Personalized feedback + company trends
- **Event Feedback** – Instant attendee insights + organizer summary
- **Customer Satisfaction (NPS)** – Personalized follow-ups + trend analysis
- **Lead Qualification** – Auto-analyze prospect responses and route accordingly



## 📊 Basic Information

- **Workflow ID:** 9484
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 112
- **Downloads:** 11
- **Created:** 2025/10/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9484)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **jotFormTrigger** 
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **gmail** (×2)
- **scheduleTrigger** 
- **httpRequest** 
- **splitOut** 
- **set** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
