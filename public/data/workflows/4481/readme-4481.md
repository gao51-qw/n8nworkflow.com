# AI-powered candidate screening and evaluation workflow using OpenAI and Airtable

> ## **Who is this for?**

This workflow is ideal for:

* **HR professionals** and **recruiters** who want to automate and enhance the hiring process
* **Organizations** seeking AI-driven, consistent, and data-backed candidate evaluations
* **Hiring managers** using Airtable as their recruitment database

---

## **What problem is this workflow solving?**

Screening candidates manually is time-consuming, inconsistent, and difficult to scale. This workflow solves that by:

* **Automating resume intake and AI evaluation**
* **Matching candidates to job postings dynamically**
* **Generating standardized suitability reports**
* **Notifying HR only when candidates meet the criteria**
* **Storing all applications in a structured Airtable database**

---

## **What this workflow does**

This workflow builds an end-to-end AI-powered hiring pipeline using Airtable, OpenAI, and Google Drive. Here's how it works:

1. **Accept candidate applications** via a public web form, including resume upload (PDF only)
2. **Extract text from uploaded resumes** for processing
3. **Store resumes** in Google Drive and generate shareable links
4. **Match the application** to a job posting stored in Airtable
5. **Use AI to evaluate candidates** (via OpenAI GPT-4) against job descriptions and requirements
6. **Generate suitability results** including:

   * Match percentage
   * Screening status: Suitable, Not Suitable, Under Review
   * Detailed notes
7. **Combine AI output and files** into one data object
8. **Create a new candidate record** in Airtable with all application data
9. **Automatically notify HR** via Gmail if a candidate is marked “Suitable”

---

## **Setup**

1. **View & Copy the Airtable base** here:  
👉 [Candidate Screening – Airtable Base Template](https://airtable.com/appgVjZcaRP8BsKf0/shrQAqQ2JUW50EEyW)  
2. **Set up Google Drive folder**
3. **Connect your OpenAI API key** for the AI agent model
4. **Connect your Gmail account** for email notifications
5. **Deploy the public-facing form** to start receiving applications
6. **Test the workflow** using a sample job and resume

---

## **How to customize this workflow to your needs**

* **Expand file support**: Allow DOC or DOCX uploads by adding format conversion nodes
* **Add multi-recipient email alerts**: Extend Gmail node for multiple HR recipients
* **Handle “Under Review” differently**: Add additional logic to notify or flag these candidates
* **Send rejection emails automatically**: Extend the IF branch for “Not Suitable” candidates
* **Schedule interviews**: Integrate with Google Calendar or Calendly APIs
* **Add Slack notifications**: Send alerts to team channels for real-time updates

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 📊 Basic Information

- **Workflow ID:** 4481
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 3687
- **Downloads:** 368
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4481)

## 👤 Author

- **Name:** Billy Christi
- **Username:** @billy

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **airtable** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **merge** 
- **googleDrive** (×2)
- **if** 
- **gmail** 
- **formTrigger** 
- **extractFromFile** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
