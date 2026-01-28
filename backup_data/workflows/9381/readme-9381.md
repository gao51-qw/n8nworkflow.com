# Automate sales call grading with Fireflies.ai, OpenAI, and Google Sheets

> Turn your **sales and onboarding calls into actionable insights — automatically!**  
This workflow connects **Fireflies.ai** with **OpenAI** to analyze and grade your call transcripts. The results, along with your lead’s details, are logged directly into a **Google Sheet** for easy tracking. Plus, you’ll get an instant **Slack or Gmail notification** with the evaluation so you can take quick action.

---

## 🚀 What It Does
- **Triggers on new Fireflies.ai transcripts**
- **Uses AI to evaluate and grade your calls**
- **Logs lead + scoring data into Google Sheets**
- **Sends instant updates via Slack or Gmail**

---

## 💡 Why It’s Valuable
- Save hours of **manual call reviews**
- Keep a **consistent, unbiased scoring system**
- Centralize data for **reporting and coaching**
- Act faster with **real-time notifications**

Perfect for **sales, onboarding, or customer success teams** who want to improve call quality at scale while saving time.

---

## 🛠️ Setup Instructions
1. **Connect Fireflies.ai** – Enable transcript export from your Fireflies.ai account.  
2. **Integrate with OpenAI** – Use the provided API key to analyze and score transcripts automatically.  
3. **Configure Google Sheets** – Create a sheet with columns for:
   - Lead Name  
   - Company  
   - Call Date  
   - Transcript Link  
   - AI Score  
   - Notes/Insights  
4. **Enable Notifications** – Connect Slack or Gmail to receive instant alerts with evaluation details.  
5. **Test & Launch** – Run a sample call to ensure transcripts flow correctly into the sheet and notifications are triggered.

---

## 🔄 Detailed Workflow
1. A new call transcript is generated in **Fireflies.ai**.  
2. The transcript is sent to **OpenAI**, where the call is evaluated and scored based on quality, engagement, and outcomes.  
3. The **results + lead data** are logged automatically into **Google Sheets** for centralized tracking.  
4. A **Slack or Gmail notification** instantly alerts your team with the score and key insights, so you can take immediate action.  

---

## 📊 Google Sheets
Your Google Sheet should include the following columns:
- **Lead Name**  
- **Email/Contact**  
- **Company Name**  
- **Call Date & Time**  
- **Transcript URL**  
- **AI Evaluation Score**  
- **Summary/Next Steps**  

This structure ensures clarity, easy reporting, and consistent data across all calls.

---

## ⚠️ Community Node Disclaimer
This workflow is created with **community nodes** and integrations. Please review security and API key management best practices before deploying in production.

---

## 🖼️ Workflow Template
![Workflow Template Example](https://dummyimage.com/800x400/cccccc/000000&text=Workflow+Template+Preview)

---

## 📊 Basic Information

- **Workflow ID:** 9381
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 82
- **Downloads:** 8
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9381)

## 👤 Author

- **Name:** Emilio Loewenstein
- **Username:** @emilio-loewenstein

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** 
- **@firefliesai/n8n-nodes-fireflies.fireflies** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×2)
- **gmail** 
- **slack** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
