# SEO competitor analysis with RapidAPI and Google Sheets logging

> ## Automated SEO Competitor Analysis with Google Sheets Logging

**Description:**  
This n8n workflow automates SEO competitor analysis by integrating the [**Competitor Analysis API**](https://rapidapi.com/PrineshPatel/api/competitor-analysis2). It captures website domains via a simple user form, sends them to the API to retrieve competitor data, and logs the results directly into Google Sheets. The workflow intelligently handles empty or missing data and incorporates a wait node to respect API rate limits, making your competitor tracking seamless and reliable.

---

## Node-by-Node Explanation

1. **On Form Submission**  
   Triggers the workflow when a user submits a website domain.

2. **Global Storage**  
   Stores the submitted website domain for use in subsequent nodes.

3. **Competitor Analysis Request**  
   Sends a POST request to the [**Competitor Analysis API**](https://rapidapi.com/PrineshPatel/api/competitor-analysis2/endpoint) to fetch organic competitors, pages, and keyword data.

4. **If (Condition Check)**  
   Verifies that the API response contains valid, non-empty data.

5. **Google Sheets (Insert Success Data)**  
   Appends the fetched competitor data to a specified Google Sheet.

6. **Wait Node**  
   Adds a 5-second delay to avoid exceeding API rate limits.

7. **Google Sheets (Insert 'Not Found' Record)**  
   Logs a “Not data found.” entry into Google Sheets if the API response lacks relevant data.

---

## Use Cases & Benefits

- **SEO Professionals:** Automate competitor insights collection for efficient SEO research.  
- **Marketing Teams:** Maintain consistent, automated logs of competitor data across multiple websites.  
- **Agencies:** Manage organic search competitor tracking for many clients effortlessly.  
- **Reliability:** Conditional checks and wait nodes ensure smooth API interaction and data integrity.  
- **Scalable & User-Friendly:** Simple form input and Google Sheets integration enable easy adoption and scalability.

---
### 🔐 How to Get Your API Key for the Competitor Keyword Analysis API

1. Go to 👉  [Competitor Keyword Analysis API](https://rapidapi.com/PrineshPatel/api/competitor-analysis2/endpoint)  
2. Click **"Subscribe to Test"** (you may need to sign up or log in).
3. Choose a pricing plan (there’s a free tier for testing).
4. After subscribing, click on the **"Endpoints"** tab.
5. Your **API Key** will be visible in the **"x-rapidapi-key"** header.

🔑 Copy and paste this key into the `httpRequest` node in your workflow.

---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)


## 📊 Basic Information

- **Workflow ID:** 8242
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 355
- **Downloads:** 35
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8242)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **set** 
- **if** 
- **wait** 
- **formTrigger** 
- **googleSheets** (×2)
- **stickyNote** (×8)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
