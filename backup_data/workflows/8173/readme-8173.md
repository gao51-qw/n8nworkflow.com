# Automate LinkedIn job alerts with J-Search API and SMTP email notifications

> ## **Automate LinkedIn Job Alerts with Google Sheets, J-Search (RapidAPI), and SMTP**

---

## **Description**
Fetch LinkedIn-style job listings from the J-Search API using predefined parameters, then deliver a professional HTML job alert digest to your inbox via SMTP. _Get actionable “Apply Now” links in your email—no manual searching required._ ✉️💼

## **What This Template Does**
- **Manual Trigger:** Initiates the workflow on demand.  
- **Set Preferences:** Captures job search parameters (role, date, page count, country, language) from a Set node.  
- **Job Listing Extraction:** Uses HTTP Request to J-Search API with dynamic parameters from the Set node.  
- **Categorizing Job Listings:** Filters and structures job data (job_id, job_title, employment_type, apply_link) via JavaScript Code node.  
- **Drafting HTML for Mail:** Generates a LinkedIn-themed HTML email with job cards and “Apply Now” buttons.  
- **Sending Job Listings via Mail:** Delivers the job alert digest using SMTP, with a dynamic subject line.

## **Key Benefits**
- **Save time** with one-click manual or scheduled alerts. ⏱️  
- Stay organized with clean, mobile-friendly job summaries. 📊  
- Act faster using one-click “Apply Now” links. 🔗  
- Refine job searches using flexible parameters in the workflow. 🧭

## **Features**
- Manual or scheduled workflow execution.  
- Set node for custom job search preferences.  
- HTTP Request node for dynamic API calls.  
- JavaScript nodes for filtering and HTML formatting.  
- LinkedIn-inspired, responsive HTML email.  
- SMTP email delivery with customizable sender/recipient.

## **Requirements**
- n8n instance (cloud or self-hosted). 🧩  
- J-Search API access via RapidAPI; add `x-rapidapi-key` in n8n Credentials. 🔑  
- SMTP email account (e.g., Gmail/Outlook) configured in n8n; set valid From/To addresses. 📧  
- Set node configured with search parameters (`query`, `page`, `num_pages`, `date posted`, `country`, `language`).  
- No Google Sheets integration required in this version (parameters set directly in workflow).

## **Target Audience**
- Job seekers automating their search. 👩‍💼  
- Recruiters streamlining lead discovery. 🧑‍💼  
- HR teams wanting timely candidate outreach. 🧠

## **Step-by-Step Setup Instructions (Concise)**
- Configure the Set node with desired job search parameters.  
- RapidAPI: Subscribe to J-Search API and add the API key in n8n Credentials. 🔑  
- SMTP: Connect your email account in n8n Credentials; set From/To in the workflow. ✉️  
- Import the workflow, assign credentials, and replace placeholders. 📥  
- Rename the email node to **“Sending Job Listings via Mail.”** 🏷️  
- Run manually or schedule with a Cron node as needed. ⏲️

## **Security Best Practices**
- **Never hardcode** API keys—use n8n Credentials. 🔐  
- Restrict access to credentials within your workspace. 🛡️  
- Remove personal email addresses before sharing templates. 🧹  
- Monitor executions for failures or anomalies. 📜

## 📊 Basic Information

- **Workflow ID:** 8173
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 87
- **Downloads:** 8
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8173)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×6)
- **set** 
- **emailSend** 
- **code** (×2)
- **httpRequest** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
