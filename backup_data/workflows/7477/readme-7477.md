# Auto-label Gmail messages with custom categories using GPT-4o-mini

> ![Screenshot 20250816 at 20.46.05.png](fileId:2127)

**Why settle for Gmail’s default tabs when AI can sort your inbox your way?**

 ### Who is this for?

Job seekers, freelancers, and students who receive job-related emails and want them auto-sorted into labels

###  Use case

- **Problem**: Job emails get buried.Manually reading, labeling, and tracking them in a sheet is error-prone and time-consuming.

- **Use Case**: An n8n workflow that fetches new Gmail messages on a schedule, classifies them with OpenAI, adds customised Gmail labels defined by the user.

###  What this workflow does? 

1. Runs on a **schedule (Cron)** to fetch new Gmail messages.
1. Uses OpenAI to classify each email into: **Job Opportunity, Application Status, Enquiries, or Others** (you can edit categories).
1. **Adds Gmail labels** accordingly (auto-creates them if missing).


### Prerequisites

- n8n (Cloud or self-hosted).
- Credentials set up in n8n:
	- Gmail OAuth
	- OpenAI (API key)



### Setup 

- Import the **JSON** (below) into n8n.
- Open **Credentials** for Gmail, OpenAI.
- In the **OpenAI node**, pick your model (e.g., gpt-4o-mini or any GPT-4 class model).
- In the Gmail Add Labels nodes, confirm/adjust label names:
	- **Job Opportunity**, **Application Status, Enquiries, Others**

### How to customize it for your needs

- Add a Follow-Up Date parser (e.g., “We’ll get back in 2 weeks”) → push to Calendar.

- Extend categories (e.g., **Interview Invite, Offer, Rejection, HR Enquiry**).

- Threaded Gmail Draft Reply for Enquiries using a template.

### Troubleshooting

- **No items flowing?** Check Gmail scope/label filters and Cron timing.

- **Labels not created?** The Gmail node can create them; ensure the label names match exactly.

### Why Use This Template?

Gmail can classify messages into Spam, Promotions, or Social, but have you ever wished you could sort emails **your own way**?

With this AI-powered workflow, you can create **custom categories** that fit your needs — like *Job Opportunity, Application Status, or Enquiries* — so you never lose track of what matters.

### Need Assistance?

For setup guidance, customization, or business inquiries,
Email: phoenixaiagentsolutions@gmail.com



## 📊 Basic Information

- **Workflow ID:** 7477
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 77
- **Downloads:** 7
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7477)

## 👤 Author

- **Name:** Ashish Kumar Swain
- **Username:** @phoenix

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** (×5)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
