# Ai-powered automated job search & application

> **Unleash the power of AI to automate your job search, tailor your applications, and boost your chances of landing your dream job!** This comprehensive workflow handles everything from finding relevant job postings to generating personalized resumes and cover letters.

**Use cases are many:**
* **Automate your entire job application process:** Spend less time searching and more time preparing for interviews.
* **Tailor your resume and cover letter for every application:** Maximize your ATS compatibility and stand out to recruiters.
* **Efficiently track your applications:** Keep all your job search activities organized in one place.
* **Discover new job opportunities:** Leverage the Adzuna API to find relevant listings.

---

**Good to know:**

* **Free Adzuna API:** This workflow utilizes the *free* Adzuna API, making job search capabilities accessible without initial cost.
* **OpenRouter Chat Model Costs:** AI model usage (for resume rewriting and cover letter generation) will incur costs based on the OpenRouter pricing model. Please check OpenRouter's official website for updated pricing information.
* **Model Availability:** The AI models used may have geo-restrictions. If you encounter a "model not found" error, it might not be available in your country or region.

---

**How it works:**

1.  **Webhook Trigger:** The workflow is initiated via a webhook, allowing you to trigger it manually or integrate it with other systems (e.g., a form submission with your desired job title and resume).
2.  **Resume Extraction:** Your uploaded resume (e.g., PDF) is automatically extracted into a readable text format.
3.  **Job Search (Adzuna API):** Using the provided job title, the workflow queries the Adzuna API to fetch relevant job postings.
4.  **Job Filtering:** Duplicate job listings are filtered out to ensure you receive unique opportunities.
5.  **Job Info Extraction:** Key details like job description, company name, and job URL are extracted from each posting.
6.  **Skills Extraction (AI):** An AI model (OpenRouter) analyzes the job description to identify the top skills and qualifications required.
7.  **Resume Match Scoring (AI):** Your resume is compared against the extracted job skills by an AI model, generating a compatibility score (1-5).
8.  **Conditional Resume & Cover Letter Generation:**
    * **If the resume match score is satisfactory (≥ 3):**
        * **Tailored Resume Generation (AI):** An AI model rewrites your resume, specifically highlighting the skills and experience most relevant to the target job, in an ATS-friendly and human-readable JSON/HTML format.
        * **Personalized Cover Letter Generation (AI):** A custom cover letter is drafted by AI, uniquely tailored to the job description and your newly optimized resume, generated as well-formatted HTML.
9.  **Google Sheets Integration:** The generated cover letter, tailored resume, job URL, and application status are automatically updated in your designated Google Sheet for easy tracking.
10. **Gmail Notification:** A personalized email containing the generated cover letter, tailored resume, and a direct link to the job posting on Adzuna is sent to your specified email address.
11. **Webhook Response:** A final text response is sent back via the webhook, summarizing the sent application materials.

---

**How to use:**

* **Manual Trigger:** The workflow is set up with a manual trigger (Webhook) for initial testing and demonstration. You can easily replace this with an n8n form, a scheduled trigger, or integrate it into your existing tools.
* **Input:** Provide your desired job search keyword and your resume (e.g., as a PDF) to the webhook.
* **Review & Apply:** Review the AI-generated cover letter and tailored resume sent to your email, then proceed to apply for the job using the provided Adzuna link.

---

**Requirements:**

* **n8n Instance:** A running n8n instance (self-hosted or cloud).
* **Adzuna API Key:** A free Adzuna API key (easily obtainable from their developer portal).
* **OpenRouter Account:** For AI model access (costs apply based on usage).
* **Google Sheets Account:** To store and track your job applications.
* **Gmail Account:** To send automated application emails.

---

**Customizing this workflow:**

This workflow is highly customizable. You can:
* Integrate with other job boards (e.g., LinkedIn, Indeed) using their APIs.
* Add more sophisticated AI models or custom prompts for even finer control over resume and cover letter generation.
* Connect to other services for CRM, calendar management, or applicant tracking.
* Implement different filtering criteria for job postings.
* Expand the data stored in your Google Sheet (e.g., interview dates, feedback).

Start automating your job search today and streamline your path to career success!

## 📊 Basic Information

- **Workflow ID:** 6391
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1327
- **Downloads:** 132
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6391)

## 👤 Author

- **Name:** Gerald Denor
- **Username:** @dominixai

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **set** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **splitOut** 
- **code** 
- **webhook** 
- **if** 
- **googleSheets** 
- **gmail** 
- **respondToWebhook** 
- **extractFromFile** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
