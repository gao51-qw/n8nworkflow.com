# Extract marketing testimonials from feedback with Gemini AI and Google Sheets

> # Extract Marketing Testimonials from Feedback with Gemini AI and Google Sheets

### 🌍 **Overview**

This workflow automatically **extracts short emotional testimonials** from Google Form responses. It listens for new feedback in Google Sheets, processes it with AI (Google Gemini), writes back a refined testimonial, and sends an email notification.

Think of it as your **testimonial assistant**—turning raw customer feedback into marketing-ready quotes.

---

## 🟢 Section 1: Trigger – Listen for New Feedback

🔗 **Nodes:**

* **Google Sheets Trigger** → Watches for new rows (new form responses).

💡 **Beginner takeaway:**
Whenever a customer submits feedback via your form, this trigger **wakes up the workflow**.

📈 **Advantage:**
No manual checking — feedback is instantly processed.

---

## 🟦 Section 2: Testimonial Extraction with AI

🔗 **Nodes:**

* **Basic LLM Chain** → Runs a custom prompt that tells the AI: *“Extract a short, emotional testimonial quote from the feedback.”*
* **Google Gemini Chat Model** → The AI brain that processes and rewrites the testimonial.

💡 **Beginner takeaway:**
This part **filters out neutral or boring text** and produces a **catchy, emotional testimonial**.

📈 **Advantage:**
Saves you time editing feedback → instantly produces marketing-ready quotes.

---

## 🟣 Section 3: Store & Notify

🔗 **Nodes:**

* **Google Sheets (Write Back)** → Saves the extracted testimonial into the same Google Sheet.
* **Gmail** → Sends an email with the new testimonial to your chosen inbox.

💡 **Beginner takeaway:**
The testimonial is both **saved for records** and **shared with your team via email**.

📈 **Advantage:**
You get real-time alerts and maintain a growing database of testimonials.

---

## 📊 Final Overview Table

| Section           | Nodes                 | Purpose                       | Benefit                    |
| ----------------- | --------------------- | ----------------------------- | -------------------------- |
| 🟢 Trigger        | Google Sheets Trigger | Detect new feedback           | Automated start            |
| 🟦 AI Extraction  | LLM Chain + Gemini    | Extract emotional testimonial | Marketing-ready quotes     |
| 🟣 Store & Notify | Google Sheets + Gmail | Save + send testimonial       | Organized + instant alerts |

---

## 🚀 Why This Workflow is Useful

* **Automates testimonial creation** → No manual copywriting needed
* **Captures emotions** → AI filters for impactful quotes
* **Centralized storage** → All testimonials logged in Google Sheets
* **Instant notifications** → New testimonials delivered straight to email
* **Beginner-friendly** → Just connect your sheet + Gmail and it runs on its own

---


## 📊 Basic Information

- **Workflow ID:** 4378
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 386
- **Downloads:** 38
- **Created:** 2025/5/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4378)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheets** 
- **gmail** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
