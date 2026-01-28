# Analyze competitor keywords with RapidAPI and Google Sheets reporting

> ## 🔍 Analyze Competitor Keywords with RapidAPI and Google Sheets Reporting

## 📄 Description

This n8n workflow streamlines the process of analyzing SEO competitor keywords using the [**Competitor Keyword Analysis API** on RapidAPI](https://rapidapi.com/PrineshPatel/api/competitor-keyword-analysis). It collects a website and country via form submission, calls the API to retrieve keyword metrics, reformats the response, and logs the results into Google Sheets — all automatically.

It is ideal for SEO analysts, marketing teams, and agencies who need a hands-free solution for competitive keyword insights.

---

## 🧩 Node-by-Node Explanation

1. **📝 On form submission (`formTrigger`)**  
   Starts the workflow when a user submits their `website` and `country` through a form.

2. **🌐 Competitor Keyword Analysis (`httpRequest`)**  
   Sends a POST request to the [**Competitor Keyword Analysis API** on RapidAPI](https://rapidapi.com/PrineshPatel/api/competitor-keyword-analysis) with form input to fetch keyword data.

3. **🔄 Reformat Code (`code`)**  
   Extracts the `domainOrganicSearchKeywords` array from the API response for structured processing.

4. **📊 Google Sheets (`googleSheets`)**  
   Appends the cleaned keyword metrics into a Google Sheet for easy viewing and tracking.

---

## 🚀 Benefits of This Workflow

- ✅ **Automates SEO research** using the [**Competitor Keyword Analysis API**](https://rapidapi.com/PrineshPatel/api/competitor-keyword-analysis).
- ✅ **Eliminates manual data entry** — results go straight into Google Sheets.
- ✅ **Scalable and reusable** for any number of websites or countries.
- ✅ **Reformatting logic is built-in**, so you get clean, analysis-ready data.

---

## 💼 Use Cases

1. **Marketing Agencies**  
   Use the [**Competitor Keyword Analysis API**](https://rapidapi.com/PrineshPatel/api/competitor-keyword-analysis) to gather insights for client websites and store the results automatically.

2. **In-house SEO Teams**  
   Quickly compare keyword performance across competitors and monitor shifts over time with historical Google Sheets logs.

3. **Freelancers and Consultants**  
   Provide fast, data-backed SEO reports using this automation with the [**Competitor Keyword Analysis API**](https://rapidapi.com/PrineshPatel/api/competitor-keyword-analysis).

4. **Keyword Research Automation**  
   Make this flow part of a larger system for identifying keyword gaps, content opportunities, or campaign ideas.

---

## 📁 Output Example (Google Sheets)

| keyword       | searchVolume | cpc | competition | position | previousPosition | keywordDifficulty |
|---------------|--------------|-----|-------------|----------|------------------|-------------------|
| best laptops  | 9900         | 2.3 | 0.87        | 5        | 7                | 55                |
---

## 🔐 How to Get Your API Key for the Competitor Keyword Analysis API

1. Go to 👉  [Competitor Keyword Analysis API - RapidAPI](https://rapidapi.com/PrineshPatel/api/competitor-keyword-analysis)  
2. Click **"Subscribe to Test"** (you may need to sign up or log in).
3. Choose a pricing plan (there’s a free tier for testing).
4. After subscribing, click on the **"Endpoints"** tab.
5. Your **API Key** will be visible in the **"x-rapidapi-key"** header.

🔑 Copy and paste this key into the `httpRequest` node in your workflow.

## ✅ Summary

This workflow is a powerful no-code automation tool that leverages the [**Competitor Keyword Analysis API on RapidAPI**](https://rapidapi.com/PrineshPatel/api/competitor-keyword-analysis) to deliver real-time SEO insights directly to Google Sheets — saving time, boosting efficiency, and enabling smarter keyword strategy decisions.

---

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

## 📊 Basic Information

- **Workflow ID:** 7686
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 216
- **Downloads:** 21
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7686)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **googleSheets** 
- **httpRequest** 
- **code** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
