# Job applying agent

> **Who this is for**

This workflow is for **freelancers**, **job seekers**, or **service providers** who want to **automatically apply to businesses** by scraping their website information, extracting contact details, and sending **personalized job application emails** with AI-powered content — all from one form submission.

**What this workflow does**

This workflow starts every time someone submits the **Job Applier Form**. It then:
* **Scrapes the target business website** to gather company information and contact details.
* **Converts HTML content** to readable markdown format for better AI processing.
* **Extracts email addresses** and creates a company summary using **GPT-5 AI**.
* **Validates email addresses** to ensure they contain proper formatting (@ symbol check).
* **Accesses your experience data** from a connected **Google Sheet** with your skills and portfolio.
* **Generates personalized application emails** (subject + body) using **GPT-5** based on the job position and company info.
* **Sends the application email** automatically via **Gmail** with your name as sender.
* **Provides confirmation** through a completion form showing the AI's response.

**Setup**

To set this workflow up:
1. **Form Trigger** – Customize the job application form fields (Target Business Website, Applying As dropdown with positions like Video Editor, SEO Expert, etc.).
2. **OpenAI GPT-5** – Add your OpenAI API credentials for both AI models used in the workflow.
3. **Google Sheets** – Connect your sheet containing your working experience data, skills, and portfolio information.
4. **Gmail Account** – Link your Gmail account for sending application emails automatically.
5. **Experience Data** – Update the Google Sheet with your relevant skills, experience, and achievements for each job type.
6. **Sender Name** – Modify the sender name in Gmail settings (currently set to "Jamal Mia").

**How to customize this workflow to your needs**
* Add **more job positions** to the dropdown menu (currently includes Video Editor, SEO Expert, Full-Stack Developer, Social Media Manager).
* Modify the **AI prompt** to reflect your unique value proposition and application style.
* Enhance **email validation** with additional checks like domain verification or email format patterns.
* Add **follow-up scheduling** to automatically send reminder emails after a certain period.
* Include **attachment functionality** to automatically attach your resume or portfolio to applications.
* Switch to **different email providers** or add multiple sender accounts for variety.

## 📊 Basic Information

- **Workflow ID:** 7889
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2755
- **Downloads:** 275
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7889)

## 👤 Author

- **Name:** Rakin Jakaria
- **Username:** @rakinjakaria

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **gmailTool** 
- **googleSheetsTool** 
- **form** 
- **httpRequest** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **if** 
- **noOp** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
