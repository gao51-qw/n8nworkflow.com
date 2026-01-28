# AI job relevancy scorer: Search LinkedIn Jobs with GPT-4o-mini & Google Sheets

> ## 🧠 Workflow Overview — AI-Powered Jobs Scraper & Relevancy Evaluator

This workflow automates the process of finding **highly relevant job listings** based on a user’s **resume**, **career preferences**, and **custom filters**. It scrapes fresh job data, evaluates relevance using **OpenAI GPT models**, and automatically appends the results to your **Google Sheet tracker** — while **skipping any jobs already in your sheet**, so you don’t have to worry about duplicates.

Perfect for recruiters, job seekers, or virtual assistants who want to automate job research and filtering.

---

## ⚙️ What the Workflow Does

1. **Takes user input through a form** — including resume, preferences, target score, and Google Sheet link.
2. **Fetches job listings** via an **Apify LinkedIn Jobs API actor**.
3. **Filters and deduplicates results** (removes duplicates and blacklisted companies).
4. **Evaluates job relevancy** using **GPT-4o-mini**, scoring each job (0–100) against the user’s resume & preferences.
5. **Applies a relevancy threshold** to keep only top-matching jobs.
6. **Checks your Google Sheet for existing jobs** and prevents duplicates.
7. **Appends new, relevant jobs** directly into your provided **Google Sheet**.

---

## 📋 What You’ll Get

* A personal **Job Scraper Form** (public URL you can share or embed).
* Automatic **job collection & filtering** based on your inputs.
* **Relevance scoring** (0–100) for each job using your resume and preferences.
* Real-time **job tracking Google Sheet** that includes:

  * Job Title
  * Company Name & Profile
  * Job URLs
  * Location, Salary, HR Contact (if available)
  * Relevancy Score

---

## 🪄 Setup Instructions

### **1. Required Accounts**

You’ll need:

* ✅ **n8n account** (self-hosted or Cloud)
* ✅ **Google account** (for Sheets integration)
* ✅ **OpenAI account** (for GPT API access)
* ✅ **Apify account** (to fetch job data)

---

### **2. Connect Credentials**

In your n8n instance:

1. Go to **Credentials** → **Add New**:

   * **Google Sheets OAuth2 API**

     * Connect your Google account.
   * **OpenAI API**

     * Add your OpenAI API key.
   * **Apify API**

     * Replace `&lt;your_apify_api&gt;` with your apify api key.

2. **Set Up Apify API**
 
    **Get your Apify API key**

   * Visit: https://console.apify.com/settings/integrations

   * Copy your API key.


   **Rent the required Apify actor before running this workflow**

     * Go to: https://console.apify.com/actors/BHzefUZlZRKWxkTck/input

      * Click “Rent Actor”.

Once rented, it can be used by your Apify account to fetch job listings.

---

### **3. Set Up Your Google Sheet**

1. **Make a copy** of this template:
   [📄 Google Sheet Template](https://docs.google.com/spreadsheets/d/1Pabh4GDMc0CBK5S6gn8FxpRgLbyXZVN656JNkBH6f7Y)
2. **Enable Edit Access** for anyone with the link.
3. Copy your sheet’s URL — you’ll provide this when submitting the workflow form.

---

### **4. Deploy & Run**

1. Import this workflow (`jobs_scraper.json`) into your n8n workspace.

2. Activate the workflow.

3. Visit your form trigger endpoint (e.g. `https://your-n8n-domain/webhook/jobs-scraper`).

4. Fill out the form with:

   * Job title(s)
   * Location
   * Contract type, Experience level, Working mode, Date posted
   * Target relevancy score
   * Google Sheet link
   * Resume text
   * Job preferences or ranking criteria

5. Submit — within minutes, new **high-relevance job listings** will appear in your Google Sheet automatically.

---

## 🧩 Example Use Cases

* Automate **daily job scraping** for clients or yourself.
* Filter jobs by **AI-based relevance** instead of keywords.
* Build a **smart job board or job alert system**.
* Support a **career agency** offering done-for-you job search services.

---

## 💡 Tips

* Adjust the “Target Relevancy Score” (e.g., 70–85) to control how strict the filtering is.
* You can add your own **blacklisted companies** in the `Filter & Dedup Jobs` node.


## 📊 Basic Information

- **Workflow ID:** 9418
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 864
- **Downloads:** 86
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9418)

## 👤 Author

- **Name:** Yasir
- **Username:** @deonix-ai

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** (×2)
- **code** (×3)
- **merge** (×2)
- **httpRequest** 
- **formTrigger** 
- **stickyNote** (×7)
- **if** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
