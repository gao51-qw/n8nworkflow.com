# Qualify real estate leads automatically with OpenAI, Gmail & Airtable CRM

> 🧠 How It Works
1. This AI Agent automatically qualifies property buyer leads from form submissions.
2. Form Submission Trigger
3. When a user submits their details via a property inquiry form, the workflow is triggered.
4. AI Lead Classification
5. The buyer's input (budget, location, timeline, etc.) is analyzed by OpenAI to extract structured data and generate a lead score (0–100).
6. Lead Qualification Logic
7. Leads with a score of 70 or above are marked as qualified, the rest are ignored or stored separately.
8. Follow-Up Action
9. Qualified leads trigger:
10. Email notification to the agent
11. Record creation in Airtable as CRM

⚙️ How to Set Up
1. Form Setup
2. Replace the form trigger with your preferred source (Typeform, Google Form, etc.)
3. Make sure the form includes: Name, Email, Budget, Location, Timeline, Property Type
4. Connect Your Credentials
5. Add your OpenAI API key for the LLM node
6. Connect your Gmail account for notifications
7. Link your Airtable base and table to store qualified leads
8. Customize Scoring Logic (Optional)
9. You can tweak the prompt in the Information Extractor node to change how scoring works
10. Test the Workflow
11. Submit a test entry via the form
12. Check if you receive an email and see the lead in Airtable
13. Activate & Go Live
14. Turn on the workflow and start qualifying real buyer leads in real time

Connect with my linkedin: https://www.linkedin.com/in/bheta-dwiki-maranatha-15654b227/


## 📊 Basic Information

- **Workflow ID:** 5428
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 6442
- **Downloads:** 644
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5428)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **if** 
- **set** 
- **gmail** 
- **airtable** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
