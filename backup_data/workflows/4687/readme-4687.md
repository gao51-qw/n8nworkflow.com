# AI email organizer for GMail - advanced email management & sorting

> ## Video Introduction
[![Screenshot 20250709 112813.png](fileId:1726)](https://www.youtube.com/watch?v=BQARyWMD_lU)


#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1sárhelyi-3a9985123/)

---


Transform your messy inbox into a calm, organized command center - **in minutes** - using this ready-to-use n8n automation! 

**Tired of your Gmail looking like this?**  
![Messy inbox](https://smoothwork.ai/wp-content/uploads/2025/07/92ec8b26-5123-4bf0-af0e-31bb6f493057.png)

With this template, you can have this instead:  
![Organized inbox with categories](https://smoothwork.ai/wp-content/uploads/2025/07/dc87c4d8-2650-4971-984d-028f9dcc9fde.png)

---

## What does this automation do?

- **AI-powered categorization:** Every new email is analyzed with OpenRouter AI and sorted into categories you define (like Orders, Support, Invoices, Urgent, etc.).
- **Instant color-coded labels:** The workflow creates and applies Gmail labels with custom colors, so you can spot important messages at a glance.
- **Supports Gmail’s Multiple Inboxes:** Display different categories in their own sections—see what matters most right away.
- **Flexible and customizable:** You control the categories and definitions using a simple Google Sheet.

---

## How it works – Step by Step

**See the full setup & demo:**  
[![Screenshot 20250709 112813.png](fileId:1726)](https://www.youtube.com/watch?v=BQARyWMD_lU)

1. **Copy the Template**  
   - Open the [n8n workflow template](https://n8n.io/workflows/4687?ref=ezvl1qy3f990&utm_source=affiliate) and click **Use for free**.
   - Log in (or sign up) for n8n Cloud for the quickest start.

   ![n8n workflow screen](https://smoothwork.ai/wp-content/uploads/2025/07/c775eee2-aaa3-4417-a60f-b0b69c7b87ba.png)

2. **Customize Your Categories in Google Sheets**  
   - Use the provided Google Sheets template linked in the workflow notes.
   - Go to **File → Make a copy** to your own Drive.
   - Edit the categories and their definitions for your business.
   
   Example:  
   ![Google Sheet categories](https://smoothwork.ai/wp-content/uploads/2025/07/17c8e788-505c-431f-abe2-d2d979316a96.png)
   
   - Add categories like “Existing Order Questions,” define each one to guide the AI, and copy your Google Sheet’s URL into the workflow config node.

   ![Paste sheet URL into n8n](https://smoothwork.ai/wp-content/uploads/2025/07/4cd889d7-fc69-477d-a88d-49821aa88c9d.png)

3. **Connect AI with OpenRouter**  
   - Go to [OpenRouter.ai](https://openrouter.ai), log in, and generate a new API key.
   - Paste your API key into the workflow where prompted.

   ![OpenRouter API key screen](https://smoothwork.ai/wp-content/uploads/2025/07/194b76e0-60a2-4801-a323-e89795a1ab07.png)

4. **Test and Activate the Workflow**  
   - Connect your Gmail account to n8n.
   - Hit “Test Workflow”—watch as the AI processes your latest emails and applies labels automatically.

   ![Testing the n8n workflow](https://smoothwork.ai/wp-content/uploads/2025/07/4575a205-bba5-47c1-9202-01009f977e8b.png)

   - Labels will appear instantly in Gmail, and any missing ones are created by the automation.
   
   ![Inbox with labels](https://smoothwork.ai/wp-content/uploads/2025/07/cdb60487-adbe-4e61-bf72-bb672b57ad58.png)

5. **Schedule Automatic Runs**  
   - Switch workflow status to **Active** in n8n.
   - Set the scheduler trigger—most people use hourly, but you can use [crontab.guru](https://crontab.guru) for custom times (like only business hours).

---

## Tips for Best Results

- **Color Code Your Labels:**  
  In Gmail, you can assign colors to labels—set high-priority categories (like “Customer Complaints”) to a bright color to stand out.
  
  ![Changing Gmail label colors](https://smoothwork.ai/wp-content/uploads/2025/07/69124990-43ed-4794-9081-2ee5fe5e60e4.png)

- **Upgrade Your Gmail View:**  
  Enable *Multiple Inboxes* in Gmail’s settings and set up sections for your key categories. Example search queries:
  - `in:inbox label:customer-complaints OR label:urgent-emails`
  - `in:inbox label:existing-order-questions`
  - `in:inbox label:support-requests`

  ![Multiple Inboxes Settings](https://smoothwork.ai/wp-content/uploads/2025/07/18d59a20-ece0-48bd-89a1-79d3743ba73b.png)

  ![Gmail inbox with multiple sections](https://smoothwork.ai/wp-content/uploads/2025/07/7461f697-e14b-4af0-be75-cfafe39fa34b.png)

---

## Why Use This?

- Get rid of inbox chaos for good - *no more lost emails or missed deadlines*
- Fully customize the system to your business with just a Google Sheet
- Works with zero coding - set up in 10-15 minutes
- Flexible: add auto-replies, draft suggestions, and more as you grow


## 📊 Basic Information

- **Workflow ID:** 4687
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 5945
- **Downloads:** 594
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4687)

## 👤 Author

- **Name:** Milan Vasarhelyi - SmoothWork
- **Username:** @vasarmilan

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×6)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleSheets** 
- **gmail** (×4)
- **splitInBatches** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
