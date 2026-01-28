## 🔗 Automated Semrush Backlink Checker with n8n and Google Sheets

## 📘 Description

This n8n workflow automates backlink data extraction using the [**Semrush Backlink Checker API**](https://rapidapi.com/PrineshPatel/api/semrush-backlink-checker) available on RapidAPI. By submitting a website via a simple form, the workflow fetches both backlink overview metrics and detailed backlink entries, saving the results directly into a connected Google Sheet. This is an ideal solution for SEO professionals who want fast, automated insights without logging into multiple tools.

---

## 🧩 Node-by-Node Explanation

- **On form submission** – Starts the workflow when a user submits a website URL through a web form.
- **HTTP Request** – Sends the URL to the [**Semrush Backlink Checker API**](https://rapidapi.com/PrineshPatel/api/semrush-backlink-checker) using a POST request with headers and form data.
- **Reformat 1** – Extracts high-level backlink overview data like total backlinks and referring domains.
- **Reformat 2** – Extracts individual backlink records such as source URLs, anchors, and metrics.
- **Backlink overview** – Appends overview metrics into the "backlink overflow" tab of a Google Sheet.
- **Backlinks** – Appends detailed backlink data into the main "backlinks" tab of the same Google Sheet.

---

## ✅ Benefits of This Workflow

- **No-code integration**: Built entirely within n8n—no scripting required.
- **Time-saving automation**: Eliminates the need to manually log in or export reports from Semrush.
- **Centralized results**: All backlink data is organized in Google Sheets for easy access and sharing.
- **Powered by RapidAPI**: Uses the [**Semrush Backlink Checker API**](https://rapidapi.com/PrineshPatel/api/semrush-backlink-checker) hosted on RapidAPI for fast, reliable access.
- **Easily extendable**: Can be enhanced with notifications, dashboards, or additional data enrichment.

---

## 🛠️ Use Cases

- 📊 **SEO Audit Automation** – Auto-generate backlink insights for multiple websites via form submissions.
- 🧾 **Client Reporting** – Streamline backlink reporting for SEO agencies or consultants.
- 📥 **Lead Capture Tool** – Offer a free backlink analysis tool on your site to capture leads while showcasing value.
- 🔁 **Scheduled Backlink Monitoring** – Modify the trigger to run on a schedule for recurring reports.
- 📈 **Campaign Tracking** – Monitor backlinks earned during content marketing or digital PR campaigns.

---

## 🔐 How to Get Your API Key for the Competitor Keyword Analysis API

1. Go to 👉  [Semrush Backlink Checker API - RapidAPI](https://rapidapi.com/PrineshPatel/api/semrush-backlink-checker)  
2. Click **"Subscribe to Test"** (you may need to sign up or log in).
3. Choose a pricing plan (there’s a free tier for testing).
4. After subscribing, click on the **"Endpoints"** tab.
5. Your **API Key** will be visible in the **"x-rapidapi-key"** header.

🔑 Copy and paste this key into the `httpRequest` node in your workflow.

---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!