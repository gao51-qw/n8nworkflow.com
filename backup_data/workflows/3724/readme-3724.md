# Smart job search: resume scoring & tailoring with OpenAI, Apify, and Airtable

> ![image.png](fileId:1304)

 ### Who is this for?

This workflow is designed for job seekers who want to automate their job application research and resume optimization. It's ideal for professionals who want to match their CVs to new job postings daily, improving the chance of landing interviews without manual work.

###  Use case

- **Problem**: Manually searching for jobs, matching resumes, and updating application records is time-consuming and inefficient.

- **Use Case**: Automatically fetches new job listings based on user preferences, scores them against the user's existing CV, generates a revamped CV tailored for each job, and stores everything neatly into an Airtable database for easy tracking.

###  What this workflow does? 

1. **Fetches user job preferences** from Google Sheets daily.
1. **Searches for jobs** matching those preferences using Apify’s scraping.
1. **Filters** job posts that are fresh (posted within 24-48 hours).
1. **Scores** each job against the user’s current CV using an OpenAI agent.
1. **Generates** a revamped CV tailored to each job.
1. **Stores** the job listing, compatibility score, match reason, and revamped CV into Airtable for future use.



### API Credentials Required


- Google Sheets API Credentials — for reading user-defined job preferences.
- Apify API Key — to scrape job postings (e.g., Indeed Scraper Actor).
- OpenAI API Key — for AI scoring and CV enhancement.
- Airtable API Key — for job listing and tracking.


### Setup 

- **Google Sheets**: Store your job preferences (like titles, locations, etc.).

![image.png](fileId:1302)

- **Apify API**: Set up a scraper for LinkedIn, Indeed, or other job boards.
- **OpenAI API**: Provide access to a GPT model (ideally GPT-4 Turbo) to handle CV scoring and revamping.
- **Airtable**: Create two tables:

	- One for **archived jobs** (old jobs &gt;48 hours).

	- One for **current processed jobs** with AI scores and revamped CVs.
		- Columns for Airtable: 
		 `job_title`,`company`,`location`,`date_posted`,`job_type`,`description`,`link`,`compatibilityScore`,`matcReason`,`revampedCV`,`newCompatibilityScore`,`newMatchReason`. 

![image.png](fileId:1303)

- **n8n**: Deploy the full workflow with nodes for triggers, loops, API calls, parsing, and storage.

### How to customize it for your needs

- **Edit Job Preferences**: Add or update the fields in Google Sheets (Columns: `job_title`, `job_location`) to search.

- **Fine-tune AI Prompts**: Adjust the scoring criteria (e.g., favor remote roles, leadership experience, certifications).

- **Customize CV Style**: Configure the AI to generate shorter, more detailed, or industry-specific resumes.


- **Change Storage Destination**: Replace Airtable with Notion, Google Sheets, a CRM system, or even send yourself Slack updates.

- **Expand Job Sources**: Easily swap the job scraper to pull listings from your favorite niche job boards.


### Why Use This Template?

1. Saves 10+ hours/week on manual job search.
2. Instantly tailor CVs to each application.
3. Centralizes all data across Google Sheets and Airtable.
4. Flexible — customize AI prompts, scoring logic, or expand to multiple users!

### Need Assistance?

For setup guidance, customization, or business inquiries,
Email: phoenixaiagentsolutions@gmail.com



## 📊 Basic Information

- **Workflow ID:** 3724
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 1745
- **Downloads:** 174
- **Created:** 2025/4/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3724)

## 👤 Author

- **Name:** Ashish Kumar Swain
- **Username:** @phoenix

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitInBatches** (×4)
- **code** (×3)
- **cron** 
- **googleSheets** 
- **httpRequest** 
- **if** 
- **airtable** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
