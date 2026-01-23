# Automated customer feedback analysis & response with Jotform, GPT-4.1 & Google Sheets

> ## AI-powered feedback analysis and response automation from Jotform to Google Sheets and Slack

### Who’s it for  
Businesses using **Jotform** to collect customer feedback who want to automate sentiment analysis, email responses, and internal reporting — especially **eCommerce**, **support**, or **CX teams** looking to scale without hiring more agents.

---

### How it works  
This workflow captures every new Jotform submission, extracts key fields, and uses **OpenAI GPT-4.1** to classify sentiment and root cause.  

- **Negative feedback or ratings ≤3:** Generates a recovery email, logs it in Google Sheets, and alerts your CX team on Slack.  
- **Positive or neutral feedback:** Sends a personalized thank-you email with a link to leave a public review.  

All submissions are stored in Google Sheets for analytics and performance tracking.

---

### How to set up  
1. Visit [Jotform](https://www.jotform.com/?partner=aayushmansharma) and **sign up** (if you’re new) or **log in** to your existing account.  
2. Click your **profile icon (top-right)** → go to **Settings**.  
3. In the left sidebar, open the **API** section.  
4. Click **Create New Key**.  
5. Set permission to **Full Access** (recommended for full workflow functionality).  
6. Copy the generated API key.  
7. In **n8n**, open **Credentials → Create New → JotForm API**.  
8. Paste your API key and save it as `JotForm account`.  
9. Test the connection by running your **Jotform Trigger** node.

---


### Jotform Configuration Guide (for n8n Feedback Workflow)

Follow these steps to connect your Jotform to n8n:

### 1️⃣ Create the Feedback Form
Build a form in Jotform with the following exact fields:
- Field Label - Field Type - Example Input
- Full Name - Short Text - Customer Name
- Email - Email - test@gmail.com
- Whatsapp Number -  Short Text- 91xxxxxxxxxx
- Order Id - Short Text - #2321
- Ratings - Ratings - 3
- Please describe your experience in detail. - Long Text - “Feedback”
- Would you recommend us to others? - Single Choice (Yes/No) - No

💡 **Tip:** Keep field labels identical — n8n uses these exact keys for data mapping.




---

### Requirements  
- Jotform API key (Full Access)  
- OpenAI API key  
- SMTP or transactional email service  
- Google service account or Authenticate using Oauth2  
- Slack token

---

### How to customize  
You can easily adjust rating thresholds, AI prompts, or email templates to match your brand’s tone.  
The structure is modular — no code changes needed, just edit nodes and re-deploy.

![image.png](fileId:2935)




## 📊 Basic Information

- **Workflow ID:** 9623
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 47
- **Downloads:** 4
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9623)

## 👤 Author

- **Name:** Aayushman Sharma
- **Username:** @ajstyle0411

## 🏷️ Categories

- Support Chatbot
- AI Summarization

## 🔗 Nodes Used

- **jotFormTrigger** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **if** 
- **emailSend** (×2)
- **slack** 
- **googleSheets** (×3)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
