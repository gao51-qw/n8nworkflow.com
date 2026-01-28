# Analyze webpages with Landing Page Analyzer AI & generate Google Docs reports

> ##  Analyze Webpages with Landing Page Analyzer AI & Generate Google Docs Reports (CRO)

## Description  
This workflow integrates the [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai) to automatically audit landing pages, format the insights into a conversion-focused report, and save it directly into Google Docs.  
It leverages the [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai)to grade your page, highlight strengths, and suggest improvements—all without manual steps.

---

## Nodes Explanation 

1. **On form submission**  
   Captures the URL of the landing page entered by the user to trigger the workflow.  
   Serves as the entry point to pass the URL to the [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai).

2. **WebPage Analyzer (API Call via RapidAPI)**  
   Sends the URL to the [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai) for audit data.  
   Retrieves key analytics: grade, score, suggestions, strengths, and conversion metrics.

3. **Reformat (Code Node)**  
   Converts the raw JSON from the [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai) into structured Markdown.  
   Builds sections for grade, overall score, suggestions, strengths, and score breakdown.

4. **Upload In Google Docs**  
   Inserts the formatted Markdown report into a predefined Google Document.  
   Ensures the audit output from the [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai) is saved and shareable.

---

##  Benefits of This Workflow

- **Hands-Free Audits**: Automatically performs a landing page evaluation using the powerful [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai).  
- **Consistent, Professional Reports**: Standardized Markdown formatting ensures clarity and readability.  
- **Effortless Documentation**: Results are directly stored in Google Docs—no manual copying required.  
- **Scalable & Repeatable**: Ideal for continuous optimization across multiple pages or campaigns.

---

##  Use Cases

- **SEO & CRO Agencies**: Quickly generate conversion audit reports using the [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai) to optimize client landing pages at scale.  
- **Marketing Teams**: Automate weekly or campaign-based auditing of landing pages, with results logged in Google Docs for easy sharing and review.  
- **Freelancers & Consultants**: Deliver polished, data-driven conversion reports to clients—powered by [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai) via RapidAPI—without repetitive manual work.  
- **Growth Hackers & Product Managers**: Monitor iterations of landing pages over time; each version can be audited automatically and archived in Docs for comparison.

---

## 🔐 How to Get Your API Key for the Landing Page Analyzer AI API

1. Go to 👉  [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai) 
2. Click **"Subscribe to Test"** (you may need to sign up or log in).
3. Choose a pricing plan (there’s a free tier for testing).
4. After subscribing, click on the **"Endpoints"** tab.
5. Your **API Key** will be visible in the **"x-rapidapi-key"** header.

🔑 Copy and paste this key into the `httpRequest` node in your workflow.
##  Conclusion  
This n8n workflow streamlines landing page optimization by leveraging the [**Landing Page Analyzer AI**](https://rapidapi.com/PrineshPatel/api/landing-page-analyzer-ai), transforming raw audit output into insightful, presentation-ready reports in Google Docs.  
Perfect for teams and individuals focused on data-driven improvements, scalability, and efficiency.

---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)


## 📊 Basic Information

- **Workflow ID:** 7591
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 626
- **Downloads:** 62
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7591)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **code** 
- **googleDocs** 
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
