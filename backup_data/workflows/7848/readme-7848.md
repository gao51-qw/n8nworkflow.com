# Generate AI newsletter drafts from Google Sheets to Notion with GPT-5-mini

> **How it works:**

This template turns rows in a Google Sheet into polished newsletter drafts in Notion using an AI writing agent. You click **Execute workflow** in n8n. It fetches all rows marked **N8n Status = Pending**, generates a draft from **Newsletter Title** and **About the Newsletter**, creates a Notion page, writes the full draft, then flips the sheet row to **Done** before moving to the next one.

**Before you start (use your own credentials):**

* Create and select **your** credentials in n8n:

  * **Google Sheets** (OAuth2 or Service Account) with access to the target spreadsheet.
  * **Notion** (Internal Integration) with access to the target database.
  * **OpenAI** (API Key) for the Chat Model.
* Replace any placeholders in nodes:

  * Spreadsheet **ID/URL** and sheet/tab name (e.g., `newsletter`).
  * Notion **Database ID** / Parent and any page or block IDs used by HTTP Request nodes.
  * OpenAI **model** name if you prefer a different model.
* Give the Notion integration access to the database (Share → Invite the integration).
* Do not hard-code secrets in nodes. Store them in n8n **Credentials**.

**Step-by-step:**

1. **Manual Trigger**
   Start the run with **When clicking ‘Execute workflow’**.

2. **Fetch pending input (Google Sheets → Get row(s) in sheet)**
   Read the `newsletter` tab and pull only rows where **N8n Status = Pending**.

3. **Iterate (Split In Batches → Loop Over Items)**
   Process one sheet row at a time for stable memory use and pacing.

4. **Generate the newsletter (AI Agent + OpenAI Chat Model)**

   * **AI Agent** loads the “System Role Instructions” that define style, sections, and format.
   * Pass **Newsletter Title** and **About the Newsletter** to the **OpenAI Chat Model** to produce the draft.

5. **Create a Notion page (Notion → Create Page)**
   Create a page in your **Newsletter Automation** database with the page title set from **Newsletter Title**.

6. **Prepare long content for Notion (Code)**
   Split the AI output into \~1,800-character chunks and wrap as Notion paragraph blocks to avoid payload limits.

7. **Write content blocks to Notion (HTTP Request → UpdateNotionBlock)**
   Send a **PATCH** request to append all generated blocks so the full draft appears on the page.

8. **Mark the sheet row as done (Google Sheets → Update row in sheet)**
   Update **N8n Status = Done** for the processed **Newsletter Title**.

9. **Continue the loop**
   Return to **Split In Batches** for the next pending row until none remain.

**Tools integration:**

* **Google Sheets** — input queue and status tracking (`Pending` → `Done`)
* **OpenAI** — LLM that writes the draft from provided fields
* **Notion** — destination database for each draft page
* **n8n Code + HTTP Request** — chunking and Notion API block updates

Want auto-runs? Add a **Cron** trigger before step 2 and keep the flow unchanged.

## 📊 Basic Information

- **Workflow ID:** 7848
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 450
- **Downloads:** 45
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7848)

## 👤 Author

- **Name:** Snehasish Konger
- **Username:** @snehasish

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** (×2)
- **httpRequest** 
- **code** 
- **notion** 
- **manualTrigger** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
