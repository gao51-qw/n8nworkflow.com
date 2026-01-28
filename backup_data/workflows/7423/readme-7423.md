# Lead generation agent

> 

## **Who this is for**

This workflow is for **digital marketing agencies** or **sales teams** who want to **automatically find business leads** based on industry & location, gather their contact details, and send **personalized cold emails** — all from one form submission.

---

## **What this workflow does**

This workflow starts every time someone submits the **Lead Machine Form**. It then:

* **Scrapes business data** (company name, website, phone, address, category) using **Apify** based on business type & location.
* **Extracts the best email address** from each business website using **Google Gemini AI**.
* **Stores valid leads** in **Google Sheets**.
* **Generates cold email content** (subject + body) with AI based on your preferred tone (Friendly, Professional, Simple).
* **Sends the cold email** via Gmail.
* **Updates the sheet** with send status & timestamp.

---

## **Setup**

To set this workflow up:

1. **Form Trigger** – Customize the “Lead Machine” form fields if needed (Business Type, Location, Lead Number, Email Style).
2. **Apify API** – Add your Apify Actor Endpoint URL in the HTTP Request node.
3. **Google Gemini** – Add credentials for extracting email addresses.
4. **Google Sheets** – Connect your sheet for storing leads & email status.
5. **OpenAI** – Add your credentials for cold email generation.
6. **Gmail** – Connect your Gmail account for sending cold emails.

---

## **How to customize this workflow to your needs**

* Change the **AI email prompt** to reflect your brand’s voice and offer.
* Add **filters** to only target leads that meet specific criteria (e.g., website must exist, email must be verified).
* Modify the **Google Sheets structure** to track extra info like “Follow-up Date” or “Lead Source”.
* Switch Gmail to another email provider if preferred.

---

## 📊 Basic Information

- **Workflow ID:** 7423
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 40378
- **Downloads:** 4037
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7423)

## 👤 Author

- **Name:** Rakin Jakaria
- **Username:** @rakinjakaria

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **filter** 
- **googleSheets** (×2)
- **if** 
- **noOp** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **splitInBatches** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
